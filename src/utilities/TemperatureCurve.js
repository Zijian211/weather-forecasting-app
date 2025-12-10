export const makeTempCurve = (baseTemp, spread = 4) => {
  return Array.from({ length: 6 }).map((_, i) => ({
    temp: baseTemp + Math.sin(i / 2) * spread,
  }));
};
