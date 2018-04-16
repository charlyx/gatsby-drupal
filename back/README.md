# Installation

> Access via "http://localhost:8080"
>   (or "http://$(docker-machine ip):8080" if using docker-machine)
>
> During initial Drupal setup,
> Database type: PostgreSQL
> Database name: postgres
> Database username: postgres
> Database password: example
> ADVANCED OPTIONS; Database host: postgres

## Modules

* Go to page *Extend*
* Install *Update Manager*
* Go to URL : http://localhost:8080/admin/modules/install
* Install [*JSON API*](https://www.drupal.org/project/jsonapi), for instance: https://ftp.drupal.org/files/projects/jsonapi-8.x-1.15.tar.gz
* Enable module *JSON API* in *Extend*
* Enable module *HTTP Basic Authentication* in *Extend*

# Start

```
docker-compose up
```

# Stop

```
docker-compose down
```
