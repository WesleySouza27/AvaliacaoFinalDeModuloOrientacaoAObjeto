"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
class Like {
    constructor(_id = '') {
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(user) {
        this._id = user.id;
    }
}
exports.Like = Like;
