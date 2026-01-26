// src/components/04-conditional-rendering/4-5-null/04-Optimization.jsx
/* eslint-disable */
import { useState, useMemo } from "react";
import TabViewer from "../../common/TabViewer";

// 예제 1: 무거운 컴포넌트 최적화
function HeavyComponent({ isVisible }) {
  // 무거운 연산 시뮬레이션 (예제용)
  const heavyData = useMemo(
    () =>
      Array.from({ length: 100 }, (_, i) => ({
        id: i,
        value: Math.random() * 1000,
      })),
    []
  );

  // isVisible이 false면 아예 렌더링 안 함
  if (!isVisible) return null;

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#d4edda",
        borderRadius: "8px",
        border: "1px solid #c3e6cb",
      }}
    >
      <h3>📊 무거운 컴포넌트</h3>
      <p>복잡한 계산과 많은 데이터를 렌더링합니다</p>
      <div
        style={{
          maxHeight: "200px",
          overflowY: "auto",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "4px",
          marginTop: "10px",
        }}
      >
        {heavyData.map((item) => (
          <div
            key={item.id}
            style={{ padding: "5px", borderBottom: "1px solid #eee" }}
          >
            Item {item.id}: {item.value.toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
}

function Example1() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{
          padding: "10px 20px",
          marginBottom: "15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {isVisible ? "컴포넌트 숨기기" : "컴포넌트 표시"}
      </button>

      <HeavyComponent isVisible={isVisible} />

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#e7f3ff",
          borderRadius: "8px",
        }}
      >
        <h4>💡 최적화 효과</h4>
        <p>isVisible이 false일 때 return null을 하면:</p>
        <ul>
          <li>무거운 연산이 실행되지 않음</li>
          <li>DOM에 요소가 생성되지 않음</li>
          <li>메모리 사용량 감소</li>
        </ul>
      </div>
    </div>
  );
}

const example1Code = `function HeavyComponent({ isVisible }) {
  // isVisible이 false면 아예 렌더링 안 함
  // → 무거운 연산도 실행되지 않음!
  if (!isVisible) return null;

  // 무거운 연산
  const heavyData = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    value: expensiveCalculation(i)
  }));

  return (
    <div className="heavy-component">
      <h3>무거운 컴포넌트</h3>
      {heavyData.map(item => (
        <div key={item.id}>{item.value}</div>
      ))}
    </div>
  );
}

// 장점:
// 1. 불필요한 연산 방지
// 2. DOM 요소 생성 안 함
// 3. 메모리 절약`;

// 예제 2: 탭 전환 최적화
function OverviewTab({ isActive }) {
  if (!isActive) return null;
  return (
    <div
      style={{ padding: "20px", backgroundColor: "white", borderRadius: "8px" }}
    >
      <h3>개요</h3>
      <p>간단한 개요 정보입니다</p>
    </div>
  );
}

