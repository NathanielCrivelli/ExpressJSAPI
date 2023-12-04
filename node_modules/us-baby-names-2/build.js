const fse = require('fs-extra')
const path = require('path')
const readAndParseFile = require('./readAndParseFile')

const main = async () => {
  const rawNamesDirectory = path.join(__dirname, 'raw-names')

  console.log(`Getting names of all files in ${rawNamesDirectory}`)
  const yearOfBirthFiles = fse.readdirSync(rawNamesDirectory)
  console.log(yearOfBirthFiles)

  // parse all files
  const promises = yearOfBirthFiles
    .map(fileName => path.join(rawNamesDirectory, fileName))
    .map(readAndParseFile)

  const parsedFiles = await Promise.all(promises)

  const namesByYearReducer = (namesByYear, parsedFile) => {
    namesByYear[parsedFile.year] = parsedFile.names
    return namesByYear
  }
  const namesByYear = parsedFiles.reduce(namesByYearReducer, {})

  // serialize namesByYear
  fse.writeFileSync(
    path.join(__dirname, 'namesByYear.json'),
    JSON.stringify(namesByYear)
  )

  // compute yearsByName
  const yearsByNameReducer = (yearsByName, year) => {
    const names = namesByYear[year]
    names.forEach(({ name, sex, count }) => {
      let years = yearsByName[name]
      if (!years) years = []
      const yearEntry = { year: Number(year), sex, count }
      years = [...years, yearEntry]
      yearsByName[name] = years
    })
    return yearsByName
  }
  const yearsByName = Object.keys(namesByYear).reduce(yearsByNameReducer, {})
  fse.writeFileSync(
    path.join(__dirname, 'yearsByName.json'),
    JSON.stringify(yearsByName)
  )
}

main()
