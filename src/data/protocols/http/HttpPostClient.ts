import { HttpPostParams } from "./HttpPostParams";
export interface HttpPostClient{
    post(params:HttpPostParams): Promise<void>;
}

