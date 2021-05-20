// // importamos la funcion que vamos a testear
// import { funcionRegistrarse,interfazPrincipal } from '../src/components/intefazPrincipal'

import  MockFirebase  from "../_mocks_/auth_mock.js";
import {autenticar} from '../src/firebase/firebase.js';

global.firebase = MockFirebase;
console.log(MockFirebase);

describe('autenticar', () => {
  test('deberia de registrarme', () => {
     autenticar('ben@example.com', 'examplePass').then((user) => {
        console.log(user);
        expect(typeof user).toBe("object");
        expect(user.Email).toBe("ben@example.com")
      })
  })
})
// import { firebase} from '../_mocks_/auth-mock.js'
// import { ingresar} from '../src/firebase/firebase.js'
// // global.firebase = jest.fn();
// // import { funcionRegistrarse,interfazPrincipal } from '../src/components/intefazPrincipal'
// // import {autenticar} from '../src/firebase/firebase.js';

// //console.log("global",global.firebase)
// // console.log("ingresar",ingresar)

// const auth= new ingresar();
// global.firebase=firebase();

// describe('ingresar', () => {
//   it('debería ser una función', () => {
//    console.log("ingresar")
//     expect(typeof auth.ingresar).toBe('function');
//   });
// });





// describe('funcionRegistrarse', () => {
//   it('debería ser una función', () => {
//     console.log("test");
//     expect(typeof funcionRegistrarse).toBe('function');
//   });
// });
// describe('interfazPrincipal', () => {
//   it('debería ser una función', () => {
//     console.log("test");
//     expect(typeof interfazPrincipal).toBe('function');
//   });
// })



// describe('autenticar', () => {
//   it('debería ser una función', () => {
//     console.log("test");
//     expect(typeof autenticar).toBe('function');
//   });
// });