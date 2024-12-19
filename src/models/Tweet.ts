import { randomUUID } from "crypto"
import { tweets } from '../database/tweet'
import { users } from '../database/user'
import { TweetType } from '../types/types'
import { User } from "./User"
import { riplies } from '../database/riplies'
import { Reply } from './Riply'



export class Tweet {
    private readonly _id: string
    private readonly _likes: number[]
    constructor(
        private _user: User,
        private _conteudo: string,
        private _tipo: TweetType
    ) {this._id = randomUUID(), this._likes = []}

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

    public tweetReply(user: User, ) {

    }

    toJson() {
        return {
            id: this._id,
            user: this._user,
            conteudo: this._conteudo,
            tipo: this._tipo
        }
    }
}