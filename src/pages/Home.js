import React from 'react'
import withLayout from './withLayout'

function Home() {
  return (
    <div>
    <h1>Welcome to my Homepage</h1>
    <div>
    <p>The quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog
    The quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog.</p>

    <p>The quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog
    The quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog.</p>

    <p>The quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog
    The quick brown fox jumps over the lazy dog. the quick brown fox jumps over the lazy dog.</p>
    </div>
    
    </div>
  )
}

export default withLayout(Home)