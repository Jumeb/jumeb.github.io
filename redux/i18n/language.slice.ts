import { APP_CONSTANTS } from '@/utils/static/constant'
import { createSlice } from '@reduxjs/toolkit'

const initialCurrentLanguage =
  typeof window !== 'undefined' &&
  localStorage.getItem(APP_CONSTANTS.STORAGE_KEY.APPLICATION_LANGUAGE) !== null
    ? localStorage.getItem(APP_CONSTANTS.STORAGE_KEY.APPLICATION_LANGUAGE)
    : 'en'

console.log(
  typeof window !== 'undefined' &&
    localStorage.getItem(APP_CONSTANTS.STORAGE_KEY.APPLICATION_LANGUAGE),
)

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    currentLanguage: initialCurrentLanguage,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload
      localStorage.setItem(APP_CONSTANTS.STORAGE_KEY.APPLICATION_LANGUAGE, action.payload)
    },
  },
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer
