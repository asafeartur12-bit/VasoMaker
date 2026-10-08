document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simulação de validação/login
        if (username && email && password) {
            console.log("Tentativa de Login:", { username, email });
            
            // Exemplo de redirecionamento para o dashboard após login bem-sucedido
            alert(`Bem-vindo(a), ${username}! Redirecionando...`);
            window.location.href = "inicio.html";
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});