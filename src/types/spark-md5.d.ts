declare module 'spark-md5' {
  type Spark = {
    hashBinary: (data: string | ArrayBuffer | null) => string;
  };

  const spark: Spark;

  export default spark;
}
