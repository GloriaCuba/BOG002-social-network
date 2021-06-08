import { ingresar, autenticar, cerrarSesión, ingresarGmail} from '../src/firebase/firebase.js';

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
  expect(user.email).toBe('nala@hotmail.com');
  
});
});
});

describe('crear un usuario', () => {
  it('crear un usuario', () => {
  return autenticar('toby@hotmail.com', 'contraseña').then((user) => {
  expect(user.email).toBe('toby@hotmail.com');
  
});
});
});

// describe('cerrar sesion', () => {
//   it('cerrar sesion del usuario actual', () => {
//   cerrarSesión();
//   expect(user).toBe('Signed Out');
// })
// });

// describe('ingresar con Google', () => {
//   it('ingresar con usuario gmail', () => {
//     ingresarGmail('vanessa@gmail.com','contraeña');
//   expect(user).toBe('ingreso gmail');
// })
// });