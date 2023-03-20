
export  class Instruction {
    constructor(opcode, operation, addressingMode, cycles) {
        this.opcode = opcode;
        this.operation = operation;
        this.addressingMode = addressingMode;
        this.cycles = cycles;
    }

    // Metody do wykonywania instrukcji
}