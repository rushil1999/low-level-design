export class ResourceNotFoundError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ResourceNotFoundError"
  }
}

export class BadReqeustError extends Error {
  inputParameter: string;
  constructor(message: string, inputParameter: string) {
    super(message)
    this.name = "ResourceNotFoundError"
    this.inputParameter = inputParameter
  }
}