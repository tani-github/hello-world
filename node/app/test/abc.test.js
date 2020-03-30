const loop = require('./abc');

test('loop', () => {
  const loopNum = 5;
  const mock = jest.fn(); // モック関数を作る
  loop(mock, loopNum); // mockを渡して実行する

  // mock関数の呼び出しについて検証する
  expect(mock).toBeCalledTimes(loopNum); // 5回呼び出されているはず
  expect(mock).nthCalledWith(1, 0); // 1回目はmock(0)で呼び出される
  expect(mock).nthCalledWith(2, 1); // 2回目はmock(1)で呼び出される
});