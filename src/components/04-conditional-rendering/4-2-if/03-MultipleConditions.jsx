// src/components/04-conditional-rendering/4-2-if/03-MultipleConditions.jsx
import { useState } from "react";
import TabViewer from "../../common/TabViewer";

// 예제 1: 로딩-에러-빈데이터-성공 패턴
function UserList({ state, users }) {
  // 1. 로딩 중
  if (state === "loading") {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor: "#e7f3ff",
          borderRadius: "8px",
        }}
      >
        <div style={{ fontSize: "40px", marginBottom: "10px" }}>⏳</div>
        <p>사용자 목록을 불러오는 중...</p>
      </div>
    );
  }

  // 2. 에러
  if (state === "error") {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8d7da",
          borderRadius: "8px",
          border: "1px solid #f5c6cb",
        }}
      >
        <h2>⚠️ 오류 발생</h2>
        <p>서버 연결에 실패했습니다</p>
        <button style={{ padding: "8px 16px", marginTop: "10px" }}>
          다시 시도
        </button>
      </div>
    );
  }

  // 3. 데이터 없음
  if (state === "empty" || !users || users.length === 0) {
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
        <div style={{ fontSize: "60px", marginBottom: "10px" }}>👥</div>
        <p>등록된 사용자가 없습니다</p>
      </div>
    );
  }

  // 4. 성공 - 데이터 표시
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#d4edda",
        borderRadius: "8px",
        border: "1px solid #c3e6cb",
      }}
    >
      <h2>사용자 목록 ({users.length}명)</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              padding: "15px",
              backgroundColor: "white",
              marginBottom: "10px",
              borderRadius: "4px",
            }}
          >
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Example1() {
  const [state, setState] = useState("success");
  const users = [
    { id: 1, name: "홍길동", email: "hong@example.com" },
    { id: 2, name: "김철수", email: "kim@example.com" },
    { id: 3, name: "이영희", email: "lee@example.com" },
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
          성공
        </button>
      </div>

      <UserList state={state} users={state === "success" ? users : []} />
    </div>
  );
}

const example1Code = `function UserList({ isLoading, error, users }) {
  // 1. 로딩 중
  if (isLoading) {
    return (
      <div className="loading">
        <p>⏳ 사용자 목록을 불러오는 중...</p>
      </div>
    );
  }

  // 2. 에러
  if (error) {
    return (
      <div className="error">
        <h2>⚠️ 오류 발생</h2>
        <p>{error.message}</p>
        <button>다시 시도</button>
      </div>
    );
  }

  // 3. 데이터 없음
  if (!users || users.length === 0) {
    return (
      <div className="empty">
        <p>👥 등록된 사용자가 없습니다</p>
      </div>
    );
  }

  // 4. 성공 - 데이터 표시
  return (
    <div className="user-list">
      <h2>사용자 목록 ({users.length}명)</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}`;

// 예제 2: 주문 상태 (7단계)
function OrderStatusView({ status }) {
  // 1. 주문 없음
  if (!status) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <p>주문 정보가 없습니다</p>
      </div>
    );
  }

  // 2. 주문 취소됨
  if (status === "cancelled") {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8d7da",
          borderRadius: "8px",
          border: "1px solid #f5c6cb",
        }}
      >
        <h2>❌ 주문이 취소되었습니다</h2>
        <p>취소 시간: 2024.01.20 14:30</p>
        <button style={{ padding: "8px 16px", marginTop: "10px" }}>
          주문 내역
        </button>
      </div>
    );
  }

  // 3. 결제 대기
  if (status === "pending") {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#fff3cd",
          borderRadius: "8px",
          border: "1px solid #ffeaa7",
        }}
      >
        <h2>⏳ 결제 대기 중</h2>
        <p>10분 내에 결제를 완료해주세요</p>
        <button
          style={{
            padding: "10px 20px",
            marginTop: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          결제하기
        </button>
      </div>
    );
  }

  // 4. 상품 준비 중
  if (status === "preparing") {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#d1ecf1",
          borderRadius: "8px",
          border: "1px solid #bee5eb",
        }}
      >
        <h2>📦 상품 준비 중</h2>
        <p>판매자가 상품을 준비하고 있습니다</p>
        <p>예상 발송: 1-2일 이내</p>
      </div>
    );
  }

  // 5. 배송 중
  if (status === "shipping") {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#d1ecf1",
          borderRadius: "8px",
          border: "1px solid #bee5eb",
        }}
      >
        <h2>🚚 배송 중</h2>
        <p>택배사: CJ대한통운</p>
        <p>운송장 번호: 123456789</p>
        <button style={{ padding: "8px 16px", marginTop: "10px" }}>
          배송 조회
        </button>
      </div>
    );
  }

  // 6. 배송 완료
  if (status === "delivered") {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#d4edda",
          borderRadius: "8px",
          border: "1px solid #c3e6cb",
        }}
      >
        <h2>✅ 배송 완료</h2>
        <p>상품이 안전하게 도착했습니다</p>
        <button
          style={{
            padding: "8px 16px",
            marginTop: "10px",
            marginRight: "10px",
          }}
        >
          구매 확정
        </button>
        <button style={{ padding: "8px 16px", marginTop: "10px" }}>
          리뷰 작성
        </button>
      </div>
    );
  }

  // 7. 알 수 없는 상태
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        border: "1px solid #dee2e6",
      }}
    >
      <h2>❓ 알 수 없는 상태</h2>
      <p>상태 코드: {status}</p>
      <button style={{ padding: "8px 16px", marginTop: "10px" }}>
        고객센터 문의
      </button>
    </div>
  );
}

