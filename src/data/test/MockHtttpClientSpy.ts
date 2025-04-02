import { HttpPostParams } from '../protocols/http';
import { HttpPostClient } from '../protocols/http/HttpPostClient';
import { HttpResponse, HttpStatusCode } from '../protocols/HttpResponse';

export class HttpPostClientSpy implements HttpPostClient {
    url?: string;
    body?: object;
    response: HttpResponse = {
        statusCode: HttpStatusCode.unathorized
    };

    async post(params: HttpPostParams): Promise<HttpResponse> {
        this.url = params.url;
        this.body = params.body; 
        return this.response;
    }
}