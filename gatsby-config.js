module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "QUL Gatsby WordPress",
        short_name: "QUL Gatsby WordPress",
        start_url: "/",
        background_color: "#406486",
        theme_color: "#00305e",
        display: "minimal-ui",
        icon: "src/images/qul-squares.png", 
      }
    },
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     baseUrl: "qul.wordpress",
    //     protocol: "http",
    //     hostingWPCOM: false,
    //     useACF: true,
    //     verboseOutput: true,
    //   }
    // },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "UA-88346038-1",
    //     head: false,
    //     anonymize: true,
    //     respectDNT: true 
    //   }
    // },
    "gatsby-plugin-offline"
  ]
}