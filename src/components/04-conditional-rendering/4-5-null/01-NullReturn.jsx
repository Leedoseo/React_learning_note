// src/components/04-conditional-rendering/4-5-null/01-NullReturn.jsx
import { useState } from "react";
import TabViewer from "../../common/TabViewer";

// 예제 1: 기본 null 반환
function AdminPanel({ user }) {
  if (!user) return null;
  if (!user.isAdmin) return null;

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
      <button style={{ padding: "8px 16px", marginRight: "10px" }}>
        사용자 관리
      </button>
      <button style={{ padding: "8px 16px", marginRight: "10px" }}>
        콘텐츠 관리
      </button>
      <button style={{ padding: "8px 16px" }}>통계 보기</button>
    </div>
  );
}

function Example1() {
  const [user, setUser] = useState({
    name: "홍길동",
    email: "hong@example.com",
    isAdmin: true,
  });

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
          onClick={() =>
            setUser({
              name: "홍길동",
              email: "hong@example.com",
              isAdmin: true,
            })
          }
          style={{ padding: "8px 16px" }}
        >
          관리자
        </button>
        <button
          onClick={() =>
            setUser({
              name: "김철수",
              email: "kim@example.com",
              isAdmin: false,
            })
          }
          style={{ padding: "8px 16px" }}
        >
          일반 사용자
        </button>
        <button onClick={() => setUser(null)} style={{ padding: "8px 16px" }}>
          로그아웃
        </button>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <h1>대시보드</h1>
        <AdminPanel user={user} />

        {!user && (
          <p style={{ marginTop: "15px", color: "#6c757d" }}>
            관리자가 아니거나 로그인하지 않으면 관리자 패널이 보이지 않음
          </p>
        )}
      </div>
    </div>
  );
}

const example1Code = `function AdminPanel({ user }) {
  // 1. user가 없으면 null 반환
  if (!user) return null;

  // 2. 관리자가 아니면 null 반환
  if (!user.isAdmin) return null;

  // 3. 정상 - 관리자 패널 표시
  return (
    <div className="admin-panel">
      <h2>🔧 관리자 패널</h2>
      <button>사용자 관리</button>
      <button>콘텐츠 관리</button>
      <button>통계 보기</button>
    </div>
  );
}

// null을 return하면 아무것도 렌더링 안 됨
// DOM에 흔적도 없음`;

// 예제 2: 여러 조건 체크
function PremiumFeature({ content, user }) {
  // 1. 콘텐츠 없음
  if (!content) return null;

  // 2. 로그인 필요
  if (!user) return null;

  // 3. 이메일 인증 필요
  if (!user.isVerified) return null;

  // 4. 프리미엄 구독 필요
  if (!user.isPremium) return null;

  // 5. 정상 - 프리미엄 기능 표시
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff3cd",
        borderRadius: "8px",
        border: "1px solid #ffeaa7",
      }}
    >
      <h2>⭐ 프리미엄 기능</h2>
      <p>고급 분석 도구를 사용하실 수 있습니다</p>
      <button style={{ padding: "10px 20px", marginTop: "10px" }}>
        시작하기
      </button>
    </div>
  );
}

function Example2() {
  const [contentState, setContentState] = useState("normal");

  const getContent = () => {
    if (contentState === "no-content") return null;
    if (contentState === "not-logged-in") return { user: null };
    if (contentState === "not-verified") return { user: { isVerified: false } };
    if (contentState === "not-premium")
      return { user: { isVerified: true, isPremium: false } };
    return { user: { isVerified: true, isPremium: true } };
  };

  const data = getContent();

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
          onClick={() => setContentState("no-content")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          콘텐츠없음
        </button>
        <button
          onClick={() => setContentState("not-logged-in")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          비로그인
        </button>
        <button
          onClick={() => setContentState("not-verified")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          미인증
        </button>
        <button
          onClick={() => setContentState("not-premium")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          일반회원
        </button>
        <button
          onClick={() => setContentState("normal")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          모두통과
        </button>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          minHeight: "150px",
        }}
      >
        <h1>앱</h1>
        <PremiumFeature content={data} user={data?.user} />

        {contentState !== "normal" && (
          <p style={{ marginTop: "15px", color: "#6c757d" }}>
            조건에 맞지 않아서 프리미엄 기능이 보이지 않음 (null 반환)
          </p>
        )}
      </div>
    </div>
  );
}

const example2Code = `function PremiumFeature({ content, user }) {
  // 1. 콘텐츠 없음
  if (!content) return null;

  // 2. 로그인 필요
  if (!user) return null;

  // 3. 이메일 인증 필요
  if (!user.isVerified) return null;

  // 4. 프리미엄 구독 필요
  if (!user.isPremium) return null;

  // 5. 정상 - 프리미엄 기능 표시
  return (
    <div className="premium-feature">
      <h2>⭐ 프리미엄 기능</h2>
      <p>고급 분석 도구</p>
    </div>
  );
}

// 여러 조건을 순차적으로 체크
// 하나라도 실패하면 null 반환`;

// 예제 3: 모달 컴포넌트
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
          maxWidth: "500px",
          width: "90%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            borderBottom: "1px solid #dee2e6",
            paddingBottom: "10px",
          }}
        >
          <h2 style={{ margin: 0 }}>{title}</h2>
          <button
            onClick={onClose}
            style={{
              padding: "5px 10px",
              backgroundColor: "transparent",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}

function Example3() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        모달 열기
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="알림"
      >
        <p>이것은 모달 내용입니다.</p>
        <p>모달이 닫혀있을 때는 DOM에서 완전히 제거됩니다.</p>
        <button
          onClick={() => setIsModalOpen(false)}
          style={{
            padding: "8px 16px",
            marginTop: "15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          확인
        </button>
      </Modal>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#e7f3ff",
          borderRadius: "8px",
        }}
      >
        <h4>💡 null 반환의 장점</h4>
        <p>모달이 닫혀있을 때 DOM에서 완전히 제거되어 성능상 유리함</p>
      </div>
    </div>
  );
}

const example3Code = `function Modal({ isOpen, onClose, title, children }) {
  // isOpen이 false면 null 반환
  // → DOM에서 완전히 제거됨
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

// 모달이 닫혀있으면 DOM에 없음
// 성능상 유리!`;

function NullReturn() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-5-1. null 반환</h2>

      <TabViewer
        title="예제 1: 기본 null 반환"
        description="관리자가 아니면 null 반환하여 아예 렌더링 안 함"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 여러 조건 체크"
        description="프리미엄 기능 - 4단계 검증 후 null 반환"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 모달 컴포넌트"
        description="닫혀있을 때 DOM에서 완전히 제거"
        resultContent={<Example3 />}
        codeString={example3Code}
      />
    </div>
  );
}

export default NullReturn;
