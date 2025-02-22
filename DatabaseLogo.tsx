import * as React from "react";
import type { ImgHTMLAttributes } from "react";

export const DatabaseLogo = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img src="/images/aios-logo.png" alt="aios Logo" {...props} />
);
