import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useEquipmentApi from './useEquipmentApi';

describe('useEquipmentApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });
});
