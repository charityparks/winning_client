import React from 'react'
import ListsForm from './ListsForm'
// import ListsContainer from '../containers.js/ListsContainer'

const Home = () => {
    return (
        <div>
            <h1>Home Page!</h1>
            <h3><section>This app is a Self Improvement app to help you stayed focused on your goals task by task. <br />By keeping focus you are more likely to reach your goals!</section>  </h3>
            <ListsForm />
        
            {/* <ListsContainer /> */}
        </div>
    )
}
export default Home