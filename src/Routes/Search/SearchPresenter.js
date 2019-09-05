import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";

const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;


const SearchPresenter = ({ tvResults, movieResults,handleSubmit, searchTerm, error, loading, updateTerm}) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input
                placeholder="Search Movies or TV Show.."
                value={searchTerm}
                onChang={updateTerm}           
            />   
        </Form>
        {loading ? (
            <Loader/>

        ) : (
            <>
                {movieResults && movieResults.length > 0 && (
                    <Section title="Movie Results">
                        {movieResults.map(movie => (
                            <span key={movie.id}>{movie.title}</span>
                        ))}
                    </Section>
                )}
                {tvResults && tvResults.length > 0 && (
                    <Section title="Tv Results">
                        {tvResults.map(show => (
                            <span key={show.id}>{show.name}</span>
                        ))}
                    </Section>
                )}
                {error && <Message color="#e74c3c" text={error}/>}
                {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (
                 <Message text="Nothing found" color="#95a5a6" />
             )}
                
            </>
        )
    }    

    </Container>
);

SearchPresenter.propTypes = {
    tvResults: PropTypes.array,
    movieResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;