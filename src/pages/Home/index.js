import React from 'react';
import { Wrapper } from './styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MovieActions from '../../actions';

import MovieCard from '../../components/MovieCard';

const mapStateToProps = state => ({
  movies: state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MovieActions, dispatch),
});

const Home = ({ movies, actions }) => {
  let rank = [1, 2, 3, 4, 5];

  return (
    <Wrapper>
      <h1>Rank the five best movies you've ever watched</h1>
      <section>
        {rank.map(number => (
          <MovieCard
            key={number}
            rank={number}
            movie={movies[number]}
            {...actions}
          />
        ))}
      </section>
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
