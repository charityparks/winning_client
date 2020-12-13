import React from 'react'
import ListsForm from './ListsForm'
// import { connect } from 'react-redux'


const Home = () => {
    return (
        <div>
            <h1>Home Page!</h1>
            <h3><section>This app is a Self Improvement app to help you stayed focused on your goals. <br />By keeping focus you are more likely to complete your tasks!</section>  </h3>
            <ListsForm />
        </div>
    )
}

export default Home