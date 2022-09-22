import { useDispatch, useSelector } from 'react-redux';

import { Languages } from '../store/interfaces';
import { setLanguage } from '../store/localizeSlice';
import { RootState } from '../store/store';

const useLocalization = () => {
  const t = useSelector((state: RootState) => state.localization.translations);
  const lang = useSelector((state: RootState) => state.localization.language);
  const dispatch = useDispatch();
  const setLang = (language: Languages) => dispatch(setLanguage(language));

  return { t, lang, setLang };
};

export default useLocalization;
