import { AxiosInstance } from 'axios';
import { iAPIReferenceList } from '../../interfaces/Common/iAPIReferenceList';
import { iSubclass } from '../../interfaces/Subclasses/iSubclass';
import { iSubclassLevel } from '../../interfaces/Subclasses/iSubclassLevels';

const useSubclassesApi = (axios: AxiosInstance) => {
  /* ========== Subclasses ========== */

  /**
   * GET /api/subclasses
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getSubclasses();
   */
  const getSubclasses = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/subclasses`);
    return data;
  };

  /**
   * GET /api/subclasses/{index}
   * @param {index} string
   * @returns {*} {Promise<iSubclass>}
   * @example
   * getSubclassByIndex('berserker');
   */
  const getSubclassByIndex = async (index: string): Promise<iSubclass> => {
    const { data } = await axios.get(`/api/subclasses/${index}`);
    return data;
  };

  /**
   * GET /api/subclasses/{index}/features
   * @param {index} string
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getSubclassFeaturesByIndex('berserker');
   */
  const getSubclassFeaturesByIndex = async (index: string): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/subclasses/${index}/features`);
    return data;
  };

  /**
   * GET /api/subclasses/{index}/levels
   * @param {index} string
   * @returns {*} {Promise<iSubclassLevel[]>}
   * @example
   * getSubclassLevelsByIndex('berserker');
   */
  const getSubclassLevelsByIndex = async (index: string): Promise<iSubclassLevel[]> => {
    const { data } = await axios.get(`/api/subclasses/${index}/levels`);
    return data;
  };

  /**
   * GET /api/subclasses/{index}/levels/{subclass_level}
   * @param {index} string
   * @param {subclass_level} number
   * @returns {*} {Promise<iSubclassLevel>}
   * @example
   * getSubclassLevelByIndexAndLevel('berserker', 1);
   */
  const getSubclassLevelByIndexAndLevel = async (index: string, subclass_level: number): Promise<iSubclassLevel> => {
    const { data } = await axios.get(`/api/subclasses/${index}/levels/${subclass_level}`);
    return data;
  };

  /**
   * GET /api/subclasses/{index}/levels/{subclass_level}/features
   * @param {index} string
   * @param {subclass_level} number
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getSubclassLevelFeaturesByIndexAndLevel('berserker', 1);
   */
  const getSubclassLevelFeaturesByIndexAndLevel = async (
    index: string,
    subclass_level: number
  ): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/subclasses/${index}/levels/${subclass_level}/features`);
    return data;
  };

  return {
    getSubclasses,
    getSubclassByIndex,
    getSubclassFeaturesByIndex,
    getSubclassLevelsByIndex,
    getSubclassLevelByIndexAndLevel,
    getSubclassLevelFeaturesByIndexAndLevel
  };
};

export default useSubclassesApi;
