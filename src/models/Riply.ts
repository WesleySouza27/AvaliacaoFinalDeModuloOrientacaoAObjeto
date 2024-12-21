import { randomUUID } from "crypto";
import { Tweet } from "./Tweet";
import { User } from "./User";
import { tweets } from '../database/tweet'
import { riplies } from '../database/riplies'

export class Reply {
    private readonly _id: string
    constructor(
        private _tweetOrigin: Tweet,
        private _tweetReply: Tweet,
    ) {
        this._id = randomUUID()
    }

    get id() {
        return this._id
    }

    get tweetOrigin() {
        return this._tweetOrigin
    }

    get tweetReply() {
        return this._tweetReply
    }


    toJson() {
        return {
            id: this._id,
            tweetOrigin: this._tweetOrigin,
            tweetReply: this._tweetReply
        }
    }

}