describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })

const app = require('../index');
const request = require('supertest')
describe('Post Endpoints', () => {
  // it('should create a new post', async () => {
  //   const res = await request(app)
  //     .post('/persons/register')
  //     .send({
  //       "document": "100",
  //       "name": "test",
  //       "last_name": "test",
  //       "date_of_birth":"1998-09-20",
  //       "email":"Juan@gmail.com",
  //       "cell_phone":"12345",
  //       "type_document":"CC",
  //       "gender":"M",
  //       "type_user": "Cl"
  //   })
  //   expect(res.statusCode).toEqual(200)
  //   //expect(res.body).toHaveProperty('post')
  // })

  it("get plans", async()=>{
    const res = await request(app)
    .get("api/plans/")
    console.log(res);
  })
})