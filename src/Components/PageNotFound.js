import React from 'react'
import Layout from './Layout'
import error from '../assets/404.png'

const PageNotFound = () => {
  return (
    <Layout>
        <img src={error} alt="404 error" />
    </Layout>
  )
}

export default PageNotFound