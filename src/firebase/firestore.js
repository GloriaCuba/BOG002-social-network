//creacion de una base de datos usuarios
export const datosCollection = (userId, nomMascota, especie) => {
    firebase.firestore().collection('Datos').doc().set({
      usuario: userId.value,
      NombreMascota: nomMascota.value,
      Especie: especie.value,
    }).then(() => { console.log('Data');
      // recoletandoImagen()
      // location.reload()
    })
   .catch((error) => { console.error(error); })
  }
 
 
 //guardar imagen de perfil en la base de datos  
 export const guardarFotoPerfil = (name, userImagen) => {
   const ref = firebase.storage().ref()
   const task = ref.child(name).put(userImagen)
   task.then(snapshot => snapshot.ref.getDownloadURL())
 }
 
 
 // creacion de una base de datos posts usuarios
 export const guardarPosts = (mensaje, date, email) => {
   firebase.firestore().collection('posts').doc().set({
    mensaje: mensaje,
    date: firebase.firestore.Timestamp.now(),
    user:email
  })
 }
 
 // obtencion de post para hacerlos visibles en pantalla
 export const obtenerPosts = (callback) => firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot(callback);
 /*firebase.firestore().collection('postss').orderBy('date', 'desc').onSnapshot((querySnapshot) => {*/

 //eliminar post
 export const eliminarPost = (id) =>  {
   firebase.firestore().collection('posts').doc(id).delete().then(() => {
    console.log('Document successfully deleted!');
     }).catch((error) => {
    console.error('Error removing document: ', error);
 });
  }

 