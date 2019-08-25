import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, error, loading}) => null;

DetailPresenter.PropTypes = {
    result: propTypes.array,
    error: propTypes.array,
    loading: propTypes.bool.isRequired
};

export default DetailPresenter;