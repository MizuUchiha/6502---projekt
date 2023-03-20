
export  class Debugger {
    constructor(cpu, memory, graphics) {
        this.cpu = cpu;
        this.memory = memory;
        this.graphics = graphics;

        this.intervalId = setInterval(() => this.update(), 1000 / 60);
    }

    update() {
        // Aktualizacja wartości rejestrów i pamięci
        const registers = this.cpu.registers;
        const memory = this.memory.data;

        // Wyświetlenie wartości rejestrów i pamięci na ekranie
        this.graphics.clearScreen();
        for (let i = 0; i < 8; i++) {
            const y = i * 16;
            this.graphics.drawText(`A:${registers.A.toString(16).padStart(2, '0')} X:${registers.X.toString(16).padStart(2, '0')} Y:${registers.Y.toString(16).padStart(2, '0')}`, 0, y, 'white');
            this.graphics.drawText(`PC:${registers.PC.toString(16).padStart(4, '0')} SP:${registers.SP.toString(16).padStart(2, '0')} P:${registers.P.toString(2).padStart(8, '0')}`, 0, y + 8, 'white');
            for (let j = 0; j < 16; j++) {
                const x = j * 16 + 64;
                const addr = i * 16 + j;
                const value = memory[addr];
                this.graphics.drawText(`${value.toString(16).padStart(2, '0')}`, x, y, 'white');
            }
        }
    }

    stop() {
        clearInterval(this.intervalId);
    }
}