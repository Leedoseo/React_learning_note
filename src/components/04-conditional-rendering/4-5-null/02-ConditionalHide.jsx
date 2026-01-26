// src/components/04-conditional-rendering/4-5-null/02-ConditionalHide.jsx
import { useState } from "react";
import TabViewer from "../../common/TabViewer";

// 예제 1: 기능 플래그
function FeatureFlag({ isEnabled, children }) {
  if (!isEnabled) return null;
  return <>{children}</>;
}

function Example1() {
  const [features, setFeatures] = useState({
    newDesign: true,
    betaFeature: false,
    experimentalUI: false,
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
        <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <input
            type="checkbox"
            checked={features.newDesign}
            onChange={(e) =>
              setFeatures({ ...features, newDesign: e.target.checked })
            }
          />
          새 디자인
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <input
            type="checkbox"
            checked={features.betaFeature}
            onChange={(e) =>
              setFeatures({ ...features, betaFeature: e.target.checked })
            }
          />
          베타 기능
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <input
            type="checkbox"
            checked={features.experimentalUI}
            onChange={(e) =>
              setFeatures({ ...features, experimentalUI: e.target.checked })
            }
          />
          실험적 UI
        </label>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <h1>앱</h1>

        <FeatureFlag isEnabled={features.newDesign}>
          <div
            style={{
              padding: "15px",
              backgroundColor: "#d4edda",
              borderRadius: "8px",
              marginBottom: "10px",
              border: "1px solid #c3e6cb",
            }}
          >
            <h3>✨ 새로운 디자인</h3>
            <p>개선된 UI/UX를 경험해보세요</p>
          </div>
        </FeatureFlag>

        <FeatureFlag isEnabled={features.betaFeature}>
          <div
            style={{
              padding: "15px",
              backgroundColor: "#d1ecf1",
              borderRadius: "8px",
              marginBottom: "10px",
              border: "1px solid #bee5eb",
            }}
          >
            <h3>🧪 베타 기능</h3>
            <p>새로운 기능을 미리 사용해보세요</p>
          </div>
        </FeatureFlag>

        <FeatureFlag isEnabled={features.experimentalUI}>
          <div
            style={{
              padding: "15px",
              backgroundColor: "#fff3cd",
              borderRadius: "8px",
              marginBottom: "10px",
              border: "1px solid #ffeaa7",
            }}
          >
            <h3>🔬 실험적 UI</h3>
            <p>아직 테스트 중인 인터페이스입니다</p>
          </div>
        </FeatureFlag>

        <div
          style={{
            padding: "15px",
            backgroundColor: "white",
            borderRadius: "8px",
            border: "1px solid #dee2e6",
          }}
        >
          <h3>📱 기본 기능</h3>
          <p>항상 표시되는 기본 콘텐츠</p>
        </div>
      </div>
    </div>
  );
}

const example1Code = `function FeatureFlag({ isEnabled, children }) {
  // 기능이 비활성화되면 null 반환
  if (!isEnabled) return null;
  return <>{children}</>;
}

function App() {
  const features = {
    newDesign: true,
    betaFeature: false,
    experimentalUI: false
  };

  return (
    <div>
      <h1>앱</h1>

      {/* 새 디자인 - 활성화됨 */}
      <FeatureFlag isEnabled={features.newDesign}>
        <div className="new-design">
          <h2>새로운 디자인</h2>
        </div>
      </FeatureFlag>

      {/* 베타 기능 - 비활성화됨 (안 보임) */}
      <FeatureFlag isEnabled={features.betaFeature}>
        <div className="beta-feature">
          <h2>베타 기능</h2>
        </div>
      </FeatureFlag>

      {/* 기본 기능 - 항상 표시 */}
      <div className="default">
        <h2>기본 기능</h2>
      </div>
    </div>
  );
}`;

// 예제 2: 권한별 컴포넌트
function RequireAuth({ children, userRole }) {
  if (userRole === "guest") return null;
  return <>{children}</>;
}

function RequireAdmin({ children, userRole }) {
  if (userRole !== "admin") return null;
  return <>{children}</>;
}

function RequireVIP({ children, userRole }) {
  if (userRole !== "vip" && userRole !== "admin") return null;
  return <>{children}</>;
}

function Example2() {
  const [userRole, setUserRole] = useState("user");

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
          onClick={() => setUserRole("guest")}
          style={{
            padding: "8px 16px",
            backgroundColor: userRole === "guest" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          손님
        </button>
        <button
          onClick={() => setUserRole("user")}
          style={{
            padding: "8px 16px",
            backgroundColor: userRole === "user" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          일반 사용자
        </button>
        <button
          onClick={() => setUserRole("vip")}
          style={{
            padding: "8px 16px",
            backgroundColor: userRole === "vip" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          VIP
        </button>
        <button
          onClick={() => setUserRole("admin")}
          style={{
            padding: "8px 16px",
            backgroundColor: userRole === "admin" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          관리자
        </button>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <h1>메뉴 ({userRole})</h1>

        {/* 모든 사용자 */}
        <div
          style={{
            padding: "15px",
            backgroundColor: "white",
            borderRadius: "8px",
            marginBottom: "10px",
            border: "1px solid #dee2e6",
          }}
        >
          <h3>🏠 홈</h3>
          <p>누구나 볼 수 있음</p>
        </div>

        {/* 로그인한 사용자만 */}
        <RequireAuth userRole={userRole}>
          <div
            style={{
              padding: "15px",
              backgroundColor: "#d4edda",
              borderRadius: "8px",
              marginBottom: "10px",
              border: "1px solid #c3e6cb",
            }}
          >
            <h3>👤 내 프로필</h3>
            <p>로그인한 사용자만</p>
          </div>
        </RequireAuth>

        {/* VIP만 */}
        <RequireVIP userRole={userRole}>
          <div
            style={{
              padding: "15px",
              backgroundColor: "#fff3cd",
              borderRadius: "8px",
              marginBottom: "10px",
              border: "1px solid #ffeaa7",
            }}
          >
            <h3>⭐ VIP 라운지</h3>
            <p>VIP와 관리자만</p>
          </div>
        </RequireVIP>

        {/* 관리자만 */}
        <RequireAdmin userRole={userRole}>
          <div
            style={{
              padding: "15px",
              backgroundColor: "#d1ecf1",
              borderRadius: "8px",
              marginBottom: "10px",
              border: "1px solid #bee5eb",
            }}
          >
            <h3>🔧 관리자 패널</h3>
            <p>관리자만</p>
          </div>
        </RequireAdmin>
      </div>
    </div>
  );
}

const example2Code = `// 권한 체크 래퍼 컴포넌트
function RequireAuth({ children }) {
  const { user } = useAuth();
  if (!user) return null;
  return <>{children}</>;
}

function RequireAdmin({ children }) {
  const { user } = useAuth();
  if (!user?.isAdmin) return null;
  return <>{children}</>;
}

function RequireVIP({ children }) {
  const { user } = useAuth();
  if (!user?.isVIP) return null;
  return <>{children}</>;
}

function App() {
  return (
    <div>
      {/* 모든 사용자 */}
      <Home />

      {/* 로그인한 사용자만 */}
      <RequireAuth userRole={userRole}>
        <Profile />
      </RequireAuth>

      {/* VIP만 */}
      <RequireVIP userRole={userRole}>
        <VIPLounge />
      </RequireVIP>

      {/* 관리자만 */}
      <RequireAdmin userRole={userRole}>
        <AdminPanel />
      </RequireAdmin>
    </div>
  );
}`;

// 예제 3: 환경별 컴포넌트
function DevOnly({ children, env }) {
  if (env !== "development") return null;
  return <>{children}</>;
}

function ProdOnly({ children, env }) {
  if (env !== "production") return null;
  return <>{children}</>;
}

function Example3() {
  const [env, setEnv] = useState("production");

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
          onClick={() => setEnv("development")}
          style={{
            padding: "8px 16px",
            backgroundColor: env === "development" ? "#28a745" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          개발 환경
        </button>
        <button
          onClick={() => setEnv("production")}
          style={{
            padding: "8px 16px",
            backgroundColor: env === "production" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          배포 환경
        </button>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <h1>앱 ({env})</h1>

        <DevOnly env={env}>
          <div
            style={{
              padding: "15px",
              backgroundColor: "#fff3cd",
              borderRadius: "8px",
              marginBottom: "10px",
              border: "2px solid #ffc107",
            }}
          >
            <h3>🔧 개발자 도구</h3>
            <p>개발 환경에서만 보임</p>
            <button style={{ padding: "6px 12px", marginRight: "10px" }}>
              디버그 모드
            </button>
            <button style={{ padding: "6px 12px", marginRight: "10px" }}>
              로그 확인
            </button>
            <button style={{ padding: "6px 12px" }}>성능 분석</button>
          </div>
        </DevOnly>

        <ProdOnly env={env}>
          <div
            style={{
              padding: "15px",
              backgroundColor: "#d4edda",
              borderRadius: "8px",
              marginBottom: "10px",
              border: "2px solid #28a745",
            }}
          >
            <h3>📊 프로덕션 모드</h3>
            <p>배포 환경에서만 보임</p>
            <p>최적화된 버전으로 실행 중</p>
          </div>
        </ProdOnly>

        <div
          style={{
            padding: "15px",
            backgroundColor: "white",
            borderRadius: "8px",
            border: "1px solid #dee2e6",
          }}
        >
          <h3>📱 메인 콘텐츠</h3>
          <p>모든 환경에서 표시</p>
        </div>
      </div>
    </div>
  );
}

const example3Code = `// 환경별 컴포넌트
function DevOnly({ children }) {
  if (process.env.NODE_ENV !== 'development') return null;
  return <>{children}</>;
}

function ProdOnly({ children }) {
  if (process.env.NODE_ENV !== 'production') return null;
  return <>{children}</>;
}

function App() {
  return (
    <div>
      {/* 개발 환경에서만 */}
      <DevOnly>
        <DebugTools />
        <LogViewer />
      </DevOnly>

      {/* 배포 환경에서만 */}
      <ProdOnly>
        <Analytics />
      </ProdOnly>

      {/* 모든 환경 */}
      <MainContent />
    </div>
  );
}`;

function ConditionalHide() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-5-2. 조건부 컴포넌트 숨김</h2>

      <TabViewer
        title="예제 1: 기능 플래그"
        description="기능 활성화 여부에 따라 컴포넌트 표시/숨김"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 권한별 컴포넌트"
        description="사용자 권한에 따라 다른 메뉴 표시"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 환경별 컴포넌트"
        description="개발/배포 환경에 따라 다른 도구 표시"
        resultContent={<Example3 />}
        codeString={example3Code}
      />
    </div>
  );
}

export default ConditionalHide;
