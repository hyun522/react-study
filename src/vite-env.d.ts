/// <reference types="vite/client" />

interface ImportMetaEnv {
  env: {
    readonly VITE_OPENWEATHER_API_KEY: string;
  };
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
