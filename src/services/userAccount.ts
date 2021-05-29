import mycon from '../models/mycon';

async function getUser(email: String){
	let sql = "SELECT * from users where email = ?"
  	const rows = await mycon.getMySqlResults(sql, [email]);
  	return rows ? rows[0] : false
}

async function login(email: String, password: String){
	let sql = "SELECT * from users where email = ?"
  	const rows = await mycon.getMySqlResults(sql, [email]);
	if(! rows) return false;
	if(rows[0].password == password) {
		return rows[0]
	}
	return false;
}

async function createUser(first_name: String, last_name: String, email: String, password: String, gender: String, phone: String){
	let sql = "INSERT INTO users (first_name, last_name, email, password, gender, phone) VALUES (?,?,?,?,?,?)"
  	const rows = await mycon.getMySqlResults(sql, [first_name, last_name, email, password, gender, phone]);
  	return (rows && rows.affected_row ) ? true : false
}

async function updateUser(first_name: String, last_name: String, email: String, password: String, gender: String, phone: String){
	let sql = "UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?, gender = ?, phone = ?)"
  	const rows = await mycon.getMySqlResults(sql, [first_name, last_name, email, password, gender, phone]);
  	return (rows && rows.affected_row ) ? true : false
}

async function deleteUser(id: Number){
	let sql = "DELETE FROM users WHERE id = ?"
  	const rows = await mycon.getMySqlResults(sql, [id]);
  	return (rows && rows.affected_row ) ? true : false
}

export default {
	getUser,
	login,
	createUser,
	updateUser,
	deleteUser
}