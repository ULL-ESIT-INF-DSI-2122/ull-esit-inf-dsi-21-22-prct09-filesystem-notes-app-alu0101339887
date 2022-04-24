import * as chalk from 'chalk';
import {NoteManage} from './NoteManage';
import {Note} from './Note';
import yargs from 'yargs';

const note = new Note('', '', '', '');
const noteManage = new NoteManage(note);

/**
 * Comando add. Añade una nota al directorio del usuario
 */
yargs.command({
  command: 'add',
  describe: 'Añade una nueva nota',
  builder: {
    title: {
      describe: 'Título de la nota',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Cuerpo de la nota',
      demandOption: true,
      type: 'string',
    },
    autor: {
      describe: 'Autor de la nota',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Color de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    if (typeof argv.title === 'string' &&
        typeof argv.body === 'string' &&
        typeof argv.autor === 'string' &&
        typeof argv.color === 'string') {
      noteManage.getNote().setTitle(argv.title);
      noteManage.getNote().setBody(argv.body);
      noteManage.getNote().setAuthor(argv.autor);
      noteManage.getNote().setColor(argv.color);
      noteManage.init();
      console.log(chalk.blue('Añadiendo nota...'));
      noteManage.addNote();
    }
  },
});

/**
 * Comando edit. Edita una nota del directorio del usuario
 */
yargs.command({
  command: 'edit',
  describe: 'Edita una nota',
  builder: {
    title: {
      describe: 'Título de la nota',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Cuerpo de la nota',
      demandOption: true,
      type: 'string',
    },
    autor: {
      describe: 'Autor de la nota',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Color de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    if (typeof argv.title === 'string' &&
        typeof argv.body === 'string' &&
        typeof argv.autor === 'string' &&
        typeof argv.color === 'string') {
      noteManage.getNote().setTitle(argv.title);
      noteManage.getNote().setBody(argv.body);
      noteManage.getNote().setAuthor(argv.autor);
      noteManage.getNote().setColor(argv.color);
      noteManage.init();
      console.log(chalk.blue('Editando nota...'));
      noteManage.editNote(argv.title);
    }
  },
});

/**
 * Comando delete. Elimina una nota del directorio del usuario
 */
yargs.command({
  command: 'delete',
  describe: 'Elimina una nota',
  builder: {
    title: {
      describe: 'Título de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    if (typeof argv.title === 'string') {
      noteManage.getNote().setTitle(argv.title);
      noteManage.init();
      console.log(chalk.blue('Eliminando nota...'));
      noteManage.deleteNote(argv.title);
    }
  },
});

/**
 * Comando list. Lista las notas del directorio del usuario
 */
yargs.command({
  command: 'list',
  describe: 'Lista las notas del directorio del usuario',
  handler: () => {
    noteManage.init();
    console.log(chalk.blue('Listando notas...'));
    noteManage.listNotes();
  },
});

/**
 * Comando read. Lee una nota del directorio del usuario
 */
yargs.command({
  command: 'read',
  describe: 'Lee una nota',
  builder: {
    title: {
      describe: 'Título de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    if (typeof argv.title === 'string') {
      noteManage.getNote().setTitle(argv.title);
      noteManage.init();
      console.log(chalk.blue('Leyendo nota...'));
      noteManage.readNote(argv.title);
    }
  },
});

yargs.parse();
