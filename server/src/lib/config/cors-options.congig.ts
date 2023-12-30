const whitelist: string[] = ["http://127.0.0.1:3000", "http://localhost:3000"];

interface CustomCorsOptions {
  origin:
    | string
    | ((
        origin: string,
        callback: (error: Error | null, success: boolean) => void
      ) => void)
    | undefined;
  optionsSuccessStatus: number;
}

export const corsOptions: CustomCorsOptions = {
  origin: (
    origin: string,
    callback: (error: Error | null, success: boolean) => void
  ) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
  optionsSuccessStatus: 200,
};
