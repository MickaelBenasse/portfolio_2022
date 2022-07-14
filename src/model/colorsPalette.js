import { random } from "../functions/functions";

export class ColorPalette {
  constructor() {
    this.setColors();
    this.setHexaColors();
  }

  setHexaColors() {
    this.colorHexaChoices = ["c4cea1", "d9e0a3", "fdf2b0", "f3d17c", "cf9963"];
  }

  setColors() {
    this.colorChoices = [
      "0xc4cea1",
      "0xd9e0a3",
      "0xfdf2b0",
      "0xf3d17c",
      "0xcf9963",
    ];
  }

  randomColor() {
    // pick a random color
    return this.colorChoices[~~random(0, this.colorChoices.length)];
  }

  randomHexaColor() {
    // pick a random color
    return this.colorHexaChoices[~~random(0, this.colorHexaChoices.length)];
  }
}
