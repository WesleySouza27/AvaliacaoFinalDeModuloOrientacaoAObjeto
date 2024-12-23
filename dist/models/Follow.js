"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Follow = void 0;
const crypto_1 = require("crypto");
const followers_1 = require("../database/followers");
class Follow {
    constructor(userFollower, userFollowing) {
        this._id = (0, crypto_1.randomUUID)();
        this._userFollower = userFollower;
        this._userFollowing = userFollowing;
    }
    get id() {
        return this._id;
    }
    get userFollower() {
        return this._userFollower;
    }
    get userFollowing() {
        return this._userFollowing;
    }
    toJson() {
        return {
            id: this._id,
            userFollower: this._userFollower,
            userFollowing: this._userFollowing
        };
    }
    followUser(user) {
        const validateUser = followers_1.followers.find(i => i.userFollower === this._userFollower && i.userFollowing === user);
        if (validateUser) {
            console.log('Erro! Você já segue esse usuário!');
            return;
        }
        const newFollow = new Follow(this._userFollower, user);
        followers_1.followers.push(newFollow);
        console.log(`${this._userFollower.nome} começou a seguir ${user.nome}`);
    }
}
exports.Follow = Follow;
