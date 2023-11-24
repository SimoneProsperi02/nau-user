namespace AuthApi {
  type AuthData = {
    email: string;
    password: string;
  };

  type Token = {
    accessToken: string;
    refreshToken: string;
  };

  type AuthSession = {
    session: AuthApi.Token;
    user: any;
  };
  type LoginResponse = Api.Response<AuthApi.AuthSession>;
}
