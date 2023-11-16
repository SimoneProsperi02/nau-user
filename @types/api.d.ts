namespace Api {
  interface Links {
    [link: string]: string;
  }

  interface Pagination {
    total: number;
    page_size: number;
    page: number;
    links: Api.Links;
  }

  interface SuccessResponse<T extends unknown = any> {
    [x: string]: any;
    data: T;
    meta: {
      error: false;
      message: string;
      pagination: Api.Pagination;
      code: "OK";
    };
  }

  interface ErrorResponse extends SuccessResponse {
    data: string;
    meta: {
      error: true;
      message: string;
      pagination: null;
      code: "OK";
    };
  }

  type Response<T extends unknow = unknown> =
    | Api.SuccessResponse<T>
    | Api.ErrorResponse;
}
