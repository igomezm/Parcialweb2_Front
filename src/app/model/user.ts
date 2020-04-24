import { Tweet} from './tweetModel';

export class User {
    constructor(public id: number, public username: string, public pass: string,
                public tweet: Array<Tweet>) {
    }

    static fromJson(json): User {
      return new User(json.id, json.username, json.pass, json.tweet);
    }
}
