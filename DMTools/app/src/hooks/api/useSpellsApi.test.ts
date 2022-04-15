import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useSpellsApi from './useSpellsApi';

describe('useSpellsApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });
});
