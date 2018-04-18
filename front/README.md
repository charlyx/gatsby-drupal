# Configuration

Example:

## .env
```
DRUPAL_USER=Username
DRUPAL_PASSWORD=P4s5w0r|)
DRUPAL_URL=localhost
```

## gatsby-config.js
```
{
  resolve: 'gatsby-source-drupal',
  options: {
    baseUrl: 'http://${DRUPAL_USER}:${DRUPAL_PASSWORD}@${DRUPAL_URL}',
  },
},
```
