// // importamos la funcion que vamos a testear
global.firebase = jest.fn();
import { funcionRegistrarse,interfazPrincipal } from '../src/components/intefazPrincipal'
import {autenticar} from '../src/firebase/firebase.js'

describe('autenticar', () => {
  test('deberia de registrarme', () => {
    const promesa = autenticar('ben@example.com', 'examplePass');
    return promesa
      .then((user) => {
        //console.log(user);
        expect(typeof user).toBe("object");
        expect(user.email).toBe("ben@example.com")
      })
  })
})

describe('funcionRegistrarse', () => {
  it('debería ser una función', () => {
    console.log("test");
    expect(typeof funcionRegistrarse).toBe('function');
  });
});
describe('interfazPrincipal', () => {
  it('debería ser una función', () => {
    console.log("test");
    expect(typeof interfazPrincipal).toBe('function');
  });
})
// describe('autenticar', () => {
//   it('debería ser una función', () => {
//     console.log("test");
//     expect(typeof autenticar).toBe('function');
//   });
// });