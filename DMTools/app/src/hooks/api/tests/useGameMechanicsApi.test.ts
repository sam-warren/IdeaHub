import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Condition } from '../../../constants/Condition';
import { DamageType } from '../../../constants/DamageType';
import { MagicSchool } from '../../../constants/MagicSchool';
import useGameMechanicsApi from '../useGameMechanicsApi';

describe('useGameMechanicsApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getConditions works as expected', async () => {
    const response = {
      count: 2,
      results: [
        {
          index: 'blinded',
          name: 'Blinded',
          url: '/api/conditions/blinded'
        },
        {
          index: 'charmed',
          name: 'Charmed',
          url: '/api/conditions/charmed'
        }
      ]
    };

    mock.onGet('/api/conditions').reply(200, response);

    const result = await useGameMechanicsApi(axios).getConditions();
    expect(result).toEqual(response);
  });

  it('getConditionByIndex works as expected', async () => {
    const response = {
      index: 'blinded',
      name: 'Blinded',
      desc: [
        "- A blinded creature can't see and automatically fails any ability check that requires sight.",
        "- Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage."
      ],
      url: '/api/conditions/blinded'
    };

    mock.onGet('/api/conditions/blinded').reply(200, response);

    const result = await useGameMechanicsApi(axios).getConditionByIndex(Condition.Blinded);
    expect(result).toEqual(response);
  });

  it('getDamageTypes works as expected', async () => {
    const response = {
      count: 2,
      results: [
        {
          index: 'acid',
          name: 'Acid',
          url: '/api/damage-types/acid'
        },
        {
          index: 'bludgeoning',
          name: 'Bludgeoning',
          url: '/api/damage-types/bludgeoning'
        }
      ]
    };

    mock.onGet('/api/damage-types').reply(200, response);

    const result = await useGameMechanicsApi(axios).getDamageTypes();
    expect(result).toEqual(response);
  });

  it('getDamageTypeByIndex works as expected', async () => {
    const response = {
      index: 'acid',
      name: 'Acid',
      desc: [
        "The corrosive spray of a black dragon's breath and the dissolving enzymes secreted by a black pudding deal acid damage."
      ],
      url: '/api/damage-types/acid'
    };

    mock.onGet('/api/damage-types/acid').reply(200, response);

    const result = await useGameMechanicsApi(axios).getDamageTypeByIndex(DamageType.Acid);
    expect(result).toEqual(response);
  });

  it('getMagicSchools works as expected', async () => {
    const response = {
      count: 8,
      results: [
        {
          index: 'abjuration',
          name: 'Abjuration',
          url: '/api/magic-schools/abjuration'
        },
        {
          index: 'conjuration',
          name: 'Conjuration',
          url: '/api/magic-schools/conjuration'
        }
      ]
    };

    mock.onGet('/api/magic-schools').reply(200, response);

    const result = await useGameMechanicsApi(axios).getMagicSchools();
    expect(result).toEqual(response);
  });

  it('getMagicSchoolByIndex works as expected', async () => {
    const response = {
      index: 'abjuration',
      name: 'Abjuration',
      desc: 'Abjuration spells are protective in nature, though some of them have aggressive uses. They create magical barriers, negate harmful effects, harm trespassers, or banish creatures to other planes of existence.',
      url: '/api/magic-schools/abjuration'
    };

    mock.onGet('/api/magic-schools/abjuration').reply(200, response);

    const result = await useGameMechanicsApi(axios).getMagicSchoolByIndex(MagicSchool.Abjuration);
    expect(result).toEqual(response);
  });
});
