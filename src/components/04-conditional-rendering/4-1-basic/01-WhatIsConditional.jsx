// src/components/04-conditional-rendering/4-1-basic/01-WhatIsConditional.jsx
import { useState } from "react";
import TabViewer from "../../common/TabViewer";

// 예제 1: 조건부 렌더링 없이
function Example1() {
  return (
    <div>
      <h1>환영합니다!</h1>
      <p>항상 같은 메시지만 표시됩니다</p>
    </div>
  );
}

const example1Code = `function Greeting() {
  return (
    <div>
      <h1>환영합니다!</h1>
      <p>항상 같은 메시지만 표시됩니다</p>
    </div>
  );
}`;

// 예제 2: 조건부 렌더링 사용
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
            padding: "15px",
            backgroundColor: "#d4edda",
            borderRadius: "4px",
            border: "1px solid #c3e6cb",
          }}
        >
          <h1>환영합니다! 👋</h1>
          <p>로그인 상태입니다</p>
        </div>
      ) : (
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8d7da",
            borderRadius: "4px",
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

const example2Code = `function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>

      {isLoggedIn ? (
        <div>
          <h1>환영합니다! 👋</h1>
          <p>로그인 상태입니다</p>
        </div>
      ) : (
        <div>
          <h1>로그인해주세요 🔒</h1>
          <p>서비스를 이용하려면 로그인이 필요합니다</p>
        </div>
      )}
    </div>
  );
}`;

// 예제 3: 사용자 정보 표시
function Example3() {
  const [user, setUser] = useState({
    name: "홍길동",
    email: "hong@example.com",
  });

  return (
    <div>
      <button
        onClick={() =>
          setUser(user ? null : { name: "홍길동", email: "hong@example.com" })
        }
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
        {user ? "사용자 제거" : "사용자 추가"}
      </button>

      {user ? (
        <div
          style={{
            padding: "15px",
            backgroundColor: "#d4edda",
            borderRadius: "4px",
            border: "1px solid #c3e6cb",
          }}
        >
          <h2>사용자 정보</h2>
          <p>
            <strong>이름:</strong> {user.name}
          </p>
          <p>
            <strong>이메일:</strong> {user.email}
          </p>
        </div>
      ) : (
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8d7da",
            borderRadius: "4px",
            border: "1px solid #f5c6cb",
          }}
        >
          <p>사용자 정보가 없습니다</p>
        </div>
      )}
    </div>
  );
}

const example3Code = `function UserInfo() {
  const [user, setUser] = useState({ 
    name: '홍길동', 
    email: 'hong@example.com' 
  });

  return (
    <div>
      {user ? (
        <div>
          <h2>사용자 정보</h2>
          <p>이름: {user.name}</p>
          <p>이메일: {user.email}</p>
        </div>
      ) : (
        <div>
          <p>사용자 정보가 없습니다</p>
        </div>
      )}
    </div>
  );
}`;

// 예제 4: 알림 배지
function Example4() {
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
            {count > 99 ? "99+" : count}
          </span>
        )}
      </div>

      <p style={{ marginTop: "15px" }}>
        {count > 0 ? `${count}개의 새 알림이 있습니다` : "새 알림이 없습니다"}
      </p>
    </div>
  );
}

const example4Code = `function NotificationBell() {
  const [count, setCount] = useState(5);

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <span>🔔</span>
        {count > 0 && (
          <span className="badge">
            {count > 99 ? '99+' : count}
          </span>
        )}
      </div>
      <p>
        {count > 0 
          ? \`\${count}개의 새 알림\` 
          : '새 알림이 없습니다'}
      </p>
    </div>
  );
}`;

// 예제 5: 재고 상태
function Example5() {
  const [stock, setStock] = useState(10);

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
          onClick={() => setStock(10)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          재고 충분 (10개)
        </button>
        <button
          onClick={() => setStock(3)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ffc107",
            color: "black",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          재고 적음 (3개)
        </button>
        <button
          onClick={() => setStock(0)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          품절 (0개)
        </button>
      </div>

      <div
        style={{
          padding: "20px",
          border: "2px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h3>무선 이어폰</h3>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>89,000원</p>

        <p
          style={{
            color: stock === 0 ? "#dc3545" : stock < 5 ? "#ffc107" : "#28a745",
            fontWeight: "bold",
          }}
        >
          {stock === 0
            ? "품절"
            : stock < 5
            ? `⚠️ 재고 ${stock}개 남음`
            : `재고 ${stock}개`}
        </p>

        <button
          disabled={stock === 0}
          style={{
            padding: "10px 20px",
            backgroundColor: stock === 0 ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: stock === 0 ? "not-allowed" : "pointer",
            fontSize: "16px",
          }}
        >
          {stock === 0 ? "품절" : "구매하기"}
        </button>
      </div>
    </div>
  );
}

const example5Code = `function ProductCard({ stock }) {
  return (
    <div>
      <h3>무선 이어폰</h3>
      <p>89,000원</p>
      
      <p style={{
        color: stock === 0 ? 'red' : stock < 5 ? 'orange' : 'green'
      }}>
        {stock === 0 
          ? '품절' 
          : stock < 5 
            ? \`재고 \${stock}개 남음\` 
            : \`재고 \${stock}개\`}
      </p>

      <button disabled={stock === 0}>
        {stock === 0 ? '품절' : '구매하기'}
      </button>
    </div>
  );
}`;

// 메인 컴포넌트
function WhatIsConditional() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-1-1. 조건부 렌더링이란?</h2>

      <TabViewer
        title="예제 1: 조건부 렌더링 없이"
        description="조건 없이 항상 같은 내용을 표시하는 컴포넌트"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 조건부 렌더링 사용"
        description="로그인 상태에 따라 다른 메시지를 표시"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 사용자 정보 표시"
        description="사용자 데이터 유무에 따라 다른 UI"
        resultContent={<Example3 />}
        codeString={example3Code}
      />

      <TabViewer
        title="예제 4: 알림 배지"
        description="알림 개수가 0보다 클 때만 배지 표시"
        resultContent={<Example4 />}
        codeString={example4Code}
      />

      <TabViewer
        title="예제 5: 재고 상태"
        description="재고 수량에 따라 다른 메시지와 버튼 상태"
        resultContent={<Example5 />}
        codeString={example5Code}
      />
    </div>
  );
}

export default WhatIsConditional;
