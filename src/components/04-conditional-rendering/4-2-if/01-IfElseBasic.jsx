// src/components/04-conditional-rendering/4-2-if/01-IfElseBasic.jsx
import { useState } from "react";
import TabViewer from "../../common/TabViewer";

// 예제 1: 기본 if-else
function WelcomeMessage({ isLoggedIn }) {
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
        <p>오늘도 좋은 하루 되세요</p>
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
        <h1>로그인이 필요합니다</h1>
        <p>서비스를 이용하려면 로그인해주세요</p>
        <button style={{ padding: "8px 16px", marginTop: "10px" }}>
          로그인하기
        </button>
      </div>
    );
  }
}

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

      <WelcomeMessage isLoggedIn={isLoggedIn} />
    </div>
  );
}

const example1Code = `function WelcomeMessage({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <div className="welcome">
        <h1>환영합니다! 👋</h1>
        <p>오늘도 좋은 하루 되세요</p>
      </div>
    );
  } else {
    return (
      <div className="login-prompt">
        <h1>로그인이 필요합니다</h1>
        <p>서비스를 이용하려면 로그인해주세요</p>
        <button>로그인하기</button>
      </div>
    );
  }
}`;

// 예제 2: else 생략 (Early Return)
function LoginButton({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        로그아웃
      </button>
    );
  }

  return (
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      로그인
    </button>
  );
}

function Example2() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
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

      <div>
        <LoginButton isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
}

const example2Code = `function LoginButton({ isLoggedIn }) {
  if (isLoggedIn) {
    return <button className="logout">로그아웃</button>;
  }
  
  // else 불필요 (if에서 return하면 함수 종료)
  return <button className="login">로그인</button>;
}

// 이 방법이 더 간결하고 실무에서 많이 사용됨`;

// 예제 3: 여러 요소를 포함한 JSX
function UserDashboard({ user }) {
  if (user) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          border: "1px solid #dee2e6",
        }}
      >
        <h1>{user.name}님의 대시보드</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              padding: "15px",
              backgroundColor: "white",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            <h3>포인트</h3>
            <p
              style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}
            >
              {user.points}P
            </p>
          </div>
          <div
            style={{
              padding: "15px",
              backgroundColor: "white",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            <h3>등급</h3>
            <p
              style={{ fontSize: "24px", fontWeight: "bold", color: "#ffc107" }}
            >
              {user.grade}
            </p>
          </div>
          <div
            style={{
              padding: "15px",
              backgroundColor: "white",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            <h3>방문횟수</h3>
            <p
              style={{ fontSize: "24px", fontWeight: "bold", color: "#28a745" }}
            >
              {user.visits}회
            </p>
          </div>
        </div>
        <button style={{ marginTop: "20px", padding: "10px 20px" }}>
          프로필 수정
        </button>
      </div>
    );
  } else {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor: "#f8d7da",
          borderRadius: "8px",
          border: "1px solid #f5c6cb",
        }}
      >
        <h2>사용자 정보를 불러올 수 없습니다</h2>
        <p>잠시 후 다시 시도해주세요</p>
        <button style={{ padding: "10px 20px", marginTop: "10px" }}>
          새로고침
        </button>
      </div>
    );
  }
}

function Example3() {
  const [user, setUser] = useState({
    name: "홍길동",
    points: 1500,
    grade: "VIP",
    visits: 42,
  });

  return (
    <div>
      <button
        onClick={() =>
          setUser(
            user
              ? null
              : { name: "홍길동", points: 1500, grade: "VIP", visits: 42 }
          )
        }
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
        {user ? "사용자 제거" : "사용자 추가"}
      </button>

      <UserDashboard user={user} />
    </div>
  );
}

const example3Code = `function UserDashboard({ user }) {
  if (user) {
    return (
      <div className="dashboard">
        <h1>{user.name}님의 대시보드</h1>
        <div className="stats">
          <div className="stat-card">
            <h3>포인트</h3>
            <p>{user.points}P</p>
          </div>
          <div className="stat-card">
            <h3>등급</h3>
            <p>{user.grade}</p>
          </div>
          <div className="stat-card">
            <h3>방문횟수</h3>
            <p>{user.visits}회</p>
          </div>
        </div>
        <button>프로필 수정</button>
      </div>
    );
  } else {
    return (
      <div className="no-user">
        <h2>사용자 정보를 불러올 수 없습니다</h2>
        <p>잠시 후 다시 시도해주세요</p>
        <button>새로고침</button>
      </div>
    );
  }
}`;

// 예제 4: 버튼 텍스트만 변경 (변수 활용)
function SubmitButton({ isSubmitting }) {
  let buttonText;

  if (isSubmitting) {
    buttonText = "전송 중...";
  } else {
    buttonText = "전송하기";
  }

  return (
    <button
      disabled={isSubmitting}
      style={{
        padding: "10px 20px",
        backgroundColor: isSubmitting ? "#6c757d" : "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: isSubmitting ? "not-allowed" : "pointer",
        fontSize: "16px",
      }}
    >
      {buttonText}
    </button>
  );
}

function Example4() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsSubmitting(!isSubmitting)}
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
        {isSubmitting ? "전송 취소" : "전송 시작"}
      </button>

      <div>
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
    </div>
  );
}

const example4Code = `function SubmitButton({ isSubmitting }) {
  // 변수에 할당
  let buttonText;
  let buttonClass;
  
  if (isSubmitting) {
    buttonText = '전송 중...';
    buttonClass = 'btn-loading';
  } else {
    buttonText = '전송하기';
    buttonClass = 'btn-primary';
  }
  
  return (
    <button 
      className={buttonClass}
      disabled={isSubmitting}
    >
      {buttonText}
    </button>
  );
}`;

function IfElseBasic() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-2-1. if-else 기본</h2>

      <TabViewer
        title="예제 1: 기본 if-else"
        description="조건에 따라 완전히 다른 JSX 반환"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: else 생략 (Early Return)"
        description="if에서 return하면 else 불필요"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 여러 요소를 포함한 JSX"
        description="복잡한 구조도 if-else로 처리"
        resultContent={<Example3 />}
        codeString={example3Code}
      />

      <TabViewer
        title="예제 4: 버튼 텍스트만 변경"
        description="if-else로 변수에 값 할당"
        resultContent={<Example4 />}
        codeString={example4Code}
      />
    </div>
  );
}

export default IfElseBasic;
