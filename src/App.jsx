import React from 'react';
import { hot } from 'react-hot-loader';
import Intro from './components/Intro';
import Content from './components/Content';
import ToLearn from './components/learn';


/**
 * Stateless Component App which holds the Components Intro and Content
 */
const App = () => (
    <div>
        <Intro/>
        <Content/>
        <ToLearn />
    </div>

    
);

export default hot(module)(App);
