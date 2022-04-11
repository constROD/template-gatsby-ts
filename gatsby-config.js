module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`, 
    `gatsby-plugin-root-import`,
    {
			resolve: "gatsby-plugin-svgr",
			options: {
				icon: true
			}
		}
  ],
};
