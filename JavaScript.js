const gritar = () => {
    alert('olaaaaaa')
}

const perguntar = () => {
    var nome;
    nome = prompt('Qual seu nome ?')
    alert('Olá ' + nome); 
}
const mudar = () => {
    var h1 = document.getElementsByTagName('h1')
    if (h1[0].innerText == 'JavaScript'){
        h1[0].innerText = 'Bicho não é que deu certo rsrsrs'

    }else{
        h1[0].innerText = 'JavaScript'
    }
    }
    function incrementar  (){
        var p1 = document.getElementById('p1')
        p1.innerText = parseInt(p1.innerText) + 1
        console.log(p1)
    }