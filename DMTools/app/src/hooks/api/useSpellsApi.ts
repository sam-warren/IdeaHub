import { AxiosInstance } from 'axios';
import { iAPIReferenceList } from '../../interfaces/Common/iAPIReferenceList';
import { iSpell } from '../../interfaces/Spells/iSpell';

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
   * @param {school} string
   * @returns {data} {Promise<iAPIReferenceList>}
   * @example
   * getSpellsBySchool('abjuration');
   */
  const getSpellsBySchool = async (school: string): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/spells?school=${school}`);
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
    getSpellByIndex
  };
};

export default useSpellsApi;
