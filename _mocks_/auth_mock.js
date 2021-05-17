const auth = () => {
    return {
      createUserWithEmailAndPassword: (email, password) => {
        return new Promise((resolve) => {
          resolve({
            isNewUser: true,
            Email: email,
            Pasword: password,
          });
        });
      },
      signInWithEmailAndPassword: (email, password) => {
        return new Promise((resolve) => {
          resolve({
            operationType: "signIn",
            Email: email,
            Pasword: password,
          });
        });
      },
  };
};
  
const firebase = {
  auth: auth,
  };
  
  export default jest.fn(() => {
    return firebase;
  });