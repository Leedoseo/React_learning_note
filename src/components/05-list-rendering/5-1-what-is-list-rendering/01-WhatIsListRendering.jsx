// 5-1-1_WhatIsListRendering.jsx

import React, { useState } from "react";
import TabViewer from "../../common/TabViewer";

function WhatIsListRendering() {
  // 예제 2용 state
  const [tasks, setTasks] = useState(["청소", "빨래", "설거지"]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>5-1-1. 리스트 렌더링이란?</h1>
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
        배열 데이터를 화면의 UI 요소로 변환하는 과정을 이해하고,
        <br />왜 리스트 렌더링이 필요한지 다양한 예제를 통해 학습합니다.
      </p>

      {/* 예제 1: 코드 중복 비교 */}
      <TabViewer
        title="예제 1: 코드 중복 비교"
        description="리스트 렌더링을 사용하지 않을 때와 사용할 때의 차이"
        resultContent={
          <div>
            <h4>❌ 리스트 렌더링 없이 (비효율적)</h4>
            <ul
              style={{
                background: "#ffebee",
                padding: "15px",
                borderRadius: "5px",
              }}
            >
              <li>사과</li>
              <li>바나나</li>
              <li>오렌지</li>
              <li>포도</li>
              <li>딸기</li>
            </ul>
            <p style={{ color: "#d32f2f" }}>
              → 항목마다 코드를 반복 작성해야 함<br />→ 항목이 많아지면 관리가
              어려움
            </p>

            <h4 style={{ marginTop: "20px" }}>
              ✅ 리스트 렌더링 사용 (효율적)
            </h4>
            <ul
              style={{
                background: "#e8f5e9",
                padding: "15px",
                borderRadius: "5px",
              }}
            >
              {["사과", "바나나", "오렌지", "포도", "딸기"].map(
                (fruit, index) => (
                  <li key={index}>{fruit}</li>
                ),
              )}
            </ul>
            <p style={{ color: "#388e3c" }}>
              → 배열 데이터만 관리하면 됨<br />→ 코드가 간결하고 확장하기 쉬움
            </p>
          </div>
        }
        codeString={`// ❌ 리스트 렌더링 없이 (비효율적)
function BadExample() {
  return (
    <ul>
      <li>사과</li>
      <li>바나나</li>
      <li>오렌지</li>
      <li>포도</li>
      <li>딸기</li>
    </ul>
  );
}

// ✅ 리스트 렌더링 사용 (효율적)
function GoodExample() {
  const fruits = ['사과', '바나나', '오렌지', '포도', '딸기'];
  
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}`}
      />

      <div style={{ marginTop: "40px" }}></div>

      {/* 예제 2: 동적 데이터 처리 */}
      <TabViewer
        title="예제 2: 동적 데이터 처리"
        description="데이터가 변경되면 UI가 자동으로 업데이트됨"
        resultContent={
          <div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="새로운 할 일"
                style={{
                  padding: "8px",
                  marginRight: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
              <button
                onClick={addTask}
                style={{
                  padding: "8px 16px",
                  background: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                추가
              </button>
            </div>

            <div
              style={{
                background: "#f5f5f5",
                padding: "15px",
                borderRadius: "5px",
              }}
            >
              <p>
                <strong>현재 할 일 개수: {tasks.length}개</strong>
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    style={{
                      padding: "10px",
                      margin: "5px 0",
                      background: "white",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{task}</span>
                    <button
                      onClick={() => removeTask(index)}
                      style={{
                        padding: "4px 8px",
                        background: "#f44336",
                        color: "white",
                        border: "none",
                        borderRadius: "3px",
                        cursor: "pointer",
                        fontSize: "12px",
                      }}
                    >
                      삭제
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
        codeString={`function DynamicList() {
  const [tasks, setTasks] = useState(['청소', '빨래', '설거지']);
  const [inputValue, setInputValue] = useState('');
  
  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };
  
  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };
  
  return (
    <div>
      <input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="새로운 할 일"
      />
      <button onClick={addTask}>추가</button>
      
      <p>현재 할 일 개수: {tasks.length}개</p>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
      />

      <div style={{ marginTop: "40px" }}></div>

      {/* 예제 3: 실무 사례 - 쇼핑몰 상품 목록 */}
      <TabViewer
        title="예제 3: 실무 사례 - 쇼핑몰 상품 목록"
        description="서버에서 받아온 상품 데이터를 화면에 표시"
        resultContent={
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "15px",
            }}
          >
            {[
              { id: 1, name: "노트북", price: 1500000, category: "전자기기" },
              { id: 2, name: "키보드", price: 120000, category: "주변기기" },
              { id: 3, name: "마우스", price: 80000, category: "주변기기" },
            ].map((product) => (
              <div
                key={product.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "15px",
                  background: "white",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: "#1976d2",
                    marginBottom: "8px",
                    fontWeight: "bold",
                  }}
                >
                  {product.category}
                </div>
                <h4 style={{ margin: "0 0 10px 0" }}>{product.name}</h4>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#f44336",
                    margin: "10px 0",
                  }}
                >
                  {product.price.toLocaleString()}원
                </p>
                <button
                  style={{
                    width: "100%",
                    padding: "8px",
                    background: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  장바구니 담기
                </button>
              </div>
            ))}
          </div>
        }
        codeString={`function ProductList() {
  const products = [
    { id: 1, name: '노트북', price: 1500000, category: '전자기기' },
    { id: 2, name: '키보드', price: 120000, category: '주변기기' },
    { id: 3, name: '마우스', price: 80000, category: '주변기기' }
  ];
  
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="category">{product.category}</div>
          <h4>{product.name}</h4>
          <p className="price">{product.price.toLocaleString()}원</p>
          <button>장바구니 담기</button>
        </div>
      ))}
    </div>
  );
}`}
      />
    </div>
  );
}

export default WhatIsListRendering;
