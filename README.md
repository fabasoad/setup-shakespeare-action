# Setup Shakespeare action

![Release](https://img.shields.io/github/v/release/fabasoad/setup-shakespeare-action?include_prereleases)
![Unit Tests](https://github.com/fabasoad/setup-shakespeare-action/workflows/Unit%20Tests/badge.svg)
![Functional Tests](https://github.com/fabasoad/setup-shakespeare-action/workflows/Functional%20Tests/badge.svg)
![Security Tests](https://github.com/fabasoad/setup-shakespeare-action/workflows/Security%20Tests/badge.svg)
[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/fabasoad/setup-shakespeare-action/main.svg)](https://results.pre-commit.ci/latest/github/fabasoad/setup-shakespeare-action/main)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/fabasoad/setup-shakespeare-action.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/setup-shakespeare-action/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/fabasoad/setup-shakespeare-action.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/setup-shakespeare-action/context:javascript)
[![Maintainability](https://api.codeclimate.com/v1/badges/b76849351ccb000110b5/maintainability)](https://codeclimate.com/github/fabasoad/setup-shakespeare-action/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b76849351ccb000110b5/test_coverage)](https://codeclimate.com/github/fabasoad/setup-shakespeare-action/test_coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/fabasoad/setup-shakespeare-action/badge.svg)](https://snyk.io/test/github/fabasoad/setup-shakespeare-action)

This action installs one of the Shakespeare Programming Language interpreters called [shakespearelang](https://pypi.org/project/shakespearelang/).

## Inputs

<!-- markdownlint-disable MD013 -->
| Name    | Required | Description                                                                                         | Default | Possible values |
|---------|----------|-----------------------------------------------------------------------------------------------------|---------|-----------------|
| version | No       | Shakespearelang library version that can be found [here](https://pypi.org/project/shakespearelang/) | `0.3.1` | &lt;String&gt;  |
<!-- markdownlint-enable MD013 -->

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
