// Imports
import Read, { Component } from 'react';
import MovieItem from './movieitem';

// Class Movie - extends Component class
class Movies extends Component {

    render() {
        // Props - Used to access information passed from parent component
        // Map - Used to split the array
        return this.props.films.map((film)=>{

            // Returns MovieItem component and passes data to the MovieItem component
            // Each child in a list should have a unique "key" prop, therefore we use the imdbID
            return <MovieItem myfilm={film} key={film._id} reloadData={this.props.reloadData}></MovieItem>;
        });
    }
}

// Export Movies for external use
export default Movies;