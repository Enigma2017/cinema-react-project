import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import { MainPageContainer, MovieContainer } from '../containers';

export class Main extends React.Component{


	componentDidMount() {
        this.props.getMovies();
    }

	render(){
		//const{ isLoading } = this.props;

		return(
			
			<Switch>
				<Route path={"/"} exact component={MainPageContainer} />
				<Route path={"/movie/:id"} component={MovieContainer} />
			</Switch>
		);
	}
}

const mapDispatchToProps = {
	getMovies
};

const mapStateToProps = (state) => ({
	isLoading: state.loading.isLoading

});

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main); 