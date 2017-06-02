Web Dependencies
================

Nowadays 96% of the code that goes to production is an open source library.

A dependency manager keeps track of which libraries does our project depend on
and what specific version.

You can then distribute your project with a simple dependency manifest and let
the manager download it for you.

## Alternatives

### NPM

https://www.npmjs.com/

### Yarn

https://yarnpkg.com/en/

### Bower (obsolete)

https://bower.io/

## Setup your project

```
# NPM
npm init -y

# Yarn
yarn init -y
```

## Add a new dependency

```
# NPM
npm install --save jquery

# Yarn
yarn add jquery
```
