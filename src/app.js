const express = require('express')
const systemVar = require('./config')
const app = express()

async function startServer() {
	app.listen(process.env.PORT, err => {
		if (err) {
			console.log(err);
			return;
		}
		console.log(`Your server is ready on localhost:${process.env.PORT}`);
	});
}
startServer();

app.get('/', function (req, res) {
	res.send('Hello World')
})

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