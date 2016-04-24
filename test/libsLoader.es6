export const chai = require('chai');
export const sinon = require('sinon');
export const request = require('supertest');

require('sinon-as-promised');
chai.use(require('sinon-chai'));
chai.use(require('chai-as-promised'));
