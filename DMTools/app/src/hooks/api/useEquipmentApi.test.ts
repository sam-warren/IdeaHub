import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { WeaponProperty } from '../../constants/WeaponProperty';
import useEquipmentApi from './useEquipmentApi';

describe('useEquipmentApi', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('getEquipment works as expected', async () => {
    const response = {
      count: 2,
      results: [
        {
          index: 'abacus',
          name: 'Abacus',
          url: '/api/equipment/abacus'
        },
        {
          index: 'acid-vial',
          name: 'Acid (vial)',
          url: '/api/equipment/acid-vial'
        }
      ]
    };

    mock.onGet('/api/equipment').reply(200, response);

    const result = await useEquipmentApi(axios).getEquipment();
    expect(result).toEqual(response);
  });

  it('getEquipmentByIndex works as expected', async () => {
    const response = {
      desc: [],
      special: [],
      index: 'abacus',
      name: 'Abacus',
      equipment_category: {
        index: 'adventuring-gear',
        name: 'Adventuring Gear',
        url: '/api/equipment-categories/adventuring-gear'
      },
      gear_category: {
        index: 'standard-gear',
        name: 'Standard Gear',
        url: '/api/equipment-categories/standard-gear'
      },
      cost: {
        quantity: 2,
        unit: 'gp'
      },
      weight: 2,
      url: '/api/equipment/abacus',
      contents: [],
      properties: []
    };

    mock.onGet('/api/equipment/abacus').reply(200, response);

    const result = await useEquipmentApi(axios).getEquipmentByIndex('abacus');
    expect(result).toEqual(response);
  });

  it('getEquipmentCategories works as expected', async () => {
    const response = {
      count: 2,
      results: [
        {
          index: 'adventuring-gear',
          name: 'Adventuring Gear',
          url: '/api/equipment-categories/adventuring-gear'
        },
        {
          index: 'standard-gear',
          name: 'Standard Gear',
          url: '/api/equipment-categories/standard-gear'
        }
      ]
    };

    mock.onGet('/api/equipment-categories').reply(200, response);

    const result = await useEquipmentApi(axios).getEquipmentCategories();
    expect(result).toEqual(response);
  });

  it('getEquipmentCategoryByIndex works as expected', async () => {
    const response = {
      index: 'adventuring-gear',
      name: 'Adventuring Gear',
      equipment: [
        {
          index: 'abacus',
          name: 'Abacus',
          url: '/api/equipment/abacus'
        }
      ]
    };

    mock.onGet('/api/equipment-categories/adventuring-gear').reply(200, response);

    const result = await useEquipmentApi(axios).getEquipmentCategoryByIndex('adventuring-gear');
    expect(result).toEqual(response);
  });

  it('getMagicItems works as expected', async () => {
    const response = {
      count: 2,
      results: [
        {
          index: 'adamantine-armor',
          name: 'Adamantine Armor',
          url: '/api/magic-items/adamantine-armor'
        },
        {
          index: 'ammunition',
          name: 'Ammunition, +1, +2, or +3',
          url: '/api/magic-items/ammunition'
        }
      ]
    };

    mock.onGet('/api/magic-items').reply(200, response);

    const result = await useEquipmentApi(axios).getMagicItems();
    expect(result).toEqual(response);
  });

  it('getMagicItemByIndex works as expected', async () => {
    const response = {
      index: 'adamantine-armor',
      name: 'Adamantine Armor',
      equipment_category: {
        index: 'armor',
        name: 'Armor',
        url: '/api/equipment-categories/armor'
      },
      rarity: {
        name: 'Uncommon'
      },
      variants: [],
      variant: false,
      desc: [
        'Armor (medium or heavy, but not hide), uncommon',
        "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit."
      ],
      url: '/api/magic-items/adamantine-armor'
    };

    mock.onGet('/api/magic-items/adamantine-armor').reply(200, response);

    const result = await useEquipmentApi(axios).getMagicItemByIndex('adamantine-armor');
    expect(result).toEqual(response);
  });

  it('getWeaponProperties works as expected', async () => {
    const response = {
      count: 2,
      results: [
        {
          index: 'ammunition',
          name: 'Ammunition, +1, +2, or +3',
          url: '/api/weapon-properties/ammunition'
        },
        {
          index: 'finesse',
          name: 'Finesse',
          url: '/api/weapon-properties/finesse'
        }
      ]
    };

    mock.onGet('/api/weapon-properties').reply(200, response);

    const result = await useEquipmentApi(axios).getWeaponProperties();
    expect(result).toEqual(response);
  });

  it('getWeaponPropertyByIndex works as expected', async () => {
    const response = {
      index: 'ammunition',
      name: 'Ammunition',
      desc: [
        'You can use a weapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon).',
        'At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield. If you use a weapon that has the ammunition property to make a melee attack, you treat the weapon as an improvised weapon (see "Improvised Weapons" later in the section). A sling must be loaded to deal any damage when used in this way.'
      ],
      url: '/api/weapon-properties/ammunition'
    };

    mock.onGet('/api/weapon-properties/ammunition').reply(200, response);

    const result = await useEquipmentApi(axios).getWeaponPropertyByIndex(WeaponProperty.Ammunition);
    expect(result).toEqual(response);
  });
});
