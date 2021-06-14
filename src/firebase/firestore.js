//creacion de una base de datos usuarios
export const datosCollection = (userId, nomMascota, especie) => {
  let user = firebase.auth().currentUser
  firebase.firestore().collection('Datos').doc().set({
    usuario: userId.value,
    nombreMascota: nomMascota.value,
    especie: especie.value,
  }).then(() => {
    user.updateProfile({
      displayName: userId.value
    })
    console.log(user)
  })
}
//  guardar imagen de perfil en la base de datos  
export const guardarFotoPerfil = (name, userImagen) => {
  const ref = firebase.storage().ref()
  const task = ref.child(name).put(userImagen)
  task.then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
      userProfile(url)
    })
    .catch(function (error) {
      // An error happened.
    });
}

function userProfile(url) {
  const campoFoto = document.getElementById("userImage")
  var user = firebase.auth().currentUser;
  console.log(user);
  user.updateProfile({
    photoURL: url,
  }).then(() => {
    campoFoto.src = url
  });
}

// obtencion de post para hacerlos visibles en pantalla
export const obtenerPosts = (callback) => firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot(callback);

// creacion de una base de datos posts usuarios
export const guardarPosts = (mensaje, date, displayName, imagen, likes, userId, email) => {
  const colleccionPost = firebase.firestore().collection('posts');
  return colleccionPost.doc().set({
    mensaje: mensaje,
    date,
    user: displayName,
    userId,
    imagen: imagen,
    likes,
    correo: email,
  });
};

export const nuevoPost = (posteditado, id) => {
  let editar = firebase.firestore().collection('posts').doc(id);
  return editar.update({
    mensaje: posteditado,
  });
};

export const updateLikes = (id, likes) => firebase.firestore().collection('posts').doc(id).update({
  likes,
});

// eliminar post
export const eliminarPost = (id) => {
  return firebase.firestore().collection('posts').doc(id).delete();
};
