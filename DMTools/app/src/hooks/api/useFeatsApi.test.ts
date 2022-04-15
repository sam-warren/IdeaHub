import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useFeatsApi from './useFeatsApi';

describe('useFeatsApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getFeats works as expected', async () => {});

  it('getFeatByIndex works as expected', async () => {});
});
