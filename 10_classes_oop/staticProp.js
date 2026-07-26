class user {
    constructor (username){
        this.username = username
    }

    logMe (){
        console.log(`Username is ${this.username}`);
    }

    static createId (){                 // cannot access by all (static)
        return `123`
    }
}

const nitesh = new user ('Nitesh')
// console.log(nitesh.createId())

class teacher extends user {
    constructor(username , email){
        super (username)                    // allow direct calling another class
        this.email = email;
    }
}

const iphone = new teacher('iphone', 'i@phone.com')
iphone.logMe();

// console.log(iphone.createId());          // cannot access by all (static)
