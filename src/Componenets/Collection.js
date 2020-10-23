import React, {Component} from 'react';
import Card from './Card';

class Collection extends Component {
    constructor(){
        super();
        this.state = {
            cards: []
        }
    }

    render(){
        const mappedCards = this.state.cards.map( card => {
            return <Card/>
        })
        return(
            <div className="collection">
                {mappedCards}
            </div>
        )
    }
}

export default Collection;