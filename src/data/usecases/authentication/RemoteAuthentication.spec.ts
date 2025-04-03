import { RemoteAuthentication } from "./RemoteAuthentication";
import { HttpPostClientSpy } from "../../test/MockHtttpClientSpy";
import { faker } from '@faker-js/faker';
import { mockAccountModel, mockAuthentication } from "../../../domain/test/MockAuthentication";
import { InvalidCredentialError } from "../../../domain/errors/InvalidCredentialsHelper";
import { HttpStatusCode } from "../../protocols/HttpResponse";
import { UnexpectedError } from "../../../domain/errors/UnexpectedError/UnexpectedError";
import { AuthenticationParams } from "../../../domain/usecases/Authentication";
import { AccountModel } from "../../../domain/models/AccountModel";
import { NotFoundError } from "../../../domain/errors/NotFoundError";


type SutTypes = {
    sut: RemoteAuthentication
    httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>
}

const makeSut = (url : string = faker.internet.url()): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy<
      AuthenticationParams,
      AccountModel
    >();
    
    httpPostClientSpy.response = {
        statusCode: HttpStatusCode.ok
    };
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    return {
        sut,
        httpPostClientSpy
    }
}

describe("RemoteAuthentication", () => { 

    it("Should call HttpPostClient with correct URL", async () => {
        const url = "any_url";
        const {sut, httpPostClientSpy} = makeSut(url);
        await sut.auth(mockAuthentication());
        expect(httpPostClientSpy.url).toBe(url);
    });

    it("Should call HttpPostClient with correct body", async () => {
        const {sut, httpPostClientSpy} = makeSut();
        const authenticationParams = mockAuthentication();
        await sut.auth(authenticationParams);

        expect(httpPostClientSpy.body).toEqual(authenticationParams);
    });

    it("Should throw InvalidCredentialError if HttpPostClient return 401", async() => {
        const {sut, httpPostClientSpy} = makeSut();
        httpPostClientSpy.response = { 
            statusCode: HttpStatusCode.unathorized 
        };
        const promise = sut.auth(mockAuthentication());
        await expect(promise).rejects.toThrow(new InvalidCredentialError());
    });


    it("Should throw Unexpected Error if HttpPostClient return 400", async () => {
        const {sut, httpPostClientSpy} = makeSut();
        httpPostClientSpy.response = { 
            statusCode: HttpStatusCode.bad_request 
        };
        const promise = sut.auth(mockAuthentication());
        await expect(promise).rejects.toThrow(new UnexpectedError("Unexpected error"));
    });

    it("Should throw NotFoundError if HttpPostClient returns 404", async () => {
        const {sut, httpPostClientSpy} = makeSut();
        httpPostClientSpy.response = { 
            statusCode: HttpStatusCode.not_found 
        };
        const promise = sut.auth(mockAuthentication());
        await expect(promise).rejects.toThrow(new NotFoundError("Data not found"));
    });

    it("Should return an Account Model if Http Post Client return 200", async () => {
        const {sut, httpPostClientSpy} = makeSut();
        const httpResult = mockAccountModel();
        httpPostClientSpy.response = { 
            statusCode: HttpStatusCode.ok,
            body: httpResult
        };
        const account = await sut.auth(mockAuthentication());
        expect(account).toEqual(httpPostClientSpy.response.body);
    });
});