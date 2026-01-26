// src/components/04-conditional-rendering/4-2-if/02-EarlyReturn.jsx
import { useState } from "react";
import TabViewer from "../../common/TabViewer";

// 예제 1: 기본 Early Return
function UserProfile({ user }) {
  // 1. user가 없으면 바로 return
  if (!user) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8d7da",
          borderRadius: "8px",
          border: "1px solid #f5c6cb",
          textAlign: "center",
        }}
      >
        <p>사용자 정보가 없습니다</p>
        <button style={{ padding: "8px 16px", marginTop: "10px" }}>
          로그인하기
        </button>
      </div>
    );
  }

  // 2. 정상 케이스
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#d4edda",
        borderRadius: "8px",
        border: "1px solid #c3e6cb",
      }}
    >
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>가입일: {user.joinDate}</p>
    </div>
  );
}

function Example1() {
  const [user, setUser] = useState({
    name: "홍길동",
    email: "hong@example.com",
    joinDate: "2024.01.15",
  });

  return (
    <div>
      <button
        onClick={() =>
          setUser(
            user
              ? null
              : {
                  name: "홍길동",
                  email: "hong@example.com",
                  joinDate: "2024.01.15",
                }
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

      <UserProfile user={user} />
    </div>
  );
}

const example1Code = `function UserProfile({ user }) {
  // 1. user가 없으면 바로 return
  if (!user) {
    return (
      <div className="no-user">
        <p>사용자 정보가 없습니다</p>
        <button>로그인하기</button>
      </div>
    );
  }
  
  // 2. 정상 케이스
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>가입일: {user.joinDate}</p>
    </div>
  );
}`;

// 예제 2: 여러 조건 체크
function ContentView({ user }) {
  // 1. 로그인 안 됨
  if (!user) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8d7da",
          borderRadius: "8px",
          border: "1px solid #f5c6cb",
        }}
      >
        <h2>로그인이 필요합니다</h2>
        <button style={{ padding: "8px 16px", marginTop: "10px" }}>
          로그인하기
        </button>
      </div>
    );
  }

  // 2. 이메일 미인증
  if (!user.isVerified) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#fff3cd",
          borderRadius: "8px",
          border: "1px solid #ffeaa7",
        }}
      >
        <h2>이메일 인증이 필요합니다</h2>
        <p>{user.email}로 인증 메일을 보냈습니다</p>
        <button style={{ padding: "8px 16px", marginTop: "10px" }}>
          인증 메일 재발송
        </button>
      </div>
    );
  }

  // 3. 계정 정지
  if (user.isBanned) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8d7da",
          borderRadius: "8px",
          border: "1px solid #f5c6cb",
        }}
      >
        <h2>계정이 정지되었습니다</h2>
        <p>정지 사유: {user.banReason}</p>
        <p>문의: support@example.com</p>
      </div>
    );
  }

  // 4. 정상 - 콘텐츠 표시
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#d4edda",
        borderRadius: "8px",
        border: "1px solid #c3e6cb",
      }}
    >
      <h1>환영합니다, {user.name}님!</h1>
      <div className="main-content">
        <p>모든 기능을 사용하실 수 있습니다</p>
      </div>
    </div>
  );
}

