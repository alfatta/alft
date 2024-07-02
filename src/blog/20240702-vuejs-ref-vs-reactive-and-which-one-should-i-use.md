---
title: "Vue.js: Ref vs Reactive and Which One Should I Use?"
description: "When diving into Vue.js 3, the Composition API is a game-changer, introducing new methods to manage reactivity in your components effectively."
prev:
  text: "How I forward my domain handled with cloudflare to DEV.TO"
  link: /blog/20200531-how-i-forward-my-domain-handled-with-cloudflare-to-dev-to
next: false
---

![Vue.js: Ref vs Reactive and Which One Should I Use?](https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e)

# Vue.js: Ref vs Reactive and Which One Should I Use?

When diving into Vue.js 3, one of the first things you’ll encounter is the Composition API. It's a game-changer, bringing new ways to handle reactivity in your components. Two of the core tools you’ll use are `ref` and `reactive`. But what’s the difference? When should you use one over the other? Let’s break it down.

## Understanding ref
Think of `ref` as a way to create reactive references to primitive values. It’s simple, straightforward, and perfect for single values.

```js
import { ref } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}
```

Here, `count` is a reactive reference. Notice the `.value` - this is crucial. When you need to access or modify the value of a `ref`, you always use `.value`. It’s like unwrapping a present!

## Embracing `reactive`
On the other hand, `reactive` is your go-to for making entire objects reactive. It’s like wrapping a magic cloak around your object, making every property reactive.

```js
import { reactive } from 'vue';

const state = reactive({
  count: 0,
  name: 'Vue.js'
});

function increment() {
  state.count++;
}
```

With `reactive`, you don’t need to worry about `.value`. You can directly access and modify properties, and Vue will handle the rest.

## When to Use ref vs reactive
So, when should you choose `ref`? When you’re dealing with a simple primitive value or want a reference that can be easily passed around. It’s great for counters, booleans, and any single value that needs to be reactive.

`reactive` shines with objects. If you have an object with multiple properties and you want all of them to be reactive, `reactive` is your best friend. It’s perfect for state management within components, where you have a bunch of related properties.

## Mixing and Matching
One of the beauties of Vue.js is that you don’t have to stick to one. You can mix `ref` and `reactive` in the same component, using each where it makes the most sense.

```js
import { ref, reactive } from 'vue';

const count = ref(0);
const user = reactive({
  name: 'Alfatta',
  age: 25
});

function updateName(newName) {
  user.name = newName;
}
```

Here, `count` is a `ref` because it’s a single value, while `user` is a `reactive` object with multiple properties.

## Conclusion
Both `ref` and `reactive` are powerful tools in Vue.js, each with their own strengths. By understanding when and how to use them, you can make your components more efficient and your code cleaner. So, whether you’re dealing with a single reactive value or a complex state object, Vue’s got you covered!

Happy coding with Vue.js!

