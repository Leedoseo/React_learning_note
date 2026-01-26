// src/components/04-conditional-rendering/4-3-ternary/04-TernaryNesting.jsx
import { useState } from "react";
import TabViewer from "../../common/TabViewer";

// 예제 1: 2단계 중첩 (허용)
function Example1() {
  const [userType, setUserType] = useState("guest");

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
          손님
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
          onClick={() => setUserType("premium")}
          style={{
            padding: "8px 16px",
            backgroundColor: userType === "premium" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          프리미엄
        </button>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <h2>대시보드</h2>

        {userType === "guest" ? (
          <div
            style={{
              padding: "20px",
              backgroundColor: "#f8d7da",
              borderRadius: "8px",
              border: "1px solid #f5c6cb",
            }}
          >
            <p>🔒 로그인이 필요합니다</p>
            <button style={{ padding: "8px 16px", marginTop: "10px" }}>
              로그인하기
            </button>
          </div>
        ) : userType === "premium" ? (
          <div
            style={{
              padding: "20px",
              backgroundColor: "#fff3cd",
              borderRadius: "8px",
              border: "1px solid #ffeaa7",
            }}
          >
            <p>⭐ 프리미엄 회원 전용 대시보드</p>
            <button style={{ padding: "8px 16px", marginTop: "10px" }}>
              고급 분석 보기
            </button>
          </div>
        ) : (
          <div
            style={{
              padding: "20px",
              backgroundColor: "#d4edda",
              borderRadius: "8px",
              border: "1px solid #c3e6cb",
            }}
          >
            <p>👤 일반 회원 대시보드</p>
            <button style={{ padding: "8px 16px", marginTop: "10px" }}>
              기본 정보 보기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const example1Code = `function Dashboard({ userType }) {
  return (
    <div>
      <h2>대시보드</h2>

      {userType === 'guest' ? (
        <div className="guest">
          <p>🔒 로그인이 필요합니다</p>
          <button>로그인하기</button>
        </div>
      ) : userType === 'premium' ? (
        <div className="premium">
          <p>⭐ 프리미엄 회원 전용 대시보드</p>
          <button>고급 분석 보기</button>
        </div>
      ) : (
        <div className="regular">
          <p>👤 일반 회원 대시보드</p>
          <button>기본 정보 보기</button>
        </div>
      )}
    </div>
  );
}

// 2단계까지는 읽기 괜찮음`;

// 예제 2: 등급별 배지
function Example2() {
  const [score, setScore] = useState(85);

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
          border: "3px solid",
          borderColor:
            score >= 90
              ? "#28a745"
              : score >= 80
              ? "#17a2b8"
              : score >= 70
              ? "#ffc107"
              : "#dc3545",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "10px 20px",
            fontSize: "48px",
            fontWeight: "bold",
            color:
              score >= 90
                ? "#28a745"
                : score >= 80
                ? "#17a2b8"
                : score >= 70
                ? "#ffc107"
                : "#dc3545",
            backgroundColor:
              score >= 90
                ? "#d4edda"
                : score >= 80
                ? "#d1ecf1"
                : score >= 70
                ? "#fff3cd"
                : "#f8d7da",
            borderRadius: "8px",
          }}
        >
          {score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D"}
        </span>

        <p style={{ fontSize: "18px", marginTop: "15px" }}>
          {score >= 90 ? "🥇" : score >= 80 ? "🥈" : score >= 70 ? "🥉" : "📝"}{" "}
          {score >= 90
            ? "매우 우수!"
            : score >= 80
            ? "우수함"
            : score >= 70
            ? "보통"
            : "노력 필요"}
        </p>
      </div>
    </div>
  );
}

const example2Code = `function GradeBadge({ score }) {
  return (
    <div style={{
      borderColor: 
        score >= 90 ? 'green' :
        score >= 80 ? 'blue' :
        score >= 70 ? 'orange' :
        'red'
    }}>
      <span style={{
        color: 
          score >= 90 ? 'green' :
          score >= 80 ? 'blue' :
          score >= 70 ? 'orange' :
          'red'
      }}>
        {score >= 90 ? 'A' :
         score >= 80 ? 'B' :
         score >= 70 ? 'C' :
         'D'}
      </span>

      <p>
        {score >= 90 ? '🥇 매우 우수!' :
         score >= 80 ? '🥈 우수함' :
         score >= 70 ? '🥉 보통' :
         '📝 노력 필요'}
      </p>
    </div>
  );
}

// 여러 곳에서 같은 조건 사용 시 변수로 추출 권장`;

// 예제 3: if문으로 개선
function GradeBadge({ score }) {
  const getGradeInfo = () => {
    if (score >= 90)
      return {
        grade: "A",
        color: "#28a745",
        bgColor: "#d4edda",
        icon: "🥇",
        text: "매우 우수!",
      };
    if (score >= 80)
      return {
        grade: "B",
        color: "#17a2b8",
        bgColor: "#d1ecf1",
        icon: "🥈",
        text: "우수함",
      };
    if (score >= 70)
      return {
        grade: "C",
        color: "#ffc107",
        bgColor: "#fff3cd",
        icon: "🥉",
        text: "보통",
      };
    return {
      grade: "D",
      color: "#dc3545",
      bgColor: "#f8d7da",
      icon: "📝",
      text: "노력 필요",
    };
  };

  const info = getGradeInfo();

  return (
    <div
      style={{
        padding: "20px",
        border: `3px solid ${info.color}`,
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "10px 20px",
          fontSize: "48px",
          fontWeight: "bold",
          color: info.color,
          backgroundColor: info.bgColor,
          borderRadius: "8px",
        }}
      >
        {info.grade}
      </span>

      <p style={{ fontSize: "18px", marginTop: "15px" }}>
        {info.icon} {info.text}
      </p>
    </div>
  );
}

function Example3() {
  const [score, setScore] = useState(85);

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

      <GradeBadge score={score} />

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#e7f3ff",
          borderRadius: "8px",
        }}
      >
        <h4>✅ 개선된 방법</h4>
        <p>if문으로 객체를 반환하면 훨씬 읽기 쉬움!</p>
      </div>
    </div>
  );
}

