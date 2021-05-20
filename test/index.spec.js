import { ingresar } from '../src/firebase/firebase.js';

// const firebasemock = require('firebase-mock');

// const mockauth = new firebasemock.MockAuthentication();
// const mocksdk = new firebasemock.MockFirebaseSdk(
//   () => null,
//   () => mockauth,
// );
// mockauth.autoFlush();
// global.firebase = mocksdk;

describe('ingresar', () => {
  it('deberia ser una funcion', () => {
    expect(typeof ingresar).toBe('function');
  });
});

// describe('autenticar', () => {
//   test('deberia registrarme', () => {
//     const promesa = autenticar('petBook@hotmail.com','123456');
//     console.log('lore');
//     return promesa
//    .then(()=>{
//       console.log(algo);
//     })
// });
// });
