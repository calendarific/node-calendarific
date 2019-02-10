'use strict';

const request = require('request');

const Calendarific = function(key) {
  Calendarific.prototype.key = key;
  Calendarific.prototype.apiEndpoint = 'https://calendarific.com/api/v2/holidays';
};

Calendarific.prototype.holidays = function(parameters, callback) {

  let querystring = '?api_key=' + Calendarific.prototype.key;

  if ('object' === typeof parameters) {
    for (var parameter in parameters) {
      querystring += '&' + parameter + '=' + parameters[parameter];
    }
  }

  const url = Calendarific.prototype.apiEndpoint + querystring;

  request(url, {
    json: true
  }, (err, res, body) => {
    if (err) {
      return callback(err.message);
    }
    return callback(body);
  });
};

module.exports = Calendarific;