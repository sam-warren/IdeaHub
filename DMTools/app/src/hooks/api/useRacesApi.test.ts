import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useRacesApi from './useRacesApi';

describe('useRacesApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });
});
