# Setup Shakespeare action

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)
![Release](https://img.shields.io/github/v/release/fabasoad/setup-shakespeare-action?include_prereleases)
![functional-tests](https://github.com/fabasoad/setup-shakespeare-action/actions/workflows/functional-tests.yml/badge.svg)
![linting](https://github.com/fabasoad/setup-shakespeare-action/actions/workflows/linting.yml/badge.svg)

This action installs one of the Shakespeare programming language interpreters
called [shakespearelang](https://pypi.org/project/shakespearelang/).

## Prerequisites

The following tools have to be installed for successful work of this GitHub action:

- [pip](https://pypi.org/project/pip)
- [python](https://www.python.org/) <= 3.9

## Inputs

<!-- prettier-ignore-start -->
| Name    | Required | Description                                                                                        | Default | Possible values |
|---------|----------|----------------------------------------------------------------------------------------------------|---------|-----------------|
| version | No       | Shakespearelang library version that can be found [here](https://pypi.org/project/shakespearelang) | `0.3.1` | &lt;String&gt;  |
<!-- prettier-ignore-end -->

## Example usage

### Workflow configuration

```yaml
name: Test

on: push

jobs:
  build:
    name: Shakespeare
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@main
      - uses: actions/setup-python@v4
        with:
          python-version: "3.9"
      - uses: fabasoad/setup-shakespeare-action@main
      - name: Hello World
        run: shakespeare run hello-world.spl
        shell: sh
```

### Result

```shell
Run shakespeare run hello-world.spl
Hello World!
```
