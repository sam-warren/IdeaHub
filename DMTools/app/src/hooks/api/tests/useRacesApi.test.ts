import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useRacesApi from '../useRacesApi';

describe('useRacesApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getRaces works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'dragonborn',
          name: 'Dragonborn',
          url: '/api/races/dragonborn'
        }
      ]
    };

    mock.onGet('/api/races').reply(200, response);

    const result = await useRacesApi(axios).getRaces();
    expect(result).toEqual(response);
  });

  it('getRaceByIndex works as expected', async () => {
    const response = {
      index: 'dragonborn',
      name: 'Dragonborn',
      speed: 30,
      ability_bonuses: [
        {
          ability_score: {
            index: 'str',
            name: 'STR',
            url: '/api/ability-scores/str'
          },
          bonus: 2
        },
        {
          ability_score: {
            index: 'cha',
            name: 'CHA',
            url: '/api/ability-scores/cha'
          },
          bonus: 1
        }
      ]
    };

    mock.onGet('/api/races/dragonborn').reply(200, response);

    const result = await useRacesApi(axios).getRaceByIndex('dragonborn');
    expect(result).toEqual(response);
  });

  it('getSubracesForRace works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'high-elf',
          name: 'High Elf',
          url: '/api/subraces/high-elf'
        }
      ]
    };

    mock.onGet('/api/races/elf/subraces').reply(200, response);

    const result = await useRacesApi(axios).getSubracesForRace('elf');
    expect(result).toEqual(response);
  });

  it('getProficienciesForRace works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'skill-perception',
          name: 'Skill: Perception',
          url: '/api/proficiencies/skill-perception'
        }
      ]
    };

    mock.onGet('/api/races/elf/proficiencies').reply(200, response);

    const result = await useRacesApi(axios).getProficienciesForRace('elf');
    expect(result).toEqual(response);
  });

  it('getTraitsForRace works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'darkvision',
          name: 'Darkvision',
          url: '/api/traits/darkvision'
        }
      ]
    };

    mock.onGet('/api/races/elf/traits').reply(200, response);

    const result = await useRacesApi(axios).getTraitsForRace('elf');
    expect(result).toEqual(response);
  });
});
