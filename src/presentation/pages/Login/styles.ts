import styled from 'styled-components/native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import {
  wp,
  hp
} from '../../../utils/responsivity';

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  align-items: center;
`;

export const Txt = styled.Text`
  color: #000000;
  align-self: center;
  font-size: ${hp('3%')}px;
  padding: ${hp('5%')}px;
`;

export const BtnGoogle = styled(GoogleSigninButton)`
  width: ${wp('60%')}px;
  height: ${hp('7%')}px;
`;

export const Statusbar = styled.StatusBar``;

export const ViewInfo = styled.View`
  flex: 1;
  margin-top: ${hp('15%')}px;
  align-items: center;
`;

export const ImgUser = styled.Image`
  width: ${wp('30%')}px;
  height: ${hp('15%')}px;
`;


export const TxtNameUser = styled.Text`
  margin-top: ${hp('5%')}px;
  text-align: center;
  color: blue;
  font-size: ${hp('3%')}px;
  font-weight: bold;
`;

export const TxtWelcome = styled.Text`
  font-size: ${hp('6%')}px;
  color: #FFFFFF;
  margin-bottom: ${hp('5%')}px;
`;

export const BtnLogOut = styled.TouchableOpacity`
  width: ${wp('60%')}px;
  height: ${hp('7%')}px;
  background-color: blue;
  justify-content: center;
  align-items: center;
  margin-top: ${hp('10%')}px;
  border-radius: ${hp('1%')}px;
`;

export const TxtBtnLogOut = styled.Text`
  font-weight: bold;
`;

