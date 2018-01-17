/* global describe, it, before */

import chai from 'chai';
import {Dictionary} from '../lib/algorz.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Dictionary', () => {
  before(() => {
    lib = new Dictionary();
    lib.add('Raymond', '123');
    lib.add('David', '345');
    lib.add('Cynthia', '456');
  });
  describe('when I need the name', () => {
    it('should return the name', () => {

      lib.showAll();
      //expect(lib.name).to.be.equal('Cat');
    });
  });
});

