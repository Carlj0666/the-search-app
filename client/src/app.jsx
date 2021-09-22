import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/SearchBar.jsx';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }

        // Define methods, lifecycle hooks
        this.search = this.search.bind(this);


    }

    search(searchTerm) {
        $.post("/images", {searchTerm}, (data) => {
            this.setState({
                images: data
            })
        })
    }

    render(){
        return(
            <div>
                <h1>Image Search App</h1>
                <Searchbar onSearch={this.search}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
