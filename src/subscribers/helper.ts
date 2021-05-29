// NOTE: place here the logic functions

function getOffset(currentPage: number = 1, listPerPage: number) {
	return (currentPage - 1) * listPerPage;
}

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