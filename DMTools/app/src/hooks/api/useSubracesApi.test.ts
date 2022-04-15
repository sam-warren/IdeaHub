import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useSubracesApi from './useSubracesApi';

describe('useSubracesApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });
});
