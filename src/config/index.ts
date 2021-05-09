const dotenv = require('dotenv');
dotenv.config();
// config() will read your .env file, parse the contents, assign it to process.env.
const config =  {
  	port: process.env.PORT,

	db: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD
	},
	listPerPage: 10
}

export default config;