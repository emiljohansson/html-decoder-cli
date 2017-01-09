#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const decode = require('../html-decoder')
const string = argv._[0]
const result = decode(string)
console.log(result)
