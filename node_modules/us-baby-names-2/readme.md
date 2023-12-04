# U.S. Baby Names
> U.S. baby name data from 1880 to 2021

⚠️ Warning: don't use these datasets client-side. The `byYear` dataset is 74 MB and the `byName` dataset is 67 MB.

## Install

```
$ npm install us-baby-names-2 --save
```

## Usage

### Data by year

```js
const { byYear } = require('us-baby-names-2')
console.log(byYear[1880])
// [ { name: 'Mary', sex: 'F', count: 7065 },
//  { name: 'Anna', sex: 'F', count: 2604 },
//  { name: 'Emma', sex: 'F', count: 2003 },
//  { name: 'Elizabeth', sex: 'F', count: 1939 },
//  ... ]
```

### Data by name
```js
const { byName } = require('us-baby-names-2')
console.log(byName['Mary'])
// [ { year: 1880, sex: 'F', count: 7065 },
//   { year: 1880, sex: 'M', count: 27 },
//   { year: 1881, sex: 'F', count: 6919 },
//   { year: 1881, sex: 'M', count: 29 },
//  ... ]
```

### Both at once

```js
const { byYear, byName } = require('us-baby-names-2')
```

## Source

This dataset is from [data.gov](https://catalog.data.gov/dataset/baby-names-from-social-security-card-applications-national-data). From the Social Security Administration website:

> All names are from Social Security card applications for births that occurred in the United States after 1879. All data are from a 100% sample of the Social Security Administration's records on Social Security card applications as of May 2022.

### Limitations

- Many people born before 1937 never applied for a Social Security card, so their names are not included in this data. For others who did apply, records may not show the place of birth, and again their names are not included in this data.
- Names are restricted to cases where the year of birth, sex, State of birth (50 States and District of Columbia) are on record, and where the given name is at least 2 characters long.
- Name data are not edited. For example, the sex associated with a name may be incorrect. Entries such as "Unknown" and "Baby" are not removed from the lists.
- Different spellings of similar names are not combined. For example, the names Caitlin, Caitlyn, and Kaitlin are considered separate names.
- A name must have at least 5 occurrences in a given year to be included in the data.

## Raw Data

The raw csv data is available in the `raw-data` subdirectory.

## Created by

- Updated with 2018-2022 data: [Roger Jaffe](https://github.com/rogerjaffe)
 
- Original library by [Thomas Bailey](https://github.com/noise-machines)
