const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt = "emoji festejando" />'
const imgReprovado = '<img src="./imagens/reprovado.png" alt = "emoji decepcionado" />'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="Resultado Aprovado">Aprovado</span>';
const spanReprovado = '<span class="Resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("digite a nota minima :"));

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha () {
    const inputNomeAtividade = document.getElementById('Nome-atividade');
    const inputNotaAtividade = document.getElementById('Nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    }else{

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
    linha +='</tr>';

    linhas += linha;
    }
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const CorpoTabela = document.querySelector('tbody');
    CorpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal () {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima? spanAprovado : spanReprovado ;

}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0 ; i < notas.length ; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas/notas.length;
}