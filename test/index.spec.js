import { ingresoApp } from '../src/components/intefazPrincipal.js';
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
  it('debe ser una funcion', () => {
    expect(typeof ingresoApp).toBe('function');
  });
});

describe('ingresar', () => {
  it('deberia ser una funcion', () => {
    expect(typeof ingresar).toBe('function');
  });
});

// describe('autenticar', () => {
//   test('deberia registrarme', () => {
//     const promesa = autenticar('petBook@hotmail.com','123456');
//     console.log('probando');
//     return promesa
//    .then(()=>{
//       console.log(algo);
//     })
// });
// });
