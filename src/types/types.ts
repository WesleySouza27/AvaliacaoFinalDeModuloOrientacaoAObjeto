export interface CreateUsers {
    nome: string
    email: string
    userName: string
    senha: string
}


export enum TweetType {
    normal = 'Normal',
    reply = 'Reply'
}