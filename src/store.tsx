import { create } from 'zustand';

type Store = {
  devOpen: boolean;
  setDevOpen: (isOpen: boolean) => void;

  devPage: string | null;
  setDevPage: (component: string) => void;

  currentPage : string | null;
  setCurrentPage : (page : string) => void;

  naviModal : boolean;
  setNaviModal : (isOpen :boolean) => void;

  contactModal : boolean;
  setContactModal : (isOpen :boolean) => void;

  XBtn : boolean;
  setXBtn : (isOpen :boolean) => void;

};

const useStore = create<Store>((set) => ({

    devOpen: false,
    setDevOpen: (isOpen) => set({ devOpen: isOpen }),

    devPage: '오늘의 칵테일',
    setDevPage: (component) => set({ devPage: component }),

    currentPage :'home', 
    setCurrentPage : (page) => set({ currentPage : page}),

    naviModal: true,
    setNaviModal: (isOpen) => set({ naviModal: isOpen }),

    XBtn: false,
    setXBtn: (isOpen) => set({ XBtn: isOpen }),

    contactModal : false,
    setContactModal : (isOpen) => set({contactModal : isOpen})

}));

export default useStore;