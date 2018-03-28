const Koa =  require('koa');
const app =  new Koa();
const { common } = require('./template/index');

app.use(async(ctx, next) => {
  ctx.type="text/html, charset=utf-8"
  ctx.body = common;
})

app.listen(4455);
