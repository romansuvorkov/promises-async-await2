import GameSavingLoader from '../app';

test('Проверка загрузки сохранения', async () => {
  const received = await GameSavingLoader.load();
  expect(received).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
  });
