import MockFirebase from 'mock-cloud-firestore';
import { guardarPosts, obtenerPosts} from '../src/firebase/firestore.js';

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
          
        }
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe ('guardarPosts',()=>{
  it ('Deberia poder postear', (done)=>{
    const agregar = guardarPosts ('mensaje', 'date', 'displayName', 'userid','png','likes');
    console.log(agregar);
    return agregar
    .then(() => {
      obtenerPosts((datos)=>{
        const resultado = datos.__collection__.find( post => post._data.mensaje === 'mensaje')
        expect(result.__collection__.mensaje).toBe('mensaje')
        done();
      })
    })
  })
});