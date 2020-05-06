export class LoginResponse {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public password: string,
        public type: string
    ) {}
}