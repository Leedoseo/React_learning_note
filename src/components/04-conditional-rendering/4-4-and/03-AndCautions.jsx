// src/components/04-conditional-rendering/4-4-and/03-AndCautions.jsx
import { useState } from "react";
import TabViewer from "../../common/TabViewer";

// 예제 1: 숫자 0 문제
function Example1() {
  const [count, setCount] = useState(0);

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
        <button onClick={() => setCount(0)} style={{ padding: "8px 16px" }}>
          0개
        </button>
        <button onClick={() => setCount(5)} style={{ padding: "8px 16px" }}>
          5개
        </button>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <h3>❌ 잘못된 방법</h3>
        <div
          style={{
            display: "inline-block",
            position: "relative",
            padding: "20px",
            backgroundColor: "#f8d7da",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <span style={{ fontSize: "48px" }}>🔔</span>
          {count && (
            <span
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "#dc3545",
                color: "white",
                borderRadius: "12px",
                padding: "4px 10px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              {count}
            </span>
          )}
          <p style={{ marginTop: "10px", color: "#721c24" }}>
            {count && `배지가 표시됨`}
            {!count && `count가 0이면 "0"이 화면에 표시됨!`}
          </p>
        </div>

        <h3>✅ 올바른 방법</h3>
        <div
          style={{
            display: "inline-block",
            position: "relative",
            padding: "20px",
            backgroundColor: "#d4edda",
            borderRadius: "8px",
          }}
        >
          <span style={{ fontSize: "48px" }}>🔔</span>
          {count > 0 && (
            <span
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "#dc3545",
                color: "white",
                borderRadius: "12px",
                padding: "4px 10px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              {count}
            </span>
          )}
          <p style={{ marginTop: "10px", color: "#155724" }}>
            {count > 0 ? `배지가 표시됨 (${count}개)` : "배지가 안 보임"}
          </p>
        </div>
      </div>
    </div>
  );
}

const example1Code = `function NotificationBell({ count }) {
  return (
    <div>
      <span>🔔</span>

      {/* ❌ 잘못된 방법: count가 0이면 "0"이 표시됨 */}
      {count && (
        <span className="badge">{count}</span>
      )}

      {/* ✅ 올바른 방법 1: 명확한 비교 */}
      {count > 0 && (
        <span className="badge">{count}</span>
      )}

      {/* ✅ 올바른 방법 2: !! 사용 */}
      {!!count && (
        <span className="badge">{count}</span>
      )}

      {/* ✅ 올바른 방법 3: Boolean() */}
      {Boolean(count) && (
        <span className="badge">{count}</span>
      )}
    </div>
  );
}`;

// 예제 2: 배열 길이 체크
function Example2() {
  const [items, setItems] = useState([]);

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
        <button onClick={() => setItems([])} style={{ padding: "8px 16px" }}>
          빈 배열 (0개)
        </button>
        <button
          onClick={() =>
            setItems([
              { id: 1, name: "상품1" },
              { id: 2, name: "상품2" },
            ])
          }
          style={{ padding: "8px 16px" }}
        >
          2개
        </button>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <h3>❌ 잘못된 방법</h3>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8d7da",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          {items.length && (
            <ul>
              {items.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
          <p style={{ color: "#721c24" }}>
            {items.length === 0 && '배열이 비어있으면 "0"이 표시됨!'}
          </p>
        </div>

        <h3>✅ 올바른 방법</h3>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#d4edda",
            borderRadius: "8px",
          }}
        >
          {items.length > 0 && (
            <ul>
              {items.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
          <p style={{ color: "#155724" }}>
            {items.length === 0 && "아무것도 표시 안 됨 (정상)"}
            {items.length > 0 && "리스트 표시됨 (정상)"}
          </p>
        </div>
      </div>
    </div>
  );
}

const example2Code = `function ItemList({ items }) {
  return (
    <div>
      {/* ❌ 잘못된 방법: 0이 화면에 표시됨 */}
      {items.length && (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}

      {/* ✅ 올바른 방법: 명확한 비교 */}
      {items.length > 0 && (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}

      {/* ✅ 또는: 옵셔널 체이닝 */}
      {items?.length > 0 && (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}`;

// 예제 3: 0이 유효한 값인 경우
function Example3() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px" }}>점수: {score}점</label>
        <input
          type="range"
          min="0"
          max="100"
          value={score}
          onChange={(e) => setScore(parseInt(e.target.value))}
          style={{ width: "300px" }}
        />
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <h3>❌ 잘못된 방법 (0점이 안 보임)</h3>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8d7da",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          {score && (
            <div>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                점수: {score}점
              </p>
            </div>
          )}
          {!score && (
            <p style={{ color: "#721c24" }}>
              0점일 때 아무것도 안 보임 (문제!)
            </p>
          )}
        </div>

        <h3>✅ 올바른 방법 (0점도 표시)</h3>
        <div
          style={{
            padding: "15px",
            backgroundColor: "#d4edda",
            borderRadius: "8px",
          }}
        >
          {typeof score === "number" && (
            <div>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                점수: {score}점
              </p>
              <p style={{ color: "#155724" }}>0점도 정상적으로 표시됨!</p>
            </div>
          )}

          {/* 또는 null/undefined만 체크 */}
          {score !== null && score !== undefined && (
            <p style={{ marginTop: "10px" }}>
              null이나 undefined가 아니면 표시
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const example3Code = `function ScoreDisplay({ score }) {
  // ❌ 잘못된 방법: 0점이 안 보임
  return (
    <div>
      {score && <p>점수: {score}점</p>}
    </div>
  );

  // ✅ 올바른 방법 1: typeof 체크
  return (
    <div>
      {typeof score === 'number' && (
        <p>점수: {score}점</p>
      )}
    </div>
  );

  // ✅ 올바른 방법 2: null/undefined만 체크
  return (
    <div>
      {score !== null && score !== undefined && (
        <p>점수: {score}점</p>
      )}
    </div>
  );

  // 0도 유효한 값이므로 표시해야 함!
}`;

// 예제 4: 해결 방법 정리
function Example4() {
  const [value, setValue] = useState(0);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
      }}
    >
      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px" }}>값: {value}</label>
        <input
          type="range"
          min="0"
          max="10"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          style={{ width: "300px" }}
        />
      </div>

      <div style={{ display: "grid", gap: "15px" }}>
        <div
          style={{
            padding: "15px",
            backgroundColor: "white",
            borderRadius: "8px",
            border: "2px solid #dc3545",
          }}
        >
          <h4>❌ 문제 발생</h4>
          <code
            style={{
              display: "block",
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#f8f9fa",
            }}
          >
            {`{value && <Badge />}`}
          </code>
          <p>
            결과:{" "}
            {value && (
              <span
                style={{
                  padding: "4px 8px",
                  backgroundColor: "#007bff",
                  color: "white",
                  borderRadius: "4px",
                }}
              >
                배지
              </span>
            )}
          </p>
          <p style={{ color: "#dc3545", fontSize: "14px" }}>
            value가 0이면 화면에 "0" 표시됨
          </p>
        </div>

        <div
          style={{
            padding: "15px",
            backgroundColor: "white",
            borderRadius: "8px",
            border: "2px solid #28a745",
          }}
        >
          <h4>✅ 해결 방법 1: 명확한 비교</h4>
          <code
            style={{
              display: "block",
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#f8f9fa",
            }}
          >
            {`{value > 0 && <Badge />}`}
          </code>
          <p>
            결과:{" "}
            {value > 0 && (
              <span
                style={{
                  padding: "4px 8px",
                  backgroundColor: "#007bff",
                  color: "white",
                  borderRadius: "4px",
                }}
              >
                배지
              </span>
            )}
          </p>
          <p style={{ color: "#28a745", fontSize: "14px" }}>
            가장 명확하고 권장하는 방법!
          </p>
        </div>

        <div
          style={{
            padding: "15px",
            backgroundColor: "white",
            borderRadius: "8px",
            border: "2px solid #28a745",
          }}
        >
          <h4>✅ 해결 방법 2: !!</h4>
          <code
            style={{
              display: "block",
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#f8f9fa",
            }}
          >
            {`{!!value && <Badge />}`}
          </code>
          <p>
            결과:{" "}
            {!!value && (
              <span
                style={{
                  padding: "4px 8px",
                  backgroundColor: "#007bff",
                  color: "white",
                  borderRadius: "4px",
                }}
              >
                배지
              </span>
            )}
          </p>
          <p style={{ color: "#28a745", fontSize: "14px" }}>
            짧지만 의도가 덜 명확함
          </p>
        </div>

        <div
          style={{
            padding: "15px",
            backgroundColor: "white",
            borderRadius: "8px",
            border: "2px solid #ffc107",
          }}
        >
          <h4>⚠️ 해결 방법 3: 삼항 연산자</h4>
          <code
            style={{
              display: "block",
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#f8f9fa",
            }}
          >
            {`{value > 0 ? <Badge /> : null}`}
          </code>
          <p>
            결과:{" "}
            {value > 0 ? (
              <span
                style={{
                  padding: "4px 8px",
                  backgroundColor: "#007bff",
                  color: "white",
                  borderRadius: "4px",
                }}
              >
                배지
              </span>
            ) : null}
          </p>
          <p style={{ color: "#856404", fontSize: "14px" }}>
            완전히 안전하지만 더 김
          </p>
        </div>
      </div>
    </div>
  );
}

