// src/components/04-conditional-rendering/4-1-basic/03-MethodsOverview.jsx
import { useState } from "react";
import TabViewer from "../../common/TabViewer";

// 예제 1: if문 방법
function Example1() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const renderContent = () => {
    if (isLoggedIn) {
      return (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#d4edda",
            borderRadius: "8px",
            border: "1px solid #c3e6cb",
          }}
        >
          <h1>환영합니다! 👋</h1>
          <p>로그인 상태입니다</p>
        </div>
      );
    } else {
      return (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f8d7da",
            borderRadius: "8px",
            border: "1px solid #f5c6cb",
          }}
        >
          <h1>로그인해주세요 🔒</h1>
          <p>서비스를 이용하려면 로그인이 필요합니다</p>
        </div>
      );
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{
          padding: "8px 16px",
          marginBottom: "15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>

      {renderContent()}
    </div>
  );
}

const example1Code = `// if문 사용
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>환영합니다!</h1>;
  } else {
    return <h1>로그인해주세요</h1>;
  }
}

// 또는 함수로
function Greeting({ isLoggedIn }) {
  const renderContent = () => {
    if (isLoggedIn) {
      return <h1>환영합니다!</h1>;
    } else {
      return <h1>로그인해주세요</h1>;
    }
  };
  
  return <div>{renderContent()}</div>;
}`;

// 예제 2: 삼항 연산자
function Example2() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{
          padding: "8px 16px",
          marginBottom: "15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>

      {isLoggedIn ? (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#d4edda",
            borderRadius: "8px",
            border: "1px solid #c3e6cb",
          }}
        >
          <h1>환영합니다! 👋</h1>
          <p>로그인 상태입니다</p>
        </div>
      ) : (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f8d7da",
            borderRadius: "8px",
            border: "1px solid #f5c6cb",
          }}
        >
          <h1>로그인해주세요 🔒</h1>
          <p>서비스를 이용하려면 로그인이 필요합니다</p>
        </div>
      )}
    </div>
  );
}

const example2Code = `// 삼항 연산자 사용
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>환영합니다!</h1>
      ) : (
        <h1>로그인해주세요</h1>
      )}
    </div>
  );
}

// 간단한 텍스트는 인라인으로
function Button({ isLoading }) {
  return (
    <button>
      {isLoading ? '로딩 중...' : '전송'}
    </button>
  );
}`;

// 예제 3: && 연산자
function Example3() {
  const [count, setCount] = useState(5);

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
          onClick={() => setCount(count + 1)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          알림 +1
        </button>
        <button
          onClick={() => setCount(Math.max(0, count - 1))}
          style={{
            padding: "8px 16px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          알림 -1
        </button>
        <button
          onClick={() => setCount(0)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          모두 읽음
        </button>
      </div>

      <div style={{ position: "relative", display: "inline-block" }}>
        <span style={{ fontSize: "40px" }}>🔔</span>
        {count > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-10px",
              backgroundColor: "#dc3545",
              color: "white",
              borderRadius: "10px",
              padding: "2px 8px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {count}
          </span>
        )}
      </div>

      <p style={{ marginTop: "15px" }}>
        {count > 0 ? `${count}개의 새 알림이 있습니다` : "새 알림이 없습니다"}
      </p>
    </div>
  );
}

const example3Code = `// && 연산자 사용 (보여주거나/안 보여주거나)
function NotificationBell({ count }) {
  return (
    <div>
      <span>🔔</span>
      
      {/* count가 0보다 크면 배지 표시 */}
      {count > 0 && (
        <span className="badge">{count}</span>
      )}
    </div>
  );
}

// 여러 조건
function Profile({ user }) {
  return (
    <div>
      {user.isVIP && <span>⭐ VIP</span>}
      {user.isVerified && <span>✓ 인증됨</span>}
      {user.isOnline && <span>🟢 온라인</span>}
    </div>
  );
}`;

// 예제 4: null 반환
function AdminPanel({ isAdmin }) {
  if (!isAdmin) return null;

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#d1ecf1",
        borderRadius: "8px",
        border: "1px solid #bee5eb",
      }}
    >
      <h2>🔧 관리자 패널</h2>
      <button style={{ marginRight: "10px" }}>사용자 관리</button>
      <button>설정</button>
    </div>
  );
}

