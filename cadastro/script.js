function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (!nome || !email || !cpf || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    if (!validarCPF(cpf)) {
        alert('CPF inválido.');
        return false;
    }

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return false;
    }

    alert('Cadastro realizado com sucesso!');
    return true;
}
