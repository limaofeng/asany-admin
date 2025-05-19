declare module 'lunar-javascript' {
  type LunarObject = {
    getDayInChinese: () => string;
    getJieQi: () => string;
  };

  export const Lunar: {
    fromDate: (date: Date) => LunarObject;
  };
}
