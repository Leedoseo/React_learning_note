// 5-2-3_KeyErrorsAndSolutions.jsx

import React, { useState } from 'react';
import TabViewer from '../../common/TabViewer';

function KeyErrorsAndSolutions() {
  // 예제 1용 state
  const [todosNoKey, setTodosNoKey] = useState(['운동하기', '공부하기', '독서하기']);
  const [todosWithId, setTodosWithId] = useState([
    { id: 1, text: '운동하기' },
    { id: 2, text: '공부하기' },
    { id: 3, text: '독서하기' }
  ]);

  // 예제 2용 state
  const [itemsIndex, setItemsIndex] = useState(['A', 'B', 'C']);
  const [itemsId, setItemsId] = useState([
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' }
  ]);

  // 예제 3용 state  
  const [sortItems, setSortItems] = useState(['C', 'A', 'B']);
  const [sortItemsId, setSortItemsId] = useState([
    { id: 3, name: 'C' },
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
  ]);

  const removeFirstNoKey = () => setTodosNoKey(todosNoKey.slice(1));
  const removeFirstWithId = () => setTodosWithId(todosWithId.slice(1));
  
  const addToBeginningIndex = () => setItemsIndex(['NEW', ...itemsIndex]);
  const addToBeginningId = () => setItemsId([{ id: Date.now(), name: 'NEW' }, ...itemsId]);

  const sortWithIndex = () => setSortItems([...sortItems].sort());
  const sortWithId = () => setSortItemsId([...sortItemsId].sort((a, b) => a.name.localeCompare(b.name)));

  return (
    <div style={{ padding: '20px' }}>
      <h1>5-2-3. key 관련 에러와 해결</h1>
      <p style={{ 
        color: '#666', 
        fontSize: '16px',
        marginBottom: '30px',
        padding: '15px',
        background: '#f5f5f5',
        borderRadius: '5px'
      }}>
        key 관련 경고와 문제를 이해하고,<br/>
        index를 key로 사용하면 안 되는 이유를 실습을 통해 학습합니다.
      </p>

      {/* 예제 1: 항목 삭제 시 상태 혼동 */}
      <TabViewer
        title="예제 1: 항목 삭제 시 상태 혼동 문제"
        description="index를 key로 사용하면 체크 상태가 잘못된 항목으로 옮겨감"
        resultContent={
          <div>
            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ color: '#f44336' }}>❌ index를 key로 사용 (문제 발생)</h4>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
                첫 번째 항목을 체크한 후 삭제해보세요. 체크 상태가 다음 항목으로 옮겨갑니다!
              </p>
              <button 
                onClick={removeFirstNoKey}
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
              <ul style={{ 
                listStyle: 'none', 
                background: '#ffebee', 
                padding: '15px', 
                borderRadius: '5px' 
              }}>
                {todosNoKey.map((todo, index) => (
                  <li key={index} style={{ padding: '8px 0', fontSize: '16px' }}>
                    <input 
                      type="checkbox" 
                      id={`todo-index-${index}`}
                      style={{ marginRight: '8px', width: '18px', height: '18px' }} 
                    />
                    <label htmlFor={`todo-index-${index}`}>{todo}</label>
                    <span style={{ marginLeft: '10px', color: '#999', fontSize: '12px' }}>
                      (key: {index})
                    </span>
                  </li>
                ))}
              </ul>
              <div style={{ 
                marginTop: '10px', 
                padding: '10px', 
                background: '#ffcdd2', 
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                <strong>왜 문제가?</strong><br/>
                React는 index로 항목을 식별하므로, "0번 항목"의 체크 상태를 유지합니다.<br/>
                하지만 실제로는 0번 항목이 다른 내용으로 바뀐 것!
              </div>
            </div>

            <div>
              <h4 style={{ color: '#4CAF50' }}>✅ 고유 id를 key로 사용 (정상 동작)</h4>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
                첫 번째 항목을 체크한 후 삭제해보세요. 체크 상태가 올바르게 사라집니다!
              </p>
              <button 
                onClick={removeFirstWithId}
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
              <ul style={{ 
                listStyle: 'none', 
                background: '#e8f5e9', 
                padding: '15px', 
                borderRadius: '5px' 
              }}>
                {todosWithId.map((todo) => (
                  <li key={todo.id} style={{ padding: '8px 0', fontSize: '16px' }}>
                    <input 
                      type="checkbox" 
                      id={`todo-id-${todo.id}`}
                      style={{ marginRight: '8px', width: '18px', height: '18px' }} 
                    />
                    <label htmlFor={`todo-id-${todo.id}`}>{todo.text}</label>
                    <span style={{ marginLeft: '10px', color: '#999', fontSize: '12px' }}>
                      (key: {todo.id})
                    </span>
                  </li>
                ))}
              </ul>
              <div style={{ 
                marginTop: '10px', 
                padding: '10px', 
                background: '#c8e6c9', 
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                <strong>해결!</strong><br/>
                React가 id로 항목을 정확히 식별하므로, 삭제된 항목의 상태도 함께 사라집니다.
              </div>
            </div>
          </div>
        }
        codeString={`// ❌ index를 key로 사용 (문제)
function BadTodoList() {
  const [todos, setTodos] = useState(['운동하기', '공부하기', '독서하기']);
  
  const removeFirst = () => {
    setTodos(todos.slice(1));
  };
  
  return (
    <div>
      <button onClick={removeFirst}>첫 번째 삭제</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>  {/* ❌ index 사용 */}
            <input type="checkbox" />
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 삭제 전: [0: 운동하기(체크됨), 1: 공부하기, 2: 독서하기]
// 삭제 후: [0: 공부하기, 1: 독서하기]
// React: "0번 항목이 여전히 있네. 체크 상태 유지!"
// 결과: 체크 상태가 '공부하기'로 옮겨감 (버그!)

// ✅ 고유 id를 key로 사용 (해결)
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
      <button onClick={removeFirst}>첫 번째 삭제</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>  {/* ✅ 고유 id 사용 */}
            <input type="checkbox" />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 삭제 전: [id:1 운동하기(체크됨), id:2 공부하기, id:3 독서하기]
// 삭제 후: [id:2 공부하기, id:3 독서하기]
// React: "id:1이 사라졌네. id:2와 id:3은 그대로!"
// 결과: 정확히 삭제됨!`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 2: 항목 추가 시 성능 문제 */}
      <TabViewer
        title="예제 2: 맨 앞에 항목 추가 시 성능 문제"
        description="index를 key로 사용하면 모든 항목이 재렌더링됨"
        resultContent={
          <div>
            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ color: '#f44336' }}>❌ index를 key로 사용 (비효율적)</h4>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
                버튼을 눌러 맨 앞에 항목을 추가해보세요.
              </p>
              <button 
                onClick={addToBeginningIndex}
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
                맨 앞에 NEW 추가
              </button>
              <div style={{ background: '#ffebee', padding: '15px', borderRadius: '5px' }}>
                {itemsIndex.map((item, index) => (
                  <div 
                    key={index}
                    style={{
                      padding: '12px',
                      margin: '5px 0',
                      background: 'white',
                      borderRadius: '4px',
                      border: '2px solid #f44336',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{item}</span>
                    <span style={{ fontSize: '12px', color: '#999' }}>key: {index}</span>
                  </div>
                ))}
              </div>
              <div style={{ 
                marginTop: '10px', 
                padding: '10px', 
                background: '#ffcdd2', 
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                <strong>성능 문제:</strong><br/>
                모든 항목의 index가 바뀌므로 전체가 재렌더링됨!<br/>
                - 0번: A → NEW (업데이트)<br/>
                - 1번: B → A (업데이트)<br/>
                - 2번: C → B (업데이트)<br/>
                - 3번: (없음) → C (생성)
              </div>
            </div>

            <div>
              <h4 style={{ color: '#4CAF50' }}>✅ 고유 id를 key로 사용 (효율적)</h4>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '10px' }}>
                버튼을 눌러 맨 앞에 항목을 추가해보세요.
              </p>
              <button 
                onClick={addToBeginningId}
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
                맨 앞에 NEW 추가
              </button>
              <div style={{ background: '#e8f5e9', padding: '15px', borderRadius: '5px' }}>
                {itemsId.map((item) => (
                  <div 
                    key={item.id}
                    style={{
                      padding: '12px',
                      margin: '5px 0',
                      background: 'white',
                      borderRadius: '4px',
                      border: '2px solid #4CAF50',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.name}</span>
                    <span style={{ fontSize: '12px', color: '#999' }}>key: {item.id}</span>
                  </div>
                ))}
              </div>
              <div style={{ 
                marginTop: '10px', 
                padding: '10px', 
                background: '#c8e6c9', 
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                <strong>성능 최적화:</strong><br/>
                React가 id로 항목을 식별하므로 1개만 추가, 나머지는 재사용!<br/>
                - id:new → NEW (생성)<br/>
                - id:1 → A (유지)<br/>
                - id:2 → B (유지)<br/>
                - id:3 → C (유지)
              </div>
            </div>
          </div>
        }
        codeString={`// ❌ index를 key로 사용 (비효율적)
function BadAddList() {
  const [items, setItems] = useState(['A', 'B', 'C']);
  
  const addToBeginning = () => {
    setItems(['NEW', ...items]);
  };
  
  return (
    <div>
      <button onClick={addToBeginning}>맨 앞에 추가</button>
      <div>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

// 추가 전: [0: A, 1: B, 2: C]
// 추가 후: [0: NEW, 1: A, 2: B, 3: C]
// React의 판단: 0,1,2번 모두 내용이 바뀜 → 모두 업데이트
// 결과: 4개 항목 모두 처리 (비효율적!)

// ✅ 고유 id를 key로 사용 (효율적)
function GoodAddList() {
  const [items, setItems] = useState([
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' }
  ]);
  
  const addToBeginning = () => {
    setItems([{ id: Date.now(), name: 'NEW' }, ...items]);
  };
  
  return (
    <div>
      <button onClick={addToBeginning}>맨 앞에 추가</button>
      <div>
        {items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}

// 추가 전: [id:1 A, id:2 B, id:3 C]
// 추가 후: [id:new NEW, id:1 A, id:2 B, id:3 C]
// React의 판단: id:new만 새로 추가, 나머지는 그대로
// 결과: 1개만 생성, 나머지는 위치만 조정 (효율적!)`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 3: 정렬 시 문제 */}
      <TabViewer
        title="예제 3: 정렬 시 모든 항목 재렌더링 문제"
        description="index를 key로 사용하면 정렬 시 모든 항목이 업데이트됨"
        resultContent={
          <div>
            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ color: '#f44336' }}>❌ index를 key로 사용 (비효율적)</h4>
              <button 
                onClick={sortWithIndex}
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
                알파벳순 정렬
              </button>
              <div style={{ background: '#ffebee', padding: '15px', borderRadius: '5px' }}>
                {sortItems.map((item, index) => (
                  <div 
                    key={index}
                    style={{
                      padding: '12px',
                      margin: '5px 0',
                      background: 'white',
                      borderRadius: '4px',
                      border: '2px solid #f44336',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p style={{ 
                marginTop: '10px', 
                padding: '10px', 
                background: '#ffcdd2', 
                borderRadius: '4px',
                fontSize: '14px',
                margin: '10px 0 0 0'
              }}>
                <strong>문제:</strong> 모든 항목의 내용이 바뀌었다고 판단해서 전체 재렌더링
              </p>
            </div>

            <div>
              <h4 style={{ color: '#4CAF50' }}>✅ 고유 id를 key로 사용 (효율적)</h4>
              <button 
                onClick={sortWithId}
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
                알파벳순 정렬
              </button>
              <div style={{ background: '#e8f5e9', padding: '15px', borderRadius: '5px' }}>
                {sortItemsId.map((item) => (
                  <div 
                    key={item.id}
                    style={{
                      padding: '12px',
                      margin: '5px 0',
                      background: 'white',
                      borderRadius: '4px',
                      border: '2px solid #4CAF50',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
              <p style={{ 
                marginTop: '10px', 
                padding: '10px', 
                background: '#c8e6c9', 
                borderRadius: '4px',
                fontSize: '14px',
                margin: '10px 0 0 0'
              }}>
                <strong>해결:</strong> 항목은 그대로고 순서만 바뀌었다고 인식해서 위치만 조정
              </p>
            </div>
          </div>
        }
        codeString={`// ❌ index를 key로 사용 (비효율적)
function BadSortList() {
  const [items, setItems] = useState(['C', 'A', 'B']);
  
  const sort = () => {
    setItems([...items].sort());
  };
  
  return (
    <div>
      <button onClick={sort}>정렬</button>
      <div>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

// 정렬 전: [0: C, 1: A, 2: B]
// 정렬 후: [0: A, 1: B, 2: C]
// React: "0번이 C→A, 1번이 A→B, 2번이 B→C로 바뀜"
// 결과: 3개 모두 업데이트 (비효율적!)

// ✅ 고유 id를 key로 사용 (효율적)
function GoodSortList() {
  const [items, setItems] = useState([
    { id: 3, name: 'C' },
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
  ]);
  
  const sort = () => {
    setItems([...items].sort((a, b) => a.name.localeCompare(b.name)));
  };
  
  return (
    <div>
      <button onClick={sort}>정렬</button>
      <div>
        {items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}

// 정렬 전: [id:3 C, id:1 A, id:2 B]
// 정렬 후: [id:1 A, id:2 B, id:3 C]
// React: "id:1, id:2, id:3 모두 그대로, 순서만 바뀜"
// 결과: 위치만 조정, 요소는 재사용 (효율적!)`}
      />
    </div>
  );
}

export default KeyErrorsAndSolutions;