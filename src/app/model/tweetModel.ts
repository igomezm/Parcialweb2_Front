import { User } from './user';


export class Tweet {
    constructor(public idPost: number, public user: User, public  message:string, public published_date: Date) {
    }
}

