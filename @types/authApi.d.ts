namespace AuthApi {
  type AuthData = {
    email: string;
    password: string;
  };

  type Token = {
    accessToken: string;
    refreshToken: string;
  };
  type LoginResponse = Api.Response<AuthApi.Token>;
}
