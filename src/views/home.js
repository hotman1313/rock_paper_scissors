import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHandPaper, FaHandScissors, FaHandRock } from "react-icons/fa";
import * as HomeCompenents from "../components/home";

export function Home(props) {
  let location = useLocation();
  let navigate = useNavigate();

  const [toWin, setToWin] = useState(1);
  const [vs, setVS] = useState(0);

  console.log(vs, toWin);

  return (
    <HomeCompenents.HomeMainLayout className="main">
      <HomeCompenents.HeadLogoCell>
        <FaHandRock />
        <FaHandPaper />
        <FaHandScissors />
      </HomeCompenents.HeadLogoCell>
      <HomeCompenents.LabelPlayModeCell>
        
          Play VS
          
      </HomeCompenents.LabelPlayModeCell>
      <HomeCompenents.SelectPlayModeCell>
        <HomeCompenents.SelectPlayModeSelect
          defaultValue={vs}
          onChange={(e) => {if(vs==1){document.getElementById("btn_validate").disabled=false}else{document.getElementById("btn_validate").disabled=true}; setVS(parseInt(e.target.value, 10));}}
        >
          <option value={0} key={1}>
            Computer
          </option>
          <option value={1} key={2}>
            Friend
          </option>
        </HomeCompenents.SelectPlayModeSelect>
      </HomeCompenents.SelectPlayModeCell>
      <HomeCompenents.LabelScoreToWinCell>
        <HomeCompenents.LabelPlayModeText>
          Score to Win
        </HomeCompenents.LabelPlayModeText>
      </HomeCompenents.LabelScoreToWinCell>
      <HomeCompenents.SelectScoreToWinCell>
        <HomeCompenents.SelectScoreToWinSelect
          defaultValue={toWin}
          onChange={(e) => setToWin(parseInt(e.target.value, 10))}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <option value={i + 1} key={i}>
              {i + 1}
            </option>
          ))}
        </HomeCompenents.SelectScoreToWinSelect>
      </HomeCompenents.SelectScoreToWinCell>
      <HomeCompenents.ButtonValidateCell>
        <HomeCompenents.ButtonValidateButton
            id="btn_validate"
           className="btn_validate_home"
          onClick={(e) => {
            navigate("./game", { state: { ...location, toWin, vs } });
          }}
        >
          Play
        </HomeCompenents.ButtonValidateButton>
      </HomeCompenents.ButtonValidateCell>
    </HomeCompenents.HomeMainLayout>
  );
}
