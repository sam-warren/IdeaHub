import { AxiosInstance } from 'axios';
import { iAPIReferenceList } from '../../interfaces/Common/iAPIReferenceList';
import { iFeature } from '../../interfaces/Features/iFeature';

const useFeaturesApi = (axios: AxiosInstance) => {
  /* ========== Features ========== */

  /**
   * GET /api/features
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getFeatures();
   */
  const getFeatures = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/features`);
    return data;
  };

  /**
   * GET /api/features/{index}
   * @param {index} string
   * @returns {data} {Promise<iFeature>}
   * @example
   * getFeatureByIndex('action-surge-1-use');
   */
  const getFeatureByIndex = async (index: string): Promise<iFeature> => {
    const { data } = await axios.get(`/api/features/${index}`);
    return data;
  };

  return {
    getFeatures,
    getFeatureByIndex
  };
};

export default useFeaturesApi;
