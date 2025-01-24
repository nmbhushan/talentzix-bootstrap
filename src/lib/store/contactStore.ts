import { create } from 'zustand';

export interface ContactDataStates {
    dataLoaded: boolean;
    profileData: any;
    fullData: any;
    isLoading: boolean;
}

export const defaultContactState: ContactDataStates = {
    dataLoaded: false,
    profileData: {},
    fullData: {},
    isLoading: true,
};

interface ContactStore extends ContactDataStates {
    setProfileData: (data: Omit<ContactDataStates, 'dataLoaded' | 'isLoading'>) => void;
    clearProfileData: () => void;
    setLoading: (isLoading: boolean) => void;
}

export const useContactStore = create<ContactStore>((set) => ({
    ...defaultContactState,

    setProfileData: (data) =>
        set({
            ...data,
            dataLoaded: true,
            isLoading: false,
        }),

    clearProfileData: () =>
        set({
            ...defaultContactState,
        }),

    setLoading: (isLoading) =>
        set({
            isLoading,
        }),
}));
