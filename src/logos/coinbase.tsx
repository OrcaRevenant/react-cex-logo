import { cn } from "../lib/utils";
import { LogoProps } from "./types";

export function CoinbaseLogo({ ...props }: LogoProps) {
  return (
    <svg
      className={cn("size-6", props.className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" fill="#0052FF" />
      <path
        d="M12.0058 16.0126C9.78883 16.0126 7.99314 14.217 7.99314 12C7.99314 9.78295 9.78883 7.98728 12.0058 7.98728C13.9921 7.98728 15.6406 9.43518 15.9583 11.3312H20.0011C19.66 7.2115 16.2124 3.97461 12.0058 3.97461C7.57515 3.97461 3.98047 7.56929 3.98047 12C3.98047 16.4306 7.57515 20.0253 12.0058 20.0253C16.2124 20.0253 19.66 16.7884 20.0011 12.6687H15.955C15.6373 14.5647 13.9921 16.0126 12.0058 16.0126Z"
        fill="white"
      />
    </svg>
  );
}
