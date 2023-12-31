enum KindOfErrors {
  UNKOWN = 0,
  UNEXISTING_ENTITY = 1,
  EMPTY_VALUE = 2,
  WRONG_VALUE = 3,
  DB_CONNECTION = 4,
  EXISTING_EMAIL = 5,
  EMPTY_EMAIL = 6,
  WRONG_EMAIL = 7,
  EXISTING_NAME = 8,
  EMPTY_NAME = 9,
  WRONG_NAME = 10,
  EMPTY_PASSWORD = 11,
  WRONG_PASSWRD = 12,
  WEAK_PASSWORD = 13,
  INVALID_RECAPTCHA = 14,
  INTERNTE_CONNECTION = 15,
  NOT_ALLOWED = 16,
  SQL_INJECTION = 17,
  EXISTING_ENTITY = 18,
  REJECTED = 19,
  UNKONW_NOTIFICATION = 20,
  EXPIRED = 21,
  UNCOMPLETED_TASK = 22,
  NO_ACCESS_TOKEN = 23,
  INVALID_ACCESS_TOKEN = 24,
  NOT_ALLOWED_FILETYPE = 25,
  FILE_LIMIT_EXCEEDED = 26,
  FILESIZE_EXCEDDED = 27,
  SIZE_LIMIT_EXCEDDED = 28,
  ECONNREFUSED = -4078,
}

export default KindOfErrors;
