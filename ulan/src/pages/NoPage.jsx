import React from 'react'
import Header from '../components/Header'

import '../stylesheets/nopage.css'

export default function NoPage() {
  return (
    <>

        <Header />
        <div class="nopageMDiv">
          <h1>Error 404</h1>
          <p>The page doesn't exist  </p>
        </div>

    </>
  )
}