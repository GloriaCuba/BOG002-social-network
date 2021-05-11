// // importamos la funcion que vamos a testear

import { funcionRegistrarse,interfazPrincipal } from '../src/components/intefazPrincipal'

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