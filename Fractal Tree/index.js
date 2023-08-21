import React from 'react'
import ReactDOM from 'react-dom'
import { FractalHelpers } from './FractalHelpers.js'

function FractalTree(props) {
  if (props.depth > props.maxDepth) {
    return null
  }
  else {
    return (
      <div style={FractalHelpers({
        depth: props.depth,
        heightFactor: props.sprout,
        lean: props.lean,
        maxDepth: props.maxDepth,
        side: props.side,
        size: props.size,
      })}>
        <FractalTree
          depth={props.depth + 1}
          lean={props.lean}
          side='left'
          sprout={props.sprout}
          size={props.size}
        />
        <FractalTree
          depth={props.depth + 1}
          lean={props.lean}
          side='right'
          sprout={props.sprout}
          size={props.size}
        />
      </div>
    )
  }
}

FractalTree.defaultProps = {
  depth: 1,
  sprout: 0.4,
  lean: 0,
  maxDepth: 8,
  size: 100,
}

ReactDOM.render(
  <FractalTree maxDepth={8} />,
  document.getElementById('root')
)