import { IUser, IUserData } from '../interfaces/user.interface';
import mycon from '../models/mycon';
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = 'rohtSecret'
const EXPIRES_IN = '1h'


export async function login(email: String, password: String): Promise<any>{
	let sql = "SELECT * from users where email = ?"
  	const rows = await mycon.getMySqlResults(sql, [email]);
	if(rows?.[0] && rows[0]?.password_hash == password) {
		const userData = getUserData(rows[0]);
		return {
			...userData,
			accessToken: generateJwtTokne(userData.email, userData.id)
		};
	}
	return { accessToken: null };
}

function getUserData(userData: IUser): IUserData {
	return {
		id: userData.id,
		email: userData.email,
		firstName: userData.first_name,
		lastName: userData.last_name,
		dob: userData.dob,
		gender: userData.gender,
		phone: userData.phone
	}
}

function generateJwtTokne(email: string, id: number): string {
	return jwt.sign({
		email: email,
		id: id,
	}, JWT_SECRET, { expiresIn: EXPIRES_IN });
}

export function verifyJwtToken(accessToken: string) {
	try {
		const isVerified = jwt.verify(accessToken, JWT_SECRET);
		return isVerified;
	} catch (e: any) {
		return false;
	}
}