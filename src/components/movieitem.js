// Imports
import React, { Component } from 'react';
import Card from 'react-bootstrap/card';
import {Link} from 'react-router-dom';

// Class MovieItem extends Component class
class Movieitem extends Component {

    // Method - Visual aspect of component
    render() {
        return (
            <div>
                {/* Displays data that was passed from Movies component in a Card */}
                <Card>
                    <Card.Header>{this.props.myfilm.title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.myfilm.poster}></img>
                            <footer>
                                {this.props.myfilm.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* Displays the edit component alongside the specific movie */}
                    <Link to={"/edit/" + this.props.myfilm._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        );
    }
    

}

// Export for external use 
export default Movieitem;