import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useSubracesApi from '../useSubracesApi';

describe('useSubracesApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getSubraces works as expected', async () => {
    const response = {
      count: 4,
      results: [
        {
          index: 'high-elf',
          name: 'High Elf',
          url: '/api/subraces/high-elf'
        },
        {
          index: 'hill-dwarf',
          name: 'Hill Dwarf',
          url: '/api/subraces/hill-dwarf'
        },
        {
          index: 'lightfoot-halfling',
          name: 'Lightfoot Halfling',
          url: '/api/subraces/lightfoot-halfling'
        },
        {
          index: 'rock-gnome',
          name: 'Rock Gnome',
          url: '/api/subraces/rock-gnome'
        }
      ]
    };

    mock.onGet('/api/subraces').reply(200, response);

    const result = await useSubracesApi(axios).getSubraces();
    expect(result).toEqual(response);
  });

  it('getSubraceByIndex works as expected', async () => {
    const response = {
      index: 'high-elf',
      name: 'High Elf',
      race: {
        index: 'elf',
        name: 'Elf',
        url: '/api/races/elf'
      },
      desc: 'As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.',
      ability_bonuses: [
        {
          ability_score: {
            index: 'int',
            name: 'INT',
            url: '/api/ability-scores/int'
          },
          bonus: 1
        }
      ],
      starting_proficiencies: [
        {
          index: 'longswords',
          name: 'Longswords',
          url: '/api/proficiencies/longswords'
        },
        {
          index: 'shortswords',
          name: 'Shortswords',
          url: '/api/proficiencies/shortswords'
        },
        {
          index: 'shortbows',
          name: 'Shortbows',
          url: '/api/proficiencies/shortbows'
        },
        {
          index: 'longbows',
          name: 'Longbows',
          url: '/api/proficiencies/longbows'
        }
      ],
      languages: [],
      language_options: {
        choose: 1,
        from: [
          {
            index: 'dwarvish',
            name: 'Dwarvish',
            url: '/api/languages/dwarvish'
          },
          {
            index: 'giant',
            name: 'Giant',
            url: '/api/languages/giant'
          },
          {
            index: 'gnomish',
            name: 'Gnomish',
            url: '/api/languages/gnomish'
          },
          {
            index: 'goblin',
            name: 'Goblin',
            url: '/api/languages/goblin'
          },
          {
            index: 'halfling',
            name: 'Halfling',
            url: '/api/languages/halfling'
          },
          {
            index: 'orc',
            name: 'Orc',
            url: '/api/languages/orc'
          },
          {
            index: 'abyssal',
            name: 'Abyssal',
            url: '/api/languages/abyssal'
          },
          {
            index: 'celestial',
            name: 'Celestial',
            url: '/api/languages/celestial'
          },
          {
            index: 'draconic',
            name: 'Draconic',
            url: '/api/languages/draconic'
          },
          {
            index: 'deep-speech',
            name: 'Deep Speech',
            url: '/api/languages/deep-speech'
          },
          {
            index: 'infernal',
            name: 'Infernal',
            url: '/api/languages/infernal'
          },
          {
            index: 'primordial',
            name: 'Primordial',
            url: '/api/languages/primordial'
          },
          {
            index: 'sylvan',
            name: 'Sylvan',
            url: '/api/languages/sylvan'
          },
          {
            index: 'undercommon',
            name: 'Undercommon',
            url: '/api/languages/undercommon'
          }
        ],
        type: 'language'
      },
      racial_traits: [
        {
          index: 'elf-weapon-training',
          name: 'Elf Weapon Training',
          url: '/api/traits/elf-weapon-training'
        },
        {
          index: 'high-elf-cantrip',
          name: 'High Elf Cantrip',
          url: '/api/traits/high-elf-cantrip'
        },
        {
          index: 'extra-language',
          name: 'Extra Language',
          url: '/api/traits/extra-language'
        }
      ],
      url: '/api/subraces/high-elf'
    };

    mock.onGet('/api/subraces/high-elf').reply(200, response);

    const result = await useSubracesApi(axios).getSubraceByIndex('high-elf');
    expect(result).toEqual(response);
  });

  it('getProficienciesForSubrace works as expected', async () => {
    const response = {
      count: 4,
      results: [
        {
          index: 'longbows',
          name: 'Longbows',
          url: '/api/proficiencies/longbows'
        },
        {
          index: 'longswords',
          name: 'Longswords',
          url: '/api/proficiencies/longswords'
        },
        {
          index: 'shortbows',
          name: 'Shortbows',
          url: '/api/proficiencies/shortbows'
        },
        {
          index: 'shortswords',
          name: 'Shortswords',
          url: '/api/proficiencies/shortswords'
        }
      ]
    };

    mock.onGet('/api/subraces/high-elf/proficiencies').reply(200, response);

    const result = await useSubracesApi(axios).getProficienciesForSubrace('high-elf');
    expect(result).toEqual(response);
  });

  it('getTraitsForSubrace works as expected', async () => {
    const response = {
      count: 3,
      results: [
        {
          index: 'extra-language',
          name: 'Extra Language',
          url: '/api/traits/extra-language'
        },
        {
          index: 'high-elf-cantrip',
          name: 'High Elf Cantrip',
          url: '/api/traits/high-elf-cantrip'
        },
        {
          index: 'elf-weapon-training',
          name: 'Elf Weapon Training',
          url: '/api/traits/elf-weapon-training'
        }
      ]
    };

    mock.onGet('/api/subraces/high-elf/traits').reply(200, response);

    const result = await useSubracesApi(axios).getTraitsForSubrace('high-elf');
    expect(result).toEqual(response);
  });
});
