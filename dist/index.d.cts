import * as react_jsx_runtime from 'react/jsx-runtime';
import { SVGProps } from 'react';

type LogoProps = {
    size?: number;
} & SVGProps<SVGSVGElement>;

declare function BinanceLogo({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function BitfinexLogo({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function CoinbaseLogo({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function CryptoComLogo({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function FeiLogo({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function KrakenLogo({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function KuCoinLogo({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function OKXLogo({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

declare function UpbitLogo({ ...props }: LogoProps): react_jsx_runtime.JSX.Element;

/**
 * Props for the CexLogo component
 */
interface CexLogoProps extends SVGProps<SVGSVGElement> {
    /** The exchange name */
    exchange: CexName;
}
declare const iconMap: {
    readonly binance: typeof BinanceLogo;
    readonly bitfinex: typeof BitfinexLogo;
    readonly coinbase: typeof CoinbaseLogo;
    readonly fei: typeof FeiLogo;
    readonly kucoin: typeof KuCoinLogo;
    readonly okx: typeof OKXLogo;
    readonly upbit: typeof UpbitLogo;
    readonly kraken: typeof KrakenLogo;
    readonly cryptoCom: typeof CryptoComLogo;
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
