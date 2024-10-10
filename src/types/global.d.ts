// global.d.ts

interface JQuery {
  daterangepicker: (
    options?: any,
    callback?: (start: any, end: any, label: any) => void,
  ) => JQuery;
}

declare global {
  interface JQuery {
    daterangepicker: (
      options?: any,
      callback?: (start: any, end: any, label: any) => void,
    ) => JQuery;
  }
}
