// static jo hai wo java me jo hai uska ulta hai 
// static matlab access denied

class User {
    constructor(username){
        this.username=username
    }

    static createId(){
        return 123
    }
}

const oneUser = new User("Arfat")

console.log(oneUser.createId());

// note extend bhi kiye access nahi hoga