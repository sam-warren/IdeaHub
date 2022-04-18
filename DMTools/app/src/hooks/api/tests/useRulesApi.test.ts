import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Rule } from '../../../constants/Rule';
import { RuleSection } from '../../../constants/RuleSection';
import useRulesApi from '../useRulesApi';

describe('useRulesApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getRuleSections works as expected', async () => {
    const response = {
      count: 30,
      results: [
        {
          name: 'Ability Checks',
          index: 'ability-checks',
          url: '/api/rule-sections/ability-checks'
        },
        {
          name: 'Ability Scores and Modifiers',
          index: 'ability-scores-and-modifiers',
          url: '/api/rule-sections/ability-scores-and-modifiers'
        }
      ]
    };

    mock.onGet('/api/rule-sections').reply(200, response);

    const result = await useRulesApi(axios).getRuleSections();
    expect(result).toEqual(response);
  });

  it('getRuleSectionByIndex works as expected', async () => {
    const response = {
      name: 'Cover',
      index: 'cover',
      desc: "## Cover\n\nWalls, trees, creatures, and other obstacles can provide cover during combat, making a target more difficult to harm. A target can benefit from cover only when an attack or other effect originates on the opposite side of the cover.\n\nThere are three degrees of cover. If a target is behind multiple sources of cover, only the most protective degree of cover applies; the degrees aren't added together. For example, if a target is behind a creature that gives half cover and a tree trunk that gives three-quarters cover, the target has three-quarters cover.\n\nA target with **half cover** has a +2 bonus to AC and Dexterity saving throws. A target has half cover if an obstacle blocks at least half of its body. The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend.\n\nA target with **three-quarters cover** has a +5 bonus to AC and Dexterity saving throws. A target has three-quarters cover if about three-quarters of it is covered by an obstacle. The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.\n\nA target with **total cover** can't be targeted directly by an attack or a spell, although some spells can reach such a target by including it in an area of effect. A target has total cover if it is completely concealed by an obstacle.\n",
      url: '/api/rule-sections/cover'
    };

    mock.onGet('/api/rule-sections/cover').reply(200, response);

    const result = await useRulesApi(axios).getRuleSectionByIndex(RuleSection.Cover);
    expect(result).toEqual(response);
  });

  it('getRules works as expected', async () => {
    const response = {
      count: 6,
      results: [
        {
          name: 'Adventuring',
          index: 'adventuring',
          url: '/api/rules/adventuring'
        },
        {
          name: 'Appendix',
          index: 'appendix',
          url: '/api/rules/appendix'
        }
      ]
    };

    mock.onGet('/api/rules').reply(200, response);

    const result = await useRulesApi(axios).getRules();
    expect(result).toEqual(response);
  });

  it('getRuleByIndex works as expected', async () => {
    const response = {
      name: 'Combat',
      index: 'combat',
      desc: '# Combat\n',
      subsections: [
        {
          name: 'The Order of Combat',
          index: 'the-order-of-combat',
          url: '/api/rule-sections/the-order-of-combat'
        },
        {
          name: 'Movement and Position',
          index: 'movement-and-position',
          url: '/api/rule-sections/movement-and-position'
        },
        {
          name: 'Actions in Combat',
          index: 'actions-in-combat',
          url: '/api/rule-sections/actions-in-combat'
        },
        {
          name: 'Making an Attack',
          index: 'making-an-attack',
          url: '/api/rule-sections/making-an-attack'
        },
        {
          name: 'Cover',
          index: 'cover',
          url: '/api/rule-sections/cover'
        },
        {
          name: 'Damage and Healing',
          index: 'damage-and-healing',
          url: '/api/rule-sections/damage-and-healing'
        },
        {
          name: 'Mounted Combat',
          index: 'mounted-combat',
          url: '/api/rule-sections/mounted-combat'
        },
        {
          name: 'Underwater Combat',
          index: 'underwater-combat',
          url: '/api/rule-sections/underwater-combat'
        }
      ],
      url: '/api/rules/combat'
    };

    mock.onGet('/api/rules/combat').reply(200, response);

    const result = await useRulesApi(axios).getRuleByIndex(Rule.Combat);
    expect(result).toEqual(response);
  });
});
