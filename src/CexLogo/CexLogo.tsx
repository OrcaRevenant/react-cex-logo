import { SVGProps } from "react";
import {
  BinanceLogo,
  BitfinexLogo,
  CoinbaseLogo,
  CryptoComLogo,
  FeiLogo,
  KrakenLogo,
  KuCoinLogo,
  OKXLogo,
  UpbitLogo,
} from "../logos";

/**
 * Props for the CexLogo component
 */
export interface CexLogoProps extends SVGProps<SVGSVGElement> {
  /** The exchange name */
  exchange: CexName;
}

const iconMap = {
  binance: BinanceLogo,
  bitfinex: BitfinexLogo,
  coinbase: CoinbaseLogo,
  fei: FeiLogo,
  kucoin: KuCoinLogo,
  okx: OKXLogo,
  upbit: UpbitLogo,
  kraken: KrakenLogo,
  cryptoCom: CryptoComLogo,
} as const;

export type CexName = keyof typeof iconMap;

/**
 * A React component for displaying cryptocurrency exchange logos
 * @example
 * ```tsx
 * <CexLogo exchange="binance" className="size-8" />
 * ```
 */
export const CexLogo = ({ exchange, ...props }: CexLogoProps) => {
  const Icon = iconMap[exchange];

  return <Icon {...props} />;
};
