import mycon from '../models/mycon';
import helper from '../subscribers/helper';

async function getMultiple(){
	let sql = `SHOW databases;`
  	const rows = await mycon.getMySqlResults(sql);
  	const data = helper.emptyOrRows(rows);
  	return data
}

export default {
	getMultiple
}