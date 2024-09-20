'use client';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHeroSection from '../sections/home-hero-section';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <HomeHeroSection />
      </>
  );
}
