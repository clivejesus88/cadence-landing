import { type Variants } from 'framer-motion';

// Shared, restrained entrance motion used across marketing sections.
// Each element animates in under 300ms; stagger is handled via the `custom` index.
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: Math.min(i * 0.06, 0.3),
      ease: [0.23, 1, 0.32, 1]
    }
  })
};

export const viewportOnce = { once: true, margin: '-80px' } as const;