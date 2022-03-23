type Prop = {
    name:string,
    age:number,
    key:number
}

export const Pessoa = (pessoa:Prop) =>{
    return(
    <li>Nome {pessoa.name}, idade {pessoa.age} anos.</li>)
}