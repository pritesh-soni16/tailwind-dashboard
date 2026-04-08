import { useCustomeBreakpoints } from './useCustomeBreakpoints';

export const useResponsiveChart = () => {
    const { isMobile, isLaptop, isXLDesktop } = useCustomeBreakpoints({});

    const chartFont = () => {
    if (isXLDesktop) return 15;
    else if (isMobile) return 12;
    else return 10;
  };

  const chartPadding = () => {
    if (isXLDesktop) return 20;
    else if (isLaptop) return 15;
    else if (isMobile) return 5;
    else return 2;
  };

  const chartLegendPadding = () => {
    if (isXLDesktop) return 30;
    else if (isLaptop) return 20;
    else return 15;
  }

  const chartBorderWidth = () => {
    if (isMobile) return 2;
    else return 1;
  };

  const chartThickBorderWidth = () => {
    if (isXLDesktop) return 6;
    else if (isMobile) return 5;
    else return 4;
  };

  const chartPointRadius = () => {
    if (isXLDesktop) return 5;
    else if (isLaptop) return 4;
    else if (isMobile) return 3;
    else return 2;
  };

  const chartBigPointRadius = () => {
    if (isXLDesktop) return 6;
    else if (isMobile) return 5;
    else return 4;
  };
  
  const chartBigBorderWidth = () => {
    if (isMobile) return 3;
    else return 2;
  };

  const TooltipTitleFont = () => {
    if (isLaptop) return 14;
    else if (isMobile) return 12;
    else return 10;
  };

  const TooltipBodyFont = () => {
    if (isLaptop) return 13;
    else if (isMobile) return 11;
    else return 9;
  };

  const TooltipPadding = () => {
    if (isLaptop) return 10;
    else if (isMobile) return 8;
    else return 6;
  };

  return {
    chartFont,
    chartPadding,
    chartBorderWidth,
    TooltipTitleFont,
    TooltipBodyFont,
    TooltipPadding,
    chartPointRadius,
    chartLegendPadding,
    chartThickBorderWidth,
    chartBigPointRadius,
    chartBigBorderWidth,
  };
};

