import GameSavingLoader from '../app';

test('Проверка загрузки сохранения', () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  const received = GameSavingLoader.load();
  received.then((saving) => {
    expect(received).toEqual(expected);
  }, (error) => {
    throw new Error('Произошла ошибка при загрузке сохранения');
  });
});
