import XLSX from 'xlsx'

// excel文件处理
const parse = function() {
	const workBook = XLSX.readFile('public/' + filename, {type: 'binary'})
	const sheetNames = workBook.SheetNames

	const workSheet = workBook.Sheets[sheetNames[0]] //获取单个表
}