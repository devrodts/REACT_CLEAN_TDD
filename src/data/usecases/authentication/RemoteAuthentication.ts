import { InvalidCredentialError } from '../../../domain/errors/InvalidCredentialsHelper';
import { AuthenticationParams } from '../../../domain/usecases/Authentication';
import { HttpPostClient } from '../../protocols/http/HttpPostClient';
import { HttpStatusCode } from '../../protocols/HttpResponse';
import { UnexpectedError } from '../../../domain/errors/UnexpectedError/UnexpectedError';
import { ForbiddenError } from '../../../domain/errors/ForbiddenError';
import { NotFoundError } from '../../../domain/errors/NotFoundError';

export class RemoteAuthentication{
    constructor(
        private readonly url: string, 
        private readonly httpPostClient: HttpPostClient
    ){
    }
    async auth(params: AuthenticationParams ): 

    Promise<void>
    {
       const httpResponse = await this.httpPostClient.post({
            url: this.url,
            body: params,
        });

        switch (httpResponse.statusCode) {
          case HttpStatusCode.ok:
            return;
          case HttpStatusCode.bad_request:
            throw new InvalidCredentialError();
          case HttpStatusCode.unathorized:
            throw new InvalidCredentialError();
          case HttpStatusCode.forbidden:
            throw new ForbiddenError("Access Denied.");
          case HttpStatusCode.not_found:
            throw new NotFoundError("data not found.");
          default:
            throw new UnexpectedError("Unexpected error");
        }
    }
}

