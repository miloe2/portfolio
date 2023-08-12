import { create } from 'zustand';

type Store = {
  devPrj: boolean;
  setDevPrj: (isOpen: boolean) => void;

};

const useStore = create<Store>((set) => ({
    devPrj: false,
    setDevPrj: (isOpen) => set({ devPrj: isOpen }),

}));

export default useStore;