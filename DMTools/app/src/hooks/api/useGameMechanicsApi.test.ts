import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useGameMechanicsApi from './useGameMechanicsApi';

describe('useGameMechanicsApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getConditions works as expected', async () => {});

  it('getConditionByIndex works as expected', async () => {});

  it('getDamageTypes works as expected', async () => {});

  it('getDamageTypeByIndex works as expected', async () => {});

  it('getMagicSchools works as expected', async () => {});

  it('getMagicSchoolByIndex works as expected', async () => {});
});
