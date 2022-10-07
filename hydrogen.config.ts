import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';
import dot from 'dotenv';

dot.config();

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain: 'hydrogen-preview.myshopify.com',
    storefrontToken: process.env.PRIVATE_STOREFRONT_KEY,
    storefrontApiVersion: '2022-07',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
