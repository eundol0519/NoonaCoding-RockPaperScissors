import { useState, useRef, useEffect } from "react";
import "./App.css";
import Box from "./component/Box";

/*
  [유저 스토리]
    - 박스 2개 (타이틀, 사진 정보, 결과)
    - 가위, 바위, 보 버튼
    - 버튼을 클릭하면 클릭한 값이 화면에 노출됨
    - 컴퓨터는 랜덤하게 아이템을 선택한다.
    - 3, 4번의 결과를 바탕으로 승패를 가린다.
    - 승패에 따라 테두리 색이 바뀐다. (이기면 초록, 지면 빨강, 비기면 검정)
*/

const cases = ["👊", "✌️", "✋"];
const winOrLoseCases = {
  "👊": {
    "👊": "draw",
    "✌️": "win",
    "✋": "lose",
  },
  "✌️": {
    "👊": "lose",
    "✌️": "drwa",
    "✋": "win",
  },
  "✋": {
    "👊": "win",
    "✌️": "lose",
    "✋": "draw",
  },
};

function App() {
  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [result, setResult] = useState({ user: null, computer: null });

  const userRef = useRef();
  const computerRef = useRef();

  useEffect(() => {
    if (!userChoice) return;

    const userResult = winOrLoseCases[userChoice][computerChoice];
    const computerResult = winOrLoseCases[computerChoice][userChoice];
    setResult({ user: userResult, computer: computerResult });
  }, [userChoice, computerChoice]);

  useEffect(() => {
    if (!result.user || !result.computer) return;

    const colorCases = {
      win: "green",
      draw: "black",
      lose: "red",
    };

    /*
      [setProperty]
        - 요소의 위치, 크기 또는 불투명도를 애니메이션화 하는 경우
        - 사용자 상호작용에 따라 입력 요소의 색상, 글꼴 크기 또는 기타 시각적 속성을 변경하는 경우
        - 요소의 상태의 따라 CSS 전환 또는 애니메이션을 적용하는 경우
        - 부모 컴포넌트의 상태에 따라 자식 요소의 스타일을 업데이트하는 경우

      또는

      ref.current.style.borderColor = "black"; 이런 식으로 사용해도 됨
    */
    userRef.current.style.setProperty("border-color", colorCases[result.user]);
    computerRef.current.style.setProperty("border-color", colorCases[result.computer]);
  }, [result]);

  const userChoiceHandler = (choice) => {
    setUserChoice(choice);
    computerChoiceHandler();
  };

  const computerChoiceHandler = () => {
    const random = Math.floor(Math.random() * 3);
    setComputerChoice(cases[random]);
  };

  return (
    <>
      <div className="boxs">
        <Box ref={userRef} title="User" choice={userChoice} result={result.user} />
        <Box ref={computerRef} title="Computer" choice={computerChoice} result={result.computer} />
      </div>
      <div className="choiceBox">
        {cases.map((item) => {
          return (
            <p
              key={item}
              onClick={() => {
                userChoiceHandler(item);
              }}
            >
              {item}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
