<<<<<<< HEAD
importamos la funcion que vamos a testear
import { funcionRegistrarse,interfazPrincipal } from '../src/components/intefazPrincipal'
import { redireccionLogin } from '../src/components/iniciarSesion.js';
import { ingresoApp } from '../src/components/intefazPrincipal.js';
import { ingresar, autenticar } from '../src/firebase/firebase.js';
=======
import { ingresar } from '../src/firebase/firebase.js';
>>>>>>> cbb4241681585a712d9002109c3547698bacb6da

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mocksdk = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);
mockauth.autoFlush();
global.firebase = mocksdk;

describe('ingresa a iniciar sesion', () => {
<<<<<<< HEAD
  it('debe ser una funcion', () => {
    expect(typeof ingresoApp).toBe('function');
  });
});

describe('ingresar', () => {
  it('deberia ser una funcion', () => {
    expect(typeof ingresar).toBe('function');
  });
});

describe('autenticar', () => {
  test('deberia registrarme', () => {
    const promesa = redireccionLogin('petBook@hotmail.com', '123456');
console.log('probando');
return promesa
.then(()=>{
console.log(algo);
})

1. Ingresar input correo y contraseña
2. Simular click sobre el boton de registro
3. Confirmar que se muestra un alert
4. Confirmar que se envia un correo;
});
});

import  MockFirebase  from "../_mocks_/auth_mock.js";
import {autenticar} from '../src/firebase/firebase.js';

global.firebase = MockFirebase;
console.log(MockFirebase);
=======
  it('ingresar un usuario', () => {
   ingresar('nala@hotmail.com', 'contraseña');
   firebase.auth().signInWithEmailAndPassword('nala@hotmail.com').then((user) => {
    expect(user).toBe('ingreso con exito');
  });
});
})
>>>>>>> cbb4241681585a712d9002109c3547698bacb6da
