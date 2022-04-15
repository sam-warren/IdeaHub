import { AxiosInstance } from 'axios';

import { iAPIReferenceList } from '../../interfaces/Common/iAPIReferenceList';
import { iClass } from '../../interfaces/Class/iClass';
import { iClassSpellcasting } from '../../interfaces/Class/iClassSpellcasting';
import { iMulticlass } from '../../interfaces/Class/iMulticlass';
import { iClassLevel } from '../../interfaces/ClassLevels/iClassLevel';


const useClassApi = (axios: AxiosInstance) => {
  /* ========== Class Info ========== */

  /**
   * GET /api/classes
   * @returns {*} {Promise<iAPIReferenceList>}
   */
  const getClasses = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/classes`);
    return data;
  };

  /**
   * GET /api/classes/{index}
   * @param {index} string
   * @returns {data} {Promise<iClass>}
   * @example
   * getClassByIndex('barbarian');
   */
  const getClassByIndex = async (index: string): Promise<iClass> => {
    const { data } = await axios.get(`/api/classes/${index}`);
    return data;
  };

  /* ========== Spellcasting ========== */

  /**
   * GET /api/classes/{index}/spellcasting
   * @param {index} string
   * @returns {data} {Promise<iClassSpellcasting>}
   * @example
   * getClassSpellcastingByIndex('barbarian');
   */
  const getClassSpellcastingByIndex = async (index: string): Promise<iClassSpellcasting> => {
    const { data } = await axios.get(`/api/classes/${index}/spellcasting`);
    return data;
  };

  /* ========== Multiclassing ========== */

  /**
   * GET /api/classes/{index}/multiclassing
   * @param {index} string
   * @returns {data} {Promise<iMulticlass>}
   * @example
   * getClassMulticlassingByIndex('barbarian');
   */
  const getClassMulticlassingByIndex = async (index: string): Promise<iMulticlass> => {
    const { data } = await axios.get(`/api/classes/${index}/multiclassing`);
    return data;
  };

  /* ========== Class Resources ========== */

  /**
   * GET /api/classes/{index}/subclass
   * @param {index} string
   * @returns {data} {Promise<iAPIReferenceList>}
   * @example
   * getClassSubclassesByIndex('barbarian');
   */
  const getClassSubclassesByIndex = async (index: string): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/classes/${index}/subclass`);
    return data;
  };

  /**
   * GET /api/classes/{index}/spells
   * @param {index} string
   * @returns {data} {Promise<iAPIReferenceList>}
   * @example
   * getClassSpellsByIndex('barbarian');
   */
  const getClassSpellsByIndex = async (index: string): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/classes/${index}/spells`);
    return data;
  };

  /**
   * GET /api/classes/{index}/features
   * @param {index} string
   * @returns {data} {Promise<iAPIReferenceList>}
   * @example
   * getClassFeaturesByIndex('barbarian');
   */
  const getClassFeaturesByIndex = async (index: string): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/classes/${index}/features`);
    return data;
  };

  /**
   * GET /api/classes/{index}/proficiencies
   * @param {index} string
   * @returns {data} {Promise<iAPIReferenceList>}
   * @example
   * getClassProficienciesByIndex('barbarian');
   */
  const getClassProficienciesByIndex = async (index: string): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/classes/${index}/proficiencies`);
    return data;
  };

  /* ========== Class Levels ========== */

  /**
   * GET /api/classes/{index}/levels
   * @param {index} string
   * @returns {data} {Promise<iClassLevel[]>}
   * @example
   * getClassLevelsByIndex('barbarian');
   */
  const getClassLevelsByIndex = async (index: string): Promise<iClassLevel[]> => {
    const { data } = await axios.get(`/api/classes/${index}/levels`);
    return data;
  };

  /**
   * GET /api/classes/{index}/levels?subclass={subclass}
   * @param {index} string
   * @param {subclass} string
   * @returns {data} {Promise<iClassLevel[]>}
   * @example
   * getClassLevelsByIndexAndSubclass('barbarian', 'berserker');
   */
  const getClassLevelsByIndexAndSubclass = async (index: string, subclass: string): Promise<iClassLevel[]> => {
    const { data } = await axios.get(`/api/classes/${index}/levels?subclass=${subclass}`);
    return data;
  };

  /**
   * GET /api/classes/{index}/levels/{class_level}
   * @param {index} string
   * @param {level} number
   * @returns {data} {Promise<iClassLevel>}
   * @example
   * getClassLevelByIndexAndLevel('barbarian', 1);
   */
  const getClassLevelByIndexAndLevel = async (index: string, level: number): Promise<iClassLevel> => {
    const { data } = await axios.get(`/api/classes/${index}/levels/${level}`);
    return data;
  };

  /**
   * GET /api/classes/{index}/levels/{class_level}/features
   * @param {index} string
   * @param {level} number
   * @returns {data} {Promise<iAPIReferenceList>}
   * @example
   * getClassLevelFeaturesByIndexAndLevel('barbarian', 1);
   */
  const getClassLevelFeaturesByIndexAndLevel = async (index: string, level: number): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/classes/${index}/levels/${level}/features`);
    return data;
  };

  /**
   * GET /api/classes/{index}/levels/{spell_level}/spells
   * @param {index} string
   * @param {spell_level} number
   * @returns {data} {Promise<iAPIReferenceList>}
   * @example
   * getClassLevelSpellsByIndexAndLevel('barbarian', 1);
   */
  const getClassLevelSpellsByIndexAndLevel = async (index: string, spell_level: number): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/classes/${index}/levels/${spell_level}/spells`);
    return data;
  };

  return {
    getClasses,
    getClassByIndex,
    getClassSpellcastingByIndex,
    getClassMulticlassingByIndex,
    getClassSubclassesByIndex,
    getClassSpellsByIndex,
    getClassFeaturesByIndex,
    getClassProficienciesByIndex,
    getClassLevelsByIndex,
    getClassLevelsByIndexAndSubclass,
    getClassLevelByIndexAndLevel,
    getClassLevelFeaturesByIndexAndLevel,
    getClassLevelSpellsByIndexAndLevel
  };
};

export default useClassApi;
