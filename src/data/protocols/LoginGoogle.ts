export interface IUserLogin {
  idToken: string | null;
  scopes?: string[] | undefined;
  serverAuthCode: string | null;
  user: IInfoUser;
}

interface IInfoUser {
  email: String;
  familyName: string | null;
  givenName: string | null;
  id: string | null;
  name: string | null;
  photo: string | null;
}

