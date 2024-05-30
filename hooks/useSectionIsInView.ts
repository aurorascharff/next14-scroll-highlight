import { useInView } from 'react-intersection-observer';
import { useSectionStore } from '@/store/sectionStore';

export function useSectionIsInView(sectionId: string, threshold = 0.5) {
  const { setSectionInView } = useSectionStore();
  const { ref } = useInView({
    onChange: inView => {
      if (inView) {
        setSectionInView(sectionId);
      }
    },
    threshold,
  });

  return [ref];
}
