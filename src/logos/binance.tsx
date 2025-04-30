import { cn } from "../lib/utils";
import { LogoProps } from "./types";

export function BinanceIcon({ ...props }: LogoProps) {
  return (
    <svg
      className={cn("size-6", props.className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" fill="#2F2B32" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.89372 10.7234L12.0011 7.61599L15.1112 10.7261L16.9192 8.91806L12.0011 4L7.08573 8.9154L8.89372 10.7234ZM4 12.0009L5.80752 10.1933L7.61504 12.0009L5.80752 13.8084L4 12.0009ZM12.0011 16.387L8.89367 13.2796L7.08302 15.0849L7.08568 15.0876L12.0011 20.003L16.9191 15.0849L15.1111 13.277L12.0011 16.387ZM16.3856 12.0021L18.1931 10.1946L20.0006 12.0021L18.1931 13.8096L16.3856 12.0021ZM12.0011 10.1669L13.8357 12.0015L12.0011 13.8388L10.1665 12.0042V11.9988L10.4887 11.6767L10.6458 11.5222L12.0011 10.1669Z"
        fill="#F3BA2F"
      />
    </svg>
  );
}
