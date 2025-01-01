# Setup Shakespeare action

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)
![Release](https://img.shields.io/github/v/release/fabasoad/setup-shakespeare-action?include_prereleases)
![functional-tests](https://github.com/fabasoad/setup-shakespeare-action/actions/workflows/functional-tests.yml/badge.svg)
![linting](https://github.com/fabasoad/setup-shakespeare-action/actions/workflows/linting.yml/badge.svg)

This action installs one of the Shakespeare programming language interpreters
called [shakespearelang](https://pypi.org/project/shakespearelang/).

## Supported OS

<!-- prettier-ignore-start -->
| OS      |                    |
|---------|--------------------|
| Windows | :white_check_mark: |
| Linux   | :white_check_mark: |
| macOS   | :white_check_mark: |
<!-- prettier-ignore-end -->

## Prerequisites

The following tools have to be installed for successful work of this GitHub action:

- [pip](https://pypi.org/project/pip)
- [python](https://www.python.org/) <= 3.9

## Inputs

```yaml
- uses: fabasoad/setup-shakespeare-action@v1
  with:
    # (Optional) shakespeare version. Defaults to the latest version.
    version: "1.0.0"
    # (Optional) If "false" skips installation if shakespeare is already installed.
    # If "true" installs shakespeare in any case. Defaults to "false".
    force: "false"
```

## Outputs

<!-- prettier-ignore-start -->
| Name      | Description                              | Example |
|-----------|------------------------------------------|---------|
| installed | Whether shakespeare was installed or not | `true`  |
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
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.9"
      - uses: fabasoad/setup-shakespeare-action@v1
      - name: Hello World
        run: shakespeare run hello-world.spl
        shell: sh
```

### Result

```shell
Run shakespeare run hello-world.spl
Hello World!
```
