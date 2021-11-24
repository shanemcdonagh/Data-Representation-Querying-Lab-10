// Imports
import React, { Component } from 'react';
import Card from 'react-bootstrap/card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// Class MovieItem extends Component class
class Movieitem extends Component {

    constructor()
    {
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    // Method - Sends delete request to specified url alongside a movie id
    DeleteMovie(){
        console.log("Delete: " + this.props.myfilm._id);

        // Call delete method on specific url
        axios.delete("http://localhost:4000/api/movies/" +this.props.myfilm._id)
        .then(()=>{
            this.props.reloadData();
        })
        .catch();
    }
    
    // Method - Visual aspect of component
    render() {
        return (
            <div>
                {/* Displays data that was passed from Movies component in a Card */}
                <Card>
                    <Card.Header>{this.props.myfilm.title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.myfilm.poster} width="300" height="445"></img>
                            <footer>
                                {this.props.myfilm.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* Displays the edit component alongside the specific movie */}
                    <Link to={"/edit/" + this.props.myfilm._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }
    

}

// Export for external use 
export default Movieitem;