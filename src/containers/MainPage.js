import React from 'react';
import { connect } from 'react-redux';
import { MovieList } from '../components';
import { SectionBlock } from '../components';

export const MainPage = ({ movies }) => (
	
	<main>
		<SectionBlock />
		<div className="main-block">
			<div className="movie-gallery container d-flex flex-wrap justify-content-center">
				{movies.map(item => <MovieList key={item._id} movie={item}/> )}
			</div>
		</div>
	</main>
);

const mapStateToProps = (state) => ({
	movies: state.data.movies
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);
