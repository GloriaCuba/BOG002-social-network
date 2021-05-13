// // importamos la funcion que vamos a testear
global.firebase = jest.fn();
import { funcionRegistrarse,interfazPrincipal } from '../src/components/intefazPrincipal'
import {registrarse} from '../src/components/registro.js'


describe('registrarse', () => {
  it('debería ser una función', () => {
    console.log("test");
    expect(typeof registrarse).toBe('function');
  });
});

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