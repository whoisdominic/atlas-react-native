import { Dimensions, Platform } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const wHeight = Dimensions.get('window').height;

const diff = height - wHeight;

interface Viewport {
  SCREEN_WIDTH: number;
  SCREEN_HEIGHT: number;
  isSmallDevice: boolean;
  isBigDevice: boolean;
  relativeY: (num: number) => number;
  relativeX: (num: number) => number;
  isIOS: boolean;
  isAndroid: boolean;
  isWeb: boolean;
}

export const Viewport: Viewport = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: wHeight,
  isSmallDevice: width < 375,
  isBigDevice: width > 1100,
  relativeY: (num: number) => (height - diff / 2) * (num / 100),
  relativeX: (num: number) => width * (num / 100),
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  isWeb: Platform.OS === 'web',
};

export function useViewport(): Viewport {
  const w = Dimensions.get('screen').width;
  const h = Dimensions.get('screen').height;
  const wH = Dimensions.get('window').height;

  const diff = h - wH;

  return {
    SCREEN_WIDTH: w,
    SCREEN_HEIGHT: h,
    isSmallDevice: width < 375,
    isBigDevice: width > 1100,
    relativeY: (num: number) => (h - diff / 2) * (num / 100),
    relativeX: (num: number) => w * (num / 100),
    isIOS: Platform.OS === 'ios',
    isAndroid: Platform.OS === 'android',
    isWeb: Platform.OS === 'web',
  };
}

export default Viewport;
