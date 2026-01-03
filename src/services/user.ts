import { IUser } from '../interfaces/user.interface';
import mycon from '../models/mycon';


export async function getUsers(offset: number = 0, limit: number = 10){
	let sql = "SELECT * from users ORDER BY created_at ASC LIMIT ? OFFSET ?"
  	const rows = await mycon.getMySqlResults(sql, [limit, offset]);
  	return rows ? rows : []
}

export async function getUser(id: number){
	let sql = "SELECT * from users where id = ?"
  	const rows = await mycon.getMySqlResults(sql, [id]);
  	return rows ? rows[0] : false
}

export async function login(email: String, password: String){
	let sql = "SELECT * from users where email = ?"
  	const rows = await mycon.getMySqlResults(sql, [email]);
	console.log('rows', rows)
	if(!rows?.[0]) return false;
	if(rows[0].password_hash == password) {
		return rows[0]
	}
	return false;
}

export async function createUser(user: IUser): Promise<IUser | null>{
	const salt = '';
	const { first_name, last_name, email, password, gender, phone } = user;
	const sql = "INSERT INTO users (first_name, last_name, email, password_hash, salt, gender, phone) VALUES (?,?,?,?,?,?,?)"
  	const rows = await mycon.getMySqlResults(sql, [first_name, last_name, email, password, salt, gender, phone]);
	if(rows?.affectedRows > 0) {
		user.id = rows?.insertId;
		return user;
	}
  	return null;
}

export async function updateUser(id: number, user: IUser): Promise<IUser | null> {
	console.log(id, user)
	const { first_name, last_name, email, password, gender, phone } = user;
	let sql = "UPDATE users SET first_name = ?, last_name = ?, email = ?, password_hash = ?, gender = ?, phone = ? WHERE id = ?"
  	const rows = await mycon.getMySqlResults(sql, [first_name, last_name, email, password, gender, phone, id]);
  	return (rows?.affectedRows ) ? user : null
}

export async function deleteUser(id: number){
	let sql = "DELETE FROM users WHERE id = ?"
  	const rows = await mycon.getMySqlResults(sql, [id]);
  	return (rows?.affectedRows ) ? true : false
}