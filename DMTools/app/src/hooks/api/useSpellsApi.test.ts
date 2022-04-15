import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useSpellsApi from './useSpellsApi';

describe('useSpellsApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getSpells works as expected', async () => {});

  it('getSpellByIndex works as expected', async () => {});

  it('getSpellBySchool works as expected', async () => {});
});
