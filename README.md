# GreenHub

[![](https://img.shields.io/badge/ITCH.IO-lightgrey?style=for-the-badge)
](https://corporate-entity.itch.io/greenhub)

Use GitHub as a Continuous Deployment Engine to Game Platforms using Electron and Cordova.

# Tasks

- [x] Setup Template Repo
- [x] Setup GitHub Actions to build Electron binaries
  - store as a release
- [x] Setup Deployment Actions
  - Itch
- [ ] Ensure overlay works
- [ ] Documentation/Examples

# References

- https://github.com/JamesMoulang/electron-steam-notes

# Story

A developer commits a bunch of client files to the repo which triggers GitHub Actions that build and deploy their configured binaries to Itch/Steam/Where-ever

# Quick Stare

    - [ ] Clone this Template Repository
    - [ ] Click actions on your new repository
    - [ ] Note it already building a release for you

# Quick Start

    - [ ] Commit your website's code in the `www` directory on GitHub, try out the drag n' drop features!
    - [ ] ???
    - [ ] Download the releases

# Space Magic Integration to Itch.io

    - [ ] Add `SECRETS` to your github repository

```yaml
- name: Deploy to itch
  uses: josephbmanley/butler-publish-itchio-action@master
  env:
    BUTLER_CREDENTIALS: ${{ secrets.BUTLER_CREDENTIALS }}
    CHANNEL: browser
    ITCH_GAME: ${{ secrets.ITCH_GAME }}
    ITCH_USER: ${{ secrets.ITCH_USER }}
    PACKAGE: www
```

    - [ ] ???
    - [ ] Its released!
