import express from 'express'
import userV1 from './routes/v1/user'
import authV1 from './routes/v1/auth'
// import cors from 'cors';
import config from "./config"
const app = express()

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
// app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));

// TODO handle error
async function startServer() {
	app.listen(config.port, () =>
		console.log(config.consoleColors.cyan, `Server is running on localhost:${config.port}`)
	);
}
startServer();
app.use('/api/v1/user', userV1);
app.use('/api/v1/auth', authV1);