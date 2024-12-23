import { Tweet } from './models/Tweet'
import { User } from './models/User'
import { CreateUsers } from './types/types'
import { TweetType } from './types/types'
import { Reply } from './models/Riply'
import { tweets } from './database/tweet'
import { replies } from './database/riplies'
import { users } from './database/user'


const usuario: CreateUsers = {
    nome: 'theo',
    email: 'theo@gmail.com',
    userName: 'theo lucca',
    senha: 'theo123'
}


// criando usuários
const user01 = new User('theo', 'theo@gmail.com', 'theo lucca', 'theo123')
const user02 = new User('wesley', 'Wesley@gmail.com', 'wesley souza', 'wesley123')
const user03 = new User('Fulano', 'fulano@hotmail.com', 'Fulano silva', '123fulano')

// incluindo usuários no array users[]
users.push(user01)
users.push(user02)
users.push(user03)


// criando tweets
const tweet01 = new Tweet(user01, `Hello world!`)
const tweet04 = new Tweet(user01, `gosto de comer churrasco`)
const tweet05 = new Tweet(user01, `hoje está um lindo dia`)
const tweet06 = new Tweet(user01, `partiu praia!`)
const tweet02 = new Tweet(user02, `hey galera :D`)
const tweet03 = new Tweet(user03, `gosto de viajar!`)

// metodo 01 user sendTweet()
user01.sendTweet(tweet01)
user01.sendTweet(tweet04)
user01.sendTweet(tweet05)
user01.sendTweet(tweet06)
user02.sendTweet(tweet02)
user03.sendTweet(tweet03)



// metodo 02 user follow()
user01.follow(user02)
user01.follow(user03)
user02.follow(user01)
user02.follow(user03)
user03.follow(user01)
user03.follow(user02)

console.log(user01.following)
console.log(user02.following)
console.log(user03.following)

// metodo 03 user showfeed()
user01.showFeed()


// metodo 04 user showTweets()
user01.showTweets()


// --------------------------------------------


// metodo 01 tweet reply()
tweet01.reply(user02, 'hey theo!')




//metodo 02 tweet like()
tweet01.like(user02)
tweet01.like(user03)
tweet02.like(user03)


// metodo 03 tweet show()
tweet01.show()
tweet02.show()
tweet03.show()


// metodo 04 tweet showReplies()
tweet01.showReplies()
tweet02.showReplies()
tweet03.showReplies()

// console.log(riplies)



// user01.tweetReply('isso é um riply', tweets[0])
// user01.createUser(usuario)
// user02.createUser(user02)
// user02.createUser(user03)
// user01.listarUsers()
// const replay01 = new Reply(tweets[0], user01, tweets[1], user02)
// console.log(replay01)
// user01.listTweetsComId()
// const user01 = User.createUser(usuario)
// const user02 = User.createUser(usuario)

// user01.listarUsers()


