import { randomUUID } from "crypto"
import { tweets } from '../database/tweet'
import { users } from '../database/user'
import { TweetType } from '../types/types'
import { User } from "./User"
// import { replies } from '../database/riplies'
import { Reply } from './Riply'



export class Tweet {
    private readonly _id: string
    private _likes: string[] = []
    private _replies: Tweet[] = []
    constructor(
        private _user: User,
        private _content: string,
        private _type: TweetType = TweetType.normal 
    ) {this._id = randomUUID(), this._type = _type} 

    get user(): User {
        return this._user
    }

    get id(): string {
        return this._id
    }

    get content(): string {
        return this._content
    }

    get type(): TweetType {
        return this._type
    }

    set type(type: TweetType) {
        this._type = type
    }

    set replies(replies: Tweet[]) {
        this._replies = replies

    }


    reply(user: User, content: string) {
        const newReply = new Tweet(user, content, TweetType.reply)
        this._replies.push(newReply)
        // console.log(`${user.userName} respondeu: ${content}`)
    }



    like(user: User) {
        this._likes.push(user.id)
    }


    


    show() {
        const firstLike = this._likes[0]
        const usuerFirstLike = users.find(user => user.id === firstLike)

        console.log(`@${this.user.userName}: ${this.content}`)

        if (this._likes.length > 1) {
            if (usuerFirstLike) {
                console.log(`[@${usuerFirstLike.nome} and the ${this._likes.length - 1} user liked this]`)
                if (this._replies.length >= 1) {
                    this._replies.forEach(reply => {
                        console.log(`  >@${reply.user.userName}: ${reply.content}`)
                    })
                }
            } else {
                console.log(`[${this._likes.length} likes]`)
            }
        } else if (this._likes.length === 1) {
            if (usuerFirstLike) {
                console.log(`[@${usuerFirstLike.nome} liked]`)
            } else {
                console.log(`[1 like]`)
            }
            if (this._replies.length >= 1) {
                this._replies.forEach(reply => {
                    console.log(`  >@${reply.user.userName}: ${reply.content}`)
                })
            }
        } else {
            console.log(`[${this._likes.length} likes]`)
            if (this._replies.length >= 1) {
                this._replies.forEach(reply => {
                    console.log(`  >@${reply.user.userName}: ${reply.content}`)
                })
            }
        }  
    }



    showReplies() {
        console.log(`@${this.user.userName}: ${this.content}`)

        if (this._replies.length <= 0) {
            console.log(` * Não há replies para este tweet.`)
        } else {
            this._replies.forEach(reply => {
                console.log(`  >@${reply.user.userName}: ${reply.content}`)
            })
        }
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
            content: this._content,
            type: this._type
        }
    }
}