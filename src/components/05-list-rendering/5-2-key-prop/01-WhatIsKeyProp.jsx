// 5-2-1_WhatIsKeyProp.jsx

import React, { useState } from 'react';
import TabViewer from '../../common/TabViewer';

function WhatIsKeyProp() {
  // 예제 1용 state
  const [todosWithoutKey, setTodosWithoutKey] = useState(['운동하기', '공부하기', '독서하기']);
  const [todosWithKey, setTodosWithKey] = useState([
    { id: 1, text: '운동하기' },
    { id: 2, text: '공부하기' },
    { id: 3, text: '독서하기' }
  ]);

  // 예제 2용 state
  const [items, setItems] = useState(['A', 'B', 'C', 'D']);
  const [itemsWithKey, setItemsWithKey] = useState([
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' }
  ]);

  const removeFirstWithoutKey = () => {
    setTodosWithoutKey(todosWithoutKey.slice(1));
  };

  const removeFirstWithKey = () => {
    setTodosWithKey(todosWithKey.slice(1));
  };

  const reverseItems = () => {
    setItems([...items].reverse());
  };

  const reverseItemsWithKey = () => {
    setItemsWithKey([...itemsWithKey].reverse());
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>5-2-1. key prop이란?</h1>
      <p style={{ 
        color: '#666', 
        fontSize: '16px',
        marginBottom: '30px',
        padding: '15px',
        background: '#f5f5f5',
        borderRadius: '5px'
      }}>
        key의 역할과 필요성을 이해하고,<br/>
        React 내부에서 key가 어떻게 동작하는지 학습합니다.
      </p>

      {/* 예제 1: key가 없을 때의 문제 */}
      <TabViewer
        title="예제 1: key가 없을 때 vs 있을 때"
        description="상태가 잘못된 항목에 유지되는 문제 비교"
        resultContent={
          <div>
            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ color: '#f44336' }}>❌ key 없이 (문제 발생)</h4>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
                첫 번째 항목을 체크한 후 삭제 버튼을 눌러보세요. 체크 상태가 다른 항목으로 옮겨집니다!
              </p>
              <button 
                onClick={removeFirstWithoutKey}
                style={{
                  padding: '8px 16px',
                  background: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginBottom: '10px'
                }}
              >
                첫 번째 항목 삭제
              </button>
              <ul style={{ listStyle: 'none', padding: '15px', background: '#ffebee', borderRadius: '5px' }}>
                {todosWithoutKey.map((todo, index) => (
                  <li key={index} style={{ padding: '8px 0' }}>
                    <input type="checkbox" id={`todo-no-key-${index}`} style={{ marginRight: '8px' }} />
                    <label htmlFor={`todo-no-key-${index}`}>{todo}</label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#4CAF50' }}>✅ key 사용 (정상 동작)</h4>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
                첫 번째 항목을 체크한 후 삭제 버튼을 눌러보세요. 체크 상태가 올바르게 사라집니다!
              </p>
              <button 
                onClick={removeFirstWithKey}
                style={{
                  padding: '8px 16px',
                  background: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginBottom: '10px'
                }}
              >
                첫 번째 항목 삭제
              </button>
              <ul style={{ listStyle: 'none', padding: '15px', background: '#e8f5e9', borderRadius: '5px' }}>
                {todosWithKey.map((todo) => (
                  <li key={todo.id} style={{ padding: '8px 0' }}>
                    <input type="checkbox" id={`todo-key-${todo.id}`} style={{ marginRight: '8px' }} />
                    <label htmlFor={`todo-key-${todo.id}`}>{todo.text}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
        codeString={`// ❌ key 없이 (문제 발생)
function BadTodoList() {
  const [todos, setTodos] = useState(['운동하기', '공부하기', '독서하기']);
  
  const removeFirst = () => {
    setTodos(todos.slice(1));
  };
  
  return (
    <div>
      <button onClick={removeFirst}>첫 번째 항목 삭제</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>  {/* index를 key로 사용 */}
            <input type="checkbox" />
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
// 문제: 첫 번째 항목을 체크하고 삭제하면, 
// 체크 상태가 두 번째 항목으로 옮겨감!

// ✅ key 사용 (정상 동작)
function GoodTodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '운동하기' },
    { id: 2, text: '공부하기' },
    { id: 3, text: '독서하기' }
  ]);
  
  const removeFirst = () => {
    setTodos(todos.slice(1));
  };
  
  return (
    <div>
      <button onClick={removeFirst}>첫 번째 항목 삭제</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>  {/* 고유한 id를 key로 사용 */}
            <input type="checkbox" />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
// 해결: React가 각 항목을 정확히 식별해서 
// 상태가 올바르게 유지됨!`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 2: 성능 차이 */}
      <TabViewer
        title="예제 2: 성능 차이 (재렌더링)"
        description="key가 있을 때와 없을 때의 업데이트 효율성 비교"
        resultContent={
          <div>
            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ color: '#f44336' }}>❌ key 없이 (비효율적)</h4>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
                역순 정렬 시 모든 항목이 다시 렌더링됨
              </p>
              <button 
                onClick={reverseItems}
                style={{
                  padding: '8px 16px',
                  background: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginBottom: '10px'
                }}
              >
                역순 정렬
              </button>
              <div style={{ background: '#ffebee', padding: '15px', borderRadius: '5px' }}>
                {items.map((item, index) => (
                  <div 
                    key={index}
                    style={{
                      padding: '12px',
                      margin: '5px 0',
                      background: 'white',
                      borderRadius: '4px',
                      border: '2px solid #f44336'
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p style={{ color: '#d32f2f', fontSize: '14px', marginTop: '10px' }}>
                ⚠️ React: "위치가 다 바뀌었으니 전부 다시 그려야지!"
              </p>
            </div>

            <div>
              <h4 style={{ color: '#4CAF50' }}>✅ key 사용 (효율적)</h4>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
                역순 정렬 시 순서만 조정하고 기존 요소 재사용
              </p>
              <button 
                onClick={reverseItemsWithKey}
                style={{
                  padding: '8px 16px',
                  background: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginBottom: '10px'
                }}
              >
                역순 정렬
              </button>
              <div style={{ background: '#e8f5e9', padding: '15px', borderRadius: '5px' }}>
                {itemsWithKey.map((item) => (
                  <div 
                    key={item.id}
                    style={{
                      padding: '12px',
                      margin: '5px 0',
                      background: 'white',
                      borderRadius: '4px',
                      border: '2px solid #4CAF50'
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
              <p style={{ color: '#388e3c', fontSize: '14px', marginTop: '10px' }}>
                ✅ React: "id는 그대로고 순서만 바뀌었네. 기존 요소 재사용하자!"
              </p>
            </div>
          </div>
        }
        codeString={`// ❌ key 없이 (비효율적)
function IneffcientList() {
  const [items, setItems] = useState(['A', 'B', 'C', 'D']);
  
  const reverse = () => {
    setItems([...items].reverse());
  };
  
  return (
    <div>
      <button onClick={reverse}>역순 정렬</button>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
// React의 판단:
// - 0번 위치: A → D (변경, 업데이트)
// - 1번 위치: B → C (변경, 업데이트)
// - 2번 위치: C → B (변경, 업데이트)
// - 3번 위치: D → A (변경, 업데이트)
// 결과: 4개 모두 업데이트 (비효율적!)

// ✅ key 사용 (효율적)
function EfficientList() {
  const [items, setItems] = useState([
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' }
  ]);
  
  const reverse = () => {
    setItems([...items].reverse());
  };
  
  return (
    <div>
      <button onClick={reverse}>역순 정렬</button>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
// React의 판단:
// - id:1, id:2, id:3, id:4 모두 존재
// - 순서만 바뀜
// 결과: 위치만 조정, 요소는 재사용 (효율적!)`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 3: React 내부 동작 원리 */}
      <TabViewer
        title="예제 3: React 내부 동작 원리"
        description="Virtual DOM과 reconciliation 과정"
        resultContent={
          <div>
            <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
              <h4>📋 Virtual DOM 비교 과정</h4>
              
              <div style={{ marginTop: '15px' }}>
                <strong>1단계: 이전 상태</strong>
                <pre style={{ background: 'white', padding: '10px', borderRadius: '4px', marginTop: '5px' }}>
{`[
  <li key="1">사과</li>,
  <li key="2">바나나</li>,
  <li key="3">오렌지</li>
]`}
                </pre>
              </div>

              <div style={{ marginTop: '15px' }}>
                <strong>2단계: 새로운 상태 (사과 삭제)</strong>
                <pre style={{ background: 'white', padding: '10px', borderRadius: '4px', marginTop: '5px' }}>
{`[
  <li key="2">바나나</li>,
  <li key="3">오렌지</li>
]`}
                </pre>
              </div>

              <div style={{ marginTop: '15px' }}>
                <strong>3단계: React의 판단</strong>
                <ul style={{ marginTop: '5px' }}>
                  <li>✅ key="2" 바나나 → 그대로 유지</li>
                  <li>✅ key="3" 오렌지 → 그대로 유지</li>
                  <li>❌ key="1" 사과 → 삭제</li>
                </ul>
              </div>

              <div style={{ marginTop: '15px' }}>
                <strong>4단계: 최종 결과</strong>
                <p style={{ color: '#1976d2', fontWeight: 'bold' }}>
                  → 1개 항목만 삭제 처리, 나머지는 재사용!
                </p>
              </div>
            </div>

            <div style={{ background: '#fff3e0', padding: '20px', borderRadius: '8px' }}>
              <h4>⚡ 성능 최적화 원리</h4>
              <div style={{ marginTop: '10px' }}>
                <p><strong>key 없이:</strong></p>
                <ul>
                  <li>위치 기반으로 비교</li>
                  <li>모든 항목 업데이트</li>
                  <li>DOM 조작 많음</li>
                  <li>성능 저하</li>
                </ul>
              </div>
              <div style={{ marginTop: '15px' }}>
                <p><strong>key 사용:</strong></p>
                <ul>
                  <li>고유 ID로 비교</li>
                  <li>변경된 항목만 업데이트</li>
                  <li>DOM 조작 최소화</li>
                  <li>성능 최적화</li>
                </ul>
              </div>
            </div>
          </div>
        }
        codeString={`// Virtual DOM 비교 알고리즘 (Reconciliation)

// 이전 Virtual DOM
const prevTree = [
  { key: 1, content: '사과' },
  { key: 2, content: '바나나' },
  { key: 3, content: '오렌지' }
];

// 새로운 Virtual DOM (첫 번째 항목 삭제)
const newTree = [
  { key: 2, content: '바나나' },
  { key: 3, content: '오렌지' }
];

// React의 비교 과정:
// 1. key:1 찾기 → 없음 → 삭제
// 2. key:2 찾기 → 있음 → 내용 비교 → 같음 → 재사용
// 3. key:3 찾기 → 있음 → 내용 비교 → 같음 → 재사용

// 최종 DOM 조작:
// - key:1 요소만 실제 DOM에서 삭제
// - key:2, key:3은 그대로 유지

// 만약 key가 없었다면:
// - 0번 위치: '사과' → '바나나' (업데이트)
// - 1번 위치: '바나나' → '오렌지' (업데이트)
// - 2번 위치: 삭제
// 결과: 3개 항목 모두 처리 (비효율적)`}
      />
    </div>
  );
}

export default WhatIsKeyProp;