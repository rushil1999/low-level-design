export class User {
  username: string;
  userId: string;

  constructor(username: string, userId: string) {
    this.userId = userId;
    this.username = username;
  }
}


export class Rider extends User {
  email: string;
  constructor(email: string, username: string, userId: string) {
    super(username, userId);
    this.email = email;
  }
}

export class Driver extends User {
  carNumber: string;
  constructor(carNumber: string, username: string, userId: string) {
    super(username, userId);
    this.carNumber = carNumber;
  }
}

const sampleUser1: User = new User("Rushil", "8a6e0804-2bd0-4672-b79d-d97027f9071a");
const sampleUser2: User = new User("Shah", "8a6e0804-2bd0-4672-b79d-d97027f9071b");
const sampleUser3: User = new User("ABC", "8a6e0804-2bd0-4672-b79d-d97027f9071c");

export const userData = [sampleUser1, sampleUser3, sampleUser3]



