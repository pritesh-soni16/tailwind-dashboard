"use client";
import { useCallback, useEffect, useState } from "react";

interface Breakpoints {
  mobile?: number;
  tablet?: number;
  laptop?: number;
  m_laptop?: number;
  xl_desktop?: number;
  xxl_desktop?: number;
}

const DEFAULT_BREAKPOINTS = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  m_laptop: 1200,
  xl_desktop: 1400,
  xxl_desktop: 1600,
};

export const useCustomeBreakpoints = (customBreakpoints: Breakpoints) => {
  const [isSMobile, setIsSMobile] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isLaptop, setIsLaptop] = useState<boolean>(false);
  const [isMLaptop, setIsMLaptop] = useState<boolean>(false);
  const [isXLDesktop, setIsXLDesktop] = useState<boolean>(false);
  const [isXXLDesktop, setIsXXLDesktop] = useState<boolean>(false);
  const [isLessThan1199, setIsLessThan1199] = useState<boolean>(false);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;

    const { mobile, tablet, laptop, m_laptop, xl_desktop, xxl_desktop } = {
      mobile: customBreakpoints?.mobile ?? DEFAULT_BREAKPOINTS.mobile,
      tablet: customBreakpoints?.tablet ?? DEFAULT_BREAKPOINTS.tablet,
      laptop: customBreakpoints?.laptop ?? DEFAULT_BREAKPOINTS.laptop,
      m_laptop: customBreakpoints?.m_laptop ?? DEFAULT_BREAKPOINTS.m_laptop,
      xl_desktop:
        customBreakpoints?.xl_desktop ?? DEFAULT_BREAKPOINTS.xl_desktop,
      xxl_desktop:
        customBreakpoints?.xxl_desktop ?? DEFAULT_BREAKPOINTS.xxl_desktop,
    };

    // CHECK FOR LESS THAN (1199px)
    setIsLessThan1199(width <= 1199);

    // CHECK FOR SMALL MOBILE(575px)
    setIsSMobile(width <= mobile);

    // CHECK FOR MOBILE(577px - 768px)
    if (mobile !== undefined) {
      setIsMobile(width >= mobile);
    }

    // CHECK FOR TABLET(769px - 992px)
    if (tablet !== undefined) {
      setIsTablet(width >= tablet);
    }

    // CHECK FOR LAPTOP(993px - 1200px)
    if (laptop !== undefined) {
      setIsLaptop(width >= laptop);
    }

    // CHECK FOR M_LAPTOP(1201px - 1400px)
    if (m_laptop !== undefined) {
      setIsMLaptop(width >= m_laptop);
    }

    // CHECK FOR XL_DESKTOP(1401px - 1600px)
    if (xl_desktop !== undefined) {
      setIsXLDesktop(width >= xl_desktop);
    }

    // CHECK FOR XXL_DESKTOP(1600px)
    if (xxl_desktop !== undefined) {
      setIsXXLDesktop(width >= xxl_desktop);
    }
  }, [customBreakpoints]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return {
    isSMobile,
    isMobile,
    isTablet,
    isLaptop,
    isMLaptop,
    isXLDesktop,
    isXXLDesktop,
    isLessThan1199,
  };
};
