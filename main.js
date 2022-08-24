const ppt= (num) => Math.floor(Math.random()*num)
let pontopes=0
let pontopc=0
function pe(){
  let pc=ppt(3)
  let dados=document.getElementsByName('PePaTe')
  let res=document.getElementById('res')
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
    pes.src=`foto/pedra.jpg`
    if(pc == 0 ) {
      res.innerHTML=`empate`
      if(pc ==0){
        com.innerHTML=``
        com.src='foto/pedra.jpg'
      }
    }
    else if(pc == 1) {
      pontopes+=1
      res.innerHTML=`jogador venceu`
      if(pc == 1){
        com.src=`foto/tesoura.jpg`
      }
    }
    else if(pc == 2) {
      pontopc+=1
      res.innerHTML=`computador ganhou`
      if(pc ==2 ){
        com.src=`foto/papel.jpg`
      }
    }
  }
  else if(dados[1].checked) {
    pes.src=`foto/papel.jpg`
    if(pc == 0 ) {
      pontopc+=1
      res.innerHTML=`computador ganhou`
      if(pc == 0){
        com.src=`foto/tesoura.jpg`
      }
    }
    else if(pc == 1 ) {
      res.innerHTML=`empate`
      if(pc == 1){
        com.src=`foto/papel.jpg`
      }
    }
    else if(pc == 2 ) {
      pontopes+=1
      res.innerHTML=`jogador venceu`
      if(pc == 2){
        com.src=`foto/pedra.jpg`
      }
    }
  }
  else if(dados[2].checked) {
    pes.src=`foto/tesoura.jpg`
    if(pc == 0 ) {
      pontopc+=1
      res.innerHTML=`computador venceu`
      if(pc == 0){
        com.src=`foto/pedra.jpg`
      }
    }
    else if(pc == 1 ){
      pontopes+=1
      res.innerHTML=`jogador venceu`
      if(pc == 1){
        com.src=`foto/papel.jpg`
      }
    }
    else if(pc == 2 ) {
      res.innerHTML=`empate`
      if(pc == 2){
        com.src=`foto/tesoura.jpg`
      }
    }
  }
}
/*const ppt = (num) => Math.floor(Math.random() * num)
let a = ppt(3)*/
/*pedra papel tesoura*/
