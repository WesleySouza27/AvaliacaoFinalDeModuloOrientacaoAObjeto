"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const crypto_1 = require("crypto");
const types_1 = require("../types/types");
class Tweet {
    constructor(_user, _conteudo) {
        this._user = _user;
        this._conteudo = _conteudo;
        this._id = (0, crypto_1.randomUUID)(), this._likes = [], this._tipo = types_1.TweetType.normal;
    }
    get user() {
        return this._user;
    }
    get id() {
        return this._id;
    }
    get conteudo() {
        return this._conteudo;
    }
    get tipo() {
        return this._tipo;
    }
    setTipo(tipo) {
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
        };
    }
}
exports.Tweet = Tweet;
