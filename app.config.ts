/* eslint-disable max-lines-per-function */
import type { ConfigContext, ExpoConfig } from '@expo/config';

import { ClientEnv, Env } from './env';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  owner: Env.EXPO_ACCOUNT_OWNER,
  version: Env.VERSION.toString(),
  orientation: 'portrait',
  slug: Env.SCHEME,
  scheme: Env.SCHEME,
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  platforms: ['ios', 'android', 'web'],
  primaryColor: '#141217',
  androidStatusBar: {
    hidden: true,
  },
  updates: {
    url: 'https://u.expo.dev/a9ed9852-b1f8-4043-a728-823f642a1804',
    fallbackToCacheTimeout: 0,
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
  androidNavigationBar: {
    visible: 'immersive',
  },
  experiments: {
    typedRoutes: true,
  },
  splash: {
    backgroundColor: '#0D0D0D',
    image: './assets/icon.png',
    resizeMode: 'contain',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: Env.BUNDLE_ID,
    infoPlist: {
      NSMicrophoneUsageDescription:
        'This app requires access to the microphone to record audio.',
      LSApplicationCategoryType: '',
      LSApplicationQueriesSchemes: [
        'phonepe',
        'tez',
        'paytmmp',
        'bhim',
        'credpay',
      ],
    },
  },
  android: {
    package: Env.PACKAGE,
    adaptiveIcon: {
      foregroundImage: './assets/icon.png',
      backgroundColor: '#2E3C4B',
    },
    permissions: [
      'android.permission.RECORD_AUDIO',
      'android.permission.INTERNET',
      'android.permission.ACCESS_NETWORK_STATE',
      'android.hardware.microphone',
      'android.permission.MODIFY_AUDIO_SETTINGS',
    ],
  },
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro',
  },
  plugins: [['react-native-edge-to-edge'], ['expo-router']],
  extra: {
    ...ClientEnv,
    eas: {
      projectId: Env.EAS_PROJECT_ID,
    },
  },
});
