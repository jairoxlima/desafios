// Exemplo de uso
let partidas = [
    { vitoria: 85, derrota: 20 },
    { vitoria: 12, derrota: 5 },
    { vitoria: 110, derrota: 30 }
];

// Função para calcular o rank
function calcularRank(vitoria, derrota) {

    let saldoVitoria = vitoria - derrota;
    let nivel;
    let taxaVitoria = (vitoria / (vitoria + derrota)) * 100;

    if (vitoria < 10) {
        nivel = "Ferro";
    } else if (vitoria >= 11 && vitoria <= 20) {
        nivel = "Bronze";
    } else if (vitoria >= 21 && vitoria <= 50) {
        nivel = "Prata";
    } else if (vitoria >= 51 && vitoria <= 80) {
        nivel = "Ouro";
    } else if (vitoria >= 81 && vitoria <= 90) {
        nivel = "Diamante";
    } else if (vitoria >= 91 && vitoria <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoVitoria} está no nível de ${nivel} com taxa de vitória de ${taxaVitoria.toFixed(2)}%`;
}

// Laço de repetição para exibir os resultados
for (let i = 0; i < partidas.length; i++) {
    console.log(
        calcularRank(partidas[i].vitoria, partidas[i].derrota)
    );
}