function ChartTab({ isActive }) {
  // 차트 탭일 때만 무거운 데이터 처리 (예제용)
  const chartData = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        x: i,
        y: Math.random() * 100,
      })),
    []
  );

  if (!isActive) return null;

  return (
    <div
      style={{ padding: "20px", backgroundColor: "white", borderRadius: "8px" }}
    >
      <h3>📈 차트</h3>
      <div
        style={{
          height: "200px",
          backgroundColor: "#f8f9fa",
          borderRadius: "4px",
          display: "flex",
          alignItems: "flex-end",
          gap: "2px",
          padding: "10px",
        }}
      >
        {chartData.map((data, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${data.y}%`,
              backgroundColor: "#007bff",
              borderRadius: "2px 2px 0 0",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function DataTab({ isActive }) {
  // 테이블 데이터 (예제용)
  const tableData = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: `항목 ${i + 1}`,
        value: (Math.random() * 1000).toFixed(2),
      })),
    []
  );

  if (!isActive) return null;

  return (
    <div
      style={{ padding: "20px", backgroundColor: "white", borderRadius: "8px" }}
    >
      <h3>📋 데이터</h3>
      <div style={{ maxHeight: "200px", overflowY: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f8f9fa" }}>
              <th style={{ padding: "8px", textAlign: "left" }}>ID</th>
              <th style={{ padding: "8px", textAlign: "left" }}>이름</th>
              <th style={{ padding: "8px", textAlign: "right" }}>값</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "8px" }}>{row.id}</td>
                <td style={{ padding: "8px" }}>{row.name}</td>
                <td style={{ padding: "8px", textAlign: "right" }}>
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Example2() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          borderBottom: "2px solid #ddd",
          paddingBottom: "10px",
        }}
      >
        <button
          onClick={() => setActiveTab("overview")}
          style={{
            padding: "10px 20px",
            backgroundColor:
              activeTab === "overview" ? "#007bff" : "transparent",
            color: activeTab === "overview" ? "white" : "#007bff",
            border: "none",
            borderRadius: "4px 4px 0 0",
            cursor: "pointer",
            fontWeight: activeTab === "overview" ? "bold" : "normal",
          }}
        >
          개요
        </button>
        <button
          onClick={() => setActiveTab("chart")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTab === "chart" ? "#007bff" : "transparent",
            color: activeTab === "chart" ? "white" : "#007bff",
            border: "none",
            borderRadius: "4px 4px 0 0",
            cursor: "pointer",
            fontWeight: activeTab === "chart" ? "bold" : "normal",
          }}
        >
          차트
        </button>
        <button
          onClick={() => setActiveTab("data")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTab === "data" ? "#007bff" : "transparent",
            color: activeTab === "data" ? "white" : "#007bff",
            border: "none",
            borderRadius: "4px 4px 0 0",
            cursor: "pointer",
            fontWeight: activeTab === "data" ? "bold" : "normal",
          }}
        >
          데이터
        </button>
      </div>

      <OverviewTab isActive={activeTab === "overview"} />
      <ChartTab isActive={activeTab === "chart"} />
      <DataTab isActive={activeTab === "data"} />

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#e7f3ff",
          borderRadius: "8px",
        }}
      >
        <h4>💡 탭 전환 최적화</h4>
        <p>
          현재 탭: <strong>{activeTab}</strong>
        </p>
        <p>비활성 탭은 null을 반환하여 렌더링되지 않음</p>
        <ul>
          <li>차트 데이터는 차트 탭일 때만 계산됨</li>
          <li>테이블은 데이터 탭일 때만 렌더링됨</li>
          <li>성능 향상 효과 큼</li>
        </ul>
      </div>
    </div>
  );
}

const example2Code = `function Dashboard({ activeTab }) {
  return (
    <div>
      <TabButtons />

      {/* 활성 탭만 렌더링 */}
      <OverviewTab isActive={activeTab === 'overview'} />
      <ChartTab isActive={activeTab === 'chart'} />
      <DataTab isActive={activeTab === 'data'} />
    </div>
  );
}

function ChartTab({ isActive }) {
  // 차트 탭이 아니면 null 반환
  // → 무거운 차트 데이터 계산 안 함!
  if (!isActive) return null;

  // 차트 탭일 때만 실행
  const chartData = generateHeavyChartData();

  return (
    <div className="chart-tab">
      <Chart data={chartData} />
    </div>
  );
}

// 탭 전환 시 성능 향상!`;

// 예제 3: 권한 체크로 불필요한 렌더링 방지
function AdminPanel({ user }) {
  // 관리자가 아니면 아예 렌더링 안 함
  if (!user || user.role !== "admin") return null;

  // 관리자용 무거운 데이터
  const adminData = {
    users: Array.from({ length: 50 }, (_, i) => ({ id: i, name: `User ${i}` })),
    logs: Array.from({ length: 100 }, (_, i) => ({
      id: i,
      action: `Action ${i}`,
    })),
    stats: { total: 1000, active: 750, pending: 250 },
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#d1ecf1",
        borderRadius: "8px",
        border: "1px solid #bee5eb",
      }}
    >
      <h3>🔧 관리자 패널</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
          marginTop: "15px",
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
          <h4>총 사용자</h4>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            {adminData.stats.total}
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
          <h4>활성</h4>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#28a745" }}>
            {adminData.stats.active}
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
          <h4>대기</h4>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "#ffc107" }}>
            {adminData.stats.pending}
          </p>
        </div>
      </div>
      <p style={{ marginTop: "15px", fontSize: "14px", color: "#6c757d" }}>
        무거운 관리자 데이터가 로드됨 (사용자 {adminData.users.length}명, 로그{" "}
        {adminData.logs.length}개)
      </p>
    </div>
  );
}

function Example3() {
  const [user, setUser] = useState({
    role: "admin",
    permissions: ["read", "write", "delete"],
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
            setUser({ role: "admin", permissions: ["read", "write", "delete"] })
          }
          style={{
            padding: "8px 16px",
            backgroundColor: user?.role === "admin" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          관리자
        </button>
        <button
          onClick={() => setUser({ role: "user", permissions: ["read"] })}
          style={{
            padding: "8px 16px",
            backgroundColor: user?.role === "user" ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          일반 사용자
        </button>
        <button
          onClick={() => setUser(null)}
          style={{
            padding: "8px 16px",
            backgroundColor: !user ? "#007bff" : "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
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
        <p>현재 사용자: {user ? `${user.role}` : "로그인 안 됨"}</p>

        <AdminPanel user={user} />

        {(!user || user.role !== "admin") && (
          <div
            style={{
              marginTop: "15px",
              padding: "15px",
              backgroundColor: "#fff3cd",
              borderRadius: "8px",
            }}
          >
            <p>관리자 패널은 관리자만 볼 수 있습니다</p>
            <p
              style={{ fontSize: "14px", color: "#856404", marginTop: "10px" }}
            >
              💡 관리자가 아닐 때는 관리자 데이터가 로드되지 않아 성능이 좋음
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const example3Code = `function AdminPanel({ user }) {
  // 관리자가 아니면 null 반환
  // → 무거운 관리자 데이터를 로드하지 않음!
  if (!user || user.role !== 'admin') return null;

  // 관리자용 무거운 데이터
  const adminData = loadHeavyAdminData();
  const userStats = calculateComplexStats();
  const logs = fetchRecentLogs();

  return (
    <div className="admin-panel">
      <h2>관리자 패널</h2>
      <UserManagement data={adminData} />
      <Statistics stats={userStats} />
      <LogViewer logs={logs} />
    </div>
  );
}

// 일반 사용자는 무거운 관리자 데이터를
// 로드하지 않아 성능 향상!`;

function Optimization() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-5-4. 조건부 렌더링 최적화</h2>

      <TabViewer
        title="예제 1: 무거운 컴포넌트 최적화"
        description="보이지 않을 때는 null 반환하여 무거운 연산 방지"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 탭 전환 최적화"
        description="활성 탭만 렌더링하여 성능 향상"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 권한 체크로 불필요한 렌더링 방지"
        description="관리자가 아니면 관리자 데이터를 로드하지 않음"
        resultContent={<Example3 />}
        codeString={example3Code}
      />
    </div>
  );
}

export default Optimization;
