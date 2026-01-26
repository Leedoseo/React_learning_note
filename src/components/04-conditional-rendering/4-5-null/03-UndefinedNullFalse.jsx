// src/components/04-conditional-rendering/4-5-null/03-UndefinedNullFalse.jsx
import { useState } from "react";
import TabViewer from "../../common/TabViewer";

// 예제 1: 렌더링 결과 비교
function Example1() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
      }}
    >
      <h2>React에서 각 값의 렌더링 결과</h2>

      <div style={{ display: "grid", gap: "15px", marginTop: "20px" }}>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#d4edda",
            borderRadius: "8px",
            border: "2px solid #28a745",
          }}
        >
          <h3>✅ null - 렌더링 안 됨 (권장)</h3>
          <div
            style={{
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "4px",
              marginTop: "10px",
            }}
          >
            <code>return null;</code>
          </div>
          <p style={{ marginTop: "10px", marginBottom: 0 }}>
            결과: <strong>[아무것도 표시 안 됨]</strong>
          </p>
        </div>

        <div
          style={{
            padding: "15px",
            backgroundColor: "#d4edda",
            borderRadius: "8px",
            border: "2px solid #28a745",
          }}
        >
          <h3>✅ undefined - 렌더링 안 됨</h3>
          <div
            style={{
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "4px",
              marginTop: "10px",
            }}
          >
            <code>return undefined;</code>
          </div>
          <p style={{ marginTop: "10px", marginBottom: 0 }}>
            결과: <strong>[아무것도 표시 안 됨]</strong>
          </p>
        </div>

        <div
          style={{
            padding: "15px",
            backgroundColor: "#d4edda",
            borderRadius: "8px",
            border: "2px solid #28a745",
          }}
        >
          <h3>✅ false - 렌더링 안 됨</h3>
          <div
            style={{
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "4px",
              marginTop: "10px",
            }}
          >
            <code>return false;</code>
          </div>
          <p style={{ marginTop: "10px", marginBottom: 0 }}>
            결과: <strong>[아무것도 표시 안 됨]</strong>
          </p>
        </div>

        <div
          style={{
            padding: "15px",
            backgroundColor: "#d4edda",
            borderRadius: "8px",
            border: "2px solid #28a745",
          }}
        >
          <h3>✅ true - 렌더링 안 됨</h3>
          <div
            style={{
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "4px",
              marginTop: "10px",
            }}
          >
            <code>return true;</code>
          </div>
          <p style={{ marginTop: "10px", marginBottom: 0 }}>
            결과: <strong>[아무것도 표시 안 됨]</strong>
          </p>
        </div>

        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8d7da",
            borderRadius: "8px",
            border: "2px solid #dc3545",
          }}
        >
          <h3>❌ 0 - "0" 표시됨 (주의!)</h3>
          <div
            style={{
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "4px",
              marginTop: "10px",
            }}
          >
            <code>return 0;</code>
          </div>
          <p style={{ marginTop: "10px", marginBottom: 0 }}>
            결과: <strong>"0"</strong> ← 화면에 표시됨!
          </p>
        </div>

        <div
          style={{
            padding: "15px",
            backgroundColor: "#d4edda",
            borderRadius: "8px",
            border: "2px solid #28a745",
          }}
        >
          <h3>✅ "" (빈 문자열) - 렌더링 안 됨</h3>
          <div
            style={{
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "4px",
              marginTop: "10px",
            }}
          >
            <code>return "";</code>
          </div>
          <p style={{ marginTop: "10px", marginBottom: 0 }}>
            결과: <strong>[아무것도 표시 안 됨]</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

const example1Code = `// React에서 각 값의 렌더링 결과

function Component1() {
  return null;        // ✅ 렌더링 안 됨 (권장)
}

function Component2() {
  return undefined;   // ✅ 렌더링 안 됨
}

function Component3() {
  return false;       // ✅ 렌더링 안 됨
}

function Component4() {
  return true;        // ✅ 렌더링 안 됨
}

function Component5() {
  return 0;           // ❌ "0"이 화면에 표시됨!
}

function Component6() {
  return "";          // ✅ 렌더링 안 됨
}

// null이 가장 명시적이고 권장됨!`;

// 예제 2: 실제 사용 예시
function TestComponent({ returnValue }) {
  if (returnValue === "null") return null;
  if (returnValue === "undefined") return undefined;
  if (returnValue === "false") return false;
  if (returnValue === "true") return true;
  if (returnValue === "0") return 0;
  if (returnValue === "empty-string") return "";
  return <div>정상 렌더링</div>;
}

