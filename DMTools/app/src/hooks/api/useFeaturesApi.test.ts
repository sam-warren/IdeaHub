import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useFeaturesApi from './useFeaturesApi';

describe('useFeaturesApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getFeatures works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'action-surge-1-use',
          name: 'Action Surge (1 use)',
          url: '/api/features/action-surge-1-use'
        }
      ]
    };

    mock.onGet('/api/features').reply(200, response);

    const result = await useFeaturesApi(axios).getFeatures();
    expect(result).toEqual(response);
  });

  it('getFeatureByIndex works as expected', async () => {
    const response = {
      index: 'action-surge-1-use',
      class: {
        index: 'fighter',
        name: 'Fighter',
        url: '/api/classes/fighter'
      },
      name: 'Action Surge (1 use)',
      level: 2,
      prerequisites: [],
      desc: [
        'Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.',
        'Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.'
      ],
      url: '/api/features/action-surge-1-use'
    };

    mock.onGet('/api/features/action-surge-1-use').reply(200, response);

    const result = await useFeaturesApi(axios).getFeatureByIndex('action-surge-1-use');
    expect(result).toEqual(response);
  });
});
