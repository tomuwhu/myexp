import app from 'express'
import ccx from 'cors'
import { engine } from 'express-handlebars'
var x = 1
var y = Math.random()
const rn = fix => Math.random().toFixed(fix)
app()
  .engine('.hbs', engine())
  .set('view engine', '.hbs')
  .set('views', './views')
  .use(app.static('static'))
  .use(app.json())
  .use(ccx())
  .post('/post', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({x: ++x, y: rn(2)}))
  })
  .get('/', (req, res) => {
    res.render('main', {a: 1, x: x++, y: rn(2), layout: false})
  })
  .listen(3000)