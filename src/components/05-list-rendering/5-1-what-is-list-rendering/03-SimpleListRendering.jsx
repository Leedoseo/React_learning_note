// 5-1-3_SimpleListRendering.jsx

import React from "react";
import TabViewer from "../../common/TabViewer";

function SimpleListRendering() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>5-1-3. 간단한 리스트 렌더링</h1>
      <p
        style={{
          color: "#666",
          fontSize: "16px",
          marginBottom: "30px",
          padding: "15px",
          background: "#f5f5f5",
          borderRadius: "5px",
        }}
      >
        문자열 배열, 숫자 배열 등 기본적인 데이터 타입으로
        <br />
        간단한 리스트를 만들어보는 연습을 합니다.
      </p>

      {/* 예제 1: 문자열 배열 - 과일 목록 */}
      <TabViewer
        title="예제 1: 과일 목록"
        description="문자열 배열을 리스트로 렌더링하는 가장 기본적인 형태"
        resultContent={
          <div>
            <h3 style={{ marginBottom: "15px" }}>🍎 과일 메뉴</h3>
            <ul
              style={{
                listStyle: "none",
                padding: "20px",
                background: "#f5f5f5",
                borderRadius: "8px",
              }}
            >
              {[
                { name: "사과", emoji: "🍎" },
                { name: "바나나", emoji: "🍌" },
                { name: "오렌지", emoji: "🍊" },
                { name: "포도", emoji: "🍇" },
                { name: "딸기", emoji: "🍓" },
              ].map((fruit, index) => (
                <li
                  key={index}
                  style={{
                    padding: "12px",
                    margin: "8px 0",
                    background: "white",
                    borderRadius: "6px",
                    fontSize: "18px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  {fruit.emoji} {fruit.name}
                </li>
              ))}
            </ul>
          </div>
        }
        codeString={`function FruitMenu() {
  const fruits = [
    { name: '사과', emoji: '🍎' },
    { name: '바나나', emoji: '🍌' },
    { name: '오렌지', emoji: '🍊' },
    { name: '포도', emoji: '🍇' },
    { name: '딸기', emoji: '🍓' }
  ];
  
  return (
    <div>
      <h3>🍎 과일 메뉴</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit.emoji} {fruit.name}
          </li>
        ))}
      </ul>
    </div>
  );
}`}
      />

      <div style={{ marginTop: "40px" }}></div>

      {/* 예제 2: 숫자 배열 - 점수 목록 */}
      <TabViewer
        title="예제 2: 학생 점수 목록"
        description="숫자 배열을 렌더링하고 조건에 따라 다른 스타일 적용"
        resultContent={
          <div>
            <h3 style={{ marginBottom: "15px" }}>📊 학생 점수 현황</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[95, 88, 72, 65, 91].map((score, index) => {
                const getGradeColor = (score) => {
                  if (score >= 90) return "#4CAF50";
                  if (score >= 80) return "#2196F3";
                  if (score >= 70) return "#FF9800";
                  return "#F44336";
                };

                const getGradeText = (score) => {
                  if (score >= 90) return "A";
                  if (score >= 80) return "B";
                  if (score >= 70) return "C";
                  return "D";
                };

                return (
                  <li
                    key={index}
                    style={{
                      padding: "15px",
                      margin: "10px 0",
                      background: "white",
                      borderRadius: "8px",
                      borderLeft: `5px solid ${getGradeColor(score)}`,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>학생 {index + 1}</span>
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: getGradeColor(score),
                        }}
                      >
                        {score}점
                      </span>
                      <span
                        style={{
                          padding: "4px 12px",
                          background: getGradeColor(score),
                          color: "white",
                          borderRadius: "4px",
                          fontWeight: "bold",
                        }}
                      >
                        {getGradeText(score)}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        }
        codeString={`function ScoreList() {
  const scores = [95, 88, 72, 65, 91];
  
  const getGradeColor = (score) => {
    if (score >= 90) return '#4CAF50';  // 초록 - A
    if (score >= 80) return '#2196F3';  // 파랑 - B
    if (score >= 70) return '#FF9800';  // 주황 - C
    return '#F44336';  // 빨강 - D
  };
  
  const getGradeText = (score) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    return 'D';
  };
  
  return (
    <div>
      <h3>📊 학생 점수 현황</h3>
      <ul>
        {scores.map((score, index) => (
          <li 
            key={index}
            style={{
              color: getGradeColor(score),
              borderLeft: \`5px solid \${getGradeColor(score)}\`
            }}
          >
            학생 {index + 1}: {score}점 ({getGradeText(score)})
          </li>
        ))}
      </ul>
    </div>
  );
}`}
      />

      <div style={{ marginTop: "40px" }}></div>

      {/* 예제 3: 메뉴 목록 */}
      <TabViewer
        title="예제 3: 네비게이션 메뉴"
        description="웹사이트의 메뉴를 리스트 렌더링으로 만들기"
        resultContent={
          <div>
            <nav
              style={{
                background: "#1976d2",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  gap: "30px",
                  padding: 0,
                  margin: 0,
                  justifyContent: "center",
                }}
              >
                {[
                  { id: 1, label: "홈", path: "/", icon: "🏠" },
                  { id: 2, label: "소개", path: "/about", icon: "👋" },
                  { id: 3, label: "서비스", path: "/services", icon: "⚙️" },
                  { id: 4, label: "연락처", path: "/contact", icon: "📞" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.path}
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "16px",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        transition: "background 0.3s",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.background = "rgba(255,255,255,0.1)")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.background = "transparent")
                      }
                    >
                      <span style={{ fontSize: "20px" }}>{item.icon}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        }
        codeString={`function NavigationMenu() {
  const menuItems = [
    { id: 1, label: '홈', path: '/', icon: '🏠' },
    { id: 2, label: '소개', path: '/about', icon: '👋' },
    { id: 3, label: '서비스', path: '/services', icon: '⚙️' },
    { id: 4, label: '연락처', path: '/contact', icon: '📞' }
  ];
  
  return (
    <nav>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '30px',
        padding: 0 
      }}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.path}>
              {item.icon} {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}`}
      />
    </div>
  );
}

export default SimpleListRendering;
