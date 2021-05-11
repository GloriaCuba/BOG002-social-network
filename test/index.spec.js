// importamos la funcion que vamos a testear
import { registrarse} from '../src/components/registro.js';

describe('registrarse', () => {
  it('debería ser una función', () => {
    console.log("test");
    expect(typeof registrarse).toBe('function');
  });
})