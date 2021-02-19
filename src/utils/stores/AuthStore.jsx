import { decorate, observable, action } from 'mobx';

const EMAIL = "santiagortizgue@gmail.com";
const PASS = "portfolio@2020";

class AuthStore {

    constructor(auth){
        this.auth = auth;
    }

    local_user = null;

    signInDefaultUser(){
        this.auth.signInWithEmailAndPassword(EMAIL, PASS)
        .then((user) => {
            this.local_user = user;
            //console.log(this.local_user);
        })
        .catch((error) => {
          //var errorCode = error.code;
          var errorMessage = error.message;

          console.log("Error while logIn: ", errorMessage);
        });
    }
}

decorate(AuthStore, {
    local_user: observable,
    signInDefaultUser: action,
});

export default AuthStore;