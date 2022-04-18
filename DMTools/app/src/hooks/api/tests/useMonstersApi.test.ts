import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useMonstersApi from './useMonstersApi';

describe('useMonstersApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getMonsters works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'aboleth',
          name: 'Aboleth',
          url: '/api/monsters/aboleth'
        }
      ]
    };

    mock.onGet('/api/monsters').reply(200, response);

    const result = await useMonstersApi(axios).getMonsters();
    expect(result).toEqual(response);
  });

  it('getMonstersByChallengeRating works as expected', async () => {
    const response = {
      count: 25,
      results: [
        {
          index: 'animated-armor',
          name: 'Animated Armor',
          url: '/api/monsters/animated-armor'
        }
      ]
    };

    mock.onGet('/api/monsters?challenge_rating=1').reply(200, response);

    const result = await useMonstersApi(axios).getMonstersByChallengeRating(1);
    expect(result).toEqual(response);
  });

  it('getMonsterByIndex works as expected', async () => {
    const response = {
      index: 'aboleth',
      name: 'Aboleth',
      size: 'Large',
      type: 'aberration',
      alignment: 'lawful evil',
      armor_class: 17,
      hit_points: 135,
      hit_dice: '18d10',
      speed: {
        walk: '10 ft.',
        swim: '40 ft.'
      },
      strength: 21,
      dexterity: 9,
      constitution: 15,
      intelligence: 18,
      wisdom: 15,
      charisma: 18
    };

    mock.onGet('/api/monsters/aboleth').reply(200, response);

    const result = await useMonstersApi(axios).getMonsterByIndex('aboleth');
    expect(result).toEqual(response);
  });
});
