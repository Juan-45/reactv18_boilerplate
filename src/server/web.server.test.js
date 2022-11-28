import WebServer from "./web.server";

describe("Started", () => {
  let webServer = null;
  beforeAll(() => {
    webServer = new WebServer();
  });

  it("should start and trigger a callback", async () => {
    let promise = webServer.start();
    await expect(promise).resolves.toBeUndefined();
  });

  it("should stop and trigger a callback", async () => {
    let promise = webServer.stop();
    await expect(promise).resolves.toBeUndefined();
  });
});
