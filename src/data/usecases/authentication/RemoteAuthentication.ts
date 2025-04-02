import { InvalidCredentialError } from '../../../domain/errors/InvalidCredentialsHelper';
import { AuthenticationParams } from '../../../domain/usecases/Authentication';
import { HttpPostClient } from '../../protocols/http/HttpPostClient';
import { HttpStatusCode } from '../../protocols/HttpResponse';

export class RemoteAuthentication{
    constructor(
        private readonly url: string, 
        private readonly httpPostClient: HttpPostClient
    ){
    }
    async auth(params: AuthenticationParams ): Promise<void>{
       const httpResponse = await this.httpPostClient.post({
            url: this.url,
            body: params,
        });

        switch(httpResponse.statusCode){
            case HttpStatusCode.unathorized: throw new InvalidCredentialError()
            default: return Promise.resolve();
        }
    }
}

