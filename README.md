# Setup Shakespeare action

![Release](https://img.shields.io/github/v/release/fabasoad/setup-shakespeare-action?include_prereleases) ![CI (latest)](https://github.com/fabasoad/setup-shakespeare-action/workflows/CI%20(latest)/badge.svg) ![CI (main)](https://github.com/fabasoad/setup-shakespeare-action/workflows/CI%20(main)/badge.svg) ![CodeQL](https://github.com/fabasoad/setup-shakespeare-action/workflows/CodeQL/badge.svg) ![YAML Lint](https://github.com/fabasoad/setup-shakespeare-action/workflows/YAML%20Lint/badge.svg) [![Total alerts](https://img.shields.io/lgtm/alerts/g/fabasoad/setup-shakespeare-action.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/setup-shakespeare-action/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/fabasoad/setup-shakespeare-action.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/setup-shakespeare-action/context:javascript) [![Maintainability](https://api.codeclimate.com/v1/badges/b76849351ccb000110b5/maintainability)](https://codeclimate.com/github/fabasoad/setup-shakespeare-action/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/b76849351ccb000110b5/test_coverage)](https://codeclimate.com/github/fabasoad/setup-shakespeare-action/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/github/fabasoad/setup-shakespeare-action/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fabasoad/setup-shakespeare-action?targetFile=package.json)

This action installs one of the Shakespeare Programming Language interpreters called [shakespearelang](https://pypi.org/project/shakespearelang/).

## Inputs

| Name    | Required | Description                                                                                         | Default | Possible values |
|---------|----------|-----------------------------------------------------------------------------------------------------|---------|-----------------|
| version | No       | Shakespearelang library version that can be found [here](https://pypi.org/project/shakespearelang/) | Latest  | &lt;String&gt;  |

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

```

### Result

```shell
Run shakespeare run hello-world.spl
Hello World!
```
