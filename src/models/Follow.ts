import { randomUUID } from 'crypto'
import { User } from './User'
import { users } from '../database/user'
import { followers } from '../database/followers'

export class Follow {
    private readonly _id: string
    private _userFollower: User
    private _userFollowing: User

    constructor(
        userFollower: User,
        userFollowing: User
    ) {
        this._id = randomUUID()
        this._userFollower = userFollower
        this._userFollowing = userFollowing
    }

    get id() {
        return this._id
    }

    get userFollower() {
        return this._userFollower
    }

    get userFollowing() {
        return this._userFollowing
    }

    toJson() {
        return {
            id: this._id,
            userFollower: this._userFollower,
            userFollowing: this._userFollowing
        }
    }


    public followUser(user: User) {
        const validateUser = followers.find(i => i.userFollower === this._userFollower && i.userFollowing === user) 
        if (validateUser) {
            console.log('Erro! Você já segue esse usuário!')
            return
        }

        const newFollow = new Follow(this._userFollower, user)
        followers.push(newFollow)

        console.log(`${this._userFollower.nome} começou a seguir ${user.nome}`)
    }
}