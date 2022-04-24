import 'mocha';
import {expect} from 'chai';

import {Note} from '../../src/P09_Notas/Note';

describe('Tests de la clase Note', () => {
  let note: Note;
  beforeEach(() => {
    note = new Note('Primera_Nota', 'Hola Mundo', 'Roxana', 'amarillo');
  });
  it('Debería devolver el título de la nota', () => {
    expect(note.getTitle).to.exist;
    expect(note.getTitle).to.be.a('function');
    expect(note.getTitle()).to.equal('Primera_Nota');
  });
  it('Debería asignar un nuevo título a la nota', () => {
    expect(note.setTitle).to.exist;
    expect(note.setTitle).to.be.a('function');
    expect(note.setTitle('Nueva_Nota')).not.to.throw;
  });
  it('Debería devolver el cuerpo de la nota', () => {
    expect(note.getBody).to.exist;
    expect(note.getBody).to.be.a('function');
    expect(note.getBody()).to.equal('Hola Mundo');
  });
  it('Debería asignar un nuevo cuerpo a la nota', () => {
    expect(note.setBody).to.exist;
    expect(note.setBody).to.be.a('function');
    expect(note.setBody('Nuevo_Cuerpo')).not.to.throw;
  });
  it('Debería devolver el autor de la nota', () => {
    expect(note.getAuthor).to.exist;
    expect(note.getAuthor).to.be.a('function');
    expect(note.getAuthor()).to.equal('Roxana');
  });
  it('Debería asignar un nuevo autor a la nota', () => {
    expect(note.setAuthor).to.exist;
    expect(note.setAuthor).to.be.a('function');
    expect(note.setAuthor('Nuevo_Autor')).not.to.throw;
  });
  it('Debería devolver el color de la nota', () => {
    expect(note.getColor).to.exist;
    expect(note.getColor).to.be.a('function');
    expect(note.getColor()).to.equal('amarillo');
  });
  it('Debería asignar un nuevo color a la nota', () => {
    expect(note.setColor).to.exist;
    expect(note.setColor).to.be.a('function');
    expect(note.setColor('Nuevo_Color')).not.to.throw;
  });
});
