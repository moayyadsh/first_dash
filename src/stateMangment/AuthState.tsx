import {create} from 'zustand'


export const useAuthState = create<any>((set:any) => ({
  token :localStorage.getItem("token"),
  AuthState: {},
  setAuthState: (data:any) => set(() => ({ AuthState: data })),
}));