function Example2() {
  const [returnValue, setReturnValue] = useState("null");

  return (
    <div>
      <div
        style={{
          marginBottom: "15px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setReturnValue("null")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          null
        </button>
        <button
          onClick={() => setReturnValue("undefined")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          undefined
        </button>
        <button
          onClick={() => setReturnValue("false")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          false
        </button>
        <button
          onClick={() => setReturnValue("true")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          true
        </button>
        <button
          onClick={() => setReturnValue("0")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          0
        </button>
        <button
          onClick={() => setReturnValue("empty-string")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          ""
        </button>
        <button
          onClick={() => setReturnValue("jsx")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          JSX
        </button>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          minHeight: "100px",
          border: "2px dashed #dee2e6",
        }}
      >
        <h3>
          현재 return 값: <code>{returnValue}</code>
        </h3>
        <div
          style={{
            marginTop: "15px",
            padding: "15px",
            backgroundColor: returnValue === "0" ? "#f8d7da" : "#fff",
            borderRadius: "4px",
            border:
              "1px solid " + (returnValue === "0" ? "#f5c6cb" : "#dee2e6"),
          }}
        >
          <strong>렌더링 결과:</strong>
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
              minHeight: "40px",
              border: "1px solid #dee2e6",
            }}
          >
            <TestComponent returnValue={returnValue} />
          </div>
        </div>

        {returnValue === "0" && (
          <p
            style={{
              marginTop: "15px",
              padding: "10px",
              backgroundColor: "#f8d7da",
              borderRadius: "4px",
              color: "#721c24",
            }}
          >
            ⚠️ 0만 화면에 표시됨!
          </p>
        )}
      </div>
    </div>
  );
}

const example2Code = `function TestComponent({ returnValue }) {
  if (returnValue === 'null') return null;
  if (returnValue === 'undefined') return undefined;
  if (returnValue === 'false') return false;
  if (returnValue === 'true') return true;
  if (returnValue === '0') return 0;
  if (returnValue === 'empty') return "";

  return <div>정상 렌더링</div>;
}

// 결과:
// null, undefined, false, true, "" → 아무것도 안 보임
// 0 → "0"이 화면에 표시됨!`;

// 예제 3: 권장 사항
function Example3() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
      }}
    >
      <h2>권장 사항</h2>

      <div style={{ display: "grid", gap: "15px", marginTop: "20px" }}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#d4edda",
            borderRadius: "8px",
            border: "2px solid #28a745",
          }}
        >
          <h3 style={{ marginTop: 0 }}>✅ null 사용 (가장 권장)</h3>
          <div
            style={{
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          >
            <code>{`if (!condition) return null;`}</code>
          </div>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>가장 명시적:</strong> "렌더링하지 않겠다"는 의도가 명확
            </li>
            <li>
              <strong>컨벤션:</strong> React 커뮤니티에서 표준
            </li>
            <li>
              <strong>가독성:</strong> 코드 리뷰 시 이해하기 쉬움
            </li>
          </ul>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff3cd",
            borderRadius: "8px",
            border: "2px solid #ffc107",
          }}
        >
          <h3 style={{ marginTop: 0 }}>⚠️ undefined (가능하지만 덜 권장)</h3>
          <div
            style={{
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          >
            <code>{`if (!condition) return;`}</code>
          </div>
          <ul style={{ marginBottom: 0 }}>
            <li>동작은 하지만 암묵적</li>
            <li>return 뒤에 아무것도 없으면 undefined 반환</li>
            <li>null이 더 명확함</li>
          </ul>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "#f8d7da",
            borderRadius: "8px",
            border: "2px solid #dc3545",
          }}
        >
          <h3 style={{ marginTop: 0 }}>❌ false (혼란스러움)</h3>
          <div
            style={{
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          >
            <code>{`if (!condition) return false;`}</code>
          </div>
          <ul style={{ marginBottom: 0 }}>
            <li>동작은 하지만 혼란스러움</li>
            <li>boolean을 반환하는 것처럼 보임</li>
            <li>null이 더 적절</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "#e7f3ff",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>💡 결론</h3>
        <p
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}
        >
          렌더링하지 않을 때는 항상{" "}
          <code style={{ color: "#28a745" }}>null</code>을 반환하자!
        </p>
        <ul style={{ marginBottom: 0 }}>
          <li>가장 명시적이고 명확함</li>
          <li>React 커뮤니티 표준</li>
          <li>코드 리뷰 시 이해하기 쉬움</li>
        </ul>
      </div>
    </div>
  );
}

const example3Code = `// ✅ 권장: null 사용
function Component({ condition }) {
  if (!condition) return null;
  return <div>Content</div>;
}

// ⚠️ 가능하지만 덜 권장: undefined
function Component({ condition }) {
  if (!condition) return;  // undefined 반환
  return <div>Content</div>;
}

// ❌ 피하기: false (혼란스러움)
function Component({ condition }) {
  if (!condition) return false;
  return <div>Content</div>;
}

// 결론: 항상 null을 사용하자!`;

function UndefinedNullFalse() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-5-3. undefined vs null vs false</h2>

      <TabViewer
        title="예제 1: 렌더링 결과 비교"
        description="각 값이 React에서 어떻게 렌더링되는지"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 실제 사용 예시"
        description="버튼으로 각 값을 테스트"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 권장 사항"
        description="null 사용이 가장 권장됨"
        resultContent={<Example3 />}
        codeString={example3Code}
      />
    </div>
  );
}

export default UndefinedNullFalse;
