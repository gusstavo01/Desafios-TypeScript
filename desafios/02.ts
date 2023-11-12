// Como podemos melhorar o esse código usando TS? 
//DESAFIO 02

interface Pessoa {
    nome:string,
    idade:number,
    profissao?:Profissao
}

enum Profissao {
Padeiro,
Atriz,
Professor,
Programador

}

let pessoa2: Pessoa = {
   nome:'Pedro',
   idade:20,
   profissao: Profissao.Padeiro

}

 let pessoa3: Pessoa = {
    nome:'Gustavo',
    idade:21,
    profissao:Profissao.Programador

 }
 console.log(pessoa3 );