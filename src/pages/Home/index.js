import React, { useCallback, useState } from 'react';
import { Wrapper } from './styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MovieActions from '../../actions';

import MovieCard from '../../components/MovieCard';
import Search from '../Search';

const mapStateToProps = state => ({
  movies: state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MovieActions, dispatch),
});

const Home = ({ movies, actions }) => {
  const [sheetActive, setSheetActive] = useState(false);
  const [selectedRank, setSelectedRank] = useState();

  const openSearchSheet = rank => {
    setSelectedRank(rank);
    setSheetActive(true);
  };

  const closeSearchSheet = () => {
    setSelectedRank(undefined);
    setSheetActive(false);
  };

  const rank = [1, 2, 3, 4, 5];

  return (
    <Wrapper>
      <h1>Rank the five best movies you've ever watched</h1>
      <section>
        {rank.map(number => (
          <MovieCard
            key={number}
            rank={number}
            movie={movies[number]}
            chooseMovie={openSearchSheet}
            {...actions}
          />
        ))}
      </section>

      <Search open={sheetActive} onClose={closeSearchSheet} />
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
