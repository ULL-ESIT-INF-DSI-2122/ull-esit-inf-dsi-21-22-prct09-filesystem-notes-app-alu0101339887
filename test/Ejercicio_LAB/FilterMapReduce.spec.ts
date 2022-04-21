import 'mocha';
import {expect} from 'chai';
import {FilterMapAddReduce} from '../../src/Ejercicio_LAB/FilterMapAddReduce';

describe('Tests del Ejercicio 01', () => {
  let add: FilterMapAddReduce;
  let numberList: number[];
  beforeEach(() => {
    numberList = [1, 2, 3, 4];
    add = new FilterMapAddReduce(numberList);
  });
  it('Existe un método testFilter', () => {
    expect(add.testFilter).to.exist;
    expect(add.testFilter).to.be.a('function');
    expect(add.testFilter()).to.deep.equal([1, 2, 3, 4]);
  });
  it('Existe un método testMap', () => {
    const list = [2, 3, 4, 5];
    expect(add.testMap).to.exist;
    expect(add.testMap).to.be.a('function');
    expect(add.testMap(list)).to.deep.equal([3, 4, 5, 6]);
  });
  it('Existe un método testReduce', () => {
    expect(add.testReduce).to.exist;
    expect(add.testReduce).to.be.a('function');
    expect(add.testReduce()).to.be.equal(10);
  });
  it('Existe un método run', () => {
    expect(add.run).to.exist;
    expect(add.run).to.be.a('function');
    expect(add.run()).to.be.equal(14);
  });
});