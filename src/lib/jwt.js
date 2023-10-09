const {promisify} = require('util');
const jsonwebtoken = require('jsonwebtoken');
const { verify } = require('crypto');

const jwt={
    sign: promisify(jsonwebtoken.sign),
    verify: promisify(jsonwebtoken.verify),
};

module.exports = jwt;