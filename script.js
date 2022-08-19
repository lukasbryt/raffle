function sortear() {
    nulo = ''
    num2 = document.getElementById('num2').value;
    
        if (num2 === nulo || num2 === '0') {
            document.getElementById('result').style.display = 'grid'
            document.getElementById('result').innerHTML = 'Digite um número válido porra!'
        } else {
            num2 = parseInt(num2);
            resultado = Math.floor(Math.random() * num2) + 1;
            document.getElementById('result').style.display = 'grid'
            document.getElementById('result').innerHTML = 'O Nº  ' + resultado + ' ganhou!'
            document.getElementById('restart').style.display = 'grid'
        }
}

function restart() {
    document.getElementById('num2').value = ''
    document.getElementById('result').style.display = 'none'
    document.getElementById('restart').style.display = 'none'
}