import { createMocks } from "node-mocks-http";
import handler from "../src/pages/api/locations";

describe("API Endpoint: /api/locations", () => {
  it("returns an error for queries shorter than 2 characters", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        q: "h",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      error: "Query must be at least 2 characters long",
    });
  });

  it("returns results for a valid query", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        q: "hastin",
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0]).toHaveProperty("name");
    expect(data[0]).toHaveProperty("latitude");
    expect(data[0]).toHaveProperty("longitude");
  });
});
