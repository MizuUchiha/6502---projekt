import { CPU6502 } from './modules/CPU6502.js';
import { Memory } from './modules/Memory.js';
import { Graphics } from './modules/Graphics.js';
import { Keyboard } from './modules/Keyboard.js';
import { Debugger } from './modules/Debugger.js';
import { InteractiveProgram } from './modules/InteractiveProgram.js';

const memory = new Memory();
const cpu = new CPU6502(memory);
const graphics = new Graphics(256, 240, 2);// Przykładowe wymiary 256x240 pikseli, skalowanie 2x
const keyboard = new Keyboard();
console.log(graphics)
const debugger_ = new Debugger(cpu, memory, graphics);
const interactiveProgram = new InteractiveProgram(cpu, memory, graphics, keyboard);

document.body.appendChild(graphics.canvas);


// Aktualizacja grafiki
function updateGraphics() {
    // Wyciągnięcie danych graficznych z pamięci procesora 6502
    // Na przykład, przyjmijmy, że adresy 0x0200 - 0x02FF zawierają dane graficzne
    for (let y = 0; y < graphics.height; y++) {
        for (let x = 0; x < graphics.width; x++) {
            const addr = 0x0200 + y * graphics.width + x;
            const value = cpu.memory.read(addr);

            const color = value ? 'white' : 'black'; // Przykładowe mapowanie wartości na kolor
            graphics.drawPixel(x, y, color);
        }
    }

    // Główna pętla symulatora
    function mainLoop() {
        // Wykonanie jednego cyklu procesora 6502
        cpu.executeCycle();

        // Aktualizacja grafiki
        updateGraphics();

        // Następny cykl animacji
        requestAnimationFrame(mainLoop);
    }

    // Rozpoczęcie symulacji
    mainLoop();
}