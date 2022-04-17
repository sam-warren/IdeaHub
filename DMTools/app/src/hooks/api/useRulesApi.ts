import { AxiosInstance } from 'axios';
import { RuleSection } from '../../constants/RuleSection';
import { Rule } from '../../constants/Rule';
import { iAPIReferenceList } from '../../interfaces/Common/iAPIReferenceList';
import { iRuleSection } from '../../interfaces/Rules/iRuleSection';

const useRulesApi = (axios: AxiosInstance) => {
  /* ========== Rule Sections ========== */

  /**
   * GET /api/rule-sections
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getRuleSections();
   */
  const getRuleSections = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/rule-sections`);
    return data;
  };

  /**
   * GET /api/rule-sections/{index}
   * @param {index} RuleSection
   * @returns {*} {Promise<iRuleSection>}
   * @example
   * getRuleSectionByIndex(RuleSection.Cover);
   */
  const getRuleSectionByIndex = async (index: RuleSection): Promise<iRuleSection> => {
    const { data } = await axios.get(`/api/rule-sections/${index}`);
    return data;
  };

  /* ========== Rules ========== */

  /**
   * GET /api/rules
   * @returns {*} {Promise<iAPIReferenceList>}
   * @example
   * getRules();
   */
  const getRules = async (): Promise<iAPIReferenceList> => {
    const { data } = await axios.get(`/api/rules`);
    return data;
  };

  /**
   * GET /api/rules/{index}
   * @param {index} Rule
   * @returns {*} {Promise<iRule>}
   * @example
   * getRuleByIndex(Rule.Cover);
   */
  const getRuleByIndex = async (index: Rule): Promise<iRuleSection> => {
    const { data } = await axios.get(`/api/rules/${index}`);
    return data;
  };

  return {
    getRuleSections,
    getRuleSectionByIndex,
    getRules,
    getRuleByIndex
  };
};

export default useRulesApi;
