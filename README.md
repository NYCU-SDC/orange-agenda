# The Orange Agenda

A complete React component library built with **Radix UI primitives**, styled with CSS Modules, and documented with Storybook.

## ✨ Features

- 🎨 **31 Production-Ready Components** - Complete Radix UI coverage including Button, Dialog, Tabs, Switch, Tooltip, Checkbox, Slider, RadioGroup, DropdownMenu, Select, Popover, Accordion, HoverCard, Toast, AlertDialog, AspectRatio, Avatar, Collapsible, ContextMenu, Label, Menubar, NavigationMenu, Progress, ScrollArea, Separator, Toggle, ToggleGroup, and Toolbar
- ♿ **Fully Accessible** - Built on Radix UI primitives following WAI-ARIA standards
- 🎯 **TypeScript First** - Complete type definitions for all components
- 💅 **Customizable** - CSS Modules with CSS variables for easy theming
- 📖 **Interactive Documentation** - Storybook with live examples
- 🚀 **Production Ready** - ESM + UMD builds with tree-shaking support
- 🍊 **Orange Theme** - Beautiful orange color scheme out of the box

## 📦 Installation

```bash
pnpm add @the-orange-agenda/ui
```

### Peer Dependencies

```bash
pnpm add react react-dom
```

## 🚀 Quick Start

### Import Components

```tsx
import { Button, Dialog, DialogTrigger, DialogContent } from '@the-orange-agenda/ui';

function App() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent title="Welcome" description="This is The Orange Agenda">
        <p>Your content here</p>
      </DialogContent>
    </Dialog>
  );
}
```

### Import Styles

```tsx
import '@the-orange-agenda/ui/styles';
```

## 🧩 Components

### Button

```tsx
import { Button } from '@the-orange-agenda/ui';

<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent } from '@the-orange-agenda/ui';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent title="Title" description="Description">
    Content
  </DialogContent>
</Dialog>
```

### Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@the-orange-agenda/ui';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Switch

```tsx
import { Switch } from '@the-orange-agenda/ui';

<Switch checked={true} onCheckedChange={(checked) => console.log(checked)} />
```

### Tooltip

```tsx
import { Tooltip, TooltipProvider } from '@the-orange-agenda/ui';

<TooltipProvider>
  <Tooltip content="Helpful text">
    <Button>Hover me</Button>
  </Tooltip>
</TooltipProvider>
```

### Checkbox

```tsx
import { Checkbox } from '@the-orange-agenda/ui';

<Checkbox checked={true} onCheckedChange={(checked) => console.log(checked)} />
```

### Slider

```tsx
import { Slider } from '@the-orange-agenda/ui';

<Slider defaultValue={[50]} min={0} max={100} step={1} />
```

### RadioGroup

```tsx
import { RadioGroup, RadioGroupItem } from '@the-orange-agenda/ui';

<RadioGroup defaultValue="option1">
  <RadioGroupItem value="option1" id="r1" />
  <RadioGroupItem value="option2" id="r2" />
</RadioGroup>
```

### DropdownMenu

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@the-orange-agenda/ui';

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Select

```tsx
import { Select, SelectItem } from '@the-orange-agenda/ui';

<Select placeholder="Choose...">
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
</Select>
```

### Popover

```tsx
import { Popover, PopoverTrigger, PopoverContent } from '@the-orange-agenda/ui';

<Popover>
  <PopoverTrigger asChild>
    <Button>Open</Button>
  </PopoverTrigger>
  <PopoverContent>Content</PopoverContent>
</Popover>
```

### Accordion

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@the-orange-agenda/ui';

<Accordion defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>Answer!</AccordionContent>
  </AccordionItem>
</Accordion>
```

### HoverCard

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@the-orange-agenda/ui';

<HoverCard>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent>Additional info</HoverCardContent>
</HoverCard>
```

### Toast

```tsx
import { Toast, ToastProvider, ToastViewport } from '@the-orange-agenda/ui';

<ToastProvider>
  <Toast title="Success!" description="Operation completed" />
  <ToastViewport />
</ToastProvider>
```

## 🎨 Theming

The library uses CSS variables for theming. Override them in your app:

```css
:root {
  --color-orange: #your-color;
  --color-orange-dark: #your-dark-color;
  --color-orange-light: #your-light-color;
  /* ... more variables */
}
```

See `src/styles/variables.css` for all available variables.

## 🛠️ Development

### Install Dependencies

```bash
pnpm install
```

### Run Storybook

```bash
pnpm storybook
```

Opens at [http://localhost:6006](http://localhost:6006)

### Build Library

```bash
pnpm build
```

### Lint & Format

```bash
pnpm lint
pnpm format
```

## 📁 Project Structure

```
the-orange-agenda/
├── src/
│   ├── components/      # All component implementations
│   ├── styles/          # Global styles and CSS variables
│   └── index.ts         # Main entry point
├── .storybook/          # Storybook configuration
├── dist/                # Built library (after build)
└── package.json
```

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and include tests for new features.

## 📄 License

Apache-2.0 © NYCU SDC

## 🙏 Credits

Built with:
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Storybook](https://storybook.js.org/) - UI component explorer
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

---

Made with 🔥 by NYCU SDC Team