const example3Code = `// ❌ 삼항 중첩 (읽기 어려움)
function GradeBadge({ score }) {
  return (
    <div>
      <span style={{
        color: score >= 90 ? 'green' :
              score >= 80 ? 'blue' :
              score >= 70 ? 'orange' : 'red'
      }}>
        {score >= 90 ? 'A' :
         score >= 80 ? 'B' :
         score >= 70 ? 'C' : 'D'}
      </span>
    </div>
  );
}

// ✅ if문으로 개선 (읽기 쉬움)
function GradeBadge({ score }) {
  const getGradeInfo = () => {
    if (score >= 90) return { grade: 'A', color: 'green' };
    if (score >= 80) return { grade: 'B', color: 'blue' };
    if (score >= 70) return { grade: 'C', color: 'orange' };
    return { grade: 'D', color: 'red' };
  };

  const info = getGradeInfo();

  return (
    <div>
      <span style={{ color: info.color }}>
        {info.grade}
      </span>
    </div>
  );
}`;

function TernaryNesting() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-3-4. 삼항 연산자 중첩</h2>

      <TabViewer
        title="예제 1: 2단계 중첩 (허용)"
        description="3가지 선택 - 읽기 괜찮은 수준"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 등급별 배지 (여러 속성)"
        description="같은 조건을 여러 곳에서 반복"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: if문으로 개선"
        description="객체로 반환하면 훨씬 깔끔!"
        resultContent={<Example3 />}
        codeString={example3Code}
      />
    </div>
  );
}

export default TernaryNesting;
