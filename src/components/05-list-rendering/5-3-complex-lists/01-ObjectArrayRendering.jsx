// 5-3-1_ObjectArrayRendering.jsx

import React from "react";
import TabViewer from "../../common/TabViewer";

function ObjectArrayRendering() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>5-3-1. 객체 배열 렌더링</h1>
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
        객체의 여러 속성에 접근하고, 복잡한 데이터 구조를 렌더링하며,
        <br />
        실무에서 자주 사용하는 패턴을 학습합니다.
      </p>

      {/* 예제 1: 기본 객체 배열 */}
      <TabViewer
        title="예제 1: 기본 객체 배열 렌더링"
        description="객체의 여러 속성에 접근하여 화면에 표시"
        resultContent={
          <div>
            <h4 style={{ marginBottom: "15px" }}>👥 사용자 목록</h4>
            {[
              {
                id: 1,
                name: "김철수",
                age: 25,
                job: "개발자",
                email: "kim@email.com",
              },
              {
                id: 2,
                name: "이영희",
                age: 30,
                job: "디자이너",
                email: "lee@email.com",
              },
              {
                id: 3,
                name: "박민수",
                age: 28,
                job: "기획자",
                email: "park@email.com",
              },
            ].map((user) => (
              <div
                key={user.id}
                style={{
                  background: "white",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "15px",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h4 style={{ margin: "0 0 5px 0" }}>{user.name}</h4>
                  <p
                    style={{ margin: "3px 0", fontSize: "14px", color: "#666" }}
                  >
                    📧 {user.email}
                  </p>
                  <p
                    style={{ margin: "3px 0", fontSize: "14px", color: "#666" }}
                  >
                    💼 {user.job} | 🎂 {user.age}세
                  </p>
                </div>
                <div
                  style={{
                    background: "#e3f2fd",
                    padding: "5px 12px",
                    borderRadius: "15px",
                    fontSize: "12px",
                    color: "#1976d2",
                  }}
                >
                  ID: {user.id}
                </div>
              </div>
            ))}
          </div>
        }
        codeString={`function UserList() {
  const users = [
    { id: 1, name: '김철수', age: 25, job: '개발자', email: 'kim@email.com' },
    { id: 2, name: '이영희', age: 30, job: '디자이너', email: 'lee@email.com' },
    { id: 3, name: '박민수', age: 28, job: '기획자', email: 'park@email.com' }
  ];
  
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.age}세 - {user.job}
        </li>
      ))}
    </ul>
  );
}

// 구조 분해 할당으로 더 깔끔하게
function UserListClean() {
  const users = [...];
  
  return (
    <ul>
      {users.map(({ id, name, age, job }) => (
        <li key={id}>
          {name} - {age}세 - {job}
        </li>
      ))}
    </ul>
  );
}`}
      />

      <div style={{ marginTop: "40px" }}></div>

      {/* 예제 2: 중첩된 객체 구조 */}
      <TabViewer
        title="예제 2: 중첩된 객체 렌더링"
        description="객체 안에 또 다른 객체가 있는 복잡한 구조"
        resultContent={
          <div>
            <h4 style={{ marginBottom: "15px" }}>💻 상품 목록</h4>
            {[
              {
                id: 1,
                name: "노트북",
                price: 1500000,
                specs: {
                  cpu: "Intel i7",
                  ram: "16GB",
                  storage: "512GB SSD",
                },
                inStock: true,
              },
              {
                id: 2,
                name: "마우스",
                price: 50000,
                specs: {
                  dpi: "16000",
                  buttons: 8,
                  wireless: true,
                },
                inStock: false,
              },
            ].map((product) => (
              <div
                key={product.id}
                style={{
                  background: "white",
                  border: "2px solid #ddd",
                  borderRadius: "10px",
                  padding: "20px",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <h3 style={{ margin: "0 0 10px 0" }}>{product.name}</h3>
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#f44336",
                        margin: "5px 0",
                      }}
                    >
                      {product.price.toLocaleString()}원
                    </p>
                  </div>
                  <div
                    style={{
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      background: product.inStock ? "#e8f5e9" : "#ffebee",
                      color: product.inStock ? "#4CAF50" : "#f44336",
                    }}
                  >
                    {product.inStock ? "✅ 재고 있음" : "❌ 품절"}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "15px",
                    padding: "15px",
                    background: "#f5f5f5",
                    borderRadius: "6px",
                  }}
                >
                  <strong style={{ display: "block", marginBottom: "10px" }}>
                    📋 사양:
                  </strong>
                  {product.specs.cpu && (
                    <p style={{ margin: "5px 0", fontSize: "14px" }}>
                      • CPU: {product.specs.cpu}
                    </p>
                  )}
                  {product.specs.ram && (
                    <p style={{ margin: "5px 0", fontSize: "14px" }}>
                      • RAM: {product.specs.ram}
                    </p>
                  )}
                  {product.specs.storage && (
                    <p style={{ margin: "5px 0", fontSize: "14px" }}>
                      • 저장공간: {product.specs.storage}
                    </p>
                  )}
                  {product.specs.dpi && (
                    <p style={{ margin: "5px 0", fontSize: "14px" }}>
                      • DPI: {product.specs.dpi}
                    </p>
                  )}
                  {product.specs.buttons && (
                    <p style={{ margin: "5px 0", fontSize: "14px" }}>
                      • 버튼: {product.specs.buttons}개
                    </p>
                  )}
                  {product.specs.wireless !== undefined && (
                    <p style={{ margin: "5px 0", fontSize: "14px" }}>
                      • 무선: {product.specs.wireless ? "Yes" : "No"}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        }
        codeString={`function ProductList() {
  const products = [
    {
      id: 1,
      name: '노트북',
      price: 1500000,
      specs: {
        cpu: 'Intel i7',
        ram: '16GB',
        storage: '512GB SSD'
      },
      inStock: true
    },
    {
      id: 2,
      name: '마우스',
      price: 50000,
      specs: {
        dpi: '16000',
        buttons: 8,
        wireless: true
      },
      inStock: false
    }
  ];
  
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>가격: {product.price.toLocaleString()}원</p>
          <p>재고: {product.inStock ? '있음' : '품절'}</p>
          
          <div>
            <strong>사양:</strong>
            {/* 중첩된 객체의 속성 접근 */}
            {product.specs.cpu && <p>CPU: {product.specs.cpu}</p>}
            {product.specs.ram && <p>RAM: {product.specs.ram}</p>}
            {product.specs.dpi && <p>DPI: {product.specs.dpi}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}`}
      />

      <div style={{ marginTop: "40px" }}></div>

      {/* 예제 3: 객체 안에 배열 */}
      <TabViewer
        title="예제 3: 객체 안에 배열이 있는 구조"
        description="객체의 속성이 배열인 경우 중첩 map 사용"
        resultContent={
          <div>
            <h4 style={{ marginBottom: "15px" }}>📚 강의 목록</h4>
            {[
              {
                id: 1,
                title: "React 기초",
                instructor: "김강사",
                duration: "8주",
                tags: ["JavaScript", "React", "Frontend"],
              },
              {
                id: 2,
                title: "Node.js 백엔드",
                instructor: "이강사",
                duration: "10주",
                tags: ["JavaScript", "Node.js", "Backend", "API"],
              },
              {
                id: 3,
                title: "TypeScript 완벽가이드",
                instructor: "박강사",
                duration: "6주",
                tags: ["TypeScript", "JavaScript"],
              },
            ].map((course) => (
              <div
                key={course.id}
                style={{
                  background: "white",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "20px",
                  marginBottom: "15px",
                }}
              >
                <h3 style={{ margin: "0 0 10px 0", color: "#1976d2" }}>
                  {course.title}
                </h3>
                <p style={{ margin: "5px 0", color: "#666", fontSize: "14px" }}>
                  👨‍🏫 강사: {course.instructor}
                </p>
                <p style={{ margin: "5px 0", color: "#666", fontSize: "14px" }}>
                  ⏱️ 기간: {course.duration}
                </p>

                <div style={{ marginTop: "15px" }}>
                  <strong
                    style={{
                      fontSize: "14px",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    🏷️ 태그:
                  </strong>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                  >
                    {course.tags.map((tag, index) => (
                      <span
                        key={index}
                        style={{
                          background: "#e3f2fd",
                          color: "#1976d2",
                          padding: "5px 12px",
                          borderRadius: "15px",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
        codeString={`function CourseList() {
  const courses = [
    {
      id: 1,
      title: 'React 기초',
      instructor: '김강사',
      tags: ['JavaScript', 'React', 'Frontend']
    },
    {
      id: 2,
      title: 'Node.js 백엔드',
      instructor: '이강사',
      tags: ['JavaScript', 'Node.js', 'Backend']
    }
  ];
  
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <p>강사: {course.instructor}</p>
          
          {/* 객체 안의 배열을 렌더링 - 중첩 map */}
          <div>
            {course.tags.map((tag, index) => (
              <span 
                key={index}
                style={{
                  background: '#e3f2fd',
                  padding: '5px 10px',
                  margin: '0 5px',
                  borderRadius: '15px'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// 주의: 내부 배열의 key는 보통 index를 사용
// (태그 자체는 고유 id가 없는 경우가 많음)`}
      />
    </div>
  );
}

export default ObjectArrayRendering;
