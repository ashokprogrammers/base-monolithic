//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./../server');
const Book = require('./../app/models/books')
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('books', () => {
    beforeEach((done) => { //Before each test we empty the database
        Book.remove({}, (err) => { 
           done();           
        });        
    });
/*
  * Test the /GET route
  */
  describe('/GET books', () => {
      it('it should GET all the books', (done) => {
        chai.request(server)
            .get('/books')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
              done();
            });
      });
  });

  /*
  * Test the /POST route
  */
  describe('/POST books', () => {
    it('it should be POST a book with all params', (done) => {
        let book = {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            year: 1954,
            pages:20
        }
      chai.request(server)
          .post('/books')
          .send(book)
          .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
              done();
          });
    });

});

});