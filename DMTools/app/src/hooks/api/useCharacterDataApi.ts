import { AxiosInstance } from 'axios';

import { iAbilityScore } from '../../interfaces/CharacterData/iAbilityScore';
import { iAPIReferenceList } from '../../interfaces/Common/iAPIReferenceList';
import { iAlignment } from '../../interfaces/CharacterData/iAlignment';
import { iBackground } from '../../interfaces/CharacterData/iBackground';
import { iLanguage } from '../../interfaces/CharacterData/iLanguage';
import { iProficiency } from '../../interfaces/CharacterData/iProficiency';

import { AbilityScore } from '../../constants/AbilityScore';
import { Alignment } from '../../constants/Alignment';
import { Background } from '../../constants/Background';
import { Language } from '../../constants/Language';
import { Skill } from '../../constants/Skill';
import { iSkill } from '../../interfaces/CharacterData/iSkill';

const useCharacterDataApi = (axios: AxiosInstance) => {
  /* ========== Ability Scores ========== */

  /**
   * GET /api/ability-scores
   * @returns {*} {Promise<iAPIReferenceList>}
   */
  const getAbilityScores = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/ability-scores`);
    return data;
  };

  /**
   * GET /api/ability-scores/{index}
   * @param {index} AbilityScore
   * @returns {data} {Promise<iAbilityScore>}
   */
  const getAbilityScoreByIndex = async (index: AbilityScore): Promise<iAbilityScore> => {
    const { data } = await axios.get(`/api/ability-scores/${index}`);
    return data;
  };

  /* ========== Alignments ========== */

  /**
   * GET /api/alignments
   * @returns {*} {Promise<iAPIReferenceList>}
   */
  const getAlignments = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/alignments`);
    return data;
  };

  /**
   * GET /api/alignments/{index}
   * @param {index} Alignment
   * @returns {data} {Promise<iAlignment>}
   * @example
   * getAlignmentByIndex(Alignment.ChaoticEvil);
   */
  const getAlignmentByIndex = async (index: Alignment): Promise<iAlignment> => {
    const { data } = await axios.get(`/api/alignments/${index}`);
    return data;
  };

  /* ========== Backgrounds ========== */

  /**
   * GET /api/backgrounds
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getBackgrounds();
   */
  const getBackgrounds = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/backgrounds`);
    return data;
  };

  /**
   * GET /api/backgrounds/{index}
   * @param {index} Background
   * @returns {data} {Promise<iBackground>}
   * @example
   * getBackgroundByIndex(Background.Acolyte);
   */
  const getBackgroundByIndex = async (index: Background): Promise<iBackground> => {
    const { data } = await axios.get(`/api/backgrounds/${index}`);
    return data;
  };

  /* ========== Languages ========== */

  /**
   * GET /api/languages
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getLanguages();
   */
  const getLanguages = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/languages`);
    return data;
  };

  /**
   * GET /api/languages/{index}
   * @param {index} Language
   * @returns {data} {Promise<iLanguage>}
   * @example
   * getLanguageByIndex(Language.Common);
   */
  const getLanguageByIndex = async (index: Language): Promise<iLanguage> => {
    const { data } = await axios.get(`/api/languages/${index}`);
    return data;
  };

  /* ========== Proficiencies ========== */

  /**
   * GET /api/proficiencies
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getProficiencies();
   */
  const getProficiencies = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/proficiencies`);
    return data;
  };

  /**
   * GET /api/proficiencies/{index}
   * @param {index} string
   * @returns {data} {Promise<iProficiency>}
   * @example
   * getProficiencyByIndex('skill-stealth');
   */
  const getProficiencyByIndex = async (index: string): Promise<iProficiency> => {
    const { data } = await axios.get(`/api/proficiencies/${index}`);
    return data;
  };

  /* ========== Skills ========== */

  /**
   * GET /api/skills
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getSkills();
   */
  const getSkills = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/skills`);
    return data;
  };

  /**
   * GET /api/skills/{index}
   * @param {index} Skill
   * @returns {data} {Promise<iSkill>}
   * @example getSkillByIndex(Skill.Acrobatics);
   */
  const getSkillByIndex = async (index: Skill): Promise<iSkill> => {
    const { data } = await axios.get(`/api/skills/${index}`);
    return data;
  };

  return {
    getAbilityScores,
    getAbilityScoreByIndex,
    getAlignments,
    getAlignmentByIndex,
    getBackgrounds,
    getBackgroundByIndex,
    getLanguages,
    getLanguageByIndex,
    getProficiencies,
    getProficiencyByIndex,
    getSkills,
    getSkillByIndex
  };
};

export default useCharacterDataApi;
