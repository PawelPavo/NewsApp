import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewsAPI from './pages/NewsAPI';
import Home from './pages/Home';
import NYTimes from './pages/NYTimes'
import GoogleNews from './pages/GoogleNews';
import ThePathfinder from './pages/ThePathfinder';
import WSJ from './pages/WSJ';
import GameRules from './pages/GameRules';


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
				<Route exact path='/pathfinder'>
					<ThePathfinder />
				</Route>
				<Route exact path='/google'>
					<GoogleNews />
				</Route>
				<Route exact path='/wsj'>
					<WSJ />
				</Route>
				<Route exact path='/game-rules'>
					<GameRules />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export interface IAppProps { }

export default App;
