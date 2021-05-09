import express from 'express'
// import HelloWorld from './services/helloWorld'
import routesV1 from './routes/v1'
// import cors from 'cors';
import config from "./config"
const app = express()

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
// app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));

// TODO handle error
async function startServer() {
	app.listen(config.port, () =>
		console.log(`Your server is ready on localhost:${config.port}`)
	);
}
startServer();
app.use('/v1', routesV1);