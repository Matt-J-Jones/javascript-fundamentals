class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

class UserBase {
  constructor(users) {
    this.users = users
  }
  count() {
    return this.users.length;
  }

  getNames() {
    let return_array = []
    this.users.forEach((user) => { 
      return_array.push(user.getName()); 
    })

    return return_array
  }

  getIntroductions() {
    let return_array = []
    this.users.forEach((user) => { 
      return_array.push(user.getIntroduction()); 
    })

    return return_array
  }
}

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

const userbase = new UserBase(users)

console.log(userbase.count());
console.log(userbase.getNames());
console.log(userbase.getIntroductions());

module.exports = User;
module.exports = UserBase;