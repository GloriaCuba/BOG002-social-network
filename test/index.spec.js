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
    const agregar = guardarPosts('Mensaje 1', '2 de junio de 2021, 09:24:04', 'Pepita', '5DhOSxxCGNSBGxoerylUMX9kJxg2','imagen.png','5');
    return agregar
    .then(()=>{
      obtenerPosts((datos)=>{
        const result = datos._data.find( post => post._data.mensaje === 'Mensaje 1')
        expect(result._data.mensaje).toBe('Mensaje 1')
        done();
      })
    })
  })
});













