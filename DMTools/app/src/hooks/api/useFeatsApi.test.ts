import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useFeatsApi from './useFeatsApi';

describe('useFeatsApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getFeats works as expected', async () => {
    const response = {
      count: 1,
      results: [
        {
          index: 'grappler',
          name: 'Grappler',
          url: '/api/feats/grappler'
        }
      ]
    };

    mock.onGet('/api/feats').reply(200, response);

    const result = await useFeatsApi(axios).getFeats();
    expect(result).toEqual(response);
  });

  it('getFeatByIndex works as expected', async () => {
    const response = {
      index: 'grappler',
      name: 'Grappler',
      prerequisites: [
        {
          ability_score: {
            index: 'str',
            name: 'STR',
            url: '/api/ability-scores/str'
          },
          minimum_score: 13
        }
      ],
      desc: [
        'You’ve developed the Skills necessary to hold your own in close--quarters Grappling. You gain the following benefits:',
        '- You have advantage on Attack Rolls against a creature you are Grappling.',
        '- You can use your action to try to pin a creature Grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both Restrained until the grapple ends.'
      ],
      url: '/api/feats/grappler'
    };

    mock.onGet('/api/feats/grappler').reply(200, response);

    const result = await useFeatsApi(axios).getFeatByIndex('grappler');
    expect(result).toEqual(response);
  });
});
