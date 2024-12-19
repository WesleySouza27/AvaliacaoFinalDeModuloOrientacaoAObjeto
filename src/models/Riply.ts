import { randomUUID } from "crypto";
import { Tweet } from "./Tweet";
import { User } from "./User";

export class Reply {
    private readonly _id: string
    constructor(
        private _tweetOrigin: Tweet,
        private _userOrigin: User,
        private _tweetReply: Tweet,
        private _userReply: User
    ) {
        this._id = randomUUID()
    }

    get id() {
        return this._id
    }

    get tweetOrigin() {
        return this._tweetOrigin
    }

    get userOrigin() {
        return this._userOrigin
    }

    get tweetReply() {
        return this._tweetReply
    }

    get userReply() {
        return this._userReply
    }

}