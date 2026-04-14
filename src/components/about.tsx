'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I’m Aman Singh, a Full Stack Developer based in India. I’ve been working with modern web technologies and continuously improving my skills in building scalable and efficient applications. My journey into development started with a strong interest in problem-solving, and that’s still my favorite part—breaking down complex challenges and turning them into practical solutions.
        </p>
        <p>
          I’ve had the opportunity to work on multiple projects, both independently and in team environments, where I’ve built end-to-end applications and improved existing systems. My core stack includes React, Next.js, Node.js, and Tailwind CSS. On the backend, I work with MongoDB and PostgreSQL, and I use Prisma for efficient and structured database management.
        </p>
        <p>
          I’m open to job opportunities where I can contribute, grow, and make an impact. If you have a role that aligns with my skills and experience, feel free to reach out.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
