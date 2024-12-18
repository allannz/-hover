// Função para alterar a cor de fundo
function alterarCorFundo() {
    const cores = ["#f4f4f4", "#FF6347", "#32CD32", "#1E90FF", "#FFD700"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}

// Função para mudar o texto no parágrafo
function mudarTexto() {
    const textoAtual = document.getElementById("texto-inicial").textContent;
    if (textoAtual === "Clique nos botões abaixo para interagir.") {
        document.getElementById("texto-inicial").textContent = "Você interagiu com o botão!";
    } else {
        document.getElementById("texto-inicial").textContent = "Clique nos botões abaixo para interagir.";
    }
}

// Função para exibir um alerta
function exibirAlerta() {
    alert("Você clicou no botão de Alerta!");
}
