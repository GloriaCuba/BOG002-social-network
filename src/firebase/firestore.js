export const datosCollection = (userId, nomMascota, especie) => { // creacion de base de datos para configuracion de perfil, parametros son la info que se va a almacenar
  let user = firebase.auth().currentUser;// currentUser es el usuario actual
  firebase.firestore().collection('Datos').doc().set({ // ingresamos a la base de datos,asignando valores a los campos
      usuario: userId.value,
      nombreMascota: nomMascota.value,
      especie: especie.value,
    }).then(() => {
      user.updateProfile({// updateProfile, metodo predeterminado para actualizar la informacion
        displayName: userId.value, //Nombre ingresado en input en config.perfil
      });
            console.log(user);
    });
  };
//  guardar imagen de perfil en la base de datos
 export const guardarFotoPerfil = (name, userImagen) => {
   const ref = firebase.storage().ref()//ingresamos al almacenaminto de storage para img
   const task = ref.child(name).put(userImagen)//entra a la base de datos, crea la url y carga el archivo en la ubicacion userImagen
   task.then(snapshot => snapshot.ref.getDownloadURL())// actualiza y da a la base de datos la url atravez del metodo getDownloadURL de firebase
   .then(url=> {
    userProfile(url)//metodo para actualizar perfil, asignamos URL
  })
  .catch(function(error) {
    // An error happened.
  });
 }

function userProfile(url) {//la imagen almacenada se le asigna al usuario actual
  const campoFoto = document.getElementById("userImage")
  var user = firebase.auth().currentUser;
  console.log(user);
  user.updateProfile({
    photoURL: url
  }).then(() =>{
    campoFoto.src= url
  });
}


 // creacion de una base de datos posts usuarios
 export const guardarPosts = (mensaje, date,displayName, imagen,likes, userId) => {
  const collectionPost= firebase.firestore().collection('posts')
  return collectionPost.doc().set({
    
    mensaje: mensaje,
    date,
    // firebase.firestore.Timestamp.now(),// metodo de fire que marca el tiempo de entrada
    user: displayName,
    userId, // id unico del usuario logeado
    imagen: imagen,
    likes,
  });
 };

export const guardarFotoPost = (name,imagenPosteada) => {
  const ref = firebase.storage().ref()//ingresamos al almacenaminto de storage para img
  const task = ref.child(name).put(imagenPosteada)//entra a la base de datos, crea la url y carga el archivo en la ubicacion userImagen
  task.then(snapshot => snapshot.ref.getDownloadURL())// actualiza y da a la base de datos la url atravez del metodo getDownloadURL de firebase
  .then(url=> {
   fotosPost(url)//metodo para actualizar perfil, asignamos URL
})
 .catch(function(error) {
   // An error happened.
 });
};

export const sumarLikes = (id) => {
  const promis = firebase.firestore().collection('posts').doc(id).update({
    likes:firebase.firestore.FieldValue.increment(1) 
  });
  return promis;
};

export const restarLikes = (id) => {
  const promis = firebase.firestore().collection('posts').doc(id).update({
    likes:firebase.firestore.FieldValue.increment(-1)
  });
  console.log('resta');
return promis;
};
export const obtenerLikes = (callback) => firebase.firestore().collection('posts').onSnapshot(callback);

// obtencion de post para hacerlos visibles en pantalla
export const obtenerPosts = (callback) => firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot(callback);

export const obtenerDatosUsuario = (callback) => firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot(callback);

// eliminar post
export const eliminarPost = (id) => {
  firebase.firestore().collection('posts').doc(id).delete().then(() => {
    console.log('Document successfully deleted!');
  }).catch((error) => {
    console.error('Error removing document: ', error);
 });
  }
