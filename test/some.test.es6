import {chai} from './libsLoader.es6';
//import Some from '../src/some.es6';

const expect = chai.expect;

/** @test {SomeClass} */
describe('SomeClass', () => {
  /** @test {Some#someMethod} */
  describe('#someMethod', () => {
    it('some description', () => {
      //const some = new Some();
      //expect(some.someMethod()).to.equal('someValue');
    });
  });
});