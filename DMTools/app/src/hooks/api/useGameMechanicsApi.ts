import { AxiosInstance } from 'axios';
import { iAPIReferenceList } from '../../interfaces/Common/iAPIReferenceList';
import { iCondition } from '../../interfaces/GameMechanics/iCondition';
import { iDamageType } from '../../interfaces/GameMechanics/iDamageType';
import { iMagicSchool } from '../../interfaces/GameMechanics/iMagicSchool';
import { Condition } from '../../constants/Condition';
import { DamageType } from '../../constants/DamageType';
import { MagicSchool } from '../../constants/MagicSchool';

const useGameMechanicsApi = (axios: AxiosInstance) => {
  /* ========== Conditions ========== */

  /**
   * GET /api/conditions
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getConditions();
   */
  const getConditions = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/conditions`);
    return data;
  };

  /**
   * GET /api/conditions/{index}
   * @param {index} Condition
   * @returns {data} {Promise<iCondition>}
   * @example
   * getConditionByIndex(Condition.Blinded);
   */
  const getConditionByIndex = async (index: Condition): Promise<iCondition> => {
    const { data } = await axios.get(`/api/conditions/${index}`);
    return data;
  };

  /* ========== Damage Types ========== */

  /**
   * GET /api/damage-types
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getDamageTypes();
   */
  const getDamageTypes = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/damage-types`);
    return data;
  };

  /**
   * GET /api/damage-types/{index}
   * @param {index} DamageType
   * @returns {data} {Promise<iDamageType>}
   * @example
   * getDamageTypeByIndex(DamageType.Acid);
   */
  const getDamageTypeByIndex = async (index: DamageType): Promise<iDamageType> => {
    const { data } = await axios.get(`/api/damage-types/${index}`);
    return data;
  };

  /* ========== Magic Schools ========== */

  /**
   * GET /api/magic-schools
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getMagicSchools();
   */
  const getMagicSchools = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/magic-schools`);
    return data;
  };

  /**
   * GET /api/magic-schools/{index}
   * @param {index} MagicSchool
   * @returns {data} {Promise<iMagicSchool>}
   * @example
   * getMagicSchoolByIndex(MagicSchool.Abjuration);
   */
  const getMagicSchoolByIndex = async (index: MagicSchool): Promise<iMagicSchool> => {
    const { data } = await axios.get(`/api/magic-schools/${index}`);
    return data;
  };

  return {
    getConditions,
    getConditionByIndex,
    getDamageTypes,
    getDamageTypeByIndex,
    getMagicSchools,
    getMagicSchoolByIndex
  };
};

export default useGameMechanicsApi;
