import { SVGProps } from "react";
import {
  BinanceIcon,
  BitfinexIcon,
  CoinbaseIcon,
  CryptoComIcon,
  FeiIcon,
  KrakenIcon,
  KuCoinIcon,
  OKXIcon,
  UpbitIcon,
} from "../logos";

/**
 * Props for the CexLogo component
 */
export interface CexLogoProps extends SVGProps<SVGSVGElement> {
  /** The exchange name */
  exchange: CexName;
}

const iconMap = {
  binance: BinanceIcon,
  bitfinex: BitfinexIcon,
  coinbase: CoinbaseIcon,
  fei: FeiIcon,
  kucoin: KuCoinIcon,
  okx: OKXIcon,
  upbit: UpbitIcon,
  kraken: KrakenIcon,
  cryptoCom: CryptoComIcon,
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
