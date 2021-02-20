import React from 'react';
import {
  Platform,
  Dimensions,
  PixelRatio
} from 'react-native';

export const wp = (widthPercent: string) => {
  const screenWidth = Dimensions.get('window').width;

  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100,
  )
}

export const hp = (heightPercent: string) => {
  const screenHeight = Dimensions.get('window').height;

  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100,
  )
}



