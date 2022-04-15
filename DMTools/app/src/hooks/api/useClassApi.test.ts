import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useClassApi from './useClassApi';

describe('useClassApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getClasses works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'barbarian',
          name: 'Barbarian',
          url: '/api/classes/barbarian'
        }
      ]
    };

    mock.onGet('/api/classes').reply(200, response);

    const result = await useClassApi(axios).getClasses();
    expect(result.count).toEqual(1);
    expect(result.results).toEqual(response.results);
  });

  it('getClassByIndex works as expected', async () => {
    const response = {
      index: 'barbarian',
      name: 'Barbarian',
      hit_die: 12,
      class_levels: '/api/classes/barbarian/levels',
      url: '/api/classes/barbarian'
    };

    mock.onGet('/api/classes/barbarian').reply(200, response);

    const result = await useClassApi(axios).getClassByIndex('barbarian');
    expect(result).toEqual(response);
  });

  it('getClassSpellcastingByIndex works as expected', async () => {
    const response = {
      level: 1,
      spellcasting_ability: {
        index: 'wis',
        name: 'WIS',
        url: '/api/ability-scores/wis'
      }
    };

    mock.onGet('/api/classes/druid/spellcasting').reply(200, response);

    const result = await useClassApi(axios).getClassSpellcastingByIndex('druid');
    expect(result).toEqual(response);
  });

  it('getClassMulticlassingByIndex works as expected', async () => {
    const response = {
      prerequisites: [
        {
          ability_score: {
            index: 'int',
            name: 'INT',
            url: '/api/ability-scores/int'
          },
          minimum_score: 13
        }
      ],
      proficiencies: []
    };

    mock.onGet('/api/classes/wizard/multi-classing').reply(200, response);

    const result = await useClassApi(axios).getClassMulticlassingByIndex('wizard');
    expect(result).toEqual(response);
  });

  it('getClassSubclassesByIndex works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'evocation',
          name: 'Evocation',
          url: '/api/subclasses/evocation'
        }
      ]
    };

    mock.onGet('/api/classes/wizard/subclasses').reply(200, response);

    const result = await useClassApi(axios).getClassSubclassesByIndex('wizard');
    expect(result.count).toEqual(1);
    expect(result.results).toEqual(response.results);
  });

  it('getClassSpellsByIndex works as expected', async () => {
    const response = {
      count: 2,
      results: [
        {
          index: 'acid-splash',
          name: 'Acid Splash',
          url: '/api/spells/acid-splash'
        },
        {
          index: 'chill-touch',
          name: 'Chill Touch',
          url: '/api/spells/chill-touch'
        }
      ]
    };

    mock.onGet('/api/classes/wizard/spells').reply(200, response);

    const result = await useClassApi(axios).getClassSpellsByIndex('wizard');
    expect(result.count).toEqual(2);
    expect(result.results).toEqual(response.results);
  });

  it('getClassFeaturesByIndex works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'arcane-recovery',
          name: 'Arcane Recovery',
          url: '/api/features/arcane-recovery'
        }
      ]
    };

    mock.onGet('/api/classes/wizard/features').reply(200, response);

    const result = await useClassApi(axios).getClassFeaturesByIndex('wizard');
    expect(result.count).toEqual(1);
    expect(result.results).toEqual(response.results);
  });

  it('getClassProficienciesByIndex works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'daggers',
          name: 'Daggers',
          url: '/api/proficiencies/daggers'
        }
      ]
    };

    mock.onGet('/api/classes/wizard/proficiencies').reply(200, response);

    const result = await useClassApi(axios).getClassProficienciesByIndex('wizard');
    expect(result.count).toEqual(1);
    expect(result.results).toEqual(response.results);
  });

  it('getClassLevelsByIndex works as expected', async () => {
    const response = [
      {
        level: 1,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        features: [
          {
            index: 'spellcasting-wizard',
            name: 'Spellcasting: Wizard',
            url: '/api/features/spellcasting-wizard'
          },
          {
            index: 'arcane-recovery',
            name: 'Arcane Recovery',
            url: '/api/features/arcane-recovery'
          }
        ]
      }
    ];

    mock.onGet('/api/classes/wizard/levels').reply(200, response);

    const result = await useClassApi(axios).getClassLevelsByIndex('wizard');
    expect(result).toEqual(response);
  });

  it('getClassLevelsByIndexAndSubclass works as expected', async () => {
    const response = [
      {
        level: 1,
        ability_score_bonuses: 0,
        prof_bonus: 2,
        features: [
          {
            index: 'spellcasting-wizard',
            name: 'Spellcasting: Wizard',
            url: '/api/features/spellcasting-wizard'
          },
          {
            index: 'arcane-recovery',
            name: 'Arcane Recovery',
            url: '/api/features/arcane-recovery'
          }
        ]
      }
    ];

    mock.onGet('/api/classes/wizard/levels?subclass=evocation').reply(200, response);

    const result = await useClassApi(axios).getClassLevelsByIndexAndSubclass('wizard', 'evocation');
    expect(result).toEqual(response);
  });

  it('getClassLevelByIndexAndLevel works as expected', async () => {
    const response = {
      level: 1,
      ability_score_bonuses: 0,
      prof_bonus: 2,
      features: [
        {
          index: 'spellcasting-wizard',
          name: 'Spellcasting: Wizard',
          url: '/api/features/spellcasting-wizard'
        },
        {
          index: 'arcane-recovery',
          name: 'Arcane Recovery',
          url: '/api/features/arcane-recovery'
        }
      ]
    };

    mock.onGet('/api/classes/wizard/levels/1').reply(200, response);

    const result = await useClassApi(axios).getClassLevelByIndexAndLevel('wizard', 1);
    expect(result).toEqual(response);
  });

  it('getClassLevelFeaturesByIndexAndLevel works as expected', async () => {
    const response = {
      count: 2,
      results: [
        {
          index: 'arcane-recovery',
          name: 'Arcane Recovery',
          url: '/api/features/arcane-recovery'
        },
        {
          index: 'spellcasting-wizard',
          name: 'Spellcasting: Wizard',
          url: '/api/features/spellcasting-wizard'
        }
      ]
    };

    mock.onGet('/api/classes/wizard/levels/1/features').reply(200, response);

    const result = await useClassApi(axios).getClassLevelFeaturesByIndexAndLevel('wizard', 1);
    expect(result.count).toEqual(2);
    expect(result.results).toEqual(response.results);
  });

  it('getClassLevelSpellsByIndexAndLevel works as expected', async () => {
    const response = {
      count: 2,
      results: [
        {
          index: 'alarm',
          name: 'Alarm',
          url: '/api/spells/alarm'
        },
        {
          index: 'burning-hands',
          name: 'Burning Hands',
          url: '/api/spells/burning-hands'
        }
      ]
    };

    mock.onGet('/api/classes/wizard/levels/1/spells').reply(200, response);

    const result = await useClassApi(axios).getClassLevelSpellsByIndexAndLevel('wizard', 1);
    expect(result.count).toEqual(2);
    expect(result.results).toEqual(response.results);
  });
});
