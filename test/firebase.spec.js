import { ingresar } from '../src/firebase/firebase.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mocksdk = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);
mockauth.autoFlush();
global.firebase = mocksdk;

describe('ingresa a iniciar sesion', () => {
  it('ingresar un usuario', () => {
   ingresar('nala@hotmail.com', 'contraseña');
   firebase.auth().signInWithEmailAndPassword('nala@hotmail.com').then((user) => {
    expect(user).toBe('ingreso con exito');
  });
});
})