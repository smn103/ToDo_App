const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app.js');
chai.use(chaiHttp);

    describe('Route Index', () => {
        it('should render the index view with title', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.have.header('content-type', 'text/html; charset=utf-8'); 
                    done();
                });
        });
    });