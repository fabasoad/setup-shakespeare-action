# Setup Shakespeare action

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)
![Release](https://img.shields.io/github/v/release/fabasoad/setup-shakespeare-action?include_prereleases)
![Functional Tests](https://github.com/fabasoad/setup-shakespeare-action/workflows/Functional%20Tests/badge.svg)
![pre-commit](https://github.com/fabasoad/setup-shakespeare-action/actions/workflows/pre-commit.yml/badge.svg)

This action installs one of the Shakespeare Programming Language interpreters
called [shakespearelang](https://pypi.org/project/shakespearelang/).

## Prerequisites

The following tools have to be installed for successful work of this GitHub action:
[pip](https://pypi.org/project/pip).

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
