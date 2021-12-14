const chai = require("chai");
let chaiHttp = require("chai-http");
const asert = chai.assert;
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

let users = require("../app");

describe("get User", function () {
  it("get user ", () => {
    chai
      .request(users)
      .get("/users/1")
      .end((err, res) => {
        expect(res.should.have.status(200));
      });
  });
});
