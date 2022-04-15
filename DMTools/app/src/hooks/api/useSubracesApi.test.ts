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

  it('getSubraces works as expected', async () => {});

  it('getSubraceByIndex works as expected', async () => {});

  it('getProficienciesForSubrace works as expected', async () => {});

  it('getTraitsForSubrace works as expected', async () => {});
});
