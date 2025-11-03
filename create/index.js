#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2];
if (!projectName) {
  console.error('❌ 請輸入專案名稱，例如：pnpm create @nycu-sdc/create-agenda my-app');
  process.exit(1);
}

const targetDir = path.resolve(process.cwd(), projectName);
const templateDir = path.join(__dirname, 'template');

// 避免覆蓋
if (fs.existsSync(targetDir)) {
  console.error('⚠️  目標資料夾已存在，請換個名字。');
  process.exit(1);
}

// 複製整個範本
fs.cpSync(templateDir, targetDir, { recursive: true });

// 修改 package.json name 欄位
const pkgPath = path.join(targetDir, 'package.json');
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  pkg.name = projectName;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}

console.log(`✅ 專案「${projectName}」建立完成！`);
console.log(`📂 位置：${targetDir}`);
console.log(`💡 接下來你可以：`);
console.log(`   cd ${projectName}`);
console.log(`   pnpm i`);
console.log(`   pnpm dev`);
