import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-1.jpg',
    title: 'Next-starter',
    description:
      'Sassyweb is a sleek and modern landing page template built with Next.js and Tailwind CSS, designed to help you quickly create stunning websites with ease.',
    technologies: ['React', 'Tailwind', 'Shadcn/ui', 'Framer Motion' ,'Typescript'],
    links: {
      preview: 'https://sassyweb.netlify.app/',
      github: 'https://github.com/Aman-Singh-Codes/SassyWeb',
      githubApi: 'https://api.github.com/repos/Aman-Singh-Codes/SassyWeb',
    },
  },
  {
    image: '/images/project-1.webp',
    title: 'SocialHub',
    description:
      'SocialHub is a next-generation social media app developed using Next.js and Nest.js.',
    technologies: ['React', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://socialhub-ms.vercel.app/',
      github: 'https://github.com/Skolaczk/SocialHub',
      githubApi: 'https://api.github.com/repos/Skolaczk/SocialHub',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Web developer Trainee',
    company: 'Coding Ninjas, remote',
    description:
      'During my training at coding ninjas,  I gained a solid foundation in web development, learning essential technologies such as HTML, CSS, JavaScript, React and Node.js. I completed various projects that helped me understand the practical applications of these technologies and prepared me for real-world development challenges.',
    period: '2023',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js' , 'MongoDB'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Quantum IT Solution',
    description:
      'At Quantum IT Solution, I was responsible for developing and maintaining web applications using Next.js and Tailwind CSS. I collaborated with cross-functional teams to design and implement new features, optimize performance, and ensure a seamless user experience. This role allowed me to enhance my skills in full-stack development and gain valuable experience working on real-world projects.',
    period: '2023 - 2024',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB', 'Prisma','PostgreSQL'],
  }
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
