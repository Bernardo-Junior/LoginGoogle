import React, { useState, useEffect } from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import { Appearance } from 'react-native'

import {  
  Container,
  Txt,
  BtnGoogle,
  Statusbar,
  ImgUser,
  TxtNameUser,
  ViewInfo,
  TxtWelcome,
  BtnLogOut,
  TxtBtnLogOut
} from './styles';

import { IUserLogin } from '../../../data/protocols/LoginGoogle';

const Login: React.FC = () => {
  const [isSigninInProgress, setisSigninInprogress] = useState<boolean>(false);
  const [infoUser, setInfoUser] = useState<IUserLogin | null>(null);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '840685815549-p9vi2lqjbk9lm56meq4rr4tncrgjgpkh.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      //hostedDomain: '', // specifies a hosted domain restriction
      //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      //accountName: '', // [Android] specifies an account name on the device that should be used
      //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  },[])

  const _signIn = async() => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setInfoUser(userInfo);
      setisSigninInprogress(true);
      // setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      console.log(error);
    }
  }

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setInfoUser(null) // Remember to remove the user from your app's state as well
      setisSigninInprogress(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Statusbar 
        backgroundColor={
          Appearance.getColorScheme() === 'light' ? '#FFFFFF' : '#000000'
        } 
        barStyle={
          Appearance.getColorScheme() === 'light' ? 'dark-content' : 'light-content'
        } 
      />
      <Container>
        {!isSigninInProgress &&
        <>
          <Txt>Login com Google</Txt>
          <BtnGoogle
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={_signIn}
          
          disabled={isSigninInProgress} />
        </>
        }
        {infoUser &&
          <>
            <ViewInfo>
              <TxtWelcome>Bem vindo</TxtWelcome>
              <ImgUser 
                source={{ uri: `${infoUser.user?.photo}` }}
                resizeMode="stretch"
              />
              <TxtNameUser>{infoUser.user?.name}</TxtNameUser>

              <BtnLogOut onPress={() => {signOut()}}>
                <TxtBtnLogOut>Sair</TxtBtnLogOut>
              </BtnLogOut>
            </ViewInfo>
          </>
        }
      </Container>
    </>
  )
}

export default Login;