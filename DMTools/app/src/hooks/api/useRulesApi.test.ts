import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useRulesApi from './useRulesApi';

describe('useRulesApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });
});
