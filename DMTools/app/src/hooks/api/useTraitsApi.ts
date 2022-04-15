import { AxiosInstance } from 'axios';
import { iAPIReferenceList } from '../../interfaces/Common/iAPIReferenceList';
import { iTrait } from '../../interfaces/Traits/iTrait';

const useTraitsApi = (axios: AxiosInstance) => {
  /* ========== Traits ========== */

  /**
   * GET /api/traits
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getTraits();
   */
  const getTraits = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/traits`);
    return data;
  };

  /**
   * GET /api/traits/{index}
   * @param {index} string
   * @returns {*} {Promise<iTrait>}
   * @example
   * getTraitByIndex('darkvision');
   */
  const getTraitByIndex = async (index: string): Promise<iTrait> => {
    const { data } = await axios.get(`/api/traits/${index}`);
    return data;
  };

  return {
    getTraits,
    getTraitByIndex
  };
};

export default useTraitsApi;
