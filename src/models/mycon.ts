import config from "./../config"
import mysql, { ConnectionOptions } from 'mysql2';

async function getMySqlResults(sql: string, params: Array<any> = []){
	let queryResult: any = null
	try {
		const access: ConnectionOptions = config.db;
		const connection = mysql.createConnection(access);
		try {
			queryResult = new Promise((resolve, reject) => {
				connection.query(sql, params, (err: any, result, fields) => {
					if (err) {
						reject(new Error('errMsg: ' + err.sqlMessage + 'SQL: ' + err.sql));
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
			console.log(reject.message)
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