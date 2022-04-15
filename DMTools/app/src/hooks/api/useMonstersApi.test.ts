import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useMonstersApi from './useMonstersApi';

describe('useMonstersApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });
});