# Animate the fractal tree

Remember the fractal tree from earlier? Now that you know how to render updates, I have a new exercise for you. **Your task is to bring the tree to life!**

In the editor, I've provided you with a `FractalTree` component. The available props are documented on the `propTypes` object in `FractalTree.js`, but there are two props in particular that you may find interesting:

-   `lean`

    A number that specifies how far the tree leans to one side or the other. I like numbers between `-0.15` and `0.15`.
  
-   `sprout`

    A number that specifies how much the tree should `sprout` upwards. I like numbers between `0.3` and `0.5`.

To make the tree sway, all you need to do is repeatedly render the tree while cycling the values of `lean` and `sprout` between two numbers, which you can by passing the time since the animation started to `Math.sin()`:

```js
let lean = 0.1*Math.sin(time/2000)
let sprout = 0.3 + 0.05*Math.sin(time/1300)
```

To schedule each render, you can use [window.setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) or [window.requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) -- whatever you feel most comfortable with. With each rendered frame, you can use the result of `Date.now()` to calcaulate the number of milliseconds that have passed since the previous frame.

I wouldn't recommend using `window.setInterval()`; it can cause problems when frames take longer to render than the specified interval. And given how heavy the tree can be, there's a good chance of this happening.

If you get stuck, feel free to check my solution -- *as long as you've given it your best try before you do.* And once you're happy with your tree, you can move on to the next lesson!
