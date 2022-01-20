import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaHandPaper, FaHandScissors, FaHandRock } from "react-icons/fa";
import * as GameComponents from "../components/game";
import "swiper/swiper-bundle.css";
import { Swiper } from "swiper/react/swiper-react";
import { SwiperSlide } from "swiper/react/swiper-slide";
import { Navigation, Autoplay, EffectCoverflow } from "swiper";
import ReactCountdownClock from "react-countdown-clock";
import confetti from "canvas-confetti";
import parse from 'html-react-parser';


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function update(current, toggler) {
  if (current) {
    toggler(false);
  } else {
    toggler(true);
  }
}
export function Game(props) {
  const swiper = useRef(null);
  const swiper2 = useRef(null);
  const left_swiper_ref = useRef(null);
  const right_swiper_ref = useRef(null);
  let confettiCanvas = null;
  let timeout_confetti_celeb_1 = undefined;
  let timeout_confetti_celeb_2 = undefined;
  let timeout_confetti_celeb_3 = undefined;

  let location = useLocation();

  let navigate = useNavigate();

  let result_round = {
    "00": "-",
    11: "-",
    22: "-",
    "01": true,
    "02": false,
    10: false,
    12: true,
    20: true,
    21: false,
  };

  let [score_left_player, setScore_left_player] = useState(0);
  let [message_result_loose, setMessage_result_loose] = useState("<p>Oh oh oh !</p><p>You loose !</p>");
  let [message_result_win, setMessage_result_win] = useState("<p>Great !</p><p>You are the winner !</p>");
  let [data, setData] = useState({
    ceremony_win_round: "X",
    score_left_player: 0,
    score_right_player: 0,
    finished: false,
    winner: 0
  });

  let [sec, setSec] = useState(10);

  console.log(location.state);
  useEffect(() => {
    if (location.state == null || location.state == undefined) {
      console.log("okkkkkkkkkkkkkkkkk");
      navigate("/pfc");
    }

    swiper.current = document.querySelector(".swiper").swiper;
    swiper2.current = document.querySelector(".swiper2").swiper;
    confettiCanvas = document.createElement("canvas");
    document.body.appendChild(confettiCanvas);
  }, []);

  useEffect(() => {
    if (
      data.score_left_player == location.state.toWin ||
      data.score_right_player == location.state.toWin
    ) {
      data.finished = true;
      data.winner = (data.score_left_player == location.state.toWin) ? 1 : 2;
      console.log(data.winner);
      swiper.current.disable();
      document.getElementById("screen_result").style.display = "flex";
      document.getElementById("screen_result").style.border = (data.winner==1)?"dotted 10px rgb(27, 209, 21)":"dotted 10px red";
      if (
        data.score_left_player == location.state.toWin){
      confetti({
        particleCount: 200,
        spread: 400,
        origin: { y: 0.4 },
      });

      timeout_confetti_celeb_1 = setTimeout(() => {
        confetti({
          particleCount: 200,
          spread: 400,
          origin: { y: 0.4 },
        });
      }, 2000);
      timeout_confetti_celeb_2 = setTimeout(() => {
        confetti({
          particleCount: 200,
          spread: 400,
          origin: { y: 0.4 },
        });
      }, 4000);
    }}
    timeout_confetti_celeb_3 = setTimeout(() => {
      if (!data.finished) {
        if (data.ceremony_win_round === "1") {
          left_swiper_ref.current.classList.remove("tess");
        }
        if (data.ceremony_win_round === "2") {
          right_swiper_ref.current.classList.remove("tess");
        }
      }
    }, 3000);
    console.log(left_swiper_ref.current.className);
    confetti.create(confettiCanvas);
  });

  // useEffect(() => {
  //   ceremony_win_round = "X";
  //   cer.current.classList.remove("tess");
  // }, [ceremony_win_round]);

  return (
    <>
      <GameComponents.GameMainLayout className="main">
        <GameComponents.HeaderCell>
          <span>
            <Link
              to="/pfc"
              onclick={() => {
                clearTimeout(timeout_confetti_celeb_1);
                clearTimeout(timeout_confetti_celeb_2);
                clearTimeout(timeout_confetti_celeb_3);
              }}
            >
              <FaHome style={{ verticalAlign: "middle" }} /> Quit
            </Link>
          </span>
          <span>
            {" "}
            Score To Win :{" "}
            {location.state != null ? location.state.toWin : navigate("/pfc")}
          </span>
        </GameComponents.HeaderCell>
        <GameComponents.PlayerDisplayCell>
          <GameComponents.SelfPlayer>
            <GameComponents.ScoreAndCountdownMainPlayer>
              <span style={{ flexGrow: 1, whiteSpace: "nowrap" }}>
                Your score : {data.score_left_player}
              </span>
              {/* <ReactCountdownClock
                style={{ flexGrow: 1 }}
                size={40}
                seconds={sec}
              /> */}
            </GameComponents.ScoreAndCountdownMainPlayer>
            <GameComponents.SwiperWrapper>
              <MdChevronLeft className="left" style={{ fontSize: "2em" }} />
              <GameComponents.Swiper ref={left_swiper_ref}>
                <Swiper
                  ref={swiper}
                  className="swiper"
                  modules={[Navigation]}
                  centeredSlides={true}
                  loop={true}
                  navigation={{ nextEl: ".right", prevEl: ".left" }}
                  onClick={(swiper) => {
                    {
                      //setCeremony_win_round("X");
                      swiper2.current.slideTo(getRandomInt(3));
                      let res =
                        result_round[
                          ((swiper.activeIndex + 2) % 3) +
                            "" +
                            swiper2.current.activeIndex
                        ];

                      if (res != "-") {
                        if (res) {
                          left_swiper_ref.current.classList.add("tess");
                          setData({
                            score_left_player: data.score_left_player + 1,
                            ceremony_win_round: "1",
                            class: "tess",
                            score_right_player: data.score_right_player,
                          });
                        }
                        if (!res) {
                          right_swiper_ref.current.classList.add("tess");
                          setData({
                            score_left_player: data.score_left_player,
                            ceremony_win_round: "2",
                            class: "tess",
                            score_right_player: data.score_right_player + 1,
                          });
                        }
                      } else {
                        setData({
                          score_left_player: data.score_left_player,
                          ceremony_win_round: "X",
                          class: data.class,
                          score_right_player: data.score_right_player 
                        });
                      }
                    }
                  }}
                >
                  <SwiperSlide>
                    <FaHandPaper className="svg_choice paper" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <FaHandRock className="svg_choice rock" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <FaHandScissors className="svg_choice scissor" />
                  </SwiperSlide>
                </Swiper>
              </GameComponents.Swiper>
              <MdChevronRight className="right" style={{ fontSize: "2em" }} />
            </GameComponents.SwiperWrapper>
            <GameComponents.Choice>
              <FaHandPaper
                className="paper"
                onClick={(e) => swiper.current.slideTo((0 + 1) % 3, 10)}
              />
              <FaHandRock
                className="rock"
                onClick={(e) => {
                  swiper.current.slideTo((1 + 1) % 3, 10);
                }}
              />
              <FaHandScissors
                className="scissor"
                onClick={(e) => swiper.current.slideTo((2 + 1) % 3, 10)}
              />
            </GameComponents.Choice>
          </GameComponents.SelfPlayer>
          <GameComponents.SelfPlayer>
            <span>
              {"Computer"} score : {data.score_right_player}
            </span>
            <GameComponents.SwiperWrapper>
              <GameComponents.Swiper ref={right_swiper_ref}>
                <Swiper
                  ref={swiper2}
                  className="swiper2"
                  modules={[EffectCoverflow]}
                  centeredSlides={true}
                  allowTouchMove={false}
                  effect={"coverflow"}
                  coverflowEffect={{ rotate: 300, modifier: 2 }}
                >
                  <SwiperSlide>
                    <FaHandPaper className="svg_choice" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <FaHandRock className="svg_choice" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <FaHandScissors className="svg_choice" />
                  </SwiperSlide>
                </Swiper>
              </GameComponents.Swiper>
            </GameComponents.SwiperWrapper>
          </GameComponents.SelfPlayer>
          <div id="screen_result">
              {parse((data.score_left_player==location.state.toWin) ? message_result_win : message_result_loose)}
            <div className="btn_result">
              <button onClick={() => {
                setTimeout(function(){
                  window.location.reload();
                });

              }}>Replay</button> {" "}
              <button onClick={() => {
                navigate("/pfc");
              }}>Quit</button>
            </div>
          </div>
        </GameComponents.PlayerDisplayCell>
      </GameComponents.GameMainLayout>
    </>
  );
}
