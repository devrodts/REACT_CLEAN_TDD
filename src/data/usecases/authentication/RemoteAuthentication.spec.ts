import { RemoteAuthentication } from "./RemoteAuthentication";
import { HttpPostClientSpy } from "../../test/MockHtttpClient";

type SutTypes = {
    sut: RemoteAuthentication
    httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url : string = ''): SutTypes => {
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
        await sut.auth()
        expect(httpPostClientSpy.url).toBe(url);
    });
});