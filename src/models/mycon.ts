import mysql from 'mysql';
import config from "./../config"

async function getMySqlResults(sql: string, params: Array<any> = []){
	let queryResult: any = null
	try {
		const connection = mysql.createConnection(config.db);
		try {
			queryResult = new Promise((resolve, reject) => {
				connection.query(sql, params, (err, result, fields) => {
					if (err) {
						reject(new Error(err.code));
					}
					else if(result === undefined){
						reject(new Error("Error result is undefined"));
					}
					else {
						resolve(result);
					}
				})
			})
		}
		finally {
			connection.end()
		}

		return queryResult
		.then((resolve: any) => {
			return resolve
		})
		.catch((reject: any, cb: any) => {
			console.log(reject)
			return []
		})

	}
	catch (err) {
		console.log("CONNECTION_ERROR: Failed to connect DB")
		return false
	}
}

export default {
	getMySqlResults
}