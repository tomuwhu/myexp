import app from 'express'
import ccx from 'cors'
app()
  .use(app.json())
  .use(ccx())
  .post('/', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({x: 1, y: 2}))
  })
  .get('/', (req, res) => {
    res.send('Hello World!')
  })
  .listen(3000)