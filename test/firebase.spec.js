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
  return ingresar('nala@hotmail.com', 'contraseña').then((user) => {
  expect(user.email).toBe('ala@hotmail.com');
  
});
});
})