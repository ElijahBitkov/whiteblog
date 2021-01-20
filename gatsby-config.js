module.exports = {
    siteMetadata: {
        title: "Умерший Блог",
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/posts`,
            },
        },
        `gatsby-transformer-remark`,
    ],
};