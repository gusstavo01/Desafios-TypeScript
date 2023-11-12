"use strict";
// Como podemos melhorar o esse código usando TS? 
//DESAFIO 02
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Padeiro"] = 0] = "Padeiro";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Professor"] = 2] = "Professor";
    Profissao[Profissao["Programador"] = 3] = "Programador";
})(Profissao || (Profissao = {}));
let pessoa2 = {
    nome: 'Pedro',
    idade: 20,
    profissao: Profissao.Padeiro
};
let pessoa3 = {
    nome: 'Gustavo',
    idade: 21,
    profissao: Profissao.Programador
};
console.log(pessoa3);
