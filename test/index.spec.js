// import MockFirebase from 'mock-cloud-firestore';

// const fixtureData = {
//   __collection__: {
//     Datos: {
//       __doc__: {
//         abc123: {
//           usuario:'Luisa Miranda',
//           nombreMascota:'Fido',
//           especie:'Perro',
//         }
//       }
//     }
//   }
// };

// global.firebase = new MockFirebase(fixtureData);

// import { datosCollection} from '../src/firebase/firestore.js';

// describe ('datosCollection',()=>{
//   it ('Deberia poder agregar un usuario', ()=>{
//     return datosCollection('Juan Perez').then((data)=>{
//       expect (data).toBe('Juan Perez');
//     })
//   })
// })

// // importamos la funcion que vamos a testear
// import { funcionRegistrarse,interfazPrincipal } from '../src/components/intefazPrincipal'
// import { redireccionLogin } from '../src/components/iniciarSesion.js';
import { ingresoApp } from '../src/components/intefazPrincipal.js';
// import { ingresar, autenticar } from '../src/firebase/firebase.js';

const firebasemock = require('firebase-mock');

// import MockFirebase from 'mock-cloud-firestore';

// const fixtureData = {
//   __collection__: {
//     notes: {
//       __doc__: {
//         abc1d: {
//           title: 'terminar la pildora',
//           complete: false
//         },
//       }
//     }
//   }
// }

// global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

// const mockauth = new firebasemock.MockAuthentication();
// const mocksdk = new firebasemock.MockFirebaseSdk(
//   () => null,
//   () => mockauth,
// );
// mockauth.autoFlush();
// global.firebase = mocksdk;

describe('ingresa a iniciar sesion', () => {
  it('debe ser una funcion', () => {
    expect(typeof ingresoApp).toBe('function');
  });
});

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
