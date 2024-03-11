import { AppDispatch } from '../store'
import { setLanguage } from './language.slice'

export type SupportedLanguages = 'en' | 'de'

export const changeLanguage = (language: SupportedLanguages) => (dispatch: AppDispatch) => {
  dispatch(setLanguage(language))
}
