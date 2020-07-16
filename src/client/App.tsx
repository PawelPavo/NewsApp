import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewsAPI from './pages/NewsAPI';
import Home from './pages/Home';
import NYTimes from './pages/NYTimes'
import GoogleNews from './pages/GoogleNews';
import Guardian from './pages/Guardian';
import WSJ from './pages/WSJ';


const App: React.FC<IAppProps> = () => {

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/news/:keyword?'>
					<NewsAPI />
				</Route>
				<Route exact path='/nytimes'>
					<NYTimes />
				</Route>
				<Route exact path='/guardian'>
					<Guardian />
				</Route>
				<Route exact path='/google'>
					<GoogleNews />
				</Route>
				<Route exact path='/wsj'>
					<WSJ />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export interface IAppProps { }

export default App;
