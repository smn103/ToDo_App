const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app.js');
chai.use(chaiHttp);

    describe('ToDo Application', () => {
        it('should render the index view with to do items and completed items', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.have.header('content-type', 'text/html; charset=utf-8'); 
                    done();
                });
        });
		it('should add the item in the todo list', (done) => {
            chai.request(app)
                .post('/addtask')
				.set('content-type', 'application/x-www-form-urlencoded')
				.send({newtask: 'test task123'})
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.have.header('content-type', 'text/html; charset=utf-8'); 
					expect(res.text).to.contain('test task123');
                    done();
                });
        });
		it('should remove the item in the todo list', (done) => {
            chai.request(app)
                .post('/removetask')
				.set('content-type', 'application/x-www-form-urlencoded')
				.send({newtask: '&check=practise+with+nodejs'})
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.have.header('content-type', 'text/html; charset=utf-8'); 
					expect(res.text).to.contain('<h3><span>&#10003;</span>&nbsp;&nbsp;&nbsp;NodeJS </h3>');
                    done();
                });
        });
    });