declare global {
  export function t(s: string): string;
  export const lang: string;
}

declare module "auth" {
  export function login(username: string, password: string): Promise<string>;
  export function logout(): Promise<boolean>;
}

export {};
