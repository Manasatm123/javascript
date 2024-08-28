let datas = [
    {
        id: 1,
        name: "manasa",
        age: 19,
    },

    {
        id: 2,
        name: "sunisha",
        age: 20,
    },

    {
        id : 3,
        name:"anu",
        age : 19,
    },

]

function findUser(id){
    let user = datas.find((user) => {return user.id == id});

    return user;
}

let user = findUser(1);
console.log("user :",user);

function findUser1(id){
    let user = datas.find ((user) => {return user.id === id});
    setTimeout(()  => {
        return user;
},3000);
}

let user1 = findUser1(1);
console.log("user1 :",user1);



function findUser2(id) {

    return new Promise((resolve, reject) => {

        let user = datas.find((user) => { return user.id === id}); // Ensure this return is on the same line

        setTimeout(() => {


            if (user) {
                resolve(user);
            } else {
                reject("user not found");
            }
        }, 1000); // Delay for 3 seconds
    });
}



findUser2(1)
.then((user)=> {
    console.log("user :",user);

    let updated_user = {...user,name: user.name + " tm" }
    return updated_user;
})
.then((updated_user)=>{
    console.log("updated_user:",updated_user)

    let updated_user1 = {...updated_user,age : updated_user.age + 1}
    return updated_user1
})

.then((updated_user1)=>{
    console.log("update_user1 :",updated_user1);

    return "end";
})

.then((meassage => {
    console.log("message :",meassage)
}))
.catch((error) =>{
    console.log("error",error);
})



