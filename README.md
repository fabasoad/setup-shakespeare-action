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

None.

## Inputs

```yaml
- uses: fabasoad/setup-shakespeare-action@v1
  with:
    # (Optional) shakespeare version. Defaults to the latest version.
    version: "1.0.0"
    # (Optional) If "false" skips installation if shakespeare is already installed.
    # If "true" installs shakespeare in any case. Defaults to "false".
    force: "false"
    # (Optional) GitHub token that is used to send requests to GitHub API such
    # as getting available python versions. Defaults to the token provided by
    # GitHub Actions environment.
    github-token: "${{ github.token }}"
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
steps:
  - uses: actions/checkout@v5
  - uses: fabasoad/setup-shakespeare-action@v1
  - run: shakespeare run hello-world.spl
```

### Result

```shell
Run shakespeare run hello-world.spl
Hello World!
```

## Contributions

![Alt](https://repobeats.axiom.co/api/embed/888da4b485e965e05dd98cb61bb3810fc3f0ef0d.svg "Repobeats analytics image")
