/**
 * Clase que guarda la información de una nota
 */
export class Note {
  constructor(private titulo: string,
              private cuerpo: string,
              private autor: string,
              private color: string) {}

  /**
   * Devuelve una cadena con el título de la nota
   * @returns {string} Título de la nota
   */
  public getTitle(): string {
    return this.titulo;
  }

  /**
   * Asigna un nuevo título a la nota
   * @param titulo Nuevo título de la nota
   */
  public setTitle(titulo: string): void {
    this.titulo = titulo;
  }

  /**
   * Devuelve una cadena con el cuerpo de la nota
   * @returns {string} Body de la nota
   */
  public getBody(): string {
    return this.cuerpo;
  }

  /**
   * Asigna un nuevo cuerpo a la nota
   * @param cuerpo Nuevo cuerpo de la nota
   */
  public setBody(cuerpo: string): void {
    this.cuerpo = cuerpo;
  }

  /**
   * Devuelve una cadena con el nombre del autor de la nota
   * @returns {string} Nombre del autor de la nota
   */
  public getAuthor(): string {
    return this.autor;
  }

  /**
   * Asigna un nuevo autor a la nota
   * @param autor Nuevo nombre del autor de la nota
   */
  public setAuthor(autor: string): void {
    this.autor = autor;
  }

  /**
   * Devuelve una cadena con el color de la nota
   * @returns {string} Color de la nota
   */
  public getColor(): string {
    return this.color;
  }

  /**
   * Asigna un nuevo color a la nota
   * @param color Nuevo color de la nota
   */
  public setColor(color: string): void {
    this.color = color;
  }
}