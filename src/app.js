import GameSavingLoader from './gameSavingLoader';

(async () => {
  try {
    const gameSavingLoader = await GameSavingLoader.load();
    console.log(gameSavingLoader);
  } catch (error) {
    console.log(error);
  }
})();
