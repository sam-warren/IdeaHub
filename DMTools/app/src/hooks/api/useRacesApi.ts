import { AxiosInstance } from 'axios';
import { iAPIReferenceList } from '../../interfaces/Common/iAPIReferenceList';
import { iRace } from '../../interfaces/Races/iRace';

const useRacesApi = (axios: AxiosInstance) => {
  /* ========== Races ========== */

  /**
   * GET /api/races
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getRaces();
   */
  const getRaces = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/races`);
    return data;
  };

  /**
   * GET /api/races/{index}
   * @param {index} string
   * @returns {*} {Promise<iRace>}
   * @example
   * getRaceByIndex('dwarf');
   */
  const getRaceByIndex = async (index: string): Promise<iRace> => {
    const { data } = await axios.get(`/api/races/${index}`);
    return data;
  };

  /* ========== Subraces ========== */

  /**
   * GET /api/races/{index}/subraces
   * @param {index} string
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getSubracesForRace('dwarf');
   */
  const getSubracesForRace = async (index: string): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/races/${index}/subraces`);
    return data;
  };

  /* ========== Proficiencies ========== */

  /**
   * GET /api/races/{index}/proficiencies
   * @param {index} string
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getProficienciesForRace('dwarf');
   */
  const getProficienciesForRace = async (index: string): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/races/${index}/proficiencies`);
    return data;
  };

  /* ========== Traits ========== */

  /**
   * GET /api/races/{index}/traits
   * @param {index} string
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getTraitsForRace('dwarf');
   */

  const getTraitsForRace = async (index: string): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/races/${index}/traits`);
    return data;
  };

  return {
    getRaces,
    getRaceByIndex,
    getSubracesForRace,
    getProficienciesForRace,
    getTraitsForRace
  };
};

export default useRacesApi;