const example4Code = `// 문제 상황
{count && <Badge />}  // count가 0이면 "0" 표시

// ✅ 해결 방법 1: 명확한 비교 (권장!)
{count > 0 && <Badge />}

// ✅ 해결 방법 2: !! 사용
{!!count && <Badge />}

// ✅ 해결 방법 3: Boolean()
{Boolean(count) && <Badge />}

// ✅ 해결 방법 4: 삼항 연산자
{count > 0 ? <Badge /> : null}

// 권장 순서:
// 1. 명확한 비교 (count > 0)
// 2. 삼항 연산자 (복잡한 경우)
// 3. !! (간단한 경우)`;

function AndCautions() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-4-3. && 연산자 주의사항</h2>

      <TabViewer
        title="예제 1: 숫자 0 문제"
        description="count가 0이면 화면에 0이 표시됨"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 배열 길이 체크"
        description="배열이 비어있으면 0이 표시됨"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 0이 유효한 값인 경우"
        description="점수가 0점도 표시해야 할 때"
        resultContent={<Example3 />}
        codeString={example3Code}
      />

      <TabViewer
        title="예제 4: 해결 방법 정리"
        description="falsy 값 문제를 해결하는 여러 방법"
        resultContent={<Example4 />}
        codeString={example4Code}
      />
    </div>
  );
}

export default AndCautions;
