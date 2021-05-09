import mycon from '../models/mycon';
import helper from '../subscribers/helper';
import config from '../config/index';

async function getMultiple(page = 1){
  	const offset = helper.getOffset(page, config.listPerPage);
  	const rows = await mycon.query(
    	`SHOW databases;`
  	);
	//TODO check rows value
  	const data = helper.emptyOrRows(rows);
  	const meta = {page};

  	return {
    	data,
		meta
  	}
}

export default {
	getMultiple
}