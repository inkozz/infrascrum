// const jsonServer = require('json-server');
// const { readFile, writeFile } = require('fs/promises');

// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);

// server.get('/users', async (req, res) => {
//     const dbBck = await readFile('db_bck.json');
//     await writeFile('db.json', dbBck);

//     res.status(200).json({
//         success: 'users success',
//     });
// });
// server.get('/tasks', async (req, res) => {
//     const dbBck = await readFile('db_bck.json');
//     await writeFile('db.json', dbBck);

//     res.status(200).json({
//         success: 'tasks success',
//     });
//     console.log("ok");
// });

// server.use(jsonServer.bodyParser);
// server.use(router);
// server.listen(8080, () => {
//     console.log('JSON Server is running');
// });
