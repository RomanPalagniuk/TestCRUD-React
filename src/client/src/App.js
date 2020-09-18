import React, {Fragment, Component}  from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Hot from './components/Hot';
import hotDogs from './components/HotDogs';
import notFound from './components/notFound';
import Home from './components/Home';
import {Nav, Navbar} from "react-bootstrap";


class App extends Component {


	render () {

		return (
			<Fragment>

				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="/">Hot Dog Place</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/hotdogs">HotDogs</Nav.Link>
						<Nav.Link href="/hotdog">HotDog</Nav.Link>
					</Nav>
				</Navbar>
  			<Router>
    			<Switch>

    				<Route path="/" exact component={Home} />

	                <Route path="/hotdogs" component={hotDogs} />
	                    	    			
	    			<Route path="/hotdog" component={Hot} />

	    			<Route  component={notFound} />
	                   
    			</Switch>
    		</Router>
    		</Fragment>
  		);
	}

}

export default App;
