import { AxiosInstance } from 'axios';
import { iAPIReferenceList } from '../../interfaces/Common/iAPIReferenceList';
import { iMonster } from '../../interfaces/Monsters/iMonster';

const useMonstersApi = (axios: AxiosInstance) => {
  /* ========== Feats ========== */

  /**
   * GET /api/monsters
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getMonsters();
   */
  const getMonsters = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/monsters`);
    return data;
  };

  /**
   * GET /api/monsters?challenge_rating={challenge_rating}
   * @param {challenge_rating} number
   * @returns {data} {Promise<iAPIReferenceList>}
   * @example
   * getMonstersByChallengeRating(1);
   */
  const getMonstersByChallengeRating = async (challenge_rating: number): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/monsters?challenge_rating=${challenge_rating}`);
    return data;
  };

  /**
   * GET /api/monsters/{index}
   * @param {index} string
   * @returns {data} {Promise<iMonster>}
   * @example
   * getMonsterByIndex('adult-gold-dragon');
   */
  const getMonsterByIndex = async (index: string): Promise<iMonster> => {
    const { data } = await axios.get(`/api/monsters/${index}`);
    return data;
  };

  return {
    getMonsters,
    getMonstersByChallengeRating,
    getMonsterByIndex
  };
};

export default useMonstersApi;
