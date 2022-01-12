export class Quote {
    public vote: number
    constructor (public publisher: string,public author: string, public quote: string,public date: Date ) {
        this.vote = 0
    }
}
