import React, { useContext } from 'react';
import { JokeContext } from '../../context/context';
import * as S from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Card from '../../components/Card';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import Button from '../../components/Button';

const LandingPage = () => {
  const context = useContext(JokeContext);

  return (
    <S.Container>
      <Header />

      <Input
        placeholder="Type a word to get a joke..."
        handleOnKeyDown={context.handleSearchOnEnterPressed}
        handleOnChange={(e) => {
          context.setQuery(e.target.value)
        }}
      />

      <S.WrapperButtons>
        <Button handleClick={context.handleDefaultSearch} text="Search" />
        <Button handleClick={context.handleRandomSearch} text="I'm Feeling Chucky" />
      </S.WrapperButtons>

      <S.ContainerCard>
        {context.isFetching && <Loading />}

        {context.jokesToShow.map((joke) => (
          <Card key={joke.id} text={joke.value} />
        ))}

        {context.randomJoke.value && <Card text={context.randomJoke.value} />}

        {context.handleError && <ErrorMessage text={context.handleError} />}

        {context.showSeeMoreButton && !context.isFetching && (
          <S.WrapperButtons>
            <Button handleClick={context.addMoreJokes} text="See More..." />
          </S.WrapperButtons>
        )}
      </S.ContainerCard>
    </S.Container>
  )
}

export default LandingPage;