function Example2() {
  const [userState, setUserState] = useState("normal");

  const getUserData = () => {
    if (userState === "none") return null;
    if (userState === "unverified")
      return {
        name: "김철수",
        email: "kim@example.com",
        isVerified: false,
        isBanned: false,
      };
    if (userState === "banned")
      return {
        name: "이영희",
        email: "lee@example.com",
        isVerified: true,
        isBanned: true,
        banReason: "이용 약관 위반",
      };
    return {
      name: "홍길동",
      email: "hong@example.com",
      isVerified: true,
      isBanned: false,
    };
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
          onClick={() => setUserState("none")}
          style={{
            padding: "8px 16px",
            backgroundColor: userState === "none" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          비로그인
        </button>
        <button
          onClick={() => setUserState("unverified")}
          style={{
            padding: "8px 16px",
            backgroundColor: userState === "unverified" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          미인증
        </button>
        <button
          onClick={() => setUserState("banned")}
          style={{
            padding: "8px 16px",
            backgroundColor: userState === "banned" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          정지됨
        </button>
        <button
          onClick={() => setUserState("normal")}
          style={{
            padding: "8px 16px",
            backgroundColor: userState === "normal" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          정상
        </button>
      </div>

      <ContentView user={getUserData()} />
    </div>
  );
}

const example2Code = `function ContentView({ user }) {
  // 1. 로그인 안 됨
  if (!user) {
    return (
      <div className="auth-required">
        <h2>로그인이 필요합니다</h2>
        <button>로그인하기</button>
      </div>
    );
  }
  
  // 2. 이메일 미인증
  if (!user.isVerified) {
    return (
      <div className="verification-required">
        <h2>이메일 인증이 필요합니다</h2>
        <p>{user.email}로 인증 메일을 보냈습니다</p>
        <button>인증 메일 재발송</button>
      </div>
    );
  }
  
  // 3. 계정 정지
  if (user.isBanned) {
    return (
      <div className="banned">
        <h2>계정이 정지되었습니다</h2>
        <p>정지 사유: {user.banReason}</p>
        <p>문의: support@example.com</p>
      </div>
    );
  }
  
  // 4. 정상 - 콘텐츠 표시
  return (
    <div className="content">
      <h1>환영합니다, {user.name}님!</h1>
      <div className="main-content">
        <p>모든 기능을 사용하실 수 있습니다</p>
      </div>
    </div>
  );
}`;

// 예제 3: 데이터 로딩 패턴
function ProductList({ isLoading, error, products }) {
  // 1. 로딩 중
  if (isLoading) {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <div style={{ fontSize: "40px", marginBottom: "10px" }}>⏳</div>
        <p>상품을 불러오는 중...</p>
      </div>
    );
  }

  // 2. 에러 발생
  if (error) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8d7da",
          borderRadius: "8px",
          border: "1px solid #f5c6cb",
        }}
      >
        <h2>⚠️ 오류가 발생했습니다</h2>
        <p>{error.message}</p>
        <button style={{ padding: "8px 16px", marginTop: "10px" }}>
          다시 시도
        </button>
      </div>
    );
  }

  // 3. 데이터 없음
  if (!products || products.length === 0) {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          border: "2px dashed #ddd",
        }}
      >
        <div style={{ fontSize: "60px", marginBottom: "10px" }}>📭</div>
        <p>등록된 상품이 없습니다</p>
        <button style={{ padding: "8px 16px", marginTop: "10px" }}>
          상품 등록하기
        </button>
      </div>
    );
  }

  // 4. 정상 - 상품 목록 표시
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
      }}
    >
      <h2>상품 목록 ({products.length}개)</h2>
      <div>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              padding: "15px",
              backgroundColor: "white",
              marginBottom: "10px",
              borderRadius: "4px",
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Example3() {
  const [state, setState] = useState("success");
  const products = [
    { id: 1, name: "상품1", price: 10000 },
    { id: 2, name: "상품2", price: 20000 },
  ];

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
          onClick={() => setState("loading")}
          style={{
            padding: "8px 16px",
            backgroundColor: state === "loading" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          로딩
        </button>
        <button
          onClick={() => setState("error")}
          style={{
            padding: "8px 16px",
            backgroundColor: state === "error" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          에러
        </button>
        <button
          onClick={() => setState("empty")}
          style={{
            padding: "8px 16px",
            backgroundColor: state === "empty" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          빈 데이터
        </button>
        <button
          onClick={() => setState("success")}
          style={{
            padding: "8px 16px",
            backgroundColor: state === "success" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          정상
        </button>
      </div>

      <ProductList
        isLoading={state === "loading"}
        error={state === "error" ? { message: "네트워크 오류" } : null}
        products={
          state === "empty" ? [] : state === "success" ? products : null
        }
      />
    </div>
  );
}

const example3Code = `function ProductList({ isLoading, error, products }) {
  // 1. 로딩 중
  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>상품을 불러오는 중...</p>
      </div>
    );
  }
  
  // 2. 에러 발생
  if (error) {
    return (
      <div className="error">
        <h2>⚠️ 오류가 발생했습니다</h2>
        <p>{error.message}</p>
        <button>다시 시도</button>
      </div>
    );
  }
  
  // 3. 데이터 없음
  if (!products || products.length === 0) {
    return (
      <div className="empty">
        <p>📭 등록된 상품이 없습니다</p>
        <button>상품 등록하기</button>
      </div>
    );
  }
  
  // 4. 정상 - 상품 목록 표시
  return (
    <div className="product-list">
      <h2>상품 목록 ({products.length}개)</h2>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>
    </div>
  );
}`;

function EarlyReturn() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-2-2. Early Return 패턴</h2>

      <TabViewer
        title="예제 1: 기본 Early Return"
        description="예외 케이스를 먼저 처리하고 조기 return"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 여러 조건 체크"
        description="4단계 조건을 순차적으로 체크"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 데이터 로딩 패턴 (황금 패턴)"
        description="로딩→에러→빈데이터→성공 순서"
        resultContent={<Example3 />}
        codeString={example3Code}
      />
    </div>
  );
}

export default EarlyReturn;
