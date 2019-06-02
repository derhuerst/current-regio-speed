# current-regio-speed

**Get the speed of the Regio (RE/RB) train you're sitting in.**

[![npm version](https://img.shields.io/npm/v/current-regio-speed.svg)](https://www.npmjs.com/package/current-regio-speed)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/current-regio-speed.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Usage

```shell
npx current-regio-speed
# 131 km/h
npx current-regio-speed --json
# 131
npx current-regio-speed --json # in a tunnel
# null
npx current-regio-speed --refresh 5 # refresh speed every 5 seconds
```

## API

```js
speed()
```

Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves with the current speed in `km/h`.


## Contributing

If you have a question or have difficulties using `current-regio-speed`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/current-regio-speed/issues).
