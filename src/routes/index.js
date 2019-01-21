import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Intro from '../pages/Intro';
import ModernJs from '../pages/ModernJs';
import Thinking from '../pages/ThinkingInReact';
import Routing from '../pages/Routing';
import Form from '../pages/Form';
import Styling from '../pages/Styling';
import Redux from '../pages/IntroRedux';
import Testing from '../pages/AboutTesting';
import Pattern from '../pages/PatternI';

export default function index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Intro} />
                <Route path="/modern" component={ModernJs} />
                <Route path="/thingking" component={Thinking} />
                <Route path="/routing" component={Routing} />
                <Route path="/form" component={Form} />
                <Route path="/styling" component={Styling} />
                <Route path="/redux" component={Redux} />
                <Route path="/testing" component={Testing} />
                <Route path="/pattern" component={Pattern} />
            </Switch>
        </BrowserRouter>
    )
}
