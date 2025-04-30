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

export type CexLogoProps = {
  name: CexName;
  size?: number;
} & SVGProps<SVGSVGElement>;

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

export const CexLogo = ({ name, ...props }: CexLogoProps) => {
  const Icon = iconMap[name];

  return <Icon {...props} />;
};
