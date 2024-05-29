import { useInView } from 'react-intersection-observer';
import { useSectionStore } from '@/store/sectionStore';

export function useSectionIsInView(sectionId: string) {
  const { setSectionInView } = useSectionStore();
  const { ref } = useInView({
    onChange: inView => {
      if (inView) {
        setSectionInView(sectionId);
      }
    },
    threshold: 0.4,
  });

  return [ref];
}
