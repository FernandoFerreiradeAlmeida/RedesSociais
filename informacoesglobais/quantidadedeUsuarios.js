async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json?authuser=0'

const res = await fetch(url)
const dados = await res.json()

console.log(dados)
const nomeDasRedes = Object.keys(dados)
const quantidadeUsuarios = Object.values(dados)
}
quantidadeUsuarios()