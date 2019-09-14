describe('/numbers', () => {
  describe('GET /add/{number}/and/{number}', () => {
    it('adds 2 and 1', (done) => {
      chai.request(server)
        .get('/numbers/add/2/and/1')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 3 });
          done();
        });
    });

    it('adds 12 and 0', (done) => {
      chai.request(server)
        .get('/numbers/add/12/and/0')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 12 });
          done();
        });
    });

    it('adds 10 and -5', (done) => {
      chai.request(server)
        .get('/numbers/add/10/and/-5')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 5 });
          done();
        });
    });

    it('errors if the parameters are numbers', (done) => {
      chai.request(server)
        .get('/numbers/add/fish/and/chips')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Parameters must be valid numbers.' });
          done();
        });
    });
  });

  describe('GET /subtract/{number}/from/{number}', () => {
    xit('subtracts 2 from 1', (done) => {
      chai.request(server)
        .get('/numbers/subtract/2/from/1')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: -1 });
          done();
        });
    });

    xit('subtracts -2 from 1', (done) => {
      chai.request(server)
        .get('/numbers/subtract/-2/from/1')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 3 });
          done();
        });
    });

    xit('errors if the parameters are not numbers', (done) => {
      chai.request(server)
        .get('/numbers/subtract/fish/from/chips')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Parameters must be valid numbers.' });
          done();
        });
    });
  });

  describe('POST /multiply', () => {
    xit('multiplies two numbers', (done) => {
      chai.request(server)
        .post('/numbers/multiply')
        .send({ a: 10, b: 3 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 30 });
          done();
        });
    });

    xit('multiplies stringified numbers', (done) => {
      chai.request(server)
        .post('/numbers/multiply')
        .send({ a: '-4', b: '-9' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 36 });
          done();
        });
    });

    xit('errors if a parameter is missing', (done) => {
      chai.request(server)
        .post('/numbers/multiply')
        .send({ a: 'fish' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Parameters "a" and "b" are required.' });
          done();
        });
    });

    xit('errors if the parameters are not numbers', (done) => {
      chai.request(server)
        .post('/numbers/multiply')
        .send({ a: 'fish', b: 'chips' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Parameters "a" and "b" must be valid numbers.' });
          done();
        });
    });
  });

  describe('POST /divide', () => {
    xit('divides two numbers', (done) => {
      chai.request(server)
        .post('/numbers/divide')
        .send({ a: 162, b: 3 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 54 });
          done();
        });
    });

    xit('divides stringified numbers', (done) => {
      chai.request(server)
        .post('/numbers/divide')
        .send({ a: '-4', b: '8' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: -0.5 });
          done();
        });
    });

    xit('divides 0 by a number', (done) => {
      chai.request(server)
        .post('/numbers/divide')
        .send({ a: 0, b: 10 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 0 });
          done();
        });
    });

    xit('errors if dividing by 0', (done) => {
      chai.request(server)
        .post('/numbers/divide')
        .send({ a: 10, b: 0 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Unable to divide by 0.' });
          done();
        });
    });

    xit('errors if a parameter is missing', (done) => {
      chai.request(server)
        .post('/numbers/divide')
        .send({ a: 'fish' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Parameters "a" and "b" are required.' });
          done();
        });
    });

    xit('errors if the parameters are not numbers', (done) => {
      chai.request(server)
        .post('/numbers/divide')
        .send({ a: 'fish', b: 'chips' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Parameters "a" and "b" must be valid numbers.' });
          done();
        });
    });
  });

  describe('GET /remainder?a={number}&b={number}', () => {
    xit('gives the remainder of dividing 18 by 5', (done) => {
      chai.request(server)
        .post('/numbers/remainder')
        .query({ a: 18, b: 5 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 3 });
          done();
        });
    });

    xit('gives the remainder of dividing -4 by 8', (done) => {
      chai.request(server)
        .post('/numbers/remainder')
        .send({ a: '-4', b: '8' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: -4 });
          done();
        });
    });

    xit('gives the remainder of dividing 0 by a number', (done) => {
      chai.request(server)
        .post('/numbers/remainer')
        .send({ a: 0, b: 10 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 0 });
          done();
        });
    });

    xit('errors if dividing by 0', (done) => {
      chai.request(server)
        .post('/numbers/remainder')
        .send({ a: 10, b: 0 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Unable to divide by 0.' });
          done();
        });
    });

    xit('errors if a parameter is missing', (done) => {
      chai.request(server)
        .post('/numbers/remainder')
        .send({ a: 'fish' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Parameters "a" and "b" are required.' });
          done();
        });
    });

    xit('errors if the parameters are not numbers', (done) => {
      chai.request(server)
        .post('/numbers/remainder')
        .send({ a: 'fish', b: 'chips' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Parameters must be valid numbers.' });
          done();
        });
    });
  });
});
