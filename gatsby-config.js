module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`, 
    `gatsby-plugin-root-import`,
    `gatsby-plugin-react-helmet`,
    {
			resolve: "gatsby-plugin-svgr",
			options: {
				icon: true
			}
		}
  ],
};
