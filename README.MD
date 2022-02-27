<p align="center">
  <img src="https://imgur.com/MDTrNVH.png" width="720" title="Whatsapp">
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
  <a href="https://github.com/HubertRyanOfficial/react-lastcall-hook"><img src="https://img.shields.io/github/stars/HubertRyanOfficial/react-lastcall-hook"></a>
  <a href="https://www.npmjs.com/package/react-lastcall-hook"><img src="https://img.shields.io/npm/dm/react-lastcall-hook.svg"></a> 
</p>

# useLastCall (react-hook)

A react or react native library to call functions comparing the last time that it was called and running it when it's really needed. Avoiding unnecessary database calls or data loads that are updated at a certain time.

```sh
$ yarn add react-lastcall-hook
```

or

```sh
$ npm install react-lastcall-hook --save
```

## Quick Start

**useLastCall** library was created to avoid calls to the database without needing a cache itself, determining how often it should be called again by comparing the time difference between the last call in which the call was made in the database and the time that is performing the same function.

As we use react's own hooks, we recommend using the react version from **16.8** onwards, thus making it possible to use the useEffect and useState hooks.
