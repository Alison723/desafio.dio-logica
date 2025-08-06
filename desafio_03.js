class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
}
atacar() {
        let ataque;
        switch (this.tipo) {
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
        }
        console.log(`O ${this.tipo} de nome ${this.nome} e idade ${this.idade + " anos"} atacou usando ${ataque}`);
    }

}

let heroi1 = new Heroi("Alison" , 15, "mago")

heroi1.atacar();