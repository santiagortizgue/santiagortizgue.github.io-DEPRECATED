import { decorate, observable, action } from 'mobx';

class AuthStore {

    constructor(auth){
        this.auth = auth;
    }

    user = null;

    signInDefaultUser(){

    }


}

decorate(AuthStore, {
    user: observable,
    signInDefaultUser: action,
});

export default AuthStore;