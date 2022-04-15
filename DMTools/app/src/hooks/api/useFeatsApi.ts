import { AxiosInstance } from 'axios';
import { iAPIReferenceList } from '../../interfaces/Common/iAPIReferenceList';
import { iFeat } from '../../interfaces/Feats/iFeat';

const useFeatsApi = (axios: AxiosInstance) => {
  /* ========== Feats ========== */

  /**
   * GET /api/feats
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getFeats();
   */
  const getFeats = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/feats`);
    return data;
  };

  /**
   * GET /api/feats/{index}
   * @param {index} string
   * @returns {data} {Promise<iFeat>}
   * @example
   * getFeatByIndex('grappler');
   */
  const getFeatByIndex = async (index: string): Promise<iFeat> => {
    const { data } = await axios.get(`/api/feats/${index}`);
    return data;
  };

  return {
    getFeats,
    getFeatByIndex
  };
};

export default useFeatsApi;
