import React from 'react';
import TVPresenter from "./TVPresenter";
import {tvApi} from "../../api";

export default class extends React.Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: true

    };

    async componentDidMount() {
        try{
            const {
                data: { result: topRated}
            } = await tvApi.topRated();
            const {
                data: { result: popular}
            } = await tvApi.popular();
            const {
                data: { result: airingToday}
            } = await tvApi.airingToday();
            this.setState({
                topRated,
                popular,
                airingToday
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
        const{topRated, upcoming, popular, error, loading} = this.state;
        return();
    }
}