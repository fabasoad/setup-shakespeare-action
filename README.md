# Setup Shakespeare action

![Release](https://img.shields.io/github/v/release/fabasoad/setup-shakespeare-action?include_prereleases)
![Functional Tests](https://github.com/fabasoad/setup-shakespeare-action/workflows/Functional%20Tests/badge.svg)
[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/fabasoad/setup-shakespeare-action/main.svg)](https://results.pre-commit.ci/latest/github/fabasoad/setup-shakespeare-action/main)

This action installs one of the Shakespeare Programming Language interpreters
called [shakespearelang](https://pypi.org/project/shakespearelang/).

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
