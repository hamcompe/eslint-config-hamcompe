# Ham Compe JavaScript Style Guide

## Installation

```shell
(
  export PKG=eslint-config-hamcompe;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
)
```

## Usage

Add to your `.eslintrc`

```json
{
  "extends": "hamcompe"
}
```
