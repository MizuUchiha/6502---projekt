export class Graphics {
    constructor(width, height, scale) {
      this.width = width;
      this.height = height;
      this.scale = scale;
  
      this.canvas = document.createElement('canvas');
      this.canvas.width = this.width * this.scale;
      this.canvas.height = this.height * this.scale;
      this.ctx = this.canvas.getContext('2d');
  
      document.body.appendChild(this.canvas);
    }
  
    drawPixel(x, y, color) {
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
    }
  
    clearScreen() {
      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(0, 0, this.width * this.scale, this.height * this.scale);
    }
  
    drawText(text, x, y, color) {
      this.ctx.fillStyle = color;
      this.ctx.fillText(text, x, y);
    }
  }
  