import MockFirebase from 'mock-cloud-firestore';
import { guardarPosts, obtenerPosts, eliminarPost} from '../src/firebase/firestore.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc123: {
          mensaje:'Mensaje 1', 
          date: '2 de junio de 2021, 09:24:04',
          user:'Pepita',
          userId:'5DhOSxxCGNSBGxoerylUMX9kJxg2',
          imagen: 'imagen.png',
          likes:'5',
        },
        abc456:{
          mensaje:'Mensaje 2', 
          date: '4 de junio de 2021, 079:34:23',
          user:'Juan',
          userId:'5BhOSxxCGNSBGxoerylUMX9kJxg2',
          imagen: 'imagen1.png',
          likes:'7',
        }
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe ('guardarPosts',()=>{
  it ('Deberia poder postear', (done)=>{
    const agregar = guardarPosts ('Mensaje 1', '2 de junio de 2021, 09:24:04', 'Pepita', '5DhOSxxCGNSBGxoerylUMX9kJxg2','magen.png','5');
    return agregar.then(() => {
      obtenerPosts((data) => {
        const result = data._data.find( post => post._data.mensaje === 'Mensaje 1')
        expect(result._data.mensaje).toBe('Mensaje 1')
        done();
      });
    });
  });
});

it('Debería eliminar un post', (done) => {
  const deleteP = eliminarPost('abc123');
  return deleteP
    .then(() => {
      obtenerPosts((data) => {
        const resultado = data.docs.find((post) => post.id === 'abc123');
        expect(resultado).toBe(undefined);
        done();
      });
    });
});

// it('Deberia poder editar un post', (done) => {
//   const edit = editPosts('abc456', 'Luisa');
//   return edit
//     .then(() => {
//       getPosts((data) => {
//         const resultado = data.docs.find((post) => post.id === 'post456');
//         expect(resultado._data.Contents).toBe('Hola Mundo'); // eslint-disable-line
//         done();
//       });
//     });
// });

    // 1. Ingresar input correo y contraseña
    // 2. Simular click sobre el boton de registro
    // 3. Confirmar que se muestra un alert
    // 4. Confirmar que se envia un correo;
