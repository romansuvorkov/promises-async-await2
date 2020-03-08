import json from './parser';
import read from './reader';

class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const data = await read();
          const value = await json(data);
          resolve(value);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }
}

export default GameSavingLoader;
