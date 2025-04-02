export enum HttpStatusCode{
    unathorized = 401,
    internal_server_error = 500,
    no_content = 204,
    created = 201,
    not_found = 404,
    forbidden = 403,
    method_not_allowed = 405,
    not_acceptable = 406,
    ok = 200,
    bad_request = 400,
}
export type HttpResponse = {
    statusCode: number;
    body?: unknown;

}