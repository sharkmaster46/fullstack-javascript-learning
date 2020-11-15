import React from 'react';
import ContestPreview from './ContestPreview';
import Header from './Header';
import axios from 'axios';

class App extends React.Component {
    state = {
        pageHeader: 'Naming Contests',
        contests: []
    };
    componentDidMount() {
        axios.get('/api/contests')
        .then( resp => {
            this.setState({
                contests: resp.data.contests
            })
        })
        .catch(console.error)
        
    }
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    {this.state.contests.map(contest => 
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );
    }
};

export default App;