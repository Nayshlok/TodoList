import fs from 'fs';

export async function getData(filePath){
  const data = await fs.readFile(filePath, {encoding: 'utf8'});
  const dataObj = JSON.parse(data);
  return dataObj;
}

export async function saveData(filePath, data){
  const stringified = JSON.stringify(data);
  await fs.writeFile(filePath, stringified);
}