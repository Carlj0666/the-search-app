import React from 'react'

class Searchbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        }

        this.search = this.search.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    search(){
        this.props.onSearch(this.state.searchTerm)
    }

    onChange(event) {
        console.log(`search term: ${event.target.value}`)
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (

            <div>
                <input id="search-bar" value={this.state.searchTerm} onChange={this.onChange}/>
                <button id="submit" onClick={this.search}>Search</button>
            </div>
        )
    }

}





export default Searchbar;