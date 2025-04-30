import { cn } from "../lib/utils";
import { LogoProps } from "./types";

export function CryptoComLogo({ ...props }: LogoProps) {
  return (
    <svg
      className={cn("size-6", props.className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" fill="white" />
      <path
        d="M11.9635 2.7207L3.92578 7.36022V16.6392L11.9635 21.2788L20.0012 16.6392V7.36022L11.9635 2.7207Z"
        fill="url(#paint0_linear_1254_57048)"
      />
      <path
        d="M11.9635 2.7207L3.92578 7.36022V16.6392L11.9635 21.2788V2.7207Z"
        fill="url(#paint1_linear_1254_57048)"
      />
      <path
        d="M15.0991 6.72949H8.79103L8.05848 9.9446H15.8724L15.0991 6.72949ZM9.91021 14.3603V12.2237L8.03813 11.0434L5.92188 12.6103L8.81138 17.6365H9.97125L11.3346 16.3545V15.7237L9.91021 14.3603Z"
        fill="white"
      />
      <path
        d="M13.9994 10.4326H9.92969L10.6012 12.2233L10.3977 14.2378H13.5314L13.3279 12.2233L13.9994 10.4326Z"
        fill="white"
      />
      <path
        d="M15.8691 11.0225L14.0173 12.223V14.3596L12.6133 15.723V16.3538L13.9767 17.6154H15.1162L17.9854 12.6097L15.8691 11.0225Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1254_57048"
          x1="11.9564"
          y1="2.7207"
          x2="11.9564"
          y2="21.2674"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#25376C" />
          <stop offset="1" stopColor="#1F1F49" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1254_57048"
          x1="7.94159"
          y1="21.2674"
          x2="7.94159"
          y2="2.7207"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#25376C" />
          <stop offset="1" stopColor="#1F1F49" />
        </linearGradient>
      </defs>
    </svg>
  );
}
