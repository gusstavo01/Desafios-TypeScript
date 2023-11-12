// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface Employee {
    code: number,
    name:string
}

let employee2: Employee = {
    code:2010,
    name: 'Gustavo'
}

console.log(employee2.code);