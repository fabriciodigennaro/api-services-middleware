const { expect } = require("chai");
const { describe } = require('mocha');
const request = require('supertest');
const { apiResponseOk, apiResponseIncomplete, apiNotFoundResponse } = require("../mocks/integration/api-pixabay-response.mock");
const { responseOk, responseError, responseErrorNotFound } = require("../mocks/integration/pixabay-controller-response.mock");

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const Server = require("../../src/server");

describe('Pixabay controller integration tests', () => {
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

    it('GET /pixabay response OK', (done) => {
        // this.timeout(20 * 1000);

        let mockAxios = new MockAdapter(axios);
        mockAxios
            .onGet(process.env.PIXABAY_BASE_URL + '/api/?key=' + process.env.PIXABAY_API_KEY + '&q=maradona&per_page=3&page=1')
            .reply(200, apiResponseOk);

        request(app)
            .get("/pixabay")
            .query(
                {
                    q: "maradona",
                    images_per_page: 3 ,
                    page: 1
                }
            )
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);

                expect(res).be.not.null;
                expect(res).be.not.undefined;
                expect(res.body).to.deep.equal(responseOk)

                return done();

            });
    });

    it('GET /pixabay response Error', (done) => {

        let mockAxios = new MockAdapter(axios);
        mockAxios
            .onGet(process.env.PIXABAY_BASE_URL + '/api/?key=' + process.env.PIXABAY_API_KEY + '&q=maradona&per_page=3&page=1')
            .reply(500);

        request(app)
            .get("/pixabay")
            .set('Origin', "http://localhost:4200")
            .query(
                {
                    q: "maradona",
                    images_per_page: 3 ,
                    page: 1
                }
            )
            .expect(500)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);

                expect(res).be.not.null;
                expect(res).be.not.undefined;
                expect(res.body).to.deep.equal(responseError)

                done();
            });
    });

    it("GET /pixabay response validation Error empty string", (done) => {
    

        request(app)
          .get("/pixabay")
          .query(
            {
                q: "",
                images_per_page: 3 ,
                page: 1
            }
        )
          .expect(400)
          .expect("Content-Type", /json/)
          .end((err, res) => {
            if (err) return done(err);
    
            expect(res).be.not.null;
            expect(res).be.not.undefined;
            expect(res.body.message).to.equal("search param is required");
    
            done();
          });
      });

      it('GET /pixabay response Validation error', (done) => {

        let mockAxios = new MockAdapter(axios);
        mockAxios
            .onGet(process.env.PIXABAY_BASE_URL + '/api/?key=' + process.env.PIXABAY_API_KEY + '&q=&per_page=3&page=1')
            .reply(400, apiNotFoundResponse);

        request(app)
            .get("/pixabay")
            .query(
                {
                    q: "",
                    images_per_page: 3 ,
                    page: 1
                }
            )
            .expect(400)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);

                expect(res).be.not.null;
                expect(res).be.not.undefined;
                expect(res.body.message).to.equal("search param is required")

                done();
            });
    });

});   


