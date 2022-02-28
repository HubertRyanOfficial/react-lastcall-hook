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

or

$ npm install react-lastcall-hook --save
```

## Quick Start

**useLastCall** library was created to avoid calls to the database without needing a cache itself, determining how often it should be called again by comparing the time difference between the last call in which the call was made in the database and the time that is performing the same function. Of course, for your reactjs and react native project.

As we use react's own hooks, we recommend using the react version from **16.8** onwards, thus making it possible to use the useEffect and useState hooks.

## How to apply

One of the examples is to make the time difference determined between the last call already passed by more than 1 minute. So checking if it's been 1 minute from the moment of execution or the call to the databases. So let's see how it would look!

Let's simulate that we are going to make a first-class api call to fetch our posts, see how simple. 😍😊

```js
...

import useLastCall from "react-lastcall-hook";

function ExampleComponent() {

  const callPosts = useLastCall(ms,lastCallTime, functionToCall);

  useEffect(() => {
    if(callPosts) {
      callPosts()
    }
  }, [callPosts])

  return (...)
}

```

| Parameters     | Type      | Description                                                                                                                     |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ms             | Number    | The time the function must be called after being called for the first time would differ in **total milliseconds**.              |
| lastCallTime   | timestamp | The value in sequential number or the **timestamp of the last time** the requested function was called to check the value in ms |
| functionToCall | function  | The **function** itself that should be called in these traversals.                                                              |

## Examples

Now let's see a more real example.

```js
...

import useLastCall from "react-lastcall-hook";

function ExampleComponent() {

  const callPosts = useLastCall(1000 * 64, new Date().valueOf, getPosts);

  useEffect(() => {
    if(callPosts) {
      callPosts()
    }
  }, [callPosts]);


  async function getPosts() {
    await fetch(...)
  }

  return (...)
}

```

#### Yump, yeah!!!

Now, the function to get the post will only be called when the time from the last call to the new one is more than 1 minute. Which in this case I put in ms to facilitate our customization. We see that the time of the last call is our Date, that means that the function will be called as any useEffect, that's why there is no difference between this time that was added for hour current one.

A very good way to store the value of the last time this function was called is to use Context or redux. I will show an example with redux always updating a reducer with this value of the last call in timestamp. Now getting and always saving to a property inside a **reducer or context called callPostsLastTime**. If you have another way to improve, share it with us.

```js
...

import {useDisptach} from "react-redux";

import useLastCall from "react-lastcall-hook";

function ExampleComponent({callPostLastTime = new Date().valueOf}) {
  const disptach = useDisptach();

  const callPosts = useLastCall(1000 * 64, callPostLastTime, updateCallPostLastTime);

  useEffect(() => {
    if(callPosts) {
      callPosts()
    }
  }, [callPosts]);

  function updateCallPostLastTime() {

    disptach({
      type: "UPDATE_CALLPOSTS_LASTTIME",
      payload: new Date().valueOf();
    })
    getPosts()
  }

  async function getPosts() {
    await fetch(...)
  }

  return (...)
}

const mapStateToProps = store => {
  return ({
    callPostLastTime: store.postsReducer.lastTime
  })
}

export default (mapStateToProps, null)(ExampleComponent);

```

Yes, now using the **useDisptach** hook from **react-redux** so we can update the value in our reducer within redux. In case you don't understand much about **Redux** architecture, here's a link to see more about it: https://redux.js.org/introduction/getting-started

## You got it! 👍😁

If you want to use it with architectures using **Contexts**, it's very useful too. Remembering that this is so we can store the last time the function was called and so we can see the time difference for the execution to go live.

Thank you very much, I hope I have helped the great React community. ❤🙌

<p align="center">
  <img src="https://imgur.com/nIAoYGc.png" width="300" title="Whatsapp">
</p>
