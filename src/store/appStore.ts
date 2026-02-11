// ============================================
// Butterflaw Coach — App Store (Zustand)
// Global UI state — modals, loading, navigation
// ============================================

import { create } from 'zustand';

type ModalType = 'checkin' | 'lesson' | 'confirm' | null;

interface AppStore {
  // Modal
  activeModal: ModalType;
  modalPayload: unknown;
  openModal: (type: ModalType, payload?: unknown) => void;
  closeModal: () => void;

  // Tab navigation
  activeTab: string;
  setActiveTab: (tab: string) => void;

  // Loading / toast
  loading: boolean;
  setLoading: (l: boolean) => void;
  toast: string | null;
  showToast: (msg: string, durationMs?: number) => void;
  clearToast: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  activeModal: null,
  modalPayload: null,
  openModal: (type, payload) =>
    set({ activeModal: type, modalPayload: payload ?? null }),
  closeModal: () => set({ activeModal: null, modalPayload: null }),

  activeTab: 'home',
  setActiveTab: (tab) => set({ activeTab: tab }),

  loading: false,
  setLoading: (loading) => set({ loading }),

  toast: null,
  showToast: (msg, durationMs = 3000) => {
    set({ toast: msg });
    setTimeout(() => set({ toast: null }), durationMs);
  },
  clearToast: () => set({ toast: null }),
}));
