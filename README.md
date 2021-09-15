# jest modern timers vs node-cache-manager

This repo reproduces the issue https://github.com/facebook/jest/issues/11572, which prevents using jest modern timers with certain libraries.

## How to reproduce

First of all, install dependencies:

```
$> yarn install
```

Then, run jest:

```
$> yarn test
```

You should receive the following error message:

```
    thrown: "Exceeded timeout of 5000 ms for a test.
    Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."

[..]

Tests:       1 failed, 1 total
```


### Using legacy timers

Using legacy timers, the exact same test succeeds:

```
$> yarn test-legacy-timers
```