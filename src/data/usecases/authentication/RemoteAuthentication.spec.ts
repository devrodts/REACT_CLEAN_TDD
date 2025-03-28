import { RemoteAuthentication } from "./RemoteAuthentication";
import { HttpPostClientSpy } from "../../test/MockHtttpClientSpy";
import { faker } from '@faker-js/faker';
import { mockAuthentication } from "../../../domain/test/MockAuthentication";


type SutTypes = {
    sut: RemoteAuthentication
    httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url : string = faker.internet.url()): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy();
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
    
});