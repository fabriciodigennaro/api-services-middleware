const { expect } = require("chai");
const { describe } = require("mocha");
const request = require("supertest");
const {
  apiResponseOk,
  apiNotFoundResponse,
} = require("../mocks/integration/api-bitly-response.mock.js");
const {
  responseOk,
  responseError,
  responseErrorNotFound,
} = require("../mocks/integration/bitly-controller-response.mock.js");

const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

const Server = require("../../src/server");

describe("Bitly controller integration tests", () => {
  let app = null;

  beforeEach(() => {
    let appServer = new Server();
    app = appServer.start();
  });

  afterEach(() => {
    if (app) {
      app.close();
    }
    app = null;
  });

  it("POST /bitly response Validation OK", (done) => {
    let mockAxios = new MockAdapter(axios);
    mockAxios.onPost(process.env.BITLY_CREATE_SHORT_URL).reply(200, apiResponseOk);

    request(app)
      .post("/bitly")
    //   .set("Origin", "http://localhost:4200")
      .send({
        long_url: "http://www.google.com",
      })
      .expect(200)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);

        expect(res).be.not.null;
        expect(res).be.not.undefined;
        expect(res.body).to.deep.equal(responseOk);

        done();
      });
  });

  it("POST /bitly response Error", (done) => {
    let mockAxios = new MockAdapter(axios);
    mockAxios
        .onPost(process.env.BITLY_CREATE_SHORT_URL)
        .reply(500);

    request(app)
      .post("/bitly")
    //   .set("Origin", "http://localhost:4200")
      .send({
        long_url: "http://www.google.com",
      })
      .expect(500)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);

        expect(res).be.not.null;
        expect(res).be.not.undefined;
        expect(res.body).to.deep.equal(responseError);

        done();
      });
  });

  it("POST /bitly response validation Error empty string", (done) => {
    

    request(app)
      .post("/bitly")
    //   .set("Origin", "http://localhost:4200")
      .send({
        long_url: "",
      })
      .expect(400)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);

        expect(res).be.not.null;
        expect(res).be.not.undefined;
        expect(res.body.message).to.equal("Please insert a valid URL");

        done();
      });
  });

  it("POST /bitly response Validation error", (done) => {
    let mockAxios = new MockAdapter(axios);
    mockAxios
        .onPost(process.env.BITLY_CREATE_SHORT_URL)
        .reply(400, apiNotFoundResponse);

    request(app)
      .post("/bitly")
    //   .set("Origin", "http://localhost:4200")
      .send({
        long_url: "http://www.google.com",
      })
      .expect(400)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);

        expect(res).be.not.null;
        expect(res).be.not.undefined;
        expect(res.body).to.deep.equal(responseErrorNotFound);

        done();
      });
  });
});
