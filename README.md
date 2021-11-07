# Some automation tests for fun

## Requirements
- `node` - `v14.16.1`
- `npm` - `6.14.12`

## Installation
```
git clone .../automation-tests.git
cd automation-tests
npm install
npm test
```

# Tests
## Image comparison
- Compares web image url with local image by converting to base64
## Database (SQLite)
- Сhecks that the population density is below 50 people/sq.km. only in the USA
- Checks that the sum of the population of all countries is less than 2 billion people
## Iframe
- Replace inner HTML
