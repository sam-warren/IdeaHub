import { AxiosInstance } from 'axios';
import { MagicSchool } from '../../constants/MagicSchool';
import { iAPIReferenceList } from '../../interfaces/Common/iAPIReferenceList';
import { iSpell } from '../../interfaces/Spells/iSpell';
import { spellLevelValidator } from './utils/apiUtils';

const useSpellsApi = (axios: AxiosInstance) => {
  /* ========== Spells ========== */

  /**
   * GET /api/spells
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getSpells();
   */
  const getSpells = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/spells`);
    return data;
  };

  /**
   * GET /api/spells?school={school}
   * @param {school} MagicSchool[]
   * @returns {data} {Promise<iAPIReferenceList>}
   * @example
   * getSpellsBySchool([MagicSchool.Abjuration, MagicSchool.Evocation]);
   */
  const getSpellsBySchool = async (school: MagicSchool | MagicSchool[]): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/spells?school=${school.toString()}`);
    return data;
  };

  /**
   * GET /api/spells?level={level}
   * @param {level} number[]
   * @returns {data} {Promise<iAPIReferenceList>}
   * @description Levels can be a single number or an array of numbers.
   * @example
   * getSpellsByLevel([1, 2]);
   */
  const getSpellsByLevel = async (level: number | number[]): Promise<iAPIReferenceList> => {
    if (!spellLevelValidator(level)) {
      throw new Error('Spell level must be between 1 and 9');
    }
    const { data } = await axios.get(`/api/spells?level=${level.toString()}`);
    return data;
  };

  /**
   * GET /api/spells?level={level}&school={school}
   * @param {level} number[]
   * @param {school} MagicSchool[]
   * @returns {data} {Promise<iAPIReferenceList>}
   * @description Gets spells by level and school.
   * @example
   * getSpellsByLevel([1, 2], [MagicSchool.Abjuration, MagicSchool.Evocation]);
   */
  const getSpellsByLevelAndSchool = async (
    level: number | number[],
    school: MagicSchool | MagicSchool[]
  ): Promise<iAPIReferenceList> => {
    if (!spellLevelValidator(level)) {
      throw new Error('Spell evel must be between 1 and 9');
    }
    const { data } = await axios.get(`/api/spells?level=${level.toString()}&school=${school.toString()}`);
    return data;
  };

  /**
   * GET /api/spells/{index}
   * @param {index} string
   * @returns {data} {Promise<iSpell>}
   * @example
   * getSpellByIndex('sacred-flame');
   */
  const getSpellByIndex = async (index: string): Promise<iSpell> => {
    const { data } = await axios.get(`/api/spells/${index}`);
    return data;
  };

  return {
    getSpells,
    getSpellsBySchool,
    getSpellByIndex,
    getSpellsByLevel,
    getSpellsByLevelAndSchool
  };
};

export default useSpellsApi;
