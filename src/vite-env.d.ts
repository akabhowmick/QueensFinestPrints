/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PAYPAL_CLIENT_ID: string;
  readonly VITE_FORMSUBMIT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
