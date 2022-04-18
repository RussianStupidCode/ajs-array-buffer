export default class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
    this.string = '';
    this.load(buffer);
  }

  load(buffer) {
    this.buffer = buffer;

    if (buffer == null) {
      return;
    }

    const bufferView = new Uint16Array(buffer);
    this.string = Array.from(bufferView).map((e) => String.fromCharCode(e)).join('');
  }

  toString() {
    return this.string;
  }
}
