import { AxiosInstance } from 'axios';
import { iAPIReferenceList } from '../../interfaces/Common/iAPIReferenceList';
import { iSubrace } from '../../interfaces/Subraces/iSubrace';

const useSubracesApi = (axios: AxiosInstance) => {
  /* ========== Subraces ========== */

  /**
   * GET /api/subraces
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getSubraces();
   */
  const getSubraces = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/subraces`);
    return data;
  };

  /**
   * GET /api/subraces/{index}
   * @param {index} string
   * @returns {*} {Promise<iSubrace>}
   * @example
   * getSubraceByIndex('hill-dwarf');
   */
  const getSubraceByIndex = async (index: string): Promise<iSubrace> => {
    const { data } = await axios.get(`/api/subraces/${index}`);
    return data;
  };

  /* ========== Proficiencies ========== */

  /**
   * GET /api/subraces/{index}/proficiencies
   * @param {index} string
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getProficienciesForSubrace('hill-dwarf');
   */
  const getProficienciesForSubrace = async (index: string): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/subraces/${index}/proficiencies`);
    return data;
  };

  /* ========== Traits ========== */

  /**
   * GET /api/subraces/{index}/traits
   * @param {index} string
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getTraitsForSubrace('hill-dwarf');
   */
  const getTraitsForSubrace = async (index: string): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/subraces/${index}/traits`);
    return data;
  };

  return {
    getSubraces,
    getSubraceByIndex,
    getProficienciesForSubrace,
    getTraitsForSubrace
  };
};

export default useSubracesApi;
