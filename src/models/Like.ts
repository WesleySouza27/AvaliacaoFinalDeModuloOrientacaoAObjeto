import { User } from "./User"

export class Like {
    constructor(private _id: string = '') {}

    get id(): string {
        return this._id
    }

    set id(user: User) {
        this._id = user.id
    }
}