module.exports = {
  siteMetadata: {
    title: `Keiko Ramen`,
    description: `A Japanese restaurant where you can get delicious ramen!`,
    author: `@brittneypostma`,
    image: `https://lh3.googleusercontent.com/g4MbONBeY1k3xC7dB3XoyhYoDue0pRtXHRGU3buHSNUXyDi0xgBLSerLCs3jHPtmZNrNykAQ_b7GbEyQSkNjUzsWKH9Td4wlx2GyQc34gqBiwazXDFarHFiI7k6pwg980VF_TfeVYDJyUeVUwGhYSyKRo9zIgF5wx9oJE0ipRNzNB8k23HaAFPFlnYQFGpqgDtUyKD5uSpDLGVoCb7Y67_sf4jEOnopDlyzUn002XnqeDKI9bcFcKsrY0A25A0EazGoTz6_e0IDG-5gbEFSfjajje0wXjzNQql7XamIDLRVBhfCzunpOO2ZgtsnYCLjEBjl2GjqiE3Pqv2rMB75O-F7ulL-ORmVoRmpnWIDiOIwA5lVvFLxQq3qoQ3gu1jej7t58wkwHdA_rdmmDaRfKBcII1Izd_qEHA6W2uNAa5szg0TaS9562mjVLkZfmtb4vbNLHyOL85GOg4lXzyh2CYFGEw8SluSMdMKJgIEmb378X0TgaNYm89JeouyM6A5eIa-J0TKBXjKP4qYR43HSEP3OrKkWU1Qe33JmXZTU0BhMZy7XyMUIeeojSN6Klzq4XNGbBW__4wXovVgiQ1QzyQE_iSZhmITsEcwbS5vmH4UEx1ZgAg-avZmihTbnODlwsTaBanChlyVL_rZXq37Cv6NFqmGiF3tT-f4wkQGYRwznrNHjoQqd3K77wDnKUew=s100-no?authuser=0`,
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
