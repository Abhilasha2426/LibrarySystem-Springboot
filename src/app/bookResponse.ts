export class BookResponse {
    constructor(
        public bookId: number,
        public bookName: string,
        public author1: string,
        public author2: string,
        public publisher: string,
        public yerOfPublication: string
    ) {}
}
