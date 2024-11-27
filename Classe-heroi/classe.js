class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      
      switch (this.tipo.toLowerCase()) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "Sem ataque definido";
          break;
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const mago = new Heroi("Patolino", 150, "Mago");
  const guerreiro = new Heroi("Mickey", 30, "Guerreiro");
  const monge = new Heroi("Kuririn", 15, "Monge");
  const ninja = new Heroi("Strider", 25, "Ninja");
  
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();