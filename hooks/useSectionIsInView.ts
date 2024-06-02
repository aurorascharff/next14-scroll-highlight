import { useInView } from 'react-intersection-observer';
import { useSectionStore } from '@/store/sectionStore';
import useWindowDimensions from './useWindowDimentions';

export function useSectionIsInView(sectionId: string, containerHeight: number) {
  const { setSectionInView } = useSectionStore();

  const { height: windowHeight } = useWindowDimensions();

  const scalingFactor = 2; // Increase to make thresholds smaller, decrease to make them larger
  const containerScale = containerHeight / windowHeight;

  const rawThreshold = 1 / containerScale;
  const adjustedThreshold = Math.min(1, Math.max(0, rawThreshold / scalingFactor));

  // Ensure the adjusted threshold doesn't go below a certain value (e.g., 0.1)
  const minimumThreshold = 0.1;
  const scrollThreshold = Math.max(minimumThreshold, adjustedThreshold);

  const { ref } = useInView({
    onChange: inView => {
      if (inView) {
        setSectionInView(sectionId);
      }
    },
    threshold: scrollThreshold,
  });

  return [ref];
}
