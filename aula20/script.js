var idade = document.getElementById('idade').innerHTML;
function enviaResposta() {
    var idade = document.getElementById('inputidade').value;
    if (idade < 1) {
        document.getElementById('resposta').innerHTML = 'idade invalida';
    }
    else if (idade > 0 && idade < 10) {
        document.getElementById('resposta').innerHTML = 'é uma criança';
    }
    else if (idade > 9 && idade < 15) {
        document.getElementById('resposta').innerHTML = 'é uma adolescente';
    }
    else if (idade > 14 && idade < 24) {
        document.getElementById('resposta').innerHTML = 'é um jovem';
    }
    else if (idade > 24 && idade < 60) {
        document.getElementById('resposta').innerHTML = 'é um adulto';
    }
    else if (idade > 59) {
        document.getElementById('resposta').innerHTML = 'é um idoso';
    }
    else {
        document.getElementById('resposta').innerHTML = 'system error';
    }
}