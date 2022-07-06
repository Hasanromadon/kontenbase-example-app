import { KontenbaseClient } from '@kontenbase/sdk';

console.log(process.env);
export const kontenbase = new KontenbaseClient({
  apiKey: process.env.REACT_APP_API_KEY,
});
