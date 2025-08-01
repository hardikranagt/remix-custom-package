import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Accordion } from '@hardik/ui';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const items = [
      {
        id: 'item-1',
        title: 'What is Remix?',
        content: 'Remix is a full-stack web framework built on React Router.',
      },
      {
        id: 'item-2',
        title: 'What is Storybook?',
        content: 'Storybook is a frontend workshop tool for building UI components in isolation.',
      },
      {
        id: 'item-3',
        title: 'What is DirectUs?',
        content: 'Absolutely. Tailwind + Storybook is a dev experience dream team.',
      },
    ]
export default function Home() {
  return <Accordion items={items} />;
}
