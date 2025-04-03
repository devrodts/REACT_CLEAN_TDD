// import { InvalidCredentialError } from "../../../domain/errors/InvalidCredentialsHelper";
import { AuthenticationParams } from "../../../domain/usecases/Authentication";
import { HttpPostClient } from "../../protocols/http/HttpPostClient";
import { HttpStatusCode } from "../../protocols/HttpResponse";
import { UnexpectedError } from "../../../domain/errors/UnexpectedError/UnexpectedError";
// import { ForbiddenError } from "../../../domain/errors/ForbiddenError";
import { NotFoundError } from "../../../domain/errors/NotFoundError";
import { AccountModel } from "../../../domain/models/AccountModel";
import { Authentication } from "../../../domain/usecases/Authentication";
import { InvalidCredentialError } from "../../../domain/errors/InvalidCredentialsHelper";

export class RemoteAuthentication implements Authentication{
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}
  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.bad_request:
        throw new UnexpectedError("Unexpected error");
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialError();
      case HttpStatusCode.not_found:
        throw new NotFoundError("Data not found");
      default:
        throw new UnexpectedError("Unexpected error");
    }
  }
}
