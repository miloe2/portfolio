import { create } from 'zustand';

type Store = {
  devOpen: boolean;
  setDevOpen: (isOpen: boolean) => void;

  devPage: string;
  setDevPage: (page: string) => void;

  

};

const useStore = create<Store>((set) => ({

    devOpen: false,
    setDevOpen: (isOpen) => set({ devOpen: isOpen }),

    devPage: ':DDD',
    setDevPage: (page) => set({ devPage: page }),

}));

export default useStore;