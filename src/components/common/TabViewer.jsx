// src/components/common/TabViewer.jsx
import { useState } from "react";

function TabViewer({ title, description, resultContent, codeString }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>

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
        <div className="result-content">{resultContent}</div>
      ) : (
        <div className="code-block">
          <code>{codeString}</code>
        </div>
      )}
    </div>
  );
}

export default TabViewer;
