import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({ tvResults, movieResults, searchTerm, error, loading}) => null;

SearchPresenter.PropTypes = {
    tvResults: propTypes.array,
    movieResults: propTypes.array,
    searchTerm: propTypes.string,
    error: propTypes.array,
    loading: propTypes.bool.isRequired,
    handleSubmit: propTypes.func.isRequired
};

export default SearchPresenter;