import React, { Component } from 'react';
import { connect } from 'react-redux';

import { InfoBlock } from '../components';
import { InfoTrailer } from '../components';

class MovieSinglePage extends Component {
	state = {
		movie: {}
	};

	componentDidMount(){
		const { match, movies } = this.props;
		const movieId = match.params.id;
		const movie = movies.find(item => item._id === movieId);

		this.setState({ movie });
	}

	render(){
		const { movie } = this.state;
		const actors = movie.actors ? movie.actors.join(", ") : "";
		const genre = movie.genre ? movie.genre.join(", ") : "";
		const countries = movie.country ? movie.country.join(", ") : "";
		console.log("this.state.movie", this.state.movie);
		return(
			<section className="single-movie-section">
				<div className="container">
					<div className="row">
						<div className="col-5 img">
							<img src={movie.poster} alt="poster" />
							<button className="button-buy text-uppercase">Buy ticket<i class="fa fa-cart-plus"></i></button>
						</div>
						<div className="col-7">
							<h2>{movie.title}</h2>
							<InfoBlock 
								title="Actors: "
								text={movie.actors ? actors : ""}
							/>
							<InfoBlock 
								title="Genre: "
								text={movie.genre ? genre : ""}
							/>
							<InfoBlock 
								title="Country: "
								text={movie.country ? countries : ""}
							/>
							<InfoBlock 
								title="Language: "
								text={movie.language}
							/>
							<InfoBlock 
								title="Age:"
								text={movie.age ? `${movie.age}+` : "No age limits"}
							/>
							<InfoBlock 
								title="Description: "
								text={movie.description}
							/>
						</div>
					</div>
					<div>
					<h3>Trailer to watch</h3>
						<InfoTrailer
							video={
								<iframe
									title="trailer"
								 	src={movie.trailer}
								 	width="800px"
								 	height="560px"
								 	allowFullScreen
								/>
							}
						 />
					</div>
				</div>
			</section>
		);
	}
};

const mapStateToProps = (state) => ({
	movies: state.data.movies
});

export const MovieContainer = connect(mapStateToProps)(MovieSinglePage);