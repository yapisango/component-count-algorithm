const { connectedComponentCount } = require('./index'); 

test('connectedComponentCount for sample graph', () => {
  const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  };

  expect(connectedComponentCount(graph)).toBe(2);
});
