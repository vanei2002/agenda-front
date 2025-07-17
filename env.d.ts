/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MICROSERVICE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
