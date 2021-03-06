import React from 'react';
import SearchPresenter from "./SearchPresenter";
import { tvApi, moviesApi } from '../../api';

export default class extends React.Component {
    state =  {
        tvResults: null,
        movieResults: null,
        searchTerm: "",
        error: null,
        loading: false

    };

    handleSumbmit = event => {
        event.preventDefault(); 
        const {searchTerm} = this.state;
        if(searchTerm !== ""){
            this.searchByTerm();
        }
    };

    updateTerm = event => {
        const {
            target: {value}
        } = event;
        this.setState({
            searchTerm:value
        });
    };

    searchByTerm = async() => {
        const {searchTerm} = this.state;
        this.setStat({loading: true});
        try{
            const {
                data: { results: tvResults}
            } = await tvApi.search(searchTerm);
            const {
                data: { results: movieResults}
            } = await moviesApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults
            });
        }catch{
            this.setState({
                error: "Can't find movies information"
            });
        }finally{
            this.setState({
                loading: false
            });
        }
    }

    render() {
        const{tvResults, movieResults, error, loading} = this.state;
        return(
            <SearchPresenter
                tvResults={tvResults}
                movieResults={movieResults}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        );
    }

} 