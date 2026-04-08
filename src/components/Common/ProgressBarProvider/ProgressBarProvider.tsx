"use client";

import React from "react";
import NextTopLoader from "nextjs-toploader";

export const ProgressBarProvider = () => (
  <NextTopLoader
    color="#4880FF"
    initialPosition={0.08}
    crawlSpeed={200}
    height={4}
    crawl={true}
    showSpinner={false}
    easing="ease"
    speed={200}
  />
);
