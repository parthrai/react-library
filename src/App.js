import React from 'react';
import './App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'


import Home from './components/Home'
import Header from './components/common/header'
import Footer from './components/common/footer'
import NotFound from './components/common/404'

import AuthorList from './components/authors/pages/list'
import AuthorShow from './components/authors/pages/show'
import AuthorCreate from './components/authors/pages/create'
import AuthorUpdate from './components/authors/pages/update'

import BookList from './components/books/pages/list'
import BookShow from './components/books/pages/show'
import BookCreate from './components/books/pages/create'
import BookUpdate from './components/books/pages/update'

function App() {
  return (
    <div>

        <Router>

            <Header/>
            <br/>
            <br/>


            <Switch>
                <Route path="/" exact >
                    <Home/>
                </Route>

                <Route path="/books/" exact>
                    <BookList/>
                </Route>

                <Route path="/books/create" exact>
                    <BookCreate/>
                </Route>

                <Route path="/books/:id/show" exact >
                    <BookShow/>
                </Route>



                <Route path="/books/update/:id" exact>
                    <BookUpdate/>
                </Route>

                <Route path="/authors" component={AuthorList} exact/>
                <Route path="/author/:id/show" component={AuthorShow} exact/>
                <Route path="/author/create" component={AuthorCreate} exact/>
                <Route path="/author/update/:id" component={AuthorUpdate} exact/>


                <Route path="/404" component={NotFound} exact/>

                <Redirect to="/404" />
            </Switch>

        </Router>

        <br/>
        <br/> <br/>
        <br/>

        <Footer/>



    </div>
  );
}

export default App;
