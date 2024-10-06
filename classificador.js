const herois = [
    { nome: "Arthur", xp: 11500 },
    { nome: "Lancelot", xp: 8500 },
    { nome: "Gawain", xp: 6000 },
    { nome: "Merlin", xp: 12000 },
    { nome: "Guinevere", xp: 2000 }
];

for (let i = 0; i < herois.length; i++) {
    const nome = herois[i].nome;
    const xp = herois[i].xp;
    let nivel = "";

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }

    console.log(`O Herói ${nome} está no ${nivel}`);
}