import MockFirebase from 'mock-cloud-firestore';
import {
  guardarPosts, obtenerPosts, nuevoPost, eliminarPost, updateLikes,
} from '../src/firebase/firestore.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc123: {
          mensaje:'Mensaje 1', 
          date: '2 de junio de 2021, 09:24:04',
          user:'Pepita',
          userId: '5DhOSxxCGNSBGxoerylUMX9kJxg2',
          imagen: 'imagen.png',
          likes: '[idnumero1, idnumero2]',
          correo: 'pepita@hotmail.com',
        },
        abc456: {
          mensaje: 'Mensaje 2',
          date: '4 de junio de 2021, 079:34:23',
          user: 'Juan',
          userId: '5BhOSxxCGNSBGxoerylUMX9kJxg2',
          imagen: 'imagen1.png',
          likes: '[idnumero1, idnumero2, idnumero3]',
          correo: 'juan@hotmail.com',
        }
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('guardarPosts', () => {
  it('Deberia poder postear', (done) => {
    const agregar = guardarPosts('Mensaje 1', '2 de junio de 2021, 09:24:04', 'Pepita', '5DhOSxxCGNSBGxoerylUMX9kJxg2', 'imagen.png', '[idnumero1, idnumero2]', 'pepita@hotmail.com');
    return agregar.then(() => {
      obtenerPosts((data) => {
        const result = data._data.find(post => post._data.mensaje === 'Mensaje 1');
        expect(result._data.mensaje).toBe('Mensaje 1');
        done();
      });
    });
  });

  it('Deberia retornar nuevo texto y ser Mensaje 2', (done) => {
    const editar = nuevoPost("Mensaje 2", "abc123");
    return editar.then(() => {
      obtenerPosts((data) => {
        const result = data._data.find(post => post._data.mensaje === 'Mensaje 2');
        expect(result._data.mensaje).toBe('Mensaje 2');
        done();
      });
    });
  });

  it('Debería eliminar un post', (done) => {
    const eliminar = eliminarPost('abc123');
    return eliminar
      .then(() => {
        obtenerPosts((data) => {
          const resultado = data.docs.find((post) => post.id === 'abc123');
          expect(resultado).toBe(undefined);
          done();
        });
      });
  });
});
