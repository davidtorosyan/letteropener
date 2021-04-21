# Letter Opener - a *Love Letter* helper

![Logo: letteropener.png](https://github.com/davidtorosyan/letteropener/raw/main/images/letteropener.png)

## Table of contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This lightweight extension adds card counting to [Love Letter](https://boardgamearena.com/gamepanel?game=loveletter) on boardgamearena.com.

## Setup

Install [TamperMonkey](https://www.tampermonkey.net/) to your favorite web browser.

Once that's done, click [here](https://github.com/davidtorosyan/letteropener/raw/main/src/letteropener.user.js) to install the script!

Alternatively, navigate to [letteropener.user.js](src/letteropener.user.js), click "Raw", then click "Install".

## Usage

Start a game of Love Letter on [boardgamearena](https://boardgamearena.com/gamepanel?game=loveletter) and see the list update as you play:

![Demo: demo-list.png](https://github.com/davidtorosyan/letteropener/raw/main/images/demo-list.png)
![Demo: demo-list2.png](https://github.com/davidtorosyan/letteropener/raw/main/images/demo-list2.png)

This extension supports both the base game and the expansion.

## Contributing

We welcome pull requests! Also free to leave an issue for a bug you've seen or feature you'd like.

### Local development

To get a dev version, run:
```sh
python scripts/version.py dev
```

Copy the output (which will point to your local repo) to a new TamperMonkey script called `letteropener.dev`.

### Style guide

This project uses ESLint for linting. To autofix style, just do:
```sh
npm run lint
```

### Changelog

Fixes, additions, and version updates should be documented in [CHANGELOG.md](CHANGELOG.md).

### Versioning

See [scripts](scripts) for instructions on pushing new versions.

To get faster updates, install the [beta](https://github.com/davidtorosyan/letteropener/raw/beta/src/letteropener.user.js) channel script.

## License
[MIT](https://choosealicense.com/licenses/mit/)
