> [!WARNING]
> makedeb is currently unmaintained: https://hunterwittenborn.com/blog/stepping-back-from-open-source/

# makedeb.org
This is the source code for [makedeb.org](https://makedeb.org), the homepage for the makedeb project.

## Contributing
Hugo is used as the tool to build the website. We also use a custom Hugo theme which can be found at `themes/makedeb/`.

### Installing Hugo
You need at least version 0.71.0 to use certain features. If the version in your package manager's repositories isn't high enough, you can install [the `hugo` package from the MPR](https://mpr.makedeb.org/packages/hugo):

```sh
git clone 'https://mpr.makedeb.org/hugo.git'
cd hugo/
makedeb -si
```

### Writing new posts
Currently the only supported posts are announcements for the news page. To make a new one, first run the following:

```sh
hugo new news/post-name.md
```

Then edit the file it generated to your liking, and submit a PR.

### Updating styling
All CSS files are located at `themes/makedeb/assets/scss/`. We use SCSS as a preprocessor, which then gets compiled into normal CSS at build time.

The main SCSS file is located at `themes/makedeb/assets/scss/main.scss`. If you make a new SCSS file, make sure to import it into that file.
