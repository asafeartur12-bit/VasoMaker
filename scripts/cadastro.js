document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const errorMessage = document.getElementById("errorMessage");

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o envio do formulário padrão

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Oculta mensagem de erro anterior
        errorMessage.style.display = "none";
        errorMessage.textContent = "";

        // Validação das senhas
        if (password !== confirmPassword) {
            errorMessage.textContent = "As senhas não coincidem. Tente novamente.";
            errorMessage.style.display = "block";
            confirmPasswordInput.focus();
            return;
        }

        // Sucesso no cadastro
        console.log("Novo cadastro realizado com sucesso:", { username, email });
        alert(`Conta criada com sucesso para ${username}! Redirecionando para o login...`);
        
        // Redireciona para a tela de login
        window.location.href = "login.html";
    });
});