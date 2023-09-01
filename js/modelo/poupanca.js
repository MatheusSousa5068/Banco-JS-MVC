class Poupanca extends Conta {
    constructor(numero, saldo, dataAniversario) {
        super(numero, saldo)
        this.dataAniversario = dataAniversario
    }

    juros(data) {
        if(this.dataAniversario === data) {
            super.creditar(super.saldo*0.1)
        }
    }
} 