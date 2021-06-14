import { ingresar, autenticar, ingresarGmail, ingresarFaceBook, cerrarSesión, restablecimientoContrasena, } from '../src/firebase/firebase.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mocksdk = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);
mockauth.autoFlush();
global.firebase = mocksdk;

describe('ingresa a iniciar sesion', () => {
  it('ingresar un usuario', () => {
    return ingresar('nala@hotmail.com', 'contraseña').then((user) => {
      expect(user.email).toBe('nala@hotmail.com');
    });
  });
});

describe('crear un usuario', () => {
  it('crear un usuario', () => {
    return autenticar('toby@hotmail.com', 'contraseña').then((user) => {
      expect(user.email).toBe('toby@hotmail.com');
    });
  });
});

describe('Ingresar con Gmail', () => {
  it('Ingresar con Gmail', () => {
    return ingresarGmail().then((user) => {
      expect(user.providerData.[0]).toEqual({providerId :"google.com"});
    });
  });
});

describe('Ingresar con Facebook', () => {
  it('Ingresar con Facebook', () => {
    return ingresarFaceBook().then((user) => {
      expect(user.providerData.[0]).toEqual({providerId :"facebook.com"});
    });
  });
});

describe('cerrar sesión', () => {
  it('cerrar sesión', () => {
    return cerrarSesión().then((user) => {
      expect(user).toBe(undefined);
    });
  });
});



/* describe('Restablecimiento de Contrasena', () => {
  it('Restablecimiento de Contrasena', () => {
    let email = 'prueba@gmail.com';
    return restablecimientoContrasena(email).then((email) => {
      expect(email).toBe(true);
    });
  });
}); */