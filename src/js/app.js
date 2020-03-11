import json from './parser';
import read from './reader';

class GameSavingLoader {

  static load() {
      (async () => {
        try {
          const data = await read();
          const value = await json(data);
          return JSON.parse(value);

        } catch (error) {
          throw new Error('Ошибка при загрузке');
        }
      })();
  }
}

export default GameSavingLoader;
