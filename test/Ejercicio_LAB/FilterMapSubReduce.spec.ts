import 'mocha';
import {expect} from 'chai';
import {FilterMapSubReduce} from '../../src/Ejercicio_LAB/FilterMapSubReduce';

describe('Tests del Ejercicio 01', () => {
  let sub: FilterMapSubReduce;
  let numberList: number[];
  beforeEach(() => {
    numberList = [1, 2, 3, 4];
    sub = new FilterMapSubReduce(numberList);
  });
  it('Existe un método testFilter', () => {
    expect(sub.testFilter).to.exist;
    expect(sub.testFilter).to.be.a('function');
    expect(sub.testFilter()).to.deep.equal([1, 2, 3, 4]);
  });
  it('Existe un método testMap', () => {
    const list = [2, 3, 4, 5];
    expect(sub.testMap).to.exist;
    expect(sub.testMap).to.be.a('function');
    expect(sub.testMap(list)).to.deep.equal([3, 4, 5, 6]);
  });
  it('Existe un método testReduce', () => {
    expect(sub.testReduce).to.exist;
    expect(sub.testReduce).to.be.a('function');
    expect(sub.testReduce()).to.be.equal(-10);
  });
  it('Existe un método run', () => {
    expect(sub.run).to.exist;
    expect(sub.run).to.be.a('function');
    expect(sub.run()).to.be.equal(-14);
  });
});