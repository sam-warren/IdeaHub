import { AxiosInstance } from 'axios';
import { iAPIReferenceList } from '../../interfaces/Common/iAPIReferenceList';
import { iEquipmentCategory } from '../../interfaces/Equipment/iEquipmentCategory';
import { iMagicItem } from '../../interfaces/Equipment/iMagicItem';
import { iWeaponProperty } from '../../interfaces/Equipment/iWeaponProperty';
import { WeaponProperty } from '../../constants/WeaponProperty';

const useEquipmentApi = (axios: AxiosInstance) => {
  /* ========== Equipment ========== */

  /**
   * GET /api/equipment
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getEquipment();
   */
  const getEquipment = async (): Promise<iAPIReferenceList> => {
    // TODO CHANGE THIS WHEN WE HAVE PROPER EQUIPMENT INTERFACE
    const { data } = await axios.get(`/api/equipment`);
    return data;
  };

  /**
   * GET /api/equipment/{index}
   * @param {index} string
   * @returns {data} {Promise<any>} // TODO CHANGE THIS WHEN WE HAVE PROPER EQUIPMENT INTERFACE
   * @example
   * getEquipmentByIndex('club');
   */
  const getEquipmentByIndex = async (index: string): Promise<any> => {
    const { data } = await axios.get(`/api/equipment/${index}`);
    return data;
  };

  /* ========== Equipment Categories ========== */

  /**
   * GET /api/equipment-categories
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getEquipmentCategories();
   */
  const getEquipmentCategories = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/equipment-categories`);
    return data;
  };

  /**
   * GET /api/equipment-categories/{index}
   * @param {index} string
   * @returns {data} {Promise<iEquipmentCategory>}
   * @example
   * getEquipmentCategoryByIndex('waterborne-vehicles');
   */
  const getEquipmentCategoryByIndex = async (index: string): Promise<iEquipmentCategory> => {
    const { data } = await axios.get(`/api/equipment-categories/${index}`);
    return data;
  };

  /* ========== Magic Items ========== */

  /**
   * GET /api/magic-items
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getMagicItems();
   */
  const getMagicItems = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/magic-items`);
    return data;
  };

  /**
   * GET /api/magic-items/{index}
   * @param {index} string
   * @returns {data} {Promise<iMagicItem>}
   * @example
   * getMagicItemByIndex('adamantine-armor');
   */
  const getMagicItemByIndex = async (index: string): Promise<iMagicItem> => {
    const { data } = await axios.get(`/api/magic-items/${index}`);
    return data;
  };

  /* ========== Weapon Properties ========== */

  /**
   * GET /api/weapon-properties
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getWeaponProperties();
   */
  const getWeaponProperties = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/weapon-properties`);
    return data;
  };

  /**
   * GET /api/weapon-properties/{index}
   * @param {index} WeaponProperty
   * @returns {data} {Promise<iWeaponProperty>}
   * @example
   * getWeaponPropertyByIndex(WeaponProperty.Finesse);
   */
  const getWeaponPropertyByIndex = async (index: WeaponProperty): Promise<iWeaponProperty> => {
    const { data } = await axios.get(`/api/weapon-properties/${index}`);
    return data;
  };

  return {
    getEquipment,
    getEquipmentByIndex,
    getEquipmentCategories,
    getEquipmentCategoryByIndex,
    getMagicItems,
    getMagicItemByIndex,
    getWeaponProperties,
    getWeaponPropertyByIndex
  };
};

export default useEquipmentApi;
