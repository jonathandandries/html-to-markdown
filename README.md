# html-to-markdown
Convert HTML formatted text to equivalent Markdown format.

## Installation
Just have `docker` and `docker-compose` installed: https://docs.docker.com/engine/installation/

## Usage
```bash
# Build from Dockerfile
docker-compose Build
```

```bash
# Run a Docker Container in what we're calling "development mode" so that you
# can edit the files in the web/src/ directory and see it immediately in the
# running container. This is done with two key changes to the "docker run" step:
# 1. Use nodemon instead of npm to start the application.
# 2. Map a volume from your web/src/ directory into the container where the code lives
docker-compose up -d
```

```bash
# Bring down the container
docker-compose down -v
```

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## History
1. 5/22/2017 -- First version, Jonathan D'Andries

## Credits
```
Jonathan D'Andries
```
External References:
* Dockerizing a Node.js web app: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
* A template for Github READMEs (Markdown) + Sublime Snippet: https://gist.github.com/zenorocha/4526327

## License
Gratis and libre.
