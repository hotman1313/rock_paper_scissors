import styled from "styled-components";

export const GameMainLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
`;

export const HeaderCell = styled.div`
  grid-column: 1 / span 8;
  grid-row: 1;
  display: flex;
  justify-content: space-around;
  height: 100px;
  align-items: center;
  white-space: nowrap;
  gap: 20px;
`;

export const PlayerDisplayCell = styled.div`
  margin-top: 8%;
  grid-column: 2/8;
  grid-row: 4/8;
  display: flex;
  justify-content: center;
  gap: 20%;
  flex-wrap: wrap;
  align-items: start;
  position: relative;
`;

export const SelfPlayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;
`;

export const ScoreAndCountdownMainPlayer = styled.div`
  display: flex;
  flexdirection: row;
  gap: 15px;
  align-items: center;
  width: 70%;
  justify-content: center;
`;

export const SwiperWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Swiper = styled.div`
  width: 40vw;
  height: 40vw;
  max-width: 300px;
  max-height: 300px;
  min-width: 100px;
  min-height: 100px;
  border: solid 3px;
  border-radius: 5%;
  padding: 10px;
`;

export const Choice = styled.div`
  display: flex;
  gap: 15px;
  font-size: 3em;
`;

