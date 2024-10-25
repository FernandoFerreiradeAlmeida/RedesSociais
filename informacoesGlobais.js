const url = 'https://raw.githubusercontent.com/guilhermeonra'
async function visualizarInformacoesGlobais() {
   const res = await fetch(url) 
   const dados = await res.json()
   console.log(dados);
   const paragrafo = document.createElement('p')
   paragrafo.classList.add('graficos-container_texto')

   paragrafo.innerHTML=Você sabia que no mundo tem <span>${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média
$(dados.tempo-medio) horas conectadas.'
console.log(paragrafo)

   const container=document.getElementById('graficos-container')
   container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()
