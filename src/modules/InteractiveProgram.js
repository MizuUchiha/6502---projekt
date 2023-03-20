
export  class InteractiveProgram {
    constructor(cpu, memory, graphics, keyboard) {
        this.cpu = cpu;
        this.memory = memory;
        this.graphics = graphics;
        this.keyboard = keyboard;

        // Utworzenie obiektu
        this.object = {
            x: 0,
            y: 0,
            color: 'white'
        };

        // Ustawienie punktu początkowego obiektu
        const objectAddress = 0x0200; // Adres w pamięci procesora, w którym przechowywane są dane obiektu
        this.memory.write(objectAddress, this.object.x);
        this.memory.write(objectAddress + 1, this.object.y);
        this.memory.write(objectAddress + 2, this.object.color === 'white' ? 1 : 0);

        // Aktualizacja stanu obiektu co 1/60 sekundy
        setInterval(() => this.update(), 1000 / 60);
    }

    update() {
        // Sprawdzenie stanu klawiszy
        if (this.keyboard.isKeyDown('ArrowLeft')) {
            this.object.x--;
        }
        if (this.keyboard.isKeyDown('ArrowRight')) {
            this.object.x++;
        }
        if (this.keyboard.isKeyDown('ArrowUp')) {
            this.object.y--;
        }
        if (this.keyboard.isKeyDown('ArrowDown')) {
            this.object.y++;
        }

        // Rysowanie obiektu na ekranie
        this.graphics.clearScreen();
        this.graphics.drawPixel(this.object.x, this.object.y, this.object.color);

        // Zapisanie stanu obiektu w pamięci procesora
        const objectAddress = 0x0200;
        this.memory.write(objectAddress, this.object.x);
        this.memory.write(objectAddress + 1, this.object.y);
        this.memory.write(objectAddress + 2, this.object.color === 'white' ? 1 : 0);
    }
}

