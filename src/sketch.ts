import './style.css';
import { BaseSketch } from './base/sketch.base';

class Sketch extends BaseSketch {
  setup(): void {
    p5.createCanvas(600, 600);
  }

  draw(): void {
    p5.background(255);
  }
}

new Sketch();
