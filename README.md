# React CEX Logo

A React component library for displaying cryptocurrency exchange logos. This library provides a simple and consistent way to display exchange logos in your React applications.

## Features

- Easy to use React components
- TypeScript support with full type definitions
- Built with Vite for optimal development experience
- Tailwind CSS integration for styling
- Responsive design
- Lightweight and performant

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
  return (
    <div className="flex gap-4">
      <CexLogo exchange="binance" className="size-8" />
      <CexLogo exchange="coinbase" className="size-8" />
      <CexLogo exchange="kraken" className="size-8" />
    </div>
  );
}
```

## Supported Exchanges

The following exchanges are currently supported:

- Binance
- Bitfinex
- Coinbase
- Crypto.com
- Fei
- Kraken
- KuCoin
- OKX
- Upbit

## Props

| Prop      | Type     | Default   | Description                                     |
| --------- | -------- | --------- | ----------------------------------------------- |
| exchange  | string   | required  | The exchange name (e.g., 'binance', 'coinbase') |
| className | string   | undefined | Additional CSS classes                          |
| ...props  | SVGProps | undefined | Any other SVG props (e.g., color, stroke)       |

## Examples

### Basic Usage

```tsx
<CexLogo exchange="binance" />
```

### Custom Size

```tsx
<CexLogo exchange="coinbase" className="size-8" />
```

### Custom Styling

```tsx
<CexLogo
  exchange="kraken"
  className="size-8 text-blue-500 hover:text-blue-600 transition-colors"
/>
```

### Self

```tsx
<KrakenLogo className="size-6">
```

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

# Type checking
pnpm typecheck
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [seventhlegion](https://github.com/OrcaRevenant)

## Support

If you find this library useful, please consider giving it a ⭐️ on GitHub. For any issues or feature requests, please open an issue on the [GitHub repository](https://github.com/OrcaRevenant/react-cex-logo/issues).
