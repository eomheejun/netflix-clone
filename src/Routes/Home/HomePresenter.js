import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error}) => null;

HomePresenter.PropTypes = {
    nowPlaying: propTypes.array,
    popular: propTypes.array,
    upcoming: propTypes.array,
    loading: propTypes.bool.isRequired,
    error: propTypes.string
};

export default HomePresenter;
