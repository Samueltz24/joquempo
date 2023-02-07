const ppt= (num) => Math.floor(Math.random()*num)
let pontopes=0
let pontopc=0
let com=document.getElementById('com')
let res=document.getElementById('res')
function pe(){
  let pc=ppt(3)
  let dados=document.getElementsByName('PePaTe')
  let com=document.getElementById('com')
  let pes=document.getElementById('pes')
  let pessoa=document.getElementById('ppessoa')
  let ppc=document.getElementById('ppc')
  res.style.backgroundColor=`red`
  res.style.border=`1px solid #000`
  res.innerHTML=`${pc} <br>`
  pessoa.innerHTML=`${pontopes}`
  ppc.innerHTML=`${pontopc}`
  
  if(dados[0].checked){
    pes.src=pedra()
    if(pc == 0 ) {
      res.innerHTML=Empate()
      if(pc ==0){
        com.innerHTML=``
        com.src=pedra()
      }
    }
    else if(pc == 1) {
      PontoC()
      res.innerHTML=ComputadorV()
      if(pc == 1){
        com.src=papel()
      }
    }
    else if(pc == 2) {
      PontoP()
      res.innerHTML=JogadorV()
      if(pc ==2 ){
        com.src=tesoura()
      }
    }
  }
  else if(dados[1].checked) {
    pes.src=papel()
    if(pc == 0 ) {
      PontoP()
      res.innerHTML=JogadorV()
      if(pc == 0){
        com.src=pedra()
      }
    }
    else if(pc == 1 ) {
      res.innerHTML=Empate()
      if(pc == 1){
        com.src=papel()
      }
    }
    else if(pc == 2 ) {
      PontoC()
      res.innerHTML=ComputadorV()
      if(pc == 2){
        com.src=tesoura()
      }
    }
  }
  else if(dados[2].checked) {
    pes.src=tesoura()
    if(pc == 0 ) {
      PontoC()
      res.innerHTML=ComputadorV()
      if(pc == 0){
        com.src=pedra()
      }
    }
    else if(pc == 1 ){
      PontoP()
      res.innerHTML=JogadorV()
      if(pc == 1){
        com.src=papel()
      }
    }
    else if(pc == 2 ) {
      res.innerHTML=Empate()
      if(pc == 2){
        com.src=tesoura()
      }
    }
  }
}


/*imagem do pedra papel e tesoura*/
function pedra(){
   return src='foto/pedra.jpg'
}

function papel(){
   return src='foto/papel.jpg'
}

function tesoura(){
   return src='foto/tesoura.jpg'
}

/*resultado da partida*/
function JogadorV(){
   return 'jogador venceu'
}

function ComputadorV(){
   return 'computador venceu'
}

function Empate(){
   return 'deu empate'
}
/*ponto do jogo */
function PontoP(){
   return pontopes +=1
}

function PontoC(){
   return pontopc +=1
}
/*resetar o resultado da partida*/
function resetar() {
   ppessoa.innerHTML = `${pontopes=0}`
   ppc.innerHTML = `${pontopc=0}`
}
