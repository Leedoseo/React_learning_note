// src/components/04-conditional-rendering/4-3-ternary/01-TernaryBasic.jsx
import { useState } from "react";
import TabViewer from "../../common/TabViewer";

// 예제 1: 기본 삼항 연산자
function Example1() {
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

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        {isLoggedIn ? (
          <div
            style={{
              padding: "15px",
              backgroundColor: "#d4edda",
              borderRadius: "4px",
            }}
          >
            <h2>환영합니다! 👋</h2>
            <p>로그인 상태입니다</p>
          </div>
        ) : (
          <div
            style={{
              padding: "15px",
              backgroundColor: "#f8d7da",
              borderRadius: "4px",
            }}
          >
            <h2>로그인이 필요합니다 🔒</h2>
            <p>서비스를 이용하려면 로그인해주세요</p>
          </div>
        )}
      </div>
    </div>
  );
}

const example1Code = `function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h2>환영합니다! 👋</h2>
      ) : (
        <h2>로그인이 필요합니다 🔒</h2>
      )}
    </div>
  );
}`;

// 예제 2: 간단한 텍스트 변경
function Example2() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsLoading(!isLoading)}
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
        <button
          disabled={isLoading}
          style={{
            padding: "10px 20px",
            backgroundColor: isLoading ? "#6c757d" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "로딩 중..." : "전송하기"}
        </button>
      </div>
    </div>
  );
}

const example2Code = `function Button({ isLoading }) {
  return (
    <button disabled={isLoading}>
      {isLoading ? "로딩 중..." : "전송하기"}
    </button>
  );
}`;

// 예제 3: 여러 조건
function Example3() {
  const [userType, setUserType] = useState("admin");

  return (
    <div>
      <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
        <button
          onClick={() => setUserType("admin")}
          style={{
            padding: "8px 16px",
            backgroundColor: userType === "admin" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          관리자
        </button>
        <button
          onClick={() => setUserType("user")}
          style={{
            padding: "8px 16px",
            backgroundColor: userType === "user" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          일반 사용자
        </button>
        <button
          onClick={() => setUserType("guest")}
          style={{
            padding: "8px 16px",
            backgroundColor: userType === "guest" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          게스트
        </button>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <p>
          {userType === "admin"
            ? "관리자 권한으로 모든 기능을 사용할 수 있습니다"
            : userType === "user"
            ? "일반 사용자 권한으로 기본 기능을 사용할 수 있습니다"
            : "게스트 권한으로 제한된 기능만 사용할 수 있습니다"}
        </p>
      </div>
    </div>
  );
}

const example3Code = `function Message({ userType }) {
  return (
    <p>
      {userType === "admin"
        ? "관리자 권한"
        : userType === "user"
        ? "일반 사용자 권한"
        : "게스트 권한"}
    </p>
  );
}`;

function TernaryBasic() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-3-1. 삼항 연산자 기본</h2>

      <TabViewer
        title="예제 1: 기본 삼항 연산자"
        description="조건에 따라 다른 JSX 반환"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 간단한 텍스트 변경"
        description="버튼 텍스트나 간단한 내용 변경"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 여러 조건 (중첩 삼항)"
        description="여러 조건을 삼항 연산자로 체크"
        resultContent={<Example3 />}
        codeString={example3Code}
      />
    </div>
  );
}

export default TernaryBasic;
