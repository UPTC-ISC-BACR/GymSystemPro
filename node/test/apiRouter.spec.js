const app = require("../routes/apiRouter")
const request = require("supertest")


describe("POST /api/persons"), ()=>{
    test("should respond with a 200 status code", async () => {
        const response = await request(app).post("/api/persons").send();
        expect(response.statusCode).toBe(200);
      });
}