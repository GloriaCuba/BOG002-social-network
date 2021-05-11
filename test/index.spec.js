// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

// importamos la funcion que vamos a testear
import { funcionAutenticar } from '../src/components/registro.js'

describe('funcionAutenticar', () => {
  it('debería ser una función', () => {
    console.log("test");
    expect(typeof funcionAutenticar).toBe('function');
  });
});
