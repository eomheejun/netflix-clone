import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({topRated, popular, airingToday, error, loading}) => null;

TVPresenter.PropTypes = {
    topRated: propTypes.array,
    popular: propTypes.array,
    airingToday: propTypes.array,
    error: propTypes.array,
    loading: propTypes.bool.isRequired
};

export default TVPresenter;