function Example2() {
  const [orderStatus, setOrderStatus] = useState("pending");

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
          onClick={() => setOrderStatus("cancelled")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          취소됨
        </button>
        <button
          onClick={() => setOrderStatus("pending")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          결제대기
        </button>
        <button
          onClick={() => setOrderStatus("preparing")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          준비중
        </button>
        <button
          onClick={() => setOrderStatus("shipping")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          배송중
        </button>
        <button
          onClick={() => setOrderStatus("delivered")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          배송완료
        </button>
        <button
          onClick={() => setOrderStatus("unknown")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          알수없음
        </button>
      </div>

      <OrderStatusView status={orderStatus} />
    </div>
  );
}

const example2Code = `function OrderStatusView({ status }) {
  // 1. 주문 없음
  if (!status) {
    return <div>주문 정보가 없습니다</div>;
  }

  // 2. 주문 취소됨
  if (status === 'cancelled') {
    return (
      <div className="cancelled">
        <h2>❌ 주문이 취소되었습니다</h2>
        <p>취소 시간: 2024.01.20 14:30</p>
      </div>
    );
  }

  // 3. 결제 대기
  if (status === 'pending') {
    return (
      <div className="pending">
        <h2>⏳ 결제 대기 중</h2>
        <button>결제하기</button>
      </div>
    );
  }

  // 4. 상품 준비 중
  if (status === 'preparing') {
    return (
      <div className="preparing">
        <h2>📦 상품 준비 중</h2>
        <p>예상 발송: 1-2일 이내</p>
      </div>
    );
  }

  // 5. 배송 중
  if (status === 'shipping') {
    return (
      <div className="shipping">
        <h2>🚚 배송 중</h2>
        <button>배송 조회</button>
      </div>
    );
  }

  // 6. 배송 완료
  if (status === 'delivered') {
    return (
      <div className="delivered">
        <h2>✅ 배송 완료</h2>
        <button>리뷰 작성</button>
      </div>
    );
  }

  // 7. 알 수 없는 상태
  return (
    <div className="unknown">
      <h2>❓ 알 수 없는 상태</h2>
      <button>고객센터 문의</button>
    </div>
  );
}`;

// 예제 3: 권한 체크 (7단계)
function PremiumContent({ content, user }) {
  // 1. 콘텐츠 없음
  if (!content) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <p>콘텐츠를 찾을 수 없습니다</p>
      </div>
    );
  }

  // 2. 로그인 필요
  if (!user) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8d7da",
          borderRadius: "8px",
        }}
      >
        <h2>🔒 로그인이 필요합니다</h2>
        <button style={{ padding: "8px 16px", marginTop: "10px" }}>
          로그인하기
        </button>
      </div>
    );
  }

  // 3. 이메일 인증 필요
  if (!user.isVerified) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#fff3cd",
          borderRadius: "8px",
        }}
      >
        <h2>📧 이메일 인증이 필요합니다</h2>
        <button style={{ padding: "8px 16px", marginTop: "10px" }}>
          인증 메일 보내기
        </button>
      </div>
    );
  }

  // 4. 프리미엄 구독 필요
  if (!user.isPremium) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#fff3cd",
          borderRadius: "8px",
        }}
      >
        <h2>⭐ 프리미엄 전용 콘텐츠입니다</h2>
        <p>프리미엄 구독 시 모든 콘텐츠를 이용하실 수 있습니다</p>
        <button
          style={{
            padding: "10px 20px",
            marginTop: "10px",
            backgroundColor: "#ffc107",
            border: "none",
            borderRadius: "4px",
          }}
        >
          프리미엄 구독하기
        </button>
      </div>
    );
  }

  // 5. 나이 제한
  if (content.ageLimit && user.age < content.ageLimit) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8d7da",
          borderRadius: "8px",
        }}
      >
        <h2>🔞 연령 제한 콘텐츠</h2>
        <p>이 콘텐츠는 {content.ageLimit}세 이상만 시청 가능합니다</p>
      </div>
    );
  }

  // 6. 지역 제한
  if (content.allowedRegions && !content.allowedRegions.includes(user.region)) {
    return (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8d7da",
          borderRadius: "8px",
        }}
      >
        <h2>🌍 지역 제한 콘텐츠</h2>
        <p>이 콘텐츠는 해당 지역에서 시청할 수 없습니다</p>
        <p>허용 지역: {content.allowedRegions.join(", ")}</p>
      </div>
    );
  }

  // 7. 정상 - 콘텐츠 재생
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#d4edda",
        borderRadius: "8px",
      }}
    >
      <h2>🎬 프리미엄 콘텐츠</h2>
      <div
        style={{
          marginTop: "15px",
          padding: "40px",
          backgroundColor: "#000",
          color: "#fff",
          textAlign: "center",
          borderRadius: "4px",
        }}
      >
        <p style={{ fontSize: "24px" }}>▶️ 재생 중...</p>
      </div>
      <p style={{ marginTop: "15px" }}>모든 권한 체크를 통과했습니다! ✅</p>
    </div>
  );
}

