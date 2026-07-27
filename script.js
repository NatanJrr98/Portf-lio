// LÓGICA DO TEMA CLARO/ESCURO
const btnTema = document.getElementById('btn-tema');
const body = document.body;
const iconeTema = btnTema.querySelector('i');

btnTema.addEventListener('click', () => {
    // Alterna a classe 'light-mode' no body
    body.classList.toggle('light-mode');
    
    // Troca o ícone dependendo do tema
    if (body.classList.contains('light-mode')) {
        iconeTema.classList.remove('bi-brightness-high');
        iconeTema.classList.add('bi-moon-fill');
    } else {
        iconeTema.classList.remove('bi-moon-fill');
        iconeTema.classList.add('bi-brightness-high');
    }
});

function enviarWhatsApp() {
    // Pega os valores que o usuário digitou
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação simples para não enviar mensagem vazia
    if (!nome || !mensagem) {
        alert('Por favor, preencha pelo menos o seu nome e a mensagem para enviar via WhatsApp.');
        return;
    }

    // SEU NÚMERO DE WHATSAPP AQUI (Com código do país 55 e DDD. Ex: 5511999999999)
    const numeroWhatsApp = "5579999263660";

    // Monta o texto da mensagem
    const texto = `Olá, Natanael! Meu nome é ${nome}.\nE-mail: ${email}\nCelular: ${celular}\n\nMensagem:\n${mensagem}`;

    // Codifica o texto para formato de URL e abre o WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}


