import User from "@/lib/models/Entities/Users";

/* prettier-ignore */
declare global {
  namespace AuthApi {
    type AuthData = {
      email   : string
      password: string
    }
  
    type Token = {
      accessToken : string
      refreshToken: string
    }
  
    type AuthSession = {
      session : AuthApi.Token
      user    : User
    }
  
  
    type LoginResponse          = Api.Response<AuthApi.AuthSession>
    type GetSessionResponse     = AuthApi.LoginResponse
    type RefreshSessionResponse = AuthApi.LoginResponse
  }

}
