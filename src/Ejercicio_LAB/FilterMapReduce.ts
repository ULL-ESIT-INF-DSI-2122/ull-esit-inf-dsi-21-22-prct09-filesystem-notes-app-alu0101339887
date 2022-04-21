/**
 * Clase abstracta que representa un algoritmo que ejecutará un filter,
 *  un map y un reduce.
 */
export abstract class FilterMapReduce {
  constructor(protected numberList: number[]) {}

  /**
   * Ejecuta el algoritmo
   * @returns {number}
   */
  public run(): number {
    this.numberList = this.filter();
    this.afterFilter();
    this.numberList = this.map(this.numberList);
    this.afterMap();
    const result = this.reduce();
    return result;
  }

  /**
   * Función que se ejecutará en las funciones de map y filter
   * @param x numbero con el que se trabaja
   * @returns {number}
   */
  public fn(x: number): number {
    return x + 1;
  }

  /**
   * Función que filtra una lista de números a partir de una función
   * @returns {number[]}
   */
  protected filter(): number[] {
    const result: number[] = [];
    for (let i = 0; i < this.numberList.length; i++) {
      if (this.fn(this.numberList[i])) {
        result.push(this.numberList[i]);
      }
    }
    return result;
  }

  /**
   * Función pública para realizar los test
   * @returns {number[]}
   */
  public testFilter(): number[] {
    return this.filter();
  }

  /**
   * Hook que se ejecuta después de ejecutar el filter
   * @returns {void}
   */
  protected afterFilter(): void {}

  /**
   * Función de mapeo
   * @param listNumber lista de números con la que se trabaja
   * @returns {number[]}
   */
  protected map(listNumber: number[]): number[] {
    const result: number[] = listNumber;
    for (let i = 0; i < result.length; i++) {
      result[i] = this.fn(result[i]);
    }
    return result;
  }

  /**
   * Función pública para realizar los test
   * @returns {number[]}
   */
  public testMap(listNumber: number[]): number[] {
    return this.map(listNumber);
  }

  /**
   * Hook que se ejecuta después de ejecutar el map
   * @returns {void}
   */
  protected afterMap(): void {}

  /**
   * Función reduce
   * @returns {number}
   */
  protected abstract reduce(): number;

  /**
   * Función pública para realizar los test
   * @returns {number[]}
   */
  public testReduce(): number {
    return this.reduce();
  }

  /**
   * Hook que se ejecuta después de ejecutar el reduce
   * @returns {void}
   */
  protected afterReduce(): void {}
}