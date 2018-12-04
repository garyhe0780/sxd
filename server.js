const express = require('express');
const next = require('next');

const dev = false;
const app = next({ dev});
const handle = app.getRequestHandler();
const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && !dev ? 1000 * 60 * 60 * 24 * 30 : 0
});

app.prepare()
.then(() => {
  const server = express()

  // serve static file
  app.use('/static', serve('./static', true));

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id } 
    app.render(req, res, actualPage, queryParams);
  })

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  });
})
.catch(ex => {
  console.error(ex.stack)
  process.exit(1)
});
