// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ALT.IGNOU",
  tagline: "IGNOU is awesome",
  url: "https://bimlu.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "bimlu", // Usually your GitHub org/user name.
  projectName: "ignou-alt", // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/bimlu/ignou-alt/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/bimlu/ignou-alt/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "ALT.IGNOU",
        logo: {
          alt: "IGNOUWALA Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "IGNOU Information",
          },
          { to: "/blog", label: "IGNOU Blog", position: "left" },
          {
            href: "https://github.com/bimlu/ignou-alt",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "IGNOU",
            items: [
              {
                label: "IGNOU Information",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "IGNOUWALA",
                href: "https://network.ignouwala.com",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/ignouwala",
              },
              {
                label: "Discord",
                href: "https://discord.gg/dJAmVm3Zde",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "IGNOU Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/bimlu/ignou-alt",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IGNOUWALA`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
