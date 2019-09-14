describe('/strings', () => {
  describe('GET /hello/{string}', () => {
    it('returns "Hello world!" when passed "world"', (done) => {
      chai.request(server)
        .get('/strings/hello/world')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 'Hello world!' });
          done();
        });
    });  
  });

  describe('GET /hello{string}', () => {
    it('returns "Hello turtle!" when passed "turtle"', (done) => {
      chai.request(server)
        .get('/strings/hello/turtle')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 'Hello turtle!' });
          done();
        });
    });
  });

  describe('GET /upper/{string}', () => {
    it('returns the uppercased string', (done) => {
      chai.request(server)
        .get('/strings/upper/hello')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 'HELLO' });
          done();
        });
    });
  });

  describe('GET /lower/{string}', () => {
    it('returns the lowercased string', (done) => {
      chai.request(server)
        .get('/strings/lower/HELLO')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 'hello' });
          done();
        });
    });
  });

  describe('GET /first-characters/{string}', () => {
    xit('returns the first character of the string when there is no query string', (done) => {
      chai.request(server)
        .get('/strings/first-characters/hello')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 'h' });
          done();
        });
    });

    it('returns the first n character of the string when passed a query parameter', (done) => {
      chai.request(server)
        .get('/strings/first-characters/sd32fg45')
        .query({ length: 4 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 'sd32' });
          done();
        });
    });
  });
});
