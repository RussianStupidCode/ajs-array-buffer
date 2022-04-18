import ArrayBufferConverter from '../array_buffer_converter';

const DATA = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

function getBuffer(data) {
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

test('test buffer covnerter', () => {
  const buffer = getBuffer(DATA);
  const converter = new ArrayBufferConverter();
  converter.load(buffer);
  expect(converter.toString()).toBe(DATA);
});

test('zero buffer covnerter', () => {
  const converter = new ArrayBufferConverter();
  converter.load(null);
  expect(converter.toString()).toBe('');
});
