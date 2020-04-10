# Setup Shakespeare action
![](https://img.shields.io/github/v/release/fabasoad/setup-shakespeare-action?include_prereleases) ![CI (latest)](https://github.com/fabasoad/setup-shakespeare-action/workflows/CI%20(latest)/badge.svg) ![CI (master)](https://github.com/fabasoad/setup-shakespeare-action/workflows/CI%20(master)/badge.svg) ![YAML Lint](https://github.com/fabasoad/setup-shakespeare-action/workflows/YAML%20Lint/badge.svg) [![Total alerts](https://img.shields.io/lgtm/alerts/g/fabasoad/setup-shakespeare-action.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/setup-shakespeare-action/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/fabasoad/setup-shakespeare-action.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/setup-shakespeare-action/context:javascript) [![Maintainability](https://api.codeclimate.com/v1/badges/b76849351ccb000110b5/maintainability)](https://codeclimate.com/github/fabasoad/setup-shakespeare-action/maintainability) [![Known Vulnerabilities](https://snyk.io/test/github/fabasoad/setup-shakespeare-action/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fabasoad/setup-shakespeare-action?targetFile=package.json)

This action installs one of the Shakepseare Programming Language interpreters called [shakespearelang](https://pypi.org/project/shakespearelang/). 

## Inputs
1. `version` - _[Optional]_ Shakespearelang library version. Default is the [latest](https://pypi.org/project/shakespearelang/) version.

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
      - uses: actions/checkout@v2.1.0
      - uses: fabasoad/setup-shakespeare-action@v1.0.0
        with:
          version: 0.3.1
      - name: Hello World
        run: shakespeare run hello-world.spl

```

### Result
![Result](https://raw.githubusercontent.com/fabasoad/setup-shakespeare-action/master/screenshot.png)
