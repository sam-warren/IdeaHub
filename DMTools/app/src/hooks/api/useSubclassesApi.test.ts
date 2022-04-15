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

  it('getSubclasses works as expected', async () => {});

  it('getSubclassByIndex works as expected', async () => {});

  it('getSubclassFeaturesByIndex works as expected', async () => {});

  it('getSubclassLevelsByIndex works as expected', async () => {});

  it('getSubclassLevelByIndexAndLevel works as expected', async () => {});

  it('getSubclassLevelFeaturesByIndexAndLevel works as expected', async () => {});
});
