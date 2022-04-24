import * as fs from 'fs';
import * as chalk from 'chalk';
import {Note} from './Note';

/**
 * Clase que gestiona las notas
 */
export class NoteManage {
  private ruta: string = '';
  constructor(private note: Note) {}

  /**
   * @description Función que inicializa la creación del directorio del usuario
   */
  public init(): void {
    this.createPath();
    this.addDir();
  }

  public getNote(): Note {
    return this.note;
  }

  /**
   * @description Función que establece la ruta del directorio del usuario
   */
  private createPath(): void {
    this.ruta = `./Notes/${this.note.getAuthor()}`;
  }

  /**
   * @description Función que crea el directorio del usuario
   */
  private addDir(): void {
    if (!fs.existsSync(this.ruta)) {
      fs.mkdirSync(this.ruta);
    }
  }

  /**
   * Función que busca una nota en el directorio del usuario
   * @param titulo Título de la nota
   * @returns {boolean} Devuelve true si la nota existe, false en caso contrario
   */
  private searchNote(titulo: string): boolean {
    if (fs.existsSync(`${this.ruta}/${titulo}.json`)) {
      return true;
    }
    return false;
  }

  /**
   * @description Función que imprime la nota según el formato establecido
   */
  private printNote(): void {
    const text = `${this.note.getTitle()}\n${this.note.getBody()}`;
    if (this.note.getColor() === 'red') {
      console.log(chalk.red(text));
    } else if (this.note.getColor() === 'green') {
      console.log(chalk.green(text));
    } else if (this.note.getColor() === 'blue') {
      console.log(chalk.blue(text));
    } else if (this.note.getColor() === 'yellow') {
      console.log(chalk.yellow(text));
    } else {
      console.log(chalk.white(text));
      console.log(chalk.red(`El color ${this.note.getColor()} no disponible`));
    }
  }

  /**
   * @description Función que guarda la nueva nota en el directorio del usuario
   */
  public addNote(): void {
    const body = this.note.getBody();
    if (!this.searchNote(this.note.getTitle())) {
      fs.writeFileSync(`${this.ruta}/${this.note.getTitle()}.json`, body);
      console.log(chalk.green('Nota guardada correctamente'));
    } else {
      console.log(chalk.red('La nota ya existe'));
    }
  }

  /**
   * Función que modifica una nota existente
   * @param titulo Título de la nota
   */
  public editNote(titulo: string): void {
    if (this.searchNote(titulo)) {
      const body = this.note.getBody();
      fs.writeFileSync(`${this.ruta}/${titulo}.json`, body);
      console.log(chalk.green('Nota actualizada correctamente'));
    } else {
      console.log(chalk.red('La nota no existe'));
    }
  }

  /**
   * Función que elimina una nota existente
   * @param titulo Título de la nota
   */
  public deleteNote(titulo: string): void {
    if (this.searchNote(titulo)) {
      fs.unlinkSync(`${this.ruta}/${titulo}.json`);
      console.log(chalk.green('Nota eliminada correctamente'));
    } else {
      console.log(chalk.red('La nota no existe'));
    }
  }

  /**
   * Función que lista las notas existentes en el directorio del usuario
   */
  public listNotes(): void {
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
  public readNote(titulo: string): void {
    if (this.searchNote(titulo)) {
      const body = fs.readFileSync(`${this.ruta}/${titulo}.json`, 'utf-8');
      this.note.setBody(body);
      this.printNote();
    } else {
      console.log(chalk.red('La nota no existe'));
    }
  }
}