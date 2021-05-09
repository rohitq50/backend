// import Query from "mysql/typings/mysql/lib/protocol/sequences/Query";

function getOffset(currentPage: number = 1, listPerPage: number) {
	return (currentPage - 1) * listPerPage;
  }

  //TODO data type not correct
  function emptyOrRows(rows: any) {
	if (!rows) {
	  return [];
	}
	return rows;
  }

  export default {
	getOffset,
	emptyOrRows
  }