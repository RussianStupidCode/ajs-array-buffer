import Daemon from '../daemon';

const maxRangeActor = new Daemon(1, 100);
const actor = new Daemon(100, 2);

test('zero attack', () => {
  expect(maxRangeActor.attack).toBeCloseTo(0);
});

test('shoud attack = 90', () => {
  expect(actor.attack).toBeCloseTo(90);
});

test('zero stoned', () => {
  expect(maxRangeActor.stoned).toBeCloseTo(0);
});

test('stoned = 85', () => {
  expect(actor.stoned).toBeCloseTo(85);
});

test('set attack', () => {
  const minRangeActor = new Daemon(100, 1);
  minRangeActor.attack = 1;
  expect(minRangeActor.attack).toBeCloseTo(1);
});
