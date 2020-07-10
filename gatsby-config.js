module.exports = {
  siteMetadata: {
    title: `Keiko Ramen`,
    description: `A Japanese restaurant where you can get delicious ramen!`,
    author: `@brittneypostma`,
    image: `https://images-ext-2.discordapp.net/external/VEWuo4inVd0RpmrZdGTfyCVc1IPAW1cx5SJwpPecjyE/https/repository-images.githubusercontent.com/276400069/78726c80-c292-11ea-9ebd-f2f466050a0e?width=882&height=441`,
    siteUrl: `https://keiko-ramen.netlify.app/`

  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Merienda One`,
          },
          {
            family: `Advent Pro`,
            variants: [`300`, `400`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `keiko-ramen`,
        short_name: `keiko`,
        start_url: `/`,
        background_color: `#A50022`,
        theme_color: `#A50022`,
        display: `minimal-ui`,
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ], // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("autoprefixer"),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
