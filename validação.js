// Função chamada ao clicar no botão "Entrar"
function validarLogin() {
    // Obtém os valores digitados pelo usuário
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    // Verifica se o usuário e senha estão corretos
    if (usuario === "admin" && senha === "123@456") {
        // Se correto, exibe mensagem de sucesso
        document.getElementById("mensagem").innerText = "Login bem-sucedido!";
        document.getElementById("mensagem").style.color = "green";
    } else {
        // Se incorreto, exibe mensagem de erro
        document.getElementById("mensagem").innerText = "Usuário ou senha incorretos.";
        document.getElementById("mensagem").style.color = "red";
    }
}
