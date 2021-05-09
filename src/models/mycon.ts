import mysql from 'mysql';
import config from "./../config"

async function query(sql: string) {
	const connection = mysql.createConnection(config.db);
	connection.connect(function(err) {
		if (err) throw err;
		connection.query("SHOW databases", (err, result, fields) => {
			if (err) throw err;
			console.log(result);
			return result;
		});
		// TODO return result
	});
}


// async function query(sql: string, params: Array<any>) {
// 	const connection = await mysql.createConnection(config.db);
//   	const results = await connection.execute(sql, params);
// 	return results;
// }

export default {
	query
}