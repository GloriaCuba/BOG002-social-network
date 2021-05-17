// // importamos la funcion que vamos a testear
// import { funcionRegistrarse,interfazPrincipal } from '../src/components/intefazPrincipal'

import { mockFirebase } from "../_mocks_/auth_mock.js";
import {autenticar} from '../src/firebase/firebase.js';

global.firebase = mockFirebase;
console.log(mockFirebase());

describe('autenticar', () => {
  test('deberia de registrarme', () => {
     autenticar('ben@example.com', 'examplePass').then((user) => {
        //console.log(user);
        expect(typeof user).toBe("object");
        expect(user.Email).toBe("ben@example.com")
      })
  })
})

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