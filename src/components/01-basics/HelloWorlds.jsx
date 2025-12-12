// src/components/01-basics/HelloWorld.jsx
import { useState } from "react";

function HelloWorld() {
  const [showCode, setShowCode] = useState(false);
  // 화면에 코드를 보여주는 코드블럭
  const codeString = `function HelloWorld() {
  return (
    <div>
      <h1>Hello, React! 🎉</h1>
    </div>
  );
}

export default HelloWorld`;

  return (
    <div>
      <h3>Hello World 예제</h3>
      <p>React의 가장 기본적인 컴포넌트입니다.</p>

      {/* 탭 버튼 */}
      <div className="tab-buttons">
        <button
          className={`tab-button ${!showCode ? "active" : ""}`}
          onClick={() => setShowCode(false)}
        >
          📱 결과 보기
        </button>
        <button
          className={`tab-button ${showCode ? "active" : ""}`}
          onClick={() => setShowCode(true)}
        >
          💻 코드 보기
        </button>
      </div>

      {/* 내용 */}
      {!showCode ? (
        <div
          style={{
            padding: "20px",
            backgroundColor: "grey",
            borderRadius: "8px",
            marginTop: "10px",
          }}
        >
          <h1>Hello, React!🎉</h1>
        </div>
      ) : (
        <div className="code-block">
          <code>{codeString}</code>
        </div>
      )}
    </div>
  );
}

export default HelloWorld;
