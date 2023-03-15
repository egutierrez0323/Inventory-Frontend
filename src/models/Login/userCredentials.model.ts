export class UserCredentials {

    constructor(user: string,password: string) {
        this.username = user;
        this.password = password;
    }

    username: string;
    password: string;
}