import { Registers } from './Registers.js';
import { Memory } from './Memory.js';

export class CPU6502 {
    constructor(memory) {
        this.registers = new Registers();
        this.memory = new Memory();
        this.interruptRequested = false;
    }

    requestInterrupt() {
        this.interruptRequested = true;
    }

    handleInterrupt() {
        if (this.interruptRequested) {
            this.interruptRequested = false;

            const pc = this.registers.PC;
            this.pushWordToStack(pc);
            this.pushByteToStack(this.registers.P);
            this.registers.PC = this.memory.readWord(0xFFFE);
            this.registers.setInterruptDisable(true);
        }
    }

    executeInstruction() {
        // Metoda do wykonania instrukcji
        // ...

        // Sprawdzenie, czy zostało żądanie przerwania
        if (this.interruptRequested) {
            this.handleInterrupt();
        }
    }

    // Metody do obsługi cyklu zegarowego, dekodowania i wykonywania instrukcji
}
