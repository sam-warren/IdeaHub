import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { MagicSchool } from '../../constants/MagicSchool';
import useSpellsApi from './useSpellsApi';

describe('useSpellsApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getSpells works as expected', async () => {
    const response = {
      count: 2,
      results: [
        {
          index: 'acid-arrow',
          name: 'Acid Arrow',
          url: '/api/spells/acid-arrow'
        },
        {
          index: 'acid-splash',
          name: 'Acid Splash',
          url: '/api/spells/acid-splash'
        }
      ]
    };

    mock.onGet('/api/spells').reply(200, response);

    const result = await useSpellsApi(axios).getSpells();
    expect(result).toEqual(response);
  });

  it('getSpellByIndex works as expected', async () => {
    const response = {
      _id: '624f9e31538f97fd485528c1',
      index: 'acid-arrow',
      name: 'Acid Arrow',
      desc: [
        'A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.'
      ],
      higher_level: [
        'When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.'
      ],
      range: '90 feet',
      components: ['V', 'S', 'M'],
      material: "Powdered rhubarb leaf and an adder's stomach.",
      ritual: false,
      duration: 'Instantaneous',
      concentration: false,
      casting_time: '1 action',
      level: 2,
      attack_type: 'ranged',
      url: '/api/spells/acid-arrow'
    };

    mock.onGet('/api/spells/acid-arrow').reply(200, response);

    const result = await useSpellsApi(axios).getSpellByIndex('acid-arrow');
    expect(result).toEqual(response);
  });

  it('getSpellsBySchool works as expected', async () => {
    const response = {
      count: 39,
      results: [
        {
          index: 'aid',
          name: 'Aid',
          url: '/api/spells/aid'
        },
        {
          index: 'alarm',
          name: 'Alarm',
          url: '/api/spells/alarm'
        }
      ]
    };

    mock.onGet('/api/spells?school=abjuration').reply(200, response);

    const result = await useSpellsApi(axios).getSpellsBySchool([MagicSchool.Abjuration]);
    expect(result).toEqual(response);
  });

  it('getSpellsByLevel works as expected', async () => {
    const response = {
      count: 2,
      results: [
        {
          index: 'aid',
          name: 'Aid',
          url: '/api/spells/aid'
        },
        {
          index: 'alarm',
          name: 'Alarm',
          url: '/api/spells/alarm'
        }
      ]
    };

    mock.onGet('/api/spells?level=2').reply(200, response);

    const result = await useSpellsApi(axios).getSpellsByLevel(2);
    expect(result).toEqual(response);
  });

  it('getSpellsByLevelAndSchool works as expected', async () => {
    const response = {
      count: 2,
      results: [
        {
          index: 'aid',
          name: 'Aid',
          url: '/api/spells/aid'
        },
        {
          index: 'alarm',
          name: 'Alarm',

          url: '/api/spells/alarm'
        }
      ]
    };

    mock.onGet('/api/spells?level=2,3&school=abjuration,conjuration').reply(200, response);

    const result = await useSpellsApi(axios).getSpellsByLevelAndSchool(
      [2, 3],
      [MagicSchool.Abjuration, MagicSchool.Conjuration]
    );
    expect(result).toEqual(response);
  });
});
