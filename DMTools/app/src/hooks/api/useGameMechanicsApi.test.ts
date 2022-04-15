import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useGameMechanicsApi from './useGameMechanicsApi';

describe('useGameMechanicsApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });
});
