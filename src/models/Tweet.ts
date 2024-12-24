import { randomUUID } from "crypto"
import { tweets } from '../database/tweet'
import { users } from '../database/user'
import { TweetType } from '../types/types'
import { User } from "./User"
// import { replies } from '../database/riplies'
import { Reply } from './Riply'
import { Like } from "./Like"
import { likes } from "../database/likes"



export class Tweet {
    private readonly _id: string
    private _likes: string[] = []
    private _replies: Tweet[] = []
    constructor(
        private _user: User,
        private _content: string,
        private _type: TweetType = TweetType.normal 
    ) {this._id = randomUUID(), this._replies = []} 

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

    get replies(): Tweet[] {
        return this._replies;
    }


    reply(tweet: Tweet) {
        this._replies.push(tweet)
        // console.log(`${user.userName} respondeu: ${content}`)
    }



    // like(user: User) {
    //     this._likes.push(user.id)
    // }

    like(user: User) {
        const newLike = new Like(user, this)
        const validateLike = likes.some(like => like.user.id === user.id && like.tweet.id === this.id)
        if (validateLike) {
          console.log(`${user.userName} already liked this tweet.`);
        } else {
          likes.push(newLike)
        }
      }


    


    // show() {
    //     const firstLike = this._likes[0]
    //     const usuerFirstLike = users.find(user => user.id === firstLike)

    //     console.log(`@${this.user.userName}: ${this.content}`)

    //     if (this._likes.length > 1) {
    //         if (usuerFirstLike) { 
    //             console.log(`[@${usuerFirstLike.nome} and the ${this._likes.length - 1} user liked this]`)
    //             if (this._replies.length >= 1) {
    //                 this._replies.forEach(reply => {
    //                     console.log(`  >@${reply.user.userName}: ${reply.content}`)
    //                     if (reply._replies.length >= 1) {
    //                         reply._replies.forEach(reply01 => {
    //                             console.log(`    >@${reply01.user.userName}: ${reply01.content}`)
    //                         })
    //                     }
                        
    //                 })
    //             }
    //         } else {
    //             console.log(`[${this._likes.length} likes]`)
    //         }
    //     } else if (this._likes.length === 1) {
    //         if (usuerFirstLike) {
    //             console.log(`[@${usuerFirstLike.nome} liked]`)
    //         } else {
    //             console.log(`[1 like]`)
    //         }
    //         if (this._replies.length >= 1) {
    //             this._replies.forEach(reply => {
    //                 console.log(`  >@${reply.user.userName}: ${reply.content}`)
    //             })
    //         }
    //     } else {
    //         console.log(`[${this._likes.length} likes]`)
    //         if (this._replies.length >= 1) {
    //             this._replies.forEach(reply => {
    //                 console.log(`  >@${reply.user.userName}: ${reply.content}`)
    //             })
    //         }
    //     }  
    // }

    show() {
        const TweetLikes = likes.filter(like => like.tweet.id === this.id)
        const firstLike = TweetLikes.length > 0 ? TweetLikes[0].user.userName : null

        console.log(`@${this.user.userName}: ${this.content}`)

        if (TweetLikes.length > 1) {
            console.log(`[@${firstLike} and other ${TweetLikes.length - 1} user liked this]`)
            this.showReplies()
        } else if (TweetLikes.length === 1) {
            console.log(`[@${firstLike} liked]`)
            this.showReplies()
        } else {
            this.showReplies()
        }  
    }



    showReplies() {
        if (this.replies.length > 0) {
            this.replies.forEach(reply => {
              console.log(`    >@${reply.user.userName}: ${reply.content}`)
              if (reply.replies.length > 0) {
                reply.replies.forEach(reply2 => {
                    console.log(`      >@${reply2.user.userName}: ${reply2.content}`)
                })
              }
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