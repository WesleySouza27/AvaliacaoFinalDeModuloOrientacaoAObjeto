import { randomUUID } from "crypto"
import { tweet } from '../dataverse/tweet'
import { users } from '../dataverse/user'


export class Tweet {
    private _id: string

    constructor(
        private _conteudo: string,
        private _tipo: string
    ) {this._id = randomUUID()}

    get id() {
        return this._id
    }

    get conteudo() {
        return this._conteudo
    }

    get tipo() {
        return this._tipo
    }

    toJson() {
        return {
            id: this._id,
            conteudo: this._conteudo,
            tipo: this._tipo
        }
    }
}