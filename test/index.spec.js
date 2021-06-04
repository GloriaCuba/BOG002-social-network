import MockFirebase from 'mock-cloud-firestore';
import { guardarPosts, obtenerPosts } from '../src/firebase/firestore.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc123: {
          mensaje: 'Mensaje 1',
          date: '2 de junio de 2021, 09:24:04',
          user: 'Pepita',
          userId: '5DhOSxxCGNSBGxoerylUMX9kJxg2',
          imagen: 'imagen.png',
          likes: '5',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('guardarPosts', () => {
  it('Deberia poder postear', (done) => {
    const agregar = guardarPosts('Mensaje 1', '2 de junio de 2021, 09:24:04', 'Pepita', '5DhOSxxCGNSBGxoerylUMX9kJxg2', 'magen.png', '5');
    return agregar
      .then(() => {
        obtenerPosts((data) => {
          const result = data._data.find(post => post._data.mensaje === 'Mensaje 1');
          expect(result._data.mensaje).toBe('Mensaje 1');
          done();
        });
      });
  });
});

// // importamos la funcion que vamos a testear
// import { funcionRegistrarse,interfazPrincipal } from '../src/components/intefazPrincipal'
// import { redireccionLogin } from '../src/components/iniciarSesion.js';
// import { ingresoApp } from '../src/components/intefazPrincipal.js';
// import { ingresar, autenticar } from '../src/firebase/firebase.js';

// const firebasemock = require('firebase-mock');

// const mockauth = new firebasemock.MockAuthentication();
// const mocksdk = new firebasemock.MockFirebaseSdk(
//   () => null,
//   () => mockauth,
// );
// mockauth.autoFlush();
// global.firebase = mocksdk;

// describe('ingresa a iniciar sesion', () => {
//   it('debe ser una funcion', () => {
//     expect(typeof ingresoApp).toBe('function');
//   });
// });

// describe('ingresar', () => {
//   it('deberia ser una funcion', () => {
//     expect(typeof ingresar).toBe('function');
//   });
// });

// describe('autenticar', () => {
//   test('deberia registrarme', () => {
//     const promesa = redireccionLogin('petBook@hotmail.com', '123456');
// console.log('probando');
// return promesa
// .then(()=>{
// console.log(algo);
// })

// 1. Ingresar input correo y contraseña
// 2. Simular click sobre el boton de registro
// 3. Confirmar que se muestra un alert
// 4. Confirmar que se envia un correo;
// });
// });

// import  MockFirebase  from "../_mocks_/auth_mock.js";
// import {autenticar} from '../src/firebase/firebase.js';

// global.firebase = MockFirebase;
// console.log(MockFirebase);
