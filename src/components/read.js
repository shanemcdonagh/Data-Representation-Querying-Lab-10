// Imports
import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

// Class Read - extends Component class
class Read extends Component {

    // Method - Method gets called whenever component becomes visible (inserted into DOM)
    componentDidMount(){
        // Retrieve data from this url and...
        axios.get("http://localhost:4000/api/movies")
        .then((response)=>{
            // pass it to the movies array
            this.setState({myMovies:response.data.mymovies})
        })
        .catch((error)=>{
            // Else, output error to console
            console.log(error);
        });
    }
    
    // Object designed to hold data within a class
    state = {
        myMovies: []
    };

    // Method - Visual aspect of component
    render() {

        return (
            <div>
                
                <h2>This is my Read component</h2>
                
                {/* Displaying and passing data from state object to the Movie component */}
                <Movies films={this.state.myMovies}></Movies>
            </div>
        );
    }

}

// Export component for use elsewhere
export default Read;