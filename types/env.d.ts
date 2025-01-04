declare module '@env' {
  export const API_URL: string;
  export const VAR_NUMBER: number;
  export const VAR_BOOL: boolean;
  export const APP_ENV: 'development' | 'staging' | 'production';
  export const NAME: string;
  export const SCHEME: string;
  export const BUNDLE_ID: string;
  export const PACKAGE: string;
  export const VERSION: string;
}
