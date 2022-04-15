import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useFeaturesApi from './useFeaturesApi';

describe('useFeaturesApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });
});
