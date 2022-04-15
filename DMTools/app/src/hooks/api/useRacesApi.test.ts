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

  it('getRaces works as expected', async () => {});

  it('getRaceByIndex works as expected', async () => {});

  it('getSubracesForRace works as expected', async () => {});

  it('getProficienciesForRace works as expected', async () => {});

  it('getTraitsForRace works as expected', async () => {});
});
