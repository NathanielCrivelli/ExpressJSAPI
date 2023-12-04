const byName = require('./yearsByName.json')
const byYear = require('./namesByYear.json')
// const byName = require('./by-name')
// const byYear = require('./by-year')
const kindOf = require('kind-of')

describe('byName', () => {
  describe('Mary', () => {
    const mary = byName['Mary']
    const firstRecord = mary[0]
    test('The first ten records match the previous snapshot', () => {
      const firstTenRecords = mary.slice(0, 10)
      expect(firstTenRecords.length).toEqual(10)
      expect(firstTenRecords).toMatchSnapshot()
    })
    test("The first record's count property is a number >= 5", () => {
      expect(firstRecord).toHaveProperty('count')
      expect(kindOf(firstRecord.count)).toEqual('number')
      expect(firstRecord.count).toBeGreaterThanOrEqual(5)
    })
    test("The first record's year property is a number >= 1880", () => {
      expect(firstRecord).toHaveProperty('year')
      expect(kindOf(firstRecord.year)).toEqual('number')
      expect(firstRecord.count).toBeGreaterThanOrEqual(1880)
    })
    test("The first record's sex property is a string", () => {
      expect(firstRecord).toHaveProperty('sex')
      expect(kindOf(firstRecord.sex)).toEqual('string')
    })
  })
})

describe('byYear', () => {
  describe('2021', () => {
    const twentySixteen = byYear[2021]
    const firstRecord = twentySixteen[0]
    test('The first ten records match the previous snapshot', () => {
      const firstTenRecordsOf2016 = twentySixteen.slice(0, 10)
      expect(firstTenRecordsOf2016.length).toEqual(10)
      expect(firstTenRecordsOf2016).toMatchSnapshot()
    })
    test("The first record's count property is a number >= 5", () => {
      expect(firstRecord).toHaveProperty('count')
      expect(kindOf(firstRecord.count)).toEqual('number')
      expect(firstRecord.count).toBeGreaterThanOrEqual(5)
    })
    test("The first record's name property is a string", () => {
      expect(firstRecord).toHaveProperty('name')
      expect(kindOf(firstRecord.name)).toEqual('string')
    })
    test("The first record's sex property is a string", () => {
      expect(firstRecord).toHaveProperty('sex')
      expect(kindOf(firstRecord.sex)).toEqual('string')
    })
  })
})
