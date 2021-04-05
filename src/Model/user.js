let User = {
    id: 1,
    name: "Vitor",
    avatar: "https://github.com/vitor-vaz.png"
}

module.exports = {
    get(){
        return User;
    },

    update(newUser){
        User = newUser;
    }
}