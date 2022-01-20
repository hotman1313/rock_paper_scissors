import styled from "styled-components";

export const HomeMainLayout = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    ". ."
    "mode_label select_mode"
    "score_to_win_label score_to_win_select"
    "btn btn";
  align-items: center;
`;

export const HeadLogoCell = styled.div`
  grid-column: 1/3;
  grid-row: 1;
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
  gap: 30px;
  color: cadetblue;
`;

export const LabelPlayModeCell = styled.div`
  grid-area: mode_label;
  display: flex;
  height: 100px;
  align-items: center;
  justify-self: end;
  white-space: nowrap;
`;

export const LabelPlayModeText = styled.p``;

export const SelectPlayModeCell = styled.div`
  grid-area: select_mode;
  display: flex;
  height: 100px;
  align-items: center;
  margin-left: 1em;
`;

export const SelectPlayModeSelect = styled.select`
  width: auto;
  padding: 0% 2%;
  background: none;
  border-radius: 30px;
  border-image: linear-gradient(
      0deg,
      rgba(158, 158, 158, 1) 21%,
      rgba(113, 113, 113, 1) 80%
    ) / 3px;
`;

export const LabelScoreToWinCell = styled(LabelPlayModeCell)`
  grid-area: score_to_win_label;
`;

export const SelectScoreToWinCell = styled(SelectPlayModeCell)`
  grid-area: score_to_win_select;
`;
export const SelectScoreToWinSelect = styled(SelectPlayModeSelect)``;

export const ButtonValidateCell = styled.div`
  grid-column: 1/3;
  grid-row: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const ButtonValidateButton = styled.button`
  width: auto;
  padding: 1% 2%;
  background: none;
  border-radius: 30px;
  border-image: linear-gradient(
      0deg,
      rgba(158, 158, 158, 1) 21%,
      rgba(113, 113, 113, 1) 80%
    ) / 3px;
`;
