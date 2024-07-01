import * as chai from 'chai';
const expect = chai.expect;
import chaiHttp from 'chai-http';
import app from '../index.js'
import faker from 'faker'

const c=chai.use(chaiHttp)

describe('GET /api/info',()=>{
    it('should GET all info',(done)=>{
        c.request(app)
        .get('/api/info')
        .end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).be.a('array')
            expect(res.body).not.have.lengthOf(0)
            done()
        })
    })
})

describe('POST /api/info', ()=>{
    it('should POST all info',(done)=>{ 
        let test = {
            title:faker.Lorem.words(1)[0],
            description:faker.Lorem.paragraph()[0],
            img:faker.Image.animals(),
            leftColor:faker.Internet.color(),
            rightColor:faker.Internet.color()
        }
        c.request(app)  
            .post('/api/info')
            .send(test)
            .end((err,res)=>{
                expect(err).to.be
                expect(err).to.be.null 
                expect(res).to.have.status(200)
                expect(res.body).to.be.a('object')
                expect(res.body).to.have.property('test')
            })
            done()
    })
})

describe('GET /api/info/:id',()=>{
    it('should GET all info por id',(done)=>{
        c.request(app)
        .get('/api/info/1')
        .end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body[0]).to.have.property('id')
            expect(res.body[0].id).to.equal(1)
        })
        done()
    })
})