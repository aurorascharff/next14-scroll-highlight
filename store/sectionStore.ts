import { create } from 'zustand';

type SectionStore = {
  sectionInView: string | null;
  setSectionInView: (_sectionId: string | null) => void;
};

export const useSectionStore = create<SectionStore>()(set => {
  return {
    sectionInView: null,
    setSectionInView: sectionId => {
      return set(() => {
        return {
          sectionInView: sectionId,
        };
      });
    },
  };
});
