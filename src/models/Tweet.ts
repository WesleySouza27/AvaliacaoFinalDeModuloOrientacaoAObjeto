import { randomUUID } from "crypto"
import { tweets } from '../database/tweet'
import { users } from '../database/user'
import { TweetType } from '../types/types'
import { User } from "./User"
import { riplies } from '../database/riplies'
import { Reply } from './Riply'



export class Tweet {
    private readonly _id: string
    private _likes: number[]
    private _tipo: TweetType
    constructor(
        private _user: User,
        private _conteudo: string,
    ) {this._id = randomUUID(), this._likes = [], this._tipo = TweetType.normal}

    get user() {
        return this._user
    }

    get id() {
        return this._id
    }

    get conteudo() {
        return this._conteudo
    }

    get tipo() {
        return this._tipo
    }

    setTipo(tipo: TweetType) {
        this._tipo = tipo;
    }

    // public tweetReply(user: User, conteudo: string, tweeter: Tweet) {
    //     const newTweetReply = new Tweet(user, conteudo)
    //     newTweetReply._tipo = TweetType.reply

    //     const tweetReply = new Reply(tweeter, this._user, newTweetReply, user)

    //     riplies.push(tweetReply)
    // }

    toJson() {
        return {
            id: this._id,
            user: this._user,
            conteudo: this._conteudo,
            tipo: this._tipo
        }
    }
}