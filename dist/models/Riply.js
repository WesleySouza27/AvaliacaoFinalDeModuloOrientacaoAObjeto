"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reply = void 0;
const crypto_1 = require("crypto");
class Reply {
    constructor(_tweetOrigin, _tweetReply) {
        this._tweetOrigin = _tweetOrigin;
        this._tweetReply = _tweetReply;
        this._id = (0, crypto_1.randomUUID)();
    }
    get id() {
        return this._id;
    }
    get tweetOrigin() {
        return this._tweetOrigin;
    }
    get tweetReply() {
        return this._tweetReply;
    }
    toJson() {
        return {
            id: this._id,
            tweetOrigin: this._tweetOrigin,
            tweetReply: this._tweetReply
        };
    }
}
exports.Reply = Reply;
