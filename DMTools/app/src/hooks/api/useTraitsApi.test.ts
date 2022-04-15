import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useTraitsApi from './useTraitsApi';

describe('useTraitsApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });
});
