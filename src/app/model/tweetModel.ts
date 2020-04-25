import { User } from './user';


export class Tweet {
    constructor(public id: number, public user: User, public  text:string ) {
    }

  
}
