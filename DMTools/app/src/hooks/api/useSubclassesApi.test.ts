import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useSubclassesApi from './useSubclassesApi';

describe('useSubclassesApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });
});
