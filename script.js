var total = 0;
var concluidas = 0;

function adicionarTarefa() {
    var descricao = document.getElementById("descricao").value;
    var materia = document.getElementById("materia").value;
    var prioridade = document.getElementById("prioridade").value;

    if (descricao == "" || materia == "" || prioridade == "") {
        alert("Preencha todos os campos!");
        return;
    }

    var novaTarefa = document.createElement("li");

    novaTarefa.textContent = descricao + " - " + materia +
        " - Prioridade: " + prioridade;

    document.getElementById("listaTarefas").appendChild(novaTarefa);

    total = total + 1;

    var botaoConcluir = document.createElement("button");
    botaoConcluir.textContent = "Concluir";

    novaTarefa.appendChild(botaoConcluir);

    var estaConcluida = false;

    botaoConcluir.onclick = function() {
        if (estaConcluida == false) {
            estaConcluida = true;
            concluidas = concluidas + 1;

            novaTarefa.className = "concluida";
            botaoConcluir.textContent = "Concluída";

            atualizarResumo();
        }
    };

    var botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";

    novaTarefa.appendChild(botaoExcluir);

    botaoExcluir.onclick = function() {
        var confirmar = confirm("Deseja excluir esta tarefa?");

        if (confirmar == true) {
            if (estaConcluida == true) {
                concluidas = concluidas - 1;
            }

            total = total - 1;
            novaTarefa.remove();

            atualizarResumo();
        }
    };

    atualizarResumo();

    document.getElementById("descricao").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("prioridade").value = "";
}

function atualizarResumo() {
    var pendentes = total - concluidas;

    document.getElementById("totalTarefas").textContent =
        "Total de tarefas: " + total;

    document.getElementById("tarefasConcluidas").textContent =
        "Concluídas: " + concluidas;

    document.getElementById("tarefasPendentes").textContent =
        "Pendentes: " + pendentes;

    if (total == 0) {
        document.getElementById("mensagem").textContent =
            "Você ainda não cadastrou nenhuma tarefa.";
    } else {
        document.getElementById("mensagem").textContent = "";
    }
}