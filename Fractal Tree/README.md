# A Fractal Tree

Component functions can return any element. They can even return an element of the same type as the component itself. Like so:

```js
function Recursive(props) {
  return React.createElement(Recursive)
}
```

Outside of a math class, you can't have an infinitely nested tree. And as you might expect, rendering the above component will cause React to crash. But that can be solved by keeping track of the depth of elements with a `depth` prop -- and skipping deep renders by returning `null`.

```js
function Recursive(props) {
  if (props.depth > props.maxDepth) {
    // Returning `null` renders nothing, just like setting `children`
    // to null.
    return null
  }
  else {
    return React.createElement(
      Recursive,
      { depth: props.depth + 1 }
    )
  }
}

Recursive.defaultProps = {
  depth: 1,
  maxDepth: 8,
}
```

In fact, you can use this pattern to render something a little like the spiral from earlier. I've started you off with this on the left, with slightly different colors. Oh, and there's one more difference: you can *choose* which side each box will lean to, by changing the value of `side`. To see how this works, try changing `side` from `'left'` to `'right'` above.

Once you've done that, I have a fun exercise for you.

**Your task is to update `FractalBox` so that it renders *two* child boxes. One on the left, and one on the right.**

**Be careful of `maxDepth`!** If you raise it, the amount of work required to render the fractal grows exponentially. Increasing it even from `8` to `10` will give a visible slowdown. Increasing it to `15`

The result should be a [Pythagoras tree](https://en.wikipedia.org/wiki/Pythagoras_tree_(fractal)). If you've had a shot and gotten stuck, feel free to take a look at the solution. But do give it a decent try first.

And once you're ready to continue, we'll take a look at what exactly React is doing!
