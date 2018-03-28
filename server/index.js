const Koa =  require('koa');
const app =  new Koa();
const { htmlTpl, ejsTpl, pugTpl } = require('./template/index');
const ejs = require('ejs');
const pug = require('pug');

app.use(async(ctx, next) => {
  ctx.type="text/html, charset=utf-8"
  //ctx.body = htmlTpl;
  //ctx.body = ejs.render(ejsTpl, {user:{firstname: 'michael', lastname: 'yao'}});
  ctx.body = pug.render(pugTpl, {user:{firstname: 'michael', lastname: 'yao'}});
})

app.listen(4455);
