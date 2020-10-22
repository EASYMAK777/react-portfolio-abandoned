import React from 'react';
import { Media,Container } from 'react-bootstrap';
import "./bio.css";

function Bio() {
    return (
        <div className="bio">
           <Container>
               
               
                <Media>
                    <img
                        width={300}
                        height={300}
                        className="mr-3"
                        padding = ""
                        src="https://picsum.photos/200/300"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Media Heading</h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus.
                        </p>
                    </Media.Body>
                </Media>
               
               
               
            </Container> 



        </div>
    );
}

export default Bio;