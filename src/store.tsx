import { create } from 'zustand';

type Store = {
  devOpen: boolean;
  setDevOpen: (isOpen: boolean) => void;

  devPage: string | null;
  setDevPage: (component: string) => void;

  currentPage : string | null;
  setCurrentPage : (page : string) => void;

};

const useStore = create<Store>((set) => ({

    devOpen: false,
    setDevOpen: (isOpen) => set({ devOpen: isOpen }),

    devPage: 'portfolio',
    setDevPage: (component) => set({ devPage: component }),

    currentPage :'home', 
    setCurrentPage : (page) => set({ currentPage : page})

}));

export default useStore;