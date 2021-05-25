import * as xlsx from 'xlsx'

const file = xlsx.readFile('../无标题.xlsx');

//返回json数据
const sheetName = file.SheetNames[0];

const sheet=file.Sheets[sheetName];
const data =xlsx.utils.sheet_to_json(sheet); //通过工具将表对象的数据读出来并转成json
console.log(data);
