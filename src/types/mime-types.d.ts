declare module 'mime-types' {
  type MimeTypes = {
    lookup: (path: string) => string;
    contentType: (type: string) => string;
    extension: (type: string) => string;
  };

  const mime: MimeTypes;

  export default mime;
}
