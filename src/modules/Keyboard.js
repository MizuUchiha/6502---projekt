export class Keyboard {
  constructor() {
    // Inicjalizacja stanu klawiszy
    this.keyStates = {};
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
    window.addEventListener("keyup", this.handleKeyUp.bind(this));
  }

  handleKeyDown(event) {
    // Obsługa wciśnięcia klawisza
    const keyCode = event.keyCode;
    this.keyStates[keyCode] = true;
  }

  handleKeyUp(event) {
    // Obsługa zwolnienia klawisza
    const keyCode = event.keyCode;
    this.keyStates[keyCode] = false;
  }

  isKeyDown(key) {
    // Zwraca true, jeśli klawisz jest wciśnięty, false w przeciwnym razie
    const keyCode = this.getKeyCode(key);
    return !!this.keyStates[keyCode];
  }

  getKeyCode(key) {
    // Zwraca kod klawisza na podstawie jego nazwy
    // np. 'ArrowUp' -> 38
    return key.startsWith('Arrow') ? key.slice(5) : key.charCodeAt(0);
  }
}
