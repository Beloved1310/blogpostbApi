/* eslint no-undef: "off" */

const request = require('supertest')
const app = require('../../App')
const Blog = require('../../Model/Blog')

describe('blog/', () => {
  describe('GET/', () => {
    it('should return all blogpost', async () => {
      await Blog.collection.insertMany([
        {
          image:
            'https://res.cloudinary.com/dylpruvgb/image/upload/v1631960400/cvv64t5pengklr2hxdcl.png',
          title: 'Command',
          author: 'Commando',
          body: 'Coooomaaandooo',
        },
        {
          image: 'cloudinary.com1',
          cloudinary_id: 'cloudiaryid2',
          title: 'A story2',
          author: 'Bill2',
          body: 'tale2',
        },
      ])
      const res = await request(app).get('/blog')
      expect(res.status).toBe(200)
    })
  })
  describe('GET /:Id', () => {
    it('should return 404 if invalid id is passed', async () => {
      const res = await request(app).get('/blog/1')
      expect(res.status).toBe(404)
    })
  })
  describe('POST/', () => {
    it('should return 401 if client is not logged in', async () => {
      const res = await request(app).post('/blog').send({
        image:
          'https://res.cloudinary.com/dylpruvgb/image/upload/v1631960400/cvv64t5pengklr2hxdcl.png',
        title: 'Command',
        author: 'Commando',
        body: 'Coooomaaandooo',
      })
      expect(res.status).toBe(401)
    })
  })
})
