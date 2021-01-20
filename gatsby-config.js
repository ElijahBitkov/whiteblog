module.exports = {
    siteMetadata: {
        title: "Умерший Блог",
        author: "Замечательный человек",
        description: "Мертвый блог-печально",
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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