function Example4() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsAdmin(!isAdmin)}
        style={{
          padding: "8px 16px",
          marginBottom: "15px",
          backgroundColor: isAdmin ? "#dc3545" : "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {isAdmin ? "관리자 해제" : "관리자 권한 부여"}
      </button>

      <AdminPanel isAdmin={isAdmin} />

      {!isAdmin && (
        <p style={{ color: "#6c757d" }}>
          관리자 패널은 관리자만 볼 수 있습니다
        </p>
      )}
    </div>
  );
}

const example4Code = `// null 반환 (아예 렌더링 안 함)
function AdminPanel({ user }) {
  // 관리자가 아니면 null 반환
  if (!user || !user.isAdmin) return null;
  
  return (
    <div className="admin-panel">
      <h2>관리자 패널</h2>
      <button>사용자 관리</button>
      <button>설정</button>
    </div>
  );
}

// Early Return 패턴
function Component({ user }) {
  if (!user) return null;
  if (!user.isActive) return null;
  
  return <Content />;
}`;

// 예제 5: 방법 비교
function Example5() {
  const [method, setMethod] = useState("if");
  const [isActive, setIsActive] = useState(true);

  const renderByIf = () => {
    if (isActive) {
      return (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#d4edda",
            borderRadius: "4px",
          }}
        >
          활성 상태
        </div>
      );
    } else {
      return (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#f8d7da",
            borderRadius: "4px",
          }}
        >
          비활성 상태
        </div>
      );
    }
  };

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
          onClick={() => setMethod("if")}
          style={{
            padding: "8px 16px",
            backgroundColor: method === "if" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          if문
        </button>
        <button
          onClick={() => setMethod("ternary")}
          style={{
            padding: "8px 16px",
            backgroundColor: method === "ternary" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          삼항 연산자
        </button>
        <button
          onClick={() => setMethod("and")}
          style={{
            padding: "8px 16px",
            backgroundColor: method === "and" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          && 연산자
        </button>
      </div>

      <button
        onClick={() => setIsActive(!isActive)}
        style={{
          padding: "8px 16px",
          marginBottom: "15px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        상태 토글
      </button>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <h3>선택한 방법: {method}</h3>

        {method === "if" && renderByIf()}

        {method === "ternary" &&
          (isActive ? (
            <div
              style={{
                padding: "10px",
                backgroundColor: "#d4edda",
                borderRadius: "4px",
              }}
            >
              활성 상태
            </div>
          ) : (
            <div
              style={{
                padding: "10px",
                backgroundColor: "#f8d7da",
                borderRadius: "4px",
              }}
            >
              비활성 상태
            </div>
          ))}

        {method === "and" && (
          <>
            {isActive && (
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "#d4edda",
                  borderRadius: "4px",
                  marginBottom: "10px",
                }}
              >
                활성 상태
              </div>
            )}
            {!isActive && (
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "#f8d7da",
                  borderRadius: "4px",
                }}
              >
                비활성 상태
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const example5Code = `// 방법 1: if문
function Component({ isActive }) {
  if (isActive) {
    return <div>활성</div>;
  } else {
    return <div>비활성</div>;
  }
}

// 방법 2: 삼항 연산자
function Component({ isActive }) {
  return (
    <div>
      {isActive ? <div>활성</div> : <div>비활성</div>}
    </div>
  );
}

// 방법 3: && 연산자
function Component({ isActive }) {
  return (
    <div>
      {isActive && <div>활성</div>}
      {!isActive && <div>비활성</div>}
    </div>
  );
}

// 선택 기준:
// - if문: 복잡한 조건, Early return
// - 삼항: JSX 안에서, 두 가지 선택
// - &&: 보여주기/숨기기`;

function MethodsOverview() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-1-3. 조건부 렌더링 방법 개요</h2>

      <TabViewer
        title="예제 1: if문 방법"
        description="가장 명확하고 읽기 쉬운 방법"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 삼항 연산자 (? :)"
        description="JSX 안에서 사용 가능, 간결함"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: && 연산자"
        description="보여주거나/안 보여주거나에 최적"
        resultContent={<Example3 />}
        codeString={example3Code}
      />

      <TabViewer
        title="예제 4: null 반환"
        description="아예 렌더링하지 않음"
        resultContent={<Example4 />}
        codeString={example4Code}
      />

      <TabViewer
        title="예제 5: 방법 비교"
        description="같은 기능을 다른 방법으로 구현"
        resultContent={<Example5 />}
        codeString={example5Code}
      />
    </div>
  );
}

export default MethodsOverview;
