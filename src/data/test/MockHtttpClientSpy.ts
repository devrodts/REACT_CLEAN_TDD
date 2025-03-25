import { HttpPostParams } from '../protocols/http';
import { HttpPostClient } from '../protocols/http/HttpPostClient';

export class HttpPostClientSpy implements HttpPostClient {
    url?: string;
    body?: object;
    headers?: object;

    async post(params: HttpPostParams): Promise<void> {
        this.url = params.url;
        this.body = params.body;    
        this.headers = params.headers;
        return Promise.resolve();
    }
}