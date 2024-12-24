import { Tweet } from './models/Tweet'
import { User } from './models/User'
import { CreateUsers } from './types/types'
import { TweetType } from './types/types'
import { Reply } from './models/Riply'
import { tweets } from './database/tweet'
import { replies } from './database/riplies'
import { users } from './database/user'
import { likes } from './database/likes'


const usuario: CreateUsers = {
    nome: 'theo',
    email: 'theo@gmail.com',
    userName: 'theo lucca',
    senha: 'theo123'
}


// criando usuários
const user01 = new User('Theo', 'theo@gmail.com', 'Theo lucca', 'theo123')
const user02 = new User('Wesley', 'Wesley@gmail.com', 'Wesley souza', 'wesley123')
const user03 = new User('Fulano', 'fulano@hotmail.com', 'Fulano silva', '123fulano')
const user04 = new User('Ciclano', 'ciclano@hotmail.com', 'Ciclano pereira', '123ciclano')
const user05 = new User('Beltrano', 'beltrano@hotmail.com', 'Beltrano santos', '123beltrano')
const user06 = new User('Maria', 'maria@hotmail.com', 'Maria barreto', '123maria')

// incluindo usuários no array users[] e verifica se username é único 
user01.validateUser()
user01.validateUser()
user02.validateUser()
user04.validateUser()
user05.validateUser()
user06.validateUser()

user03.validateUser()


// criando tweets
const tweet01 = new Tweet(user01, `Hello world!`)
const tweet02 = new Tweet(user01, `gosto de comer churrasco`)
const tweet03 = new Tweet(user01, `hoje está um lindo dia`)
const tweet04 = new Tweet(user01, `partiu praia!`)
const tweet05 = new Tweet(user02, `hey galera :D`)
const tweet06 = new Tweet(user02, `me gusta la siestas!`)
const tweet07 = new Tweet(user02, `bora billll`)
const tweet08 = new Tweet(user03, `A vida é bella`)
const tweet09 = new Tweet(user03, `brasil é muito bom`)
const tweet10 = new Tweet(user04, `vamos aprnder programação`)
const tweet11 = new Tweet(user04, `eu sou bom no que faço!`)
const tweet12 = new Tweet(user05, `procurando nemo...`)
const tweet13 = new Tweet(user05, `boa noite`)
const tweet14 = new Tweet(user06, `ola pessoas`)
const tweet15 = new Tweet(user06, `comendo sishi`)
const tweet16 = new Tweet(user06, `amo animais!`)
const tweet17 = new Tweet(user02, `Feliz natal e feliz ano novo!!!`)



// criando tweet replies 
const reply01 = new Tweet(user01, 'hey oi', TweetType.reply)
const reply02 = new Tweet(user02, 'eu tambem amo!', TweetType.reply)
const reply03 = new Tweet(user03, 'olá como estas?', TweetType.reply)
const reply04 = new Tweet(user02, 'boraaa fí do billl', TweetType.reply)
const reply05 = new Tweet(user04, 'gosto de typescript!', TweetType.reply)
const reply06 = new Tweet(user05, 'parabéns, você é muito bom mesmo!', TweetType.reply)
const reply07 = new Tweet(user06, 'eu sei falar baleiês...', TweetType.reply)
const reply08 = new Tweet(user06, 'buenas noches', TweetType.reply)


// metodo 01 user sendTweet()   ***********
user01.sendTweet(tweet01)
user01.sendTweet(tweet02)
user01.sendTweet(tweet03)
user01.sendTweet(tweet04)
user02.sendTweet(tweet05)
user02.sendTweet(tweet06)
user02.sendTweet(tweet07)
user03.sendTweet(tweet08)
user03.sendTweet(tweet09)
user04.sendTweet(tweet10)
user04.sendTweet(tweet11)
user05.sendTweet(tweet12)
user05.sendTweet(tweet13)
user06.sendTweet(tweet14)
user06.sendTweet(tweet15)
user06.sendTweet(tweet16)
user02.sendTweet(tweet17)



// metodo 02 user follow()   ***********
user01.follow(user02)
user01.follow(user03)
user02.follow(user01)
user02.follow(user03)
user01.follow(user04)
user01.follow(user05)
user01.follow(user06)
user02.follow(user04)
user03.follow(user02)
user05.follow(user02)
user02.follow(user05)
user03.follow(user06)
user06.follow(user01)
user02.follow(user06)


// metodo 03 user showfeed()   ***********
user03.showFeed()


// metodo 04 user showTweets()   ***********
// user01.showTweets()


// --------------------------------------------

// metodo 01 tweet reply()   ***********
tweet01.reply(reply03)
reply01.reply(reply02)
tweet02.reply(reply02)
tweet07.reply(reply04)
tweet10.reply(reply05)
tweet11.reply(reply06)
tweet12.reply(reply07)
tweet13.reply(reply08)




//metodo 02 tweet like()   ***********
tweet01.like(user02)
tweet01.like(user01)
tweet01.like(user03)
tweet02.like(user03)

// console.log(likes)


// metodo 03 tweet show()   ***********
// tweet01.show()
// tweet02.show()
// tweet03.show()


// metodo 04 tweet showReplies()   ***********
// tweet01.showReplies()
// tweet02.showReplies()
// tweet03.showReplies()

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


