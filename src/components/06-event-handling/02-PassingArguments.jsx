// 6-2_PassingArguments.jsx

import React, { useState } from 'react';
import TabViewer from '../common/TabViewer';

function PassingArguments() {
  // 예제 2용 state
  const [items, setItems] = useState([
    { id: 1, name: '사과', price: 2000 },
    { id: 2, name: '바나나', price: 3000 },
    { id: 3, name: '오렌지', price: 2500 }
  ]);

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // 예제 3용 state
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부', completed: false },
    { id: 2, text: '운동하기', completed: true },
    { id: 3, text: '장보기', completed: false }
  ]);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>6-2. 이벤트 핸들러에 인자 전달</h1>
      <p style={{ 
        color: '#666', 
        fontSize: '16px',
        marginBottom: '30px',
        padding: '15px',
        background: '#f5f5f5',
        borderRadius: '5px'
      }}>
        이벤트 핸들러에 추가 인자를 전달하는 방법을 학습합니다.<br/>
        리스트에서 특정 항목을 삭제하거나 수정할 때 필수적인 패턴입니다.
      </p>

      {/* 예제 1: 기본 인자 전달 */}
      <TabViewer
        title="예제 1: 화살표 함수로 인자 전달"
        description="이벤트 핸들러에 추가 데이터를 전달하는 기본 방법"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>버튼마다 다른 메시지 출력</h4>
            
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['사과', '바나나', '오렌지'].map((fruit, index) => (
                <button
                  key={index}
                  onClick={() => alert(`${fruit}를 선택했습니다!`)}
                  style={{
                    padding: '10px 20px',
                    background: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  {fruit}
                </button>
              ))}
            </div>

            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              background: '#e3f2fd', 
              borderRadius: '5px' 
            }}>
              <strong>📌 핵심 패턴:</strong>
              <pre style={{ 
                background: 'white', 
                padding: '10px', 
                borderRadius: '4px',
                marginTop: '10px',
                overflow: 'auto'
              }}>
{`// ❌ 잘못된 방법 - 즉시 실행됨
<button onClick={handleClick(fruit)}>

// ✅ 올바른 방법 - 화살표 함수로 감싸기
<button onClick={() => handleClick(fruit)}>`}
              </pre>
            </div>
          </div>
        }
        codeString={`function PassingArgumentsBasic() {
  const handleClick = (fruit) => {
    alert(\`\${fruit}를 선택했습니다!\`);
  };
  
  const fruits = ['사과', '바나나', '오렌지'];
  
  return (
    <div>
      {fruits.map((fruit, index) => (
        <button 
          key={index}
          onClick={() => handleClick(fruit)}  // 화살표 함수로 감싸기
        >
          {fruit}
        </button>
      ))}
    </div>
  );
}

// 왜 화살표 함수가 필요할까?
// onClick={handleClick(fruit)}     // ❌ 렌더링 시 즉시 실행됨
// onClick={() => handleClick(fruit)} // ✅ 클릭 시 실행됨

// 여러 인자 전달
const handleClick = (fruit, price) => {
  console.log(\`\${fruit}: \${price}원\`);
};

<button onClick={() => handleClick('사과', 2000)}>
  사과
</button>`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 2: 삭제 기능 */}
      <TabViewer
        title="예제 2: 리스트 항목 삭제"
        description="각 항목의 id를 전달하여 특정 항목만 삭제"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>🛒 장바구니</h4>
            
            {items.length === 0 ? (
              <p style={{ 
                textAlign: 'center', 
                padding: '40px', 
                color: '#999',
                background: '#f5f5f5',
                borderRadius: '8px'
              }}>
                장바구니가 비었습니다
              </p>
            ) : (
              <div>
                {items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '15px',
                      marginBottom: '10px',
                      background: 'white',
                      border: '1px solid #ddd',
                      borderRadius: '8px'
                    }}
                  >
                    <div>
                      <strong>{item.name}</strong>
                      <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
                        {item.price.toLocaleString()}원
                      </p>
                    </div>
                    <button
                      onClick={() => deleteItem(item.id)}
                      style={{
                        padding: '8px 16px',
                        background: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}
                    >
                      삭제
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        }
        codeString={`function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: '사과', price: 2000 },
    { id: 2, name: '바나나', price: 3000 },
    { id: 3, name: '오렌지', price: 2500 }
  ]);
  
  const deleteItem = (id) => {
    // id가 일치하지 않는 항목만 남김
    setItems(items.filter(item => item.id !== id));
  };
  
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name} - {item.price}원</span>
          
          {/* id를 인자로 전달 */}
          <button onClick={() => deleteItem(item.id)}>
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}

// 동작 원리:
// 1. 사과 삭제 버튼 클릭
// 2. deleteItem(1) 실행
// 3. id가 1이 아닌 항목만 필터링
// 4. 바나나, 오렌지만 남음`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 3: 토글 + 삭제 */}
      <TabViewer
        title="예제 3: 여러 기능 구현 (토글 + 삭제)"
        description="하나의 리스트에서 여러 이벤트 핸들러 사용"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>✅ Todo 리스트</h4>
            
            {todos.length === 0 ? (
              <p style={{ 
                textAlign: 'center', 
                padding: '40px', 
                color: '#999',
                background: '#f5f5f5',
                borderRadius: '8px'
              }}>
                모든 할 일을 완료했습니다!
              </p>
            ) : (
              <div>
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px',
                      marginBottom: '8px',
                      background: todo.completed ? '#e8f5e9' : 'white',
                      border: '1px solid #ddd',
                      borderRadius: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                      <span style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? '#999' : '#000'
                      }}>
                        {todo.text}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      style={{
                        padding: '6px 12px',
                        background: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      삭제
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        }
        codeString={`function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부', completed: false },
    { id: 2, text: '운동하기', completed: true },
    { id: 3, text: '장보기', completed: false }
  ]);
  
  // 완료 상태 토글
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id 
        ? { ...todo, completed: !todo.completed }  // id 일치하면 토글
        : todo  // 일치하지 않으면 그대로
    ));
  };
  
  // 삭제
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {/* 체크박스 - 토글 */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          
          <span style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}>
            {todo.text}
          </span>
          
          {/* 삭제 버튼 */}
          <button onClick={() => deleteTodo(todo.id)}>
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}

// 핵심 패턴:
// 1. map으로 리스트 렌더링
// 2. 각 항목의 id를 핸들러에 전달
// 3. 전달받은 id로 특정 항목만 처리`}
      />
    </div>
  );
}

export default PassingArguments;