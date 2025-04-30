import * as react_jsx_runtime from 'react/jsx-runtime';
import { SVGProps } from 'react';

type LogoProps = {
    size?: number;
} & SVGProps<SVGSVGElement>;

declare function BinanceIcon({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function BitfinexIcon({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function CoinbaseIcon({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function CryptoComIcon({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function FeiIcon({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function KrakenIcon({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function KuCoinIcon({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function OKXIcon({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function UpbitIcon({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

/**
 * Props for the CexLogo component
 */
interface CexLogoProps extends SVGProps<SVGSVGElement> {
    /** The exchange name */
    exchange: CexName;
}
declare const iconMap: {
    readonly binance: typeof BinanceIcon;
    readonly bitfinex: typeof BitfinexIcon;
    readonly coinbase: typeof CoinbaseIcon;
    readonly fei: typeof FeiIcon;
    readonly kucoin: typeof KuCoinIcon;
    readonly okx: typeof OKXIcon;
    readonly upbit: typeof UpbitIcon;
    readonly kraken: typeof KrakenIcon;
    readonly cryptoCom: typeof CryptoComIcon;
};
type CexName = keyof typeof iconMap;
/**
 * A React component for displaying cryptocurrency exchange logos
 * @example
 * ```tsx
 * <CexLogo exchange="binance" className="size-8" />
 * ```
 */
declare const CexLogo: ({ exchange, ...props }: CexLogoProps) => react_jsx_runtime.JSX.Element;

export { CexLogo, type CexLogoProps };
