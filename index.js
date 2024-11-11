// Função para determinar o nível do herói com base na experiência (XP)
function determinarNivelHeroi(xp) {
    if (xp < 1000) return "Ferro";
    if (xp <= 2000) return "Bronze";
    if (xp <= 5000) return "Prata";
    if (xp <= 7000) return "Ouro";
    if (xp <= 8000) return "Platina";
    if (xp <= 9000) return "Ascendente";
    if (xp <= 10000) return "Imortal";
    return "Radiante";
}

// Função para exibir a mensagem do nível do herói
function exibirNivelHeroi(nome, xp) {
    const nivel = determinarNivelHeroi(xp);
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Declaração de variáveis para o herói
const nomeHeroi = "Giovane"; // Nome do herói
const xpHeroi = 6500;       // Quantidade de experiência (XP) do herói

// Chamada da função para exibir o nível do herói
exibirNivelHeroi(nomeHeroi, xpHeroi);
