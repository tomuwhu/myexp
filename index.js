import app from 'express'
import ccx from 'cors'
import { engine } from 'express-handlebars'
var x = 1
var y = Math.random()
app()
  .engine('.hbs', engine({extname: '.hbs'}))
  .set('view engine', '.hbs')
  .set('views', './views')
  .use(app.json())
  .use(ccx())
  .post('/post', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({x: ++x, y: Math.random()}))
  })
  .get('/', (req, res) => {
    res.render('main', {a: 1, x: ++x, y: Math.random(), layout: false})
  })
  .listen(3000)