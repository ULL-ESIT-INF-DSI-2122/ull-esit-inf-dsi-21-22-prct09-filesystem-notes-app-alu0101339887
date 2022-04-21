import {FilterMapReduce} from './FilterMapReduce';

/**
 * Clase que realiza la suma de todos los elementos de una lista
 */
export class FilterMapAddReduce extends FilterMapReduce {
  constructor(numberList: number[]) {
    super(numberList);
  }

  protected reduce(): number {
    let result = 0;
    for (let i = 0; i < this.numberList.length; i++) {
      result += this.numberList[i];
    }
    return result;
  }
}