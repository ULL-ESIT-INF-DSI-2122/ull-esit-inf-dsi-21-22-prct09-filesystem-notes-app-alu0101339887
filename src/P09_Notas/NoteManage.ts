import * as fs from 'fs';
import * as chalk from 'chalk';

/**
 * Clase que gestiona las notas
 */
export class NoteManage {
  private ruta: string = '';
  constructor() {}

  /**
   * @description Función que establece la ruta del directorio del usuario
   */
  private createPath(usuario: string): void {
    this.ruta = `./Notes/${usuario}`;
  }

  public getCreatePath(usuario: string) {
    return this.createPath(usuario);
  }

  /**
   * @description Función que crea el directorio del usuario
   */
  private addDir(): void {
    if (!fs.existsSync(this.ruta)) {
      fs.mkdirSync(this.ruta);
    }
  }

  public getAddDir() {
    return this.addDir;
  }

  /**
   * Función que busca una nota en el directorio del usuario
   * @param titulo Título de la nota
   * @returns {boolean} Devuelve true si la nota existe, false en caso contrario
   */
  private searchNote(title: string): boolean {
    if (fs.existsSync(`${this.ruta}/${title}.json`)) {
      return true;
    }
    return false;
  }

  getSearchNote(title: string) {
    return this.searchNote(title);
  }

  /**
   * @description Función que imprime la nota según el formato establecido
   */
  private printNote(title: string, body: string, color: string): void {
    const text = `${title}\n${body}`;
    if (color === 'red' || color === 'rojo') {
      console.log(chalk.red(text));
    } else if (color === 'green' || color === 'verde') {
      console.log(chalk.green(text));
    } else if (color === 'blue' || color === 'azul') {
      console.log(chalk.blue(text));
    } else if (color === 'yellow' || color === 'amarillo') {
      console.log(chalk.yellow(text));
    } else {
      console.log(chalk.white(text));
      console.log(chalk.red(`El color ${color} no disponible`));
    }
  }

  public getPrint(title: string, body: string, color: string) {
    return this.printNote(title, body, color);
  }

  /**
   * @description Función que guarda la nueva nota en el directorio del usuario
   */
  public addNote(user: string, title: string, body: string, col: string): void {
    this.createPath(user);
    this.addDir();
    const filePath = `${this.ruta}/${title}.json`;
    if (!this.searchNote(title)) {
      fs.writeFileSync(filePath, JSON.stringify({
        title: title,
        body: body,
        color: col,
      }));
      console.log(chalk.green('Nota guardada correctamente'));
    } else {
      console.log(chalk.red('La nota ya existe'));
    }
  }

  /**
   * Función que modifica una nota existente
   * @param titulo Título de la nota
   */
  public editNote(user: string, title: string, bod: string, col: string): void {
    this.createPath(user);
    if (this.searchNote(title)) {
      const filePath = `${this.ruta}/${title}.json`;
      const note_ = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      note_.body = bod;
      note_.color = col;
      fs.writeFileSync(filePath, JSON.stringify(note_));
      console.log(chalk.green('Nota actualizada correctamente'));
    } else {
      console.log(chalk.red('La nota no existe'));
    }
  }

  /**
   * Función que elimina una nota existente
   * @param titulo Título de la nota
   */
  public deleteNote(user: string, title: string): void {
    this.createPath(user);
    if (this.searchNote(title)) {
      fs.unlinkSync(`${this.ruta}/${title}.json`);
      console.log(chalk.green('Nota eliminada correctamente'));
    } else {
      console.log(chalk.red('La nota no existe'));
    }
  }

  /**
   * Función que lista las notas existentes en el directorio del usuario
   */
  public listNotes(user: string): void {
    this.createPath(user);
    if (fs.existsSync(this.ruta)) {
      const notes = fs.readdirSync(this.ruta);
      if (notes.length === 0) {
        console.log(chalk.red('El usuario no tiene notas'));
      } else {
        console.log(chalk.green('Listado de notas:'));
        notes.forEach((note) => {
          console.log(chalk.white(note));
        });
      }
    } else {
      console.log(chalk.red('El usuario no existe'));
    }
  }

  /**
   * Función que lee una nota existente
   * @param titulo Título de la nota
   */
  public readNote(user: string, title: string): void {
    this.createPath(user);
    if (this.searchNote(title)) {
      const note = fs.readFileSync(`${this.ruta}/${title}.json`, 'utf-8');
      const note_ = JSON.parse(note);
      const body = note_.body;
      const color = note_.color;
      this.printNote(title, body, color);
    } else {
      console.log(chalk.red('La nota no existe'));
    }
  }
}