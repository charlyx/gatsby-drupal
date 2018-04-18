require('dotenv').config()

const {
  DRUPAL_USER,
  DRUPAL_PASSWORD,
  DRUPAL_URL,
} = process.env

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: `http://${DRUPAL_USER}:${DRUPAL_PASSWORD}@${DRUPAL_URL}`,
      },
    },
  ],
}
