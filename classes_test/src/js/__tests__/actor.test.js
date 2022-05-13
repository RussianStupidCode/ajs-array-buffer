import Actor from '../actor';

const maxRangeActor = new Actor(1, 100);

test('zero attack', () => {
  expect(maxRangeActor.attack).toBeCloseTo(0);
});

test('shoud attack = 90', () => {
  const actor = new Actor(100, 2);

  expect(actor.attack).toBeCloseTo(90);
});

test('shoud attack = 85', () => {
  const actor = new Actor(100, 2);
  actor.stoned = true;

  expect(actor.attack).toBeCloseTo(85);
});

test('set stoned', () => {
  const actor = new Actor(100, 2);
  actor.stoned = true;

  expect(actor.stoned).toBe(true);
});

test('set attack', () => {
  const actor = new Actor(100, 1);

  actor.attack = 1;
  expect(actor.attack).toBeCloseTo(1);
});
