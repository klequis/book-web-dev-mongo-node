/* global global, require */
/* jshint expr: true, camelcase: false, unused: vars */
const chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai');

global.expect = chai.expect;
global.sinon = sinon;
chai.use(sinonChai);
