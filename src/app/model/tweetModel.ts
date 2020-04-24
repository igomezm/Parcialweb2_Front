import { User } from './user';


export class Tweet {
    constructor(public id: number, public user: User, public  text:string ) {
    }

    static fromJson(json): Tweet {
      return new Tweet (json.id, json.user, json.text);
    }
}
