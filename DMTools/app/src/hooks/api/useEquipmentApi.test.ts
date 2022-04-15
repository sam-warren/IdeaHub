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

  it('getEquipment works as expected', async () => {});

  it('getEquipmentByIndex works as expected', async () => {});

  it('getEquipmentCategories works as expected', async () => {});

  it('getEquipmentCategoryByIndex works as expected', async () => {});

  it('getMagicItems works as expected', async () => {});

  it('getMagicItemByIndex works as expected', async () => {});

  it('getWeaponProperties works as expected', async () => {});

  it('getWeaponPropertyByIndex works as expected', async () => {});
});
