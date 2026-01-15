// src/components/03-props/3-2-passing/01-StringProps.jsx
import TabViewer from "../../common/TabViewer";

// 예제용 컴포넌트
function Greeting(props) {
  return (
    <h1
      style={{
        padding: "10px",
        backgroundColor: "#f0f0f0",
        borderRadius: "4px",
        margin: "5px 0",
      }}
    >
      안녕하세요, {props.name}님!
    </h1>
  );
}

function Message(props) {
  return (
    <div
      style={{
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        margin: "10px 0",
      }}
    >
      <p>
        <strong>제목:</strong> {props.title}
      </p>
      <p>
        <strong>내용:</strong> {props.content}
      </p>
    </div>
  );
}

function StringProps() {
  // 예제 1
  const userName = "이영희";

  const resultContent1 = (
    <div>
      <Greeting name="홍길동" />
      <Greeting name={"김철수"} />
      <Greeting name={userName} />
    </div>
  );

  const codeString1 = `function Greeting(props) {
  return <h1>안녕하세요, {props.name}님!</h1>;
}

function App() {
  const userName = "이영희";
  
  return (
    <div>
      {/* 방법 1: 따옴표 사용 (권장) */}
      <Greeting name="홍길동" />
      
      {/* 방법 2: 중괄호 + 따옴표 */}
      <Greeting name={"김철수"} />
      
      {/* 방법 3: 변수 사용 */}
      <Greeting name={userName} />
    </div>
  );
}

// 문자열 리터럴은 따옴표만으로도 가능
// 변수나 표현식은 중괄호 필요`;

  // 예제 2
  const title = "공지사항";
  const content = "내일은 휴무입니다";

  const resultContent2 = (
    <div>
      <Message title="안내" content="시스템 점검이 있습니다" />
      <Message title={title} content={content} />
      <Message title="알림" content={"오늘의 날씨는 맑음입니다"} />
    </div>
  );

  const codeString2 = `function Message(props) {
  return (
    <div>
      <p>제목: {props.title}</p>
      <p>내용: {props.content}</p>
    </div>
  );
}

function App() {
  const title = "공지사항";
  const content = "내일은 휴무입니다";
  
  return (
    <div>
      {/* 리터럴 전달 */}
      <Message title="안내" content="시스템 점검이 있습니다" />
      
      {/* 변수 전달 */}
      <Message title={title} content={content} />
      
      {/* 혼합 */}
      <Message 
        title="알림" 
        content={"오늘의 날씨는 맑음입니다"} 
      />
    </div>
  );
}`;

  // 예제 3
  const firstName = "길동";
  const lastName = "홍";

  const resultContent3 = (
    <div>
      <Greeting name={firstName + " " + lastName} />
      <Greeting name={`${lastName}${firstName}`} />
      <Greeting name={"안녕하세요".toUpperCase()} />
    </div>
  );

  const codeString3 = `function App() {
  const firstName = "길동";
  const lastName = "홍";
  
  return (
    <div>
      {/* 문자열 연결 */}
      <Greeting name={firstName + " " + lastName} />
      
      {/* 템플릿 리터럴 */}
      <Greeting name={\`${lastName}${firstName}\`} />
      
      {/* 메서드 호출 */}
      <Greeting name="hello".toUpperCase() />
    </div>
  );
}

// 중괄호 안에서 JavaScript 표현식 사용 가능`;

  return (
    <div>
      <h2>3-2-1. 문자열 Props 전달</h2>

      <TabViewer
        title="예제 1: 문자열 전달 방법"
        description="문자열은 따옴표만으로도 전달 가능. 변수는 중괄호 필요"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 여러 문자열 Props"
          description="여러 개의 문자열 Props를 다양한 방법으로 전달"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 문자열 표현식"
          description="중괄호 안에서 문자열 연결, 템플릿 리터럴, 메서드 호출 가능"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default StringProps;
