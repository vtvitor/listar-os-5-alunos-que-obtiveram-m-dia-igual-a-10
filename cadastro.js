let listaAlunos = [];

document.getElementById("btnCadastrar").addEventListener("click", cadastrarNota);

function cadastrarNota() {

    let nome = document.getElementById("Nome").value; 
    let n1 = document.getElementById("nota1").value;
    let n2 = document.getElementById("nota2").value;

    
    if (nome === "" || n1 === "" || n2 === "") {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    let nota1 = Number(n1);
    let nota2 = Number(n2);
    let media = (nota1 + nota2) / 2;

    let situacao = media >= 7 ? "Aprovado" : "Reprovado";

    let novoAluno = {
        nome: nome, 
        n1: nota1,
        n2: nota2,
        media: media, 
        situacao: situacao
    };

    listaAlunos.push(novoAluno);
    exibir();
    topCincoNotas();
    limparCampos();
}

function exibir() {
    let divMedia = document.getElementById("media");

    let conteudoHTML = listaAlunos.map(aluno => {
        let corStatus = aluno.situacao === "Aprovado" ? "green" : "red";

        return `
            <p>
                <strong>Aluno:</strong> ${aluno.nome} | 
                <strong>Média:</strong> ${aluno.media} | 
                <span style="color: ${corStatus}">
                    <strong>Status:</strong> ${aluno.situacao}
                </span>
            </p>
            <hr>
        `;
    }).join("");

    divMedia.innerHTML = conteudoHTML;
}
function topCincoNotas() {
    let divTop5 = document.getElementById("top5"); 

    let topAlunos = listaAlunos
        .filter(aluno => aluno.media === 10)
        .slice(0, 5);

    if (topAlunos.length === 0) {
        divTop5.innerHTML = "<p>Nenhum aluno com média 10 ainda.</p>";
        return;
    }

    let conteudoHTML = "<h3>Top 5 - Nota 10</h3>" + topAlunos.map(aluno => {
        return `<p>⭐ <strong>${aluno.nome}</strong> - Média: ${aluno.media}</p>`;
    }).join("");

    divTop5.innerHTML = conteudoHTML;
}


function limparCampos() {
    document.getElementById("Nome").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("Nome").focus(); 
}