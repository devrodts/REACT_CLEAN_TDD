import { HttpResponse } from "../HttpResponse";
import { HttpPostParams } from "./HttpPostParams";
export interface HttpPostClient<T, R>{
    post(params:HttpPostParams<T>): Promise<HttpResponse<R>>;
}

