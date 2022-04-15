import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { AbilityScore } from '../../constants/AbilityScore';
import { Alignment } from '../../constants/Alignment';
import { Background } from '../../constants/Background';
import { Language } from '../../constants/Language';
import { Skill } from '../../constants/Skill';
import useCharacterDataApi from './useCharacterDataApi';

describe('useCharacterDataApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getAbilityScores works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'cha',
          name: 'CHA',
          url: '/api/ability-scores/cha'
        }
      ]
    };

    mock.onGet('/api/ability-scores').reply(200, response);

    const result = await useCharacterDataApi(axios).getAbilityScores();
    expect(result.count).toEqual(1);
    expect(result.results).toEqual(response.results);
  });

  it('getAbilityScoreByIndex works as expected', async () => {
    const response = {
      index: 'dex',
      name: 'DEX',
      full_name: 'Dexterity',
      desc: [
        'Dexterity measures agility, reflexes, and balance.',
        'A Dexterity check can model any attempt to move nimbly, quickly, or quietly, or to keep from falling on tricky footing. The Acrobatics, Sleight of Hand, and Stealth skills reflect aptitude in certain kinds of Dexterity checks.'
      ],
      skills: [
        {
          name: 'Acrobatics',
          index: 'acrobatics',
          url: '/api/skills/acrobatics'
        },
        {
          name: 'Sleight of Hand',
          index: 'sleight-of-hand',
          url: '/api/skills/sleight-of-hand'
        },
        {
          name: 'Stealth',
          index: 'stealth',
          url: '/api/skills/stealth'
        }
      ],
      url: '/api/ability-scores/dex'
    };

    mock.onGet('/api/ability-scores/dex').reply(200, response);

    const result = await useCharacterDataApi(axios).getAbilityScoreByIndex(AbilityScore.Dexterity);
    expect(result).toEqual(response);
  });

  it('getAlignments works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'chaotic-evil',
          name: 'Chaotic Evil',
          url: '/api/alignments/chaotic-evil'
        }
      ]
    };

    mock.onGet('/api/alignments').reply(200, response);

    const result = await useCharacterDataApi(axios).getAlignments();
    expect(result.count).toEqual(1);
    expect(result.results).toEqual(response.results);
  });

  it('getAlignmentByIndex works as expected', async () => {
    const response = {
      index: 'chaotic-evil',
      name: 'Chaotic Evil',
      abbreviation: 'CE',
      desc: 'Chaotic evil (CE) creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons, red dragons, and orcs are chaotic evil.',
      url: '/api/alignments/chaotic-evil'
    };

    mock.onGet('/api/alignments/chaotic-evil').reply(200, response);

    const result = await useCharacterDataApi(axios).getAlignmentByIndex(Alignment.ChaoticEvil);
    expect(result).toEqual(response);
  });

  it('getBackgrounds works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'acolyte',
          name: 'Acolyte',
          url: '/api/backgrounds/acolyte'
        }
      ]
    };

    mock.onGet('/api/backgrounds').reply(200, response);

    const result = await useCharacterDataApi(axios).getBackgrounds();
    expect(result.count).toEqual(1);
    expect(result.results).toEqual(response.results);
  });

  it('getBackgroundByIndex works as expected', async () => {
    const response = {
      index: 'acolyte',
      name: 'Acolyte',
      starting_proficiencies: [
        {
          index: 'skill-insight',
          name: 'Skill: Insight',
          url: '/api/proficiencies/skill-insight'
        },
        {
          index: 'skill-religion',
          name: 'Skill: Religion',
          url: '/api/proficiencies/skill-religion'
        }
      ],
      url: '/api/backgrounds/acolyte'
    };

    mock.onGet('/api/backgrounds/acolyte').reply(200, response);

    const result = await useCharacterDataApi(axios).getBackgroundByIndex(Background.Acolyte);
    expect(result).toEqual(response);
  });

  it('getLanguages works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'common',
          name: 'Common',
          url: '/api/languages/common'
        }
      ]
    };

    mock.onGet('/api/languages').reply(200, response);

    const result = await useCharacterDataApi(axios).getLanguages();
    expect(result.count).toEqual(1);
    expect(result.results).toEqual(response.results);
  });

  it('getLanguageByIndex works as expected', async () => {
    const response = {
      index: 'common',
      name: 'Common',
      type: 'Standard',
      typical_speakers: ['Humans'],
      script: 'Common',
      url: '/api/languages/common'
    };

    mock.onGet('/api/languages/common').reply(200, response);

    const result = await useCharacterDataApi(axios).getLanguageByIndex(Language.Common);
    expect(result).toEqual(response);
  });

  it('getProficiencies works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'alchemists-supplies',
          name: "Alchemist's Supplies",
          url: '/api/proficiencies/alchemists-supplies'
        }
      ]
    };

    mock.onGet('/api/proficiencies').reply(200, response);

    const result = await useCharacterDataApi(axios).getProficiencies();
    expect(result.count).toEqual(1);
    expect(result.results).toEqual(response.results);
  });

  it('getProficiencyByIndex works as expected', async () => {
    const response = {
      index: 'alchemists-supplies',
      type: "Artisan's Tools",
      name: "Alchemist's Supplies",
      classes: [],
      races: [],
      url: '/api/proficiencies/alchemists-supplies',
      reference: {
        index: 'alchemists-supplies',
        name: "Alchemist's Supplies",
        url: '/api/equipment/alchemists-supplies'
      }
    };

    mock.onGet('/api/proficiencies/alchemists-supplies').reply(200, response);

    const result = await useCharacterDataApi(axios).getProficiencyByIndex('alchemists-supplies');
    expect(result).toEqual(response);
  });

  it('getSkills works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'acrobatics',
          name: 'Acrobatics',
          url: '/api/skills/acrobatics'
        }
      ]
    };

    mock.onGet('/api/skills').reply(200, response);

    const result = await useCharacterDataApi(axios).getSkills();
    expect(result.count).toEqual(1);
    expect(result.results).toEqual(response.results);
  });

  it('getSkillByIndex works as expected', async () => {
    const response = {
      index: 'acrobatics',
      name: 'Acrobatics',
      desc: [
        "Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips."
      ],
      ability_score: {
        index: 'dex',
        name: 'DEX',
        url: '/api/ability-scores/dex'
      },
      url: '/api/skills/acrobatics'
    };

    mock.onGet('/api/skills/acrobatics').reply(200, response);

    const result = await useCharacterDataApi(axios).getSkillByIndex(Skill.Acrobatics);
    expect(result).toEqual(response);
  });
});
