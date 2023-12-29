export default defineAppConfig({
  ui: {
    primary: 'yellow',
    gray: 'cool',
    presets: {
      button: {
        secondary: {
          size: 'md',
          color: 'gray',
          variant: 'ghost',
          ui: { font: 'font-semibold', color: { gray: { ghost: 'text-gray-950 hover:bg-primary/60 dark:text-gray-50 dark:hover:bg-primary/40' } }, size: { md: 'text-base' } },
        },
      },
    },
    header: {
      button: {
        icon: {
          open: 'i-heroicons-bars-3-bottom-right',
        },
      },
    },
    button: {
      base: 'transition ease-in',
      color: {
        gray: {
          solid: 'shadow-none bg-gray-300/20 hover:bg-gray-300/40 dark:bg-gray-700/40 dark:hover:bg-gray-700/50',
        },
      },
    },
  },
  seo: {
    siteName: 'UnJS Docs',
  },
  github: {
    name: '',
  },
  header: {
    title: 'UnJS Docs',
    logo: {
      alt: 'Logo of UnJS',
      light: '/favicon.svg',
      dark: '/favicon.svg',
    },
  },
  footer: {
    title: 'UnJS Docs',
    logo: {
      alt: 'Logo of UnJS',
      light: '/favicon.svg',
      dark: '/favicon.svg',
    },
    quote: 'A template to create documentation websites for UnJS projects.',
    menu: [
      {
        title: 'Community',
        items: [
          {
            title: 'Contribute',
            url: 'https://github.com/unjs/governance',
            target: '_blank',
          },
          {
            title: 'Contact us',
            url: 'mailto:hi@unjs.io',
            rel: null,
            target: null,
          },
        ],
      },
      {
        title: 'UnJS',
        items: [
          {
            title: 'Website',
            url: 'https://unjs.io',
            rel: 'noopener',
          },
          {
            title: 'Design Kit',
            url: 'https://github.com/design-kit',
            rel: 'noopener',
          },
          {
            title: 'GitHub',
            url: 'https://github.com/unjs',
            target: '_blank',
          },
        ],
      },
    ],
  },
  socials: [
    {
      url: 'https://github.com/unjs',
      rel: 'noopener',
      target: '_blank',
      icon: 'i-simple-icons-github',
      name: 'GitHub',
    },
    {
      url: 'https://x.com/unjsio',
      icon: 'i-simple-icons-x',
      rel: 'noopener',
      target: '_blank',
      name: 'X',
    },
  ],
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/barbapapazes/unjs-docs-template/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/barbapapazes/unjs-docs-template',
        target: '_blank',
      }],
    },
  },
})
