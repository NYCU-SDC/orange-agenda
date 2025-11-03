#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===== ANSI =====
const reset = "\x1b[0m";
const orangeBg = "\x1b[48;5;208m";
const whiteText = "\x1b[97m";
const cyanBg = "\x1b[46m";
const blackText = "\x1b[30m";
const grayText = "\x1b[90m";
const orangeText = "\x1b[38;5;208m";
const yellowBg = "\x1b[48;5;226m";

// ===== Layout constants =====
const LEFT_MARGIN = 2;     // 左邊整體縮排
const LABEL_WIDTH  = 4;    // 左欄寬度（讓 🦊/dir 靠右對齊）
const GAP_WIDTH    = 3;    // 左欄與內容之間的空白
const QUESTION = "Where should we create your new project?";

// 安全寫行（不帶色碼的縮排用來對齊）
const spaces = (n) => " ".repeat(Math.max(0, n));

// 🦊 橘底 Banner（逐字）
async function showBanner() {
  const text = "The Orange Agenda";
  process.stdout.write("\n" + spaces(LEFT_MARGIN));
  process.stdout.write(`${orangeBg}${whiteText}  🦊  ${reset}`);
  for (let i = 0; i <= text.length; i++) {
    const partial = text.slice(0, i);
    process.stdout.write(
      `\r${spaces(LEFT_MARGIN)}${orangeBg}${whiteText}  🦊  ${partial}  ${reset}`
    );
    await new Promise((r) => setTimeout(r, 70));
  }
  process.stdout.write("\n\n");
}

// 單鍵 y/n
function askKeyYN(question) {
  return new Promise((resolve) => {
    process.stdout.write(question);
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    process.stdin.once("data", (key) => {
      process.stdin.setRawMode(false);
      process.stdin.pause();
      if (key === "\u0003") { // Ctrl+C
        console.log("\n❌ Aborted.");
        process.exit(1);
      }
      resolve(key.trim().toLowerCase() === "y");
    });
  });
}

// 顯示「dir 問句」並精準讓輸入列與 Where 對齊（必填）
async function askProjectPath() {
  // 左欄：右對齊的 label
  const label = "dir";
  const leftPad = spaces(LABEL_WIDTH - label.length);
  const labelColored = `${cyanBg}${blackText} ${label} ${reset}`;
  const leftCol = `${grayText}${leftPad}${labelColored}${reset}`;

  // 第一行：LEFT_MARGIN + 左欄 + GAP + 問句
  const line1 =
    spaces(LEFT_MARGIN) +
    leftCol +
    spaces(GAP_WIDTH) +
    `${whiteText}${QUESTION}${reset}`;
  console.log(line1);

  // 第二行：用「純空白」建立 prompt，讓 readline 管控游標位置
  const inputCol = LEFT_MARGIN + LABEL_WIDTH + GAP_WIDTH; // 問句起始欄位
  const promptIndent = spaces(inputCol + 2); // +1 看起來更舒服
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.setPrompt(promptIndent);
  rl.prompt();

  const answer = await new Promise((resolve) => {
    rl.on("line", (line) => {
      const trimmed = line.trim();
      if (!trimmed) {
        // 必填 → 重印兩行（維持版面），再重給 prompt
        // 先往上移一行把空輸入那行吃掉（非必要，可省略）
        console.log(`${spaces(LEFT_MARGIN + LABEL_WIDTH + GAP_WIDTH + 1)}${grayText}<project name is required>${reset}`);
        rl.prompt();
        return;
      }
      rl.close();
      console.log(); // 換行收尾
      resolve(trimmed);
    });
  });

  return answer;
}

// 方框輸出
function printBox(lines, color = orangeText) {
  // Add extra slack to account for emoji/wide chars and terminal differences.
  const maxLen = Math.max(...lines.map((l) => l.length));
  const width = maxLen + 6; // a little wider to avoid overflow
  const innerWidth = width - 2;
  const top = `┌${"─".repeat(Math.max(0, innerWidth))}┐`;
  const bottom = `└${"─".repeat(Math.max(0, innerWidth))}┘`;
  console.log(color + top + reset);
  for (const line of lines) {
    // compute padding and clamp to at least one space so repeat() never gets negative
    const padding = Math.max(1, innerWidth - line.length - 1);
    console.log(color + "│ " + reset + line + " ".repeat(padding) + color + "│" + reset);
  }
  console.log(color + bottom + reset);
}

// ===== Main =====
await showBanner();
const projectName = process.argv[2] || (await askProjectPath());

// 目標路徑 & 範本
const targetDir = path.resolve(process.cwd(), projectName);
const templateDir = path.join(__dirname, "template");

// 覆蓋警告（存在才問，單鍵 y 確認）
if (fs.existsSync(targetDir)) {
  const q =
    `${grayText}${spaces(LABEL_WIDTH - 2)}${yellowBg}${blackText} Warn ${reset}` +
    `${grayText}${spaces(GAP_WIDTH)}${whiteText}Target directory exists. Overwrite? (y/N): ${reset}`;
  const go = await askKeyYN(q);
  console.log();
  if (!go) {
    console.log("❌ Project creation canceled.");
    process.exit(1);
  }
}

// 複製範本
fs.cpSync(templateDir, targetDir, { recursive: true });

// 修改 package.json name
const pkgPath = path.join(targetDir, "package.json");
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  pkg.name = projectName;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}

// Done
printBox([
  `✅ Project "${projectName}" created successfully!`,
  `📂 Location: ${targetDir}`,
]);

printBox([
  "💡 Next steps:",
  `   cd ${projectName}`,
  "   pnpm i",
  "   pnpm dev",
]);

// Offer to run pnpm install and pnpm dev for the user
const doHelp = await askKeyYN(
  `${grayText}${spaces(LABEL_WIDTH - 2)}${yellowBg}${blackText} Help ${reset}` +
    `${grayText}${spaces(GAP_WIDTH)}${whiteText}Do you want me to run 'pnpm i' and then 'pnpm dev' for you? (y/N): ${reset}`
);
console.log();
if (doHelp) {
  // helper to run a command and wait
  async function runCmd(cmd, args, cwd) {
    return new Promise((resolve, reject) => {
      const p = spawn(cmd, args, { cwd, stdio: "inherit" });
      p.on("error", (err) => reject(err));
      p.on("exit", (code) => {
        if (code === 0) resolve(code);
        else reject(new Error(`${cmd} ${args.join(" ")} exited with code ${code}`));
      });
    });
  }

  try {
    console.log(`${grayText}Installing dependencies...${reset}`);
    await runCmd("pnpm", ["i"], targetDir);
    console.log(`${grayText}Starting dev server... (press Ctrl+C to stop)${reset}`);
    // start dev and attach stdio (will run until user stops)
    await runCmd("pnpm", ["dev"], targetDir);
  } catch (err) {
    console.error(`\n⚠️  Failed to run command: ${err.message}`);
    console.log("You can run the steps manually:");
    console.log(`  cd ${projectName}`);
    console.log("  pnpm i");
    console.log("  pnpm dev");
    process.exit(1);
  }
}
