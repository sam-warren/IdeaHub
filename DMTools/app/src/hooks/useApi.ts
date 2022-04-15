import useAxios from './api/axios/useAxios';
import useCharacterDataApi from './api/useCharacterDataApi';
import useClassApi from './api/useClassApi';
import useEquipmentApi from './api/useEquipmentApi';
import useFeatsApi from './api/useFeatsApi';
import useFeaturesApi from './api/useFeaturesApi';
import useGameMechanicsApi from './api/useGameMechanicsApi';
import useMonstersApi from './api/useMonstersApi';
import useRacesApi from './api/useRacesApi';
import useRulesApi from './api/useRulesApi';
import useSpellsApi from './api/useSpellsApi';
import useSubclassesApi from './api/useSubclassesApi';
import useSubracesApi from './api/useSubracesApi';
import useTraitsApi from './api/useTraitsApi';

/**
 * Returns a set of supported api methods.
 *
 * @return {*} object whose properties are supported api methods.
 */
export const useApi = () => {
  const apiAxios = useAxios(process.env.REACT_APP_API_HOST);

  const characterDataService = useCharacterDataApi(apiAxios);

  const classService = useClassApi(apiAxios);

  const equipmentService = useEquipmentApi(apiAxios);

  const featsService = useFeatsApi(apiAxios);

  const featuresService = useFeaturesApi(apiAxios);

  const gameMechanicsService = useGameMechanicsApi(apiAxios);

  const monstersService = useMonstersApi(apiAxios);

  const racesService = useRacesApi(apiAxios);

  const rulesService = useRulesApi(apiAxios);

  const spellsService = useSpellsApi(apiAxios);

  const subclassesService = useSubclassesApi(apiAxios);

  const subracesService = useSubracesApi(apiAxios);

  const traitsService = useTraitsApi(apiAxios);

  return {
    characterDataService,
    classService,
    equipmentService,
    featsService,
    featuresService,
    gameMechanicsService,
    monstersService,
    racesService,
    rulesService,
    spellsService,
    subclassesService,
    subracesService,
    traitsService
  };
};
