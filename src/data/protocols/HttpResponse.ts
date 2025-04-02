export enum HttpStatusCode{
    unathorized = 401,
    internal_server_error = 500,
    no_content = 204
}
export type HttpResponse = {
    statusCode: number;
    body?: unknown;

}