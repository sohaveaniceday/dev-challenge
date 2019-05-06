/* global describe it api expect */
require("../spec_helper")

describe("Supplier Controller Test", () => {
  describe("GET /api/suppliers", () => {
    it("should return a 200 response", done => {
      api
        .get("/api/suppliers")
        .set("Accept", "application/json")
        .expect(200, done)
    })

    it("should return an array of suppliers", done => {
      api
        .get("/api/suppliers")
        .set("Accept", "application/json")
        .end((err, res) => {
          expect(res.body).to.be.an("array")
          done()
        })
    })

    it("should return an array of supplier objects", done => {
      api
        .get("/api/suppliers")
        .set("Accept", "application/json")
        .end((err, res) => {
          expect(res.body)
            .to.be.an("array")
            .and.have.property(0)
            .and.have.all.keys([
              "_id",
              "__v",
              "name"
            ])
          done()
        })
    })
  })
})

describe("Product Controller Test", () => {
  describe("GET /api/products", () => {
    it("should return a 200 response", done => {
      api
        .get("/api/products")
        .set("Accept", "application/json")
        .expect(200, done)
    })

    it("should return an array of products", done => {
      api
        .get("/api/products")
        .set("Accept", "application/json")
        .end((err, res) => {
          expect(res.body).to.be.an("array")
          done()
        })
    })

    it("should return an array of product objects", done => {
      api
        .get("/api/products")
        .set("Accept", "application/json")
        .end((err, res) => {
          expect(res.body)
            .to.be.an("array")
            .and.have.property(0)
            .and.have.all.keys(["_id", "__v", "name", "supplier", "price"])
          expect(res.body[0].supplier)
            .to.be.an("object")
            .and.have.all.keys(["_id", "__v", "name"])
          done()
        })
    })

    it("should return an supplier object within the product", done => {
      api
        .get("/api/products")
        .set("Accept", "application/json")
        .end((err, res) => {
          expect(res.body[0].supplier)
            .to.be.an("object")
            .and.have.all.keys(["_id", "__v", "name"])
          done()
        })
    })
  })
})
