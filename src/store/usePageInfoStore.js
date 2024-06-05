
import { create } from 'zustand'

const usePageInfoStore = create((set) => ({
  pageTitle: '',
  setPageTitle: (pageTitle) => set({pageTitle}),
}))



export default usePageInfoStore