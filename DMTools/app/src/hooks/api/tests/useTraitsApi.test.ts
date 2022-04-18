import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useTraitsApi from './useTraitsApi';

describe('useTraitsApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getTraits works as expected', async () => {
    const response = {
      count: 2,
      results: [
        {
          index: 'artificers-lore',
          name: "Artificer's Lore",
          url: '/api/traits/artificers-lore'
        },
        {
          index: 'brave',
          name: 'Brave',
          url: '/api/traits/brave'
        }
      ]
    };

    mock.onGet('/api/traits').reply(200, response);

    const result = await useTraitsApi(axios).getTraits();
    expect(result).toEqual(response);
  });

  it('getTraitByIndex works as expected', async () => {
    const result = {
      index: 'brave',
      races: [
        {
          index: 'halfling',
          name: 'Halfling',
          url: '/api/races/halfling'
        }
      ],
      subraces: [],
      name: 'Brave',
      desc: ['You have advantage on saving throw against being frightened.'],
      proficiencies: [],
      url: '/api/traits/brave'
    };

    mock.onGet('/api/traits/brave').reply(200, result);

    const response = await useTraitsApi(axios).getTraitByIndex('brave');
    expect(response).toEqual(result);
  });
});
