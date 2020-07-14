import firebase from "firebase/app";
import "firebase/auth"

// import { setFirebaseCookie } from "./session";

/**
 * Firebase Authentication helper functions
 */
class AuthHelper {
  constructor() {
   this.auth = firebase.auth;
  }

  signUp = async (provider, email, password) => {
    try {
      switch (provider) {
        case "password":
          return new Promise((resolve, reject) => {
            this.auth()
              .createUserWithEmailAndPassword(email, password)
              .then((result) => {
                resolve(result);
              })
              .catch((error) => {
                resolve({ error });
              });
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  forgetPass = async (email) => {
    return new Promise((resolve, reject) => {
      this.auth()
        .sendPasswordResetEmail(email)
        .then((result) => {
          resolve(true);
        })
        .catch((error) => {
          resolve({ error });
        });
    });
  };

  reauthenticate = async (currentPassword) => {
    var user = auth.currentUser;
    var cred = auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(cred);
  };

  changePassword = async (currentPassword, newPassword) =>
    new Promise((resolve, reject) => {
      try {
        this.reauthenticate(currentPassword)
          .then(() => {
            var user = auth.currentUser;
            user
              .updatePassword(newPassword)
              .then(() => {
                resolve(true);
              })
              .catch((error) => {
                resolve({ error });
              });
          })
          .catch((error) => {
            resolve({ error });
          });
      } catch (error) {
        resolve({ error });
      }
    });

  login = async (
    provider,
    email = null,
    password = null,
    phoneNumber = null
  ) => {
    try {
      switch (provider) {
        case "password":
          return new Promise((resolve, reject) => {
            this.auth()
              .signInWithEmailAndPassword(email, password)
              .then((result) => {
                resolve(result);
              })
              .catch((error) => {
                resolve({ error });
              });
          });
        case "google":
          var authProvider = new this.auth.GoogleAuthProvider();
          return this.auth().signInWithPopup(authProvider);
        case "facebook":
          var authProvider = new this.auth.FacebookAuthProvider();
          return this.auth().signInWithPopup(authProvider);
        case "twitter":
          var authProvider = new this.auth.TwitterAuthProvider();
          return this.auth().signInWithPopup(authProvider);
        case "phone":
          let appVerifier;
          appVerifier = window.recaptchaVerifier;
          return new Promise((resolve, reject) => {
            this.auth()
              .signInWithPhoneNumber(phoneNumber, appVerifier)
              .then((result) => {
                resolve(result);
              })
              .catch((error) => {
                resolve({ error });
              });
          });
      }
    } catch (error) {
      console.error(error);
    }
  };

  confirmVerification = async (confirmationResult, code) => {
    return new Promise((resolve, reject) => {
      confirmationResult
        .confirm(code)
        .then((result) => {
          resolve(result.user);
        })
        .catch(function (error) {
          resolve({ error });
        });
    });
  };

  getToken = async (User) => {
    try {
      return User.getIdToken();
    } catch (error) {
      console.log(error);
    }
  };

  // refreshToken = async () => {
  //   await auth.currentUser
  //     .getIdToken(true)
  //     .then(function (idToken) {
  //       setFirebaseCookie("id_token", idToken);
  //     })
  //     .catch(function (error) {});
  // };

  logout = async () => {
    return new Promise((resolve, reject) => {
      try {
        this.auth()
          .signOut()
          .then(() => {
            resolve(true);
          });
      } catch (error) {
        console.log(error);
        reject(false);
      }
    });
  };

  isAuthenticated = async () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = this.auth().onAuthStateChanged(
        (authUser) => {
          resolve(authUser);
          unsubscribe();
        },

        (error) => reject(error)
      );
    });
  };

  getCurrentUser = async () => {
    return this.auth.currentUser;
  };
}

export default new AuthHelper();
