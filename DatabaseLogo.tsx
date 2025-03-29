import * as React from "react";
import type { ImgHTMLAttributes } from "react";

export const DatabaseLogo = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img src="/images/aios-logo.svg" alt="aios Logo" {...props} />
);
