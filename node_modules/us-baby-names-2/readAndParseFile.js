const fse = require('fs-extra')
const path = require('path')

const parseFilePath = filePath => {
  // Get the file name without the extension
  // File names come in the format yob2017.txt
  // "yob" stands for "year of birth"
  return path.parse(filePath).name.replace('yob', '')
}
const parseLine = line => {
  let [name, sex, count] = line.split(',')
  count = Number(count)
  return {
    name,
    sex,
    count
  }
}
const parseFile = fileContents => {
  return fileContents.split('\n').map(parseLine)
}
const readAndParseFile = filePath => {
  const year = parseFilePath(filePath)
  return fse
    .readFile(filePath, 'utf8')
    .then(parseFile)
    .then(names => ({
      year,
      names
    }))
}

module.exports = readAndParseFile
