const Koa =  require('koa');
const app =  new Koa();


app.use(async(ctx, next) => {
  ctx.body = "HI Michael";
})

app.listen(4455);
