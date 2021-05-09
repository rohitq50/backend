import express from 'express'
import HelloWorld from './services/helloWorld';
// import cors from 'cors';
const systemVar = require('./config')
const app = express()

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
// app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));

// TODO handle error
async function startServer() {
	app.listen(process.env.PORT, () =>
		console.log(`Your server is ready on localhost:${systemVar.default.port}`)
	);
}
startServer();

app.use('/', async (req, res) => {
	let hello = new HelloWorld();
	res.send(await hello.helloWorld());
});
// const loaders = require('./loaders');
// const express = require('express');

// async function startServer() {

//   const app = express();

//   await loaders.init({ expressApp: app });

//   app.listen(process.env.PORT, err => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(`Your server is ready !`);
//   });
// }

// startServer();


//SECOND EXAMPLE

// Routes
// app.use('/v1', routesV1);

// // catch 404 and forward to error handler
// app.use((req, res, next) => next(new NotFoundError()));

// // Middleware Error Handler
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   if (err instanceof ApiError) {
//     ApiError.handle(err, res);
//   } else {
//     if (environment === 'development') {
//       Logger.error(err);
//       return res.status(500).send(err.message);
//     }
//     ApiError.handle(new InternalError(), res);
//   }
// });
// export default app;