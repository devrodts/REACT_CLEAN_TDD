import { RemoteAuthentication } from "./RemoteAuthentication";
import { HttpPostClientSpy } from "../../test/MockHtttpClient";

describe("RemoteAuthentication", () => { 

    it("Should call HttpPostClient with correct URL", async () => {
        const url = "any_url";
        const httpPostClientSpy = new HttpPostClientSpy();

        const sut = new RemoteAuthentication(url, httpPostClientSpy);
        sut.auth()

        expect(httpPostClientSpy.url).toBe(url);

    });
});