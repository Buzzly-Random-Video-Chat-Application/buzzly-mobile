declare module 'react-native-config' {
  interface Env {
    API_BASE_URL?: string;
    [key: string]: string | undefined;
  }
  const Config: Env;
  export default Config;
}
