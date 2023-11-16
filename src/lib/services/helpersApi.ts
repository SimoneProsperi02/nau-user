/* prettier-ignore */
export const isApiError = ( data: Api.Response ): data is Api.ErrorResponse => !! data.meta.error
