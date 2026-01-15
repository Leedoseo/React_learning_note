// src/components/03-props/3-4-children/02-LayoutComponents.jsx
import TabViewer from "../../common/TabViewer";
import { useState } from "react";

// 예제 1: 모달
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
            padding: "8px 16px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
}

// 예제 2: 카드 레이아웃
function PricingCard({ children, featured = false }) {
  return (
    <div
      style={{
        border: featured ? "3px solid #007bff" : "1px solid #ddd",
        borderRadius: "8px",
        padding: "30px",
        margin: "10px",
        width: "250px",
        display: "inline-block",
        verticalAlign: "top",
        backgroundColor: featured ? "#e7f3ff" : "white",
        position: "relative",
      }}
    >
      {featured && (
        <div
          style={{
            position: "absolute",
            top: "-15px",
            right: "20px",
            backgroundColor: "#007bff",
            color: "white",
            padding: "5px 15px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          추천
        </div>
      )}
      {children}
    </div>
  );
}

// 예제 3: 탭
function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", backgroundColor: "#f8f9fa" }}>
        {children.map((child, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              flex: 1,
              padding: "15px",
              border: "none",
              backgroundColor: activeTab === index ? "#007bff" : "transparent",
              color: activeTab === index ? "white" : "#333",
              cursor: "pointer",
              fontWeight: activeTab === index ? "bold" : "normal",
              borderBottom: activeTab === index ? "none" : "1px solid #ddd",
            }}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div style={{ padding: "20px" }}>{children[activeTab]}</div>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function Tab({ label, children }) {
  return <div>{children}</div>;
}

function LayoutComponents() {
  // 예제 1
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resultContent1 = (
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
        }}
      >
        모달 열기
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>회원가입</h2>
        <p>회원가입 폼이 여기에 들어갑니다</p>
        <input
          type="text"
          placeholder="이름"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
        <input
          type="email"
          placeholder="이메일"
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
      </Modal>
    </div>
  );

  const codeString1 = `function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        모달 열기
      </button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>회원가입</h2>
        <input type="text" placeholder="이름" />
        <input type="email" placeholder="이메일" />
      </Modal>
    </div>
  );
}

// Modal은 레이아웃만 담당
// 내용은 children으로 자유롭게`;

  // 예제 2
  const resultContent2 = (
    <div style={{ textAlign: "center" }}>
      <PricingCard>
        <h3>베이직</h3>
        <p style={{ fontSize: "32px", fontWeight: "bold", margin: "20px 0" }}>
          ₩4,900
          <span style={{ fontSize: "16px", fontWeight: "normal" }}>/월</span>
        </p>
        <ul style={{ textAlign: "left", padding: "0 20px" }}>
          <li>하루 3시간</li>
          <li>SD 화질</li>
          <li>광고 포함</li>
        </ul>
        <button
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          선택하기
        </button>
      </PricingCard>

      <PricingCard featured={true}>
        <h3>프리미엄</h3>
        <p style={{ fontSize: "32px", fontWeight: "bold", margin: "20px 0" }}>
          ₩9,900
          <span style={{ fontSize: "16px", fontWeight: "normal" }}>/월</span>
        </p>
        <ul style={{ textAlign: "left", padding: "0 20px" }}>
          <li>무제한 시청</li>
          <li>HD 화질</li>
          <li>광고 없음</li>
        </ul>
        <button
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          선택하기
        </button>
      </PricingCard>

      <PricingCard>
        <h3>스탠다드</h3>
        <p style={{ fontSize: "32px", fontWeight: "bold", margin: "20px 0" }}>
          ₩7,900
          <span style={{ fontSize: "16px", fontWeight: "normal" }}>/월</span>
        </p>
        <ul style={{ textAlign: "left", padding: "0 20px" }}>
          <li>하루 10시간</li>
          <li>HD 화질</li>
          <li>광고 일부 포함</li>
        </ul>
        <button
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          선택하기
        </button>
      </PricingCard>
    </div>
  );

  const codeString2 = `function PricingCard({ children, featured = false }) {
  return (
    <div className={\`card \${featured ? 'featured' : ''}\`}>
      {featured && <span className="badge">추천</span>}
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <PricingCard>
        <h3>베이직</h3>
        <p className="price">₩4,900/월</p>
        <ul>
          <li>하루 3시간</li>
          <li>SD 화질</li>
        </ul>
        <button>선택하기</button>
      </PricingCard>
      
      <PricingCard featured={true}>
        <h3>프리미엄</h3>
        <p className="price">₩9,900/월</p>
        <ul>
          <li>무제한 시청</li>
          <li>HD 화질</li>
        </ul>
        <button>선택하기</button>
      </PricingCard>
    </div>
  );
}

// 같은 레이아웃, 다른 내용
// featured prop으로 강조`;

  // 예제 3
  const resultContent3 = (
    <Tabs>
      <Tab label="프로필">
        <h3>프로필 정보</h3>
        <p>
          <strong>이름:</strong> 홍길동
        </p>
        <p>
          <strong>이메일:</strong> hong@example.com
        </p>
        <p>
          <strong>전화:</strong> 010-1234-5678
        </p>
      </Tab>

      <Tab label="설정">
        <h3>설정</h3>
        <label style={{ display: "block", margin: "10px 0" }}>
          <input type="checkbox" /> 이메일 알림 받기
        </label>
        <label style={{ display: "block", margin: "10px 0" }}>
          <input type="checkbox" /> SMS 알림 받기
        </label>
      </Tab>

      <Tab label="도움말">
        <h3>자주 묻는 질문</h3>
        <p>
          <strong>Q. 비밀번호를 잊어버렸어요</strong>
        </p>
        <p>A. 로그인 페이지에서 '비밀번호 찾기'를 클릭하세요.</p>
      </Tab>
    </Tabs>
  );

  const codeString3 = `function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="tabs">
      <div className="tab-buttons">
        {children.map((child, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      
      <div className="tab-content">
        {children[activeTab]}
      </div>
    </div>
  );
}

function Tab({ label, children }) {
  return <div>{children}</div>;
}

function App() {
  return (
    <Tabs>
      <Tab label="프로필">
        <h3>프로필 정보</h3>
        <p>이름: 홍길동</p>
      </Tab>
      
      <Tab label="설정">
        <h3>설정</h3>
        <label><input type="checkbox" /> 알림 받기</label>
      </Tab>
      
      <Tab label="도움말">
        <h3>FAQ</h3>
        <p>자주 묻는 질문...</p>
      </Tab>
    </Tabs>
  );
}

// 탭 UI도 children으로 유연하게`;

  return (
    <div>
      <h2>3-4-2. 레이아웃 컴포넌트</h2>

      <TabViewer
        title="예제 1: 모달 컴포넌트"
        description="모달은 레이아웃만 담당. 내용은 children으로 자유롭게"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 카드 레이아웃"
          description="같은 레이아웃, 다른 내용. 가격표나 서비스 플랜에 유용"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 탭 컴포넌트"
          description="탭 UI를 children으로 구현. 설정 페이지나 프로필에 유용"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default LayoutComponents;
