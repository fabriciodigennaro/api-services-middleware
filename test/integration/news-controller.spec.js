const { expect } = require("chai");
const { describe } = require('mocha');
const request = require('supertest');
const { apiResponseOk, apiValidationError} = require("../mocks/integration/api-news-response.mock");
const { responseOk, responseError } = require("../mocks/integration/news-controller-response.mock");

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const Server = require("../../src/server");

describe('News controller integration tests', () => {
    let app = null;

    beforeEach(() => {
        let appServer = new Server();
        app = appServer.start();
    });

    afterEach(() => {
        if(app){
            app.close();
        }
        app = null;
    });

    it("GET /news response OK", (done) => {
    
        let mockAxios = new MockAdapter(axios);
        mockAxios
            .onGet(process.env.NEWS_BASE_URL + "/v2/top-headlines?country=hu&category=&apiKey=" + process.env.NEWS_API_KEY)
            .reply(200, apiResponseOk);

        request(app)
          .get("/news")
          .query(
            {
                country: "hu",
                category: ""
            }
        )
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

      it("GET /news response Error", (done) => {
    
        let mockAxios = new MockAdapter(axios);
        mockAxios
            .onGet(process.env.NEWS_BASE_URL + "/v2/top-headlines?country=hu&category=&apiKey=" + process.env.NEWS_API_KEY)
            .reply(500);

        request(app)
          .get("/news")
          .query(
            {
                country: "hu",
                category: ""
            }
        )
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

    it("GET /news response validation Error empty string", (done) => {
    

        request(app)
          .get("/news")
          .query(
            {
                country: "",
                category: ""
            }
        )
          .expect(400)
          .expect("Content-Type", /json/)
          .end((err, res) => {
            if (err) return done(err);
    
            expect(res).be.not.null;
            expect(res).be.not.undefined;
            expect(res.body.message).to.equal("country or category param is required");
    
            done();
          });
      });

      it('GET /news response Validation error', (done) => {

        let mockAxios = new MockAdapter(axios);
        mockAxios
            .onGet(process.env.NEWS_BASE_URL + "/v2/top-headlines?country=xxx&category=xxx&apiKey=" + process.env.NEWS_API_KEY)
            .reply(400, apiValidationError);

        request(app)
            .get("/news")
            .set('Origin', "http://localhost:4200")
            .query(
                {
                    country: "xxx",
                    category: "xxx"
                }
            )
            .expect(400)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                expect(res).be.not.null;
                expect(res).be.not.undefined;
                expect(res.body.message).to.equal("Required parameters are missing. Please set any of the following parameters and try again: sources, q, language, country, category.")

                done();
            });
    });


});