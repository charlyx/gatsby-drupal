# Configuration

You'll need HTTP Basic Authentication in order to use *gatsby-source-drupal*!

```
{
  resolve: 'gatsby-source-drupal',
  options: {
    baseUrl: 'http://<admin_user>:<admin_password>@localhost:8080',
  },
},
```
