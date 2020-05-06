export class BookTransactionResponse {
    constructor(
        public transactionId: number,
        public registrationId: number,
        public issueDate: any,
        public returnDate: any,
        public fine: number,
        public bookId: number,
        public id: number
    ) {}
}