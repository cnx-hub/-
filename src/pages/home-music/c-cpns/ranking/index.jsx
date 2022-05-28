import { useEffect, useReducer } from "react";
import { Block, View } from "@tarojs/components";
import { useSelector, shallowEqual } from "react-redux";

import RankingAreaItem from "./c-cpns/ranking-area-item";

import {
  CHANGE_NEWRANKINGS,
  CHANGE_ORIGINRANKING,
  CHANGE_UPDATERANKING
} from "../../store/constant";

const initState = {
  newRanking: {},
  originRanking: {},
  updateRanking: {}
};

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_NEWRANKINGS:
      return { ...state, newRanking: action.newRanking };
    case CHANGE_ORIGINRANKING:
      return { ...state, originRanking: action.originRanking };
    case CHANGE_UPDATERANKING:
      return { ...state, updateRanking: action.updateRanking };
    default:
      return state;
  }
}

const Ranking = () => {
  // redux
  const [rankingData, dispatch] = useReducer(reducer, initState);
  // redux hooks
  const { newRanking, originRanking, updateRanking } = useSelector(state => {
    return {
      newRanking: state.homeMusic.newRanking,
      originRanking: state.homeMusic.originRanking,
      updateRanking: state.homeMusic.updateRanking
    };
  }, shallowEqual);

  useEffect(() => {
    dispatch({ type: CHANGE_NEWRANKINGS, newRanking: newRanking });
  }, [newRanking]);

  useEffect(() => {
    dispatch({ type: CHANGE_ORIGINRANKING, originRanking: originRanking });
  }, [originRanking]);

  useEffect(() => {
    dispatch({ type: CHANGE_UPDATERANKING, updateRanking: updateRanking });
  }, [updateRanking]);

  return (
    <View>
      {Object.keys(rankingData).map((key, index) => {
        return (
          !!Object.keys(rankingData[key]).length && (
            <Block key={rankingData[key].id}>
              <RankingAreaItem item={rankingData[key]} rankName={key} />
            </Block>
          )
        );
      })}
    </View>
  );
};

export default Ranking;
