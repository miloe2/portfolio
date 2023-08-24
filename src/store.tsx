import { create } from 'zustand';

type Store = {
  devOpen: boolean;
  setDevOpen: (isOpen: boolean) => void;

  devPage: string | null;
  setDevPage: (page: string) => void;

  

};

const useStore = create<Store>((set) => ({

    devOpen: false,
    setDevOpen: (isOpen) => set({ devOpen: isOpen }),

    devPage: '찾기',
    setDevPage: (page) => set({ devPage: page }),

}));

export default useStore;