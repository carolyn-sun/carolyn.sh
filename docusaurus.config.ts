import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Carolyn Sun',
  tagline: '',
  favicon: undefined,

  // Set the production url of your site here
  url: 'https://carolyn.sh',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    "./src/plugins/tailwind-config.js",
    ["@docusaurus/plugin-content-docs",
      {
        id: 'notes',
        path: 'notes',
        routeBasePath: 'notes',
        sidebarPath: require.resolve('./sidebarsNotes.js')
      },
    ]
  ],


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          exclude: ['**/hide/**'],
          blogSidebarTitle: 'All',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: undefined,
    navbar: {
      title: 'Carolyn Sun',
      logo: undefined,
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Home',
        // }
        {to: '/', label: 'Home', position: 'left', exact: true},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/friends', label: 'Friends', position: 'left'},
        {to: '/notes', label: 'Notes', position: 'left'},
        {to: '/privacy', label: 'Privacy', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Carolyn Sun`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
