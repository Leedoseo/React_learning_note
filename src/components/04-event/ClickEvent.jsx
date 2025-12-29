// src/components/04-event/ClickEvent.jsx
import TabViewer from "../common/TabViewer";

// 예제 2에서 사용할 컴포넌트
const ClickButton = ({ text, color = "white", children }) => {
  return (
    <button onClick={() => console.log(text)} style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

// 예제 3에서 사용할 컴포넌트
const HandleButton = () => {
  const handleClick = () => {
    console.log("버튼 클릭됨!");
    alert("클릭 이벤트 발생");
  };

  return <button onClick={handleClick}>이벤트 핸들러 함수</button>;
};

function ClickEvent() {
  // 예제 1: 클릭 이벤트 기초
  const resultContent1 = (
    <div>
      <button onClick={() => alert("클릭!")}>기본 클릭</button>
      <button onClick={() => console.log("콘솔 출력")}>콘솔 출력</button>
    </div>
  );

  const codeString1 = `// 가장 기본적인 클릭 이벤트
function BasicClick() {
  return (
    <div>
      <button onClick={() => alert('클릭!')}>기본 클릭</button>
      <button onClick={() => console.log('콘솔 출력')}>콘솔 출력</button>
    </div>
  );
}`;

  // 예제 2: 이벤트로 데이터 활용
  const resultContent2 = (
    <div>
      <ClickButton text="클릭" color="red">
        버튼
      </ClickButton>
      <ClickButton text="테스트" color="blue">
        확인
      </ClickButton>
    </div>
  );

  const codeString2 = `// Props와 이벤트 함께 사용
const ClickButton = ({ text, color = "black", children }) => {
  return (
    <button onClick={() => console.log(text)} style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

function ClickEvent() {
  const resultContent2 = (
    <div>
      <ClickButton text="클릭" color="red">
        버튼
      </ClickButton>
      <ClickButton text="테스트" color="blue">
        확인
      </ClickButton>
    </div>
  );
}`;

  // 예제 3: 이벤트 핸들러 함수 분리
  const resultContent3 = (
    <div>
      <HandleButton />
    </div>
  );

  const codeString3 = `// 이벤트 핸들러 함수 분리
const HandleButton = () => {
  const handleClick = () => {
    console.log("버튼 클릭됨!");
    alert("클릭 이벤트 발생");
  };

  return <button onClick={handleClick}>이벤트 핸들러 함수</button>;
};

// onClick에 함수 이름만 전달 (호출하지 않음!)
// onClick={handleClick} 
// onClick={handleClick()} 즉시 실행됨`;

  return (
    <div>
      <TabViewer
        title="클릭 이벤트 기초"
        description="가장 기본적인 onClick 사용법"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="이벤트로 데이터 활용"
          description="Props와 이벤트를 함께 사용하기"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="이벤트 핸들러 함수 분리"
          description="onClick에서 함수를 분리하여 사용"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default ClickEvent;