function Example3() {
  const [checkStep, setCheckStep] = useState("all-pass");

  const getContent = () => {
    if (checkStep === "no-content") return null;
    if (checkStep === "not-logged-in") return { user: null };
    if (checkStep === "not-verified") return { user: { isVerified: false } };
    if (checkStep === "not-premium")
      return { user: { isVerified: true, isPremium: false } };
    if (checkStep === "age-restricted")
      return {
        user: { isVerified: true, isPremium: true, age: 16 },
        ageLimit: 19,
      };
    if (checkStep === "region-blocked")
      return {
        user: { isVerified: true, isPremium: true, age: 25, region: "KR" },
        allowedRegions: ["US", "JP"],
      };
    return {
      user: { isVerified: true, isPremium: true, age: 25, region: "US" },
      allowedRegions: ["US", "JP"],
    };
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
          onClick={() => setCheckStep("no-content")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          콘텐츠없음
        </button>
        <button
          onClick={() => setCheckStep("not-logged-in")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          비로그인
        </button>
        <button
          onClick={() => setCheckStep("not-verified")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          미인증
        </button>
        <button
          onClick={() => setCheckStep("not-premium")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          일반회원
        </button>
        <button
          onClick={() => setCheckStep("age-restricted")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          나이제한
        </button>
        <button
          onClick={() => setCheckStep("region-blocked")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          지역제한
        </button>
        <button
          onClick={() => setCheckStep("all-pass")}
          style={{ padding: "6px 12px", fontSize: "12px" }}
        >
          모두통과
        </button>
      </div>

      <PremiumContent content={data} user={data?.user} />
    </div>
  );
}

const example3Code = `function PremiumContent({ content, user }) {
  // 1. 콘텐츠 없음
  if (!content) {
    return <div>콘텐츠를 찾을 수 없습니다</div>;
  }

  // 2. 로그인 필요
  if (!user) {
    return (
      <div>
        <h2>🔒 로그인이 필요합니다</h2>
        <button>로그인하기</button>
      </div>
    );
  }

  // 3. 이메일 인증 필요
  if (!user.isVerified) {
    return (
      <div>
        <h2>📧 이메일 인증이 필요합니다</h2>
        <button>인증 메일 보내기</button>
      </div>
    );
  }

  // 4. 프리미엄 구독 필요
  if (!user.isPremium) {
    return (
      <div>
        <h2>⭐ 프리미엄 전용 콘텐츠입니다</h2>
        <button>프리미엄 구독하기</button>
      </div>
    );
  }

  // 5. 나이 제한
  if (content.ageLimit && user.age < content.ageLimit) {
    return (
      <div>
        <h2>🔞 연령 제한 콘텐츠</h2>
        <p>{content.ageLimit}세 이상만 시청 가능</p>
      </div>
    );
  }

  // 6. 지역 제한
  if (content.allowedRegions && 
      !content.allowedRegions.includes(user.region)) {
    return (
      <div>
        <h2>🌍 지역 제한 콘텐츠</h2>
        <p>해당 지역에서 시청 불가</p>
      </div>
    );
  }

  // 7. 정상 - 콘텐츠 재생
  return (
    <div>
      <h2>🎬 프리미엄 콘텐츠</h2>
      <video controls />
    </div>
  );
}`;

function MultipleConditions() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-2-3. 여러 조건 체크</h2>

      <TabViewer
        title="예제 1: 로딩-에러-빈데이터-성공"
        description="데이터 로딩의 황금 패턴 (4단계)"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 주문 상태 (7단계)"
        description="주문 상태별로 다른 UI 표시"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 권한 체크 (7단계)"
        description="콘텐츠 접근을 위한 다단계 검증"
        resultContent={<Example3 />}
        codeString={example3Code}
      />
    </div>
  );
}

export default MultipleConditions;
