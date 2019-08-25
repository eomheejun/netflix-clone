import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({ tvResults, movieResults, searchTerm, error, loading}) => null;

SearchPresenter.propTypes = {
    tvResults: PropTypes.array,
    movieResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;