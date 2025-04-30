# React CEX Logo

A React component library for displaying cryptocurrency exchange logos.

## Features

- Easy to use React components
- TypeScript support
- Built with Vite
- Tailwind CSS integration
- Responsive design

## Installation

```bash
npm install react-cex-logo
# or
yarn add react-cex-logo
# or
pnpm add react-cex-logo
```

## Usage

```tsx
import { CexLogo } from "react-cex-logo";

function App() {
  return <CexLogo exchange="binance" className="size-8 custom-class" />;
}
```

## Props

| Prop      | Type   | Default   | Description                                     |
| --------- | ------ | --------- | ----------------------------------------------- |
| exchange  | string | required  | The exchange name (e.g., 'binance', 'coinbase') |
| className | string | undefined | Additional CSS classes                          |

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Your Name]
