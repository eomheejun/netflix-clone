import React from 'react';
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: true

    };

    render() {
        const{topRated, upcoming, popular, error, loading} = this.state;
        return();
    }
}