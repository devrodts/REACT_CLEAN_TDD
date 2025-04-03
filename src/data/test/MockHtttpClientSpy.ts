import { HttpPostParams } from '../protocols/http';
import { HttpPostClient } from '../protocols/http/HttpPostClient';
import { HttpResponse, HttpStatusCode } from '../protocols/HttpResponse';

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R>{
    
    url?: string;
    body?: T;
    response: HttpResponse<R>= {
        statusCode: HttpStatusCode.unathorized
    };

    async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
        this.url = params.url;
        this.body = params.body; 
        return this.response;
    }
}