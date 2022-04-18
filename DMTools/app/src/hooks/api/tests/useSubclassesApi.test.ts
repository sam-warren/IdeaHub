import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useSubclassesApi from './useSubclassesApi';

describe('useSubclassesApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getSubclasses works as expected', async () => {
    const response = {
      count: 2,
      results: [
        {
          index: 'berserker',
          name: 'Berserker',
          url: '/api/subclasses/berserker'
        },
        {
          index: 'champion',
          name: 'Champion',
          url: '/api/subclasses/champion'
        }
      ]
    };

    mock.onGet('/api/subclasses').reply(200, response);

    const result = await useSubclassesApi(axios).getSubclasses();
    expect(result).toEqual(response);
  });

  it('getSubclassByIndex works as expected', async () => {
    const response = {
      index: 'berserker',
      class: {
        index: 'barbarian',
        name: 'Barbarian',
        url: '/api/classes/barbarian'
      },
      name: 'Berserker',
      subclass_flavor: 'Primal Path',
      desc: [
        "For some barbarians, rage is a means to an end--that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being."
      ],
      subclass_levels: '/api/subclasses/berserker/levels',
      url: '/api/subclasses/berserker',
      spells: []
    };

    mock.onGet('/api/subclasses/berserker').reply(200, response);

    const result = await useSubclassesApi(axios).getSubclassByIndex('berserker');
    expect(result).toEqual(response);
  });

  it('getSubclassFeaturesByIndex works as expected', async () => {
    const response = {
      count: 4,
      results: [
        {
          index: 'frenzy',
          name: 'Frenzy',
          url: '/api/features/frenzy'
        },
        {
          index: 'mindless-rage',
          name: 'Mindless Rage',
          url: '/api/features/mindless-rage'
        },
        {
          index: 'intimidating-presence',
          name: 'Intimidating Presence',
          url: '/api/features/intimidating-presence'
        },
        {
          index: 'retaliation',
          name: 'Retaliation',
          url: '/api/features/retaliation'
        }
      ]
    };

    mock.onGet('/api/subclasses/berserker/features').reply(200, response);

    const result = await useSubclassesApi(axios).getSubclassFeaturesByIndex('berserker');
    expect(result).toEqual(response);
  });

  it('getSubclassLevelsByIndex works as expected', async () => {
    const response = [
      {
        level: 3,
        features: [
          {
            index: 'frenzy',
            name: 'Frenzy',
            url: '/api/features/frenzy'
          }
        ],
        class: {
          index: 'barbarian',
          name: 'Barbarian',
          url: '/api/classes/barbarian'
        },
        subclass: {
          index: 'berserker',
          name: 'Berserker',
          url: '/api/subclasses/berserker'
        },
        url: '/api/subclasses/berserker/levels/3',
        index: 'berserker-3'
      }
    ];

    mock.onGet('/api/subclasses/berserker/levels').reply(200, response);

    const result = await useSubclassesApi(axios).getSubclassLevelsByIndex('berserker');
    expect(result).toEqual(response);
  });

  it('getSubclassLevelByIndexAndLevel works as expected', async () => {
    const response = {
      level: 3,
      features: [
        {
          index: 'frenzy',
          name: 'Frenzy',
          url: '/api/features/frenzy'
        }
      ],
      class: {
        index: 'barbarian',
        name: 'Barbarian',
        url: '/api/classes/barbarian'
      },
      subclass: {
        index: 'berserker',
        name: 'Berserker',
        url: '/api/subclasses/berserker'
      },
      url: '/api/subclasses/berserker/levels/3',
      index: 'berserker-3'
    };

    mock.onGet('/api/subclasses/berserker/levels/3').reply(200, response);

    const result = await useSubclassesApi(axios).getSubclassLevelByIndexAndLevel('berserker', 3);
    expect(result).toEqual(response);
  });

  it('getSubclassLevelFeaturesByIndexAndLevel works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'frenzy',
          name: 'Frenzy',
          url: '/api/features/frenzy'
        }
      ]
    };

    mock.onGet('/api/subclasses/berserker/levels/3/features').reply(200, response);

    const result = await useSubclassesApi(axios).getSubclassLevelFeaturesByIndexAndLevel('berserker', 3);
    expect(result).toEqual(response);
  });
});
