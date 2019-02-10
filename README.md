# node-calendarific
Node.js library for [Calendarific API](https://calendarific.com)

## Installation

```shell
npm install --save node-calendarific
```
or just

```shell
npm install node-calendarific
```

## Usage

```javascript

// Load the package
const Calendarific = require('node-calendarific');

// Initlize with an API key
const clapi = new Calendarific('_YOUR_API_KEY_');

const parameters = {
  country: 'US',
  year:    2019,
};

clapi.holidays(parameters, function (data) {
  console.log(data)
  // Insert awesome code here...
});
```