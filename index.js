import expr from 'express'
import cors from 'cors'
import habs from 'express-handlebars'
var x = 1
var y = Math.random()
const rn = fix => Math.random().toFixed(fix)
const hbs = habs.create({
  defaultLayout: 'main.hbs',
  helpers: {
    mod2: a => `${a} mod 2 = ${a % 2}` 
  }  
})
const app = expr()
  .engine('.hbs', hbs.engine)
  .set('view engine', '.hbs')
  .set('views', './views')
  .use(expr.static('static'))
  .use(expr.json())
  .use(cors())
  .post('/post', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({x: ++x, y: rn(2)}))
  })
  .get('/', (req, res) => {
    res.render('root', {a: 10, x: x++, y: rn(2)})
  })
  .listen(3000)