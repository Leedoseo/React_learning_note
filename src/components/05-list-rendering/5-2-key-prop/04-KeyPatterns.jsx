// 5-2-4_KeyPatterns.jsx

import React, { useState } from "react";
import TabViewer from "../../common/TabViewer";
import { v4 as uuidv4 } from "uuid"; // UUID 라이브러리 import

function KeyPatterns() {
  // 예제 1용 state (읽기 전용)
  const [users] = useState(() => {
    const rawData = [
      { name: "김철수", email: "kim@email.com", role: "개발자" },
      { name: "이영희", email: "lee@email.com", role: "디자이너" },
      { name: "박민수", email: "park@email.com", role: "기획자" },
    ];

    // id가 없는 데이터에 id 추가
    return rawData.map((user, index) => ({
      ...user,
      id: index + 1,
    }));
  });

  // 예제 2용 state
  const [appointments] = useState([
    { date: "2024-01-20", time: "09:00", doctor: "Dr.Kim", patient: "환자A" },
    { date: "2024-01-20", time: "10:00", doctor: "Dr.Lee", patient: "환자B" },
    { date: "2024-01-20", time: "11:00", doctor: "Dr.Park", patient: "환자C" },
    { date: "2024-01-21", time: "09:00", doctor: "Dr.Kim", patient: "환자D" },
  ]);

  // 예제 3용 state - 실제 UUID 사용
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    if (todoInput.trim()) {
      const newTodo = {
        id: uuidv4(), // 실제 UUID 생성
        text: todoInput,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTodoInput("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>5-2-4. key 실전 패턴</h1>
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
        id가 없을 때 처리 방법, 여러 속성 조합, UUID 생성 등<br />
        실전에서 사용할 수 있는 다양한 key 생성 패턴을 학습합니다.
      </p>

      {/* 예제 1: id가 없을 때 - 데이터 받을 때 id 추가 */}
      <TabViewer
        title="예제 1: id가 없는 데이터 처리"
        description="API 응답에 id가 없을 때 초기화 시 id를 추가하는 방법"
        resultContent={
          <div>
            <h4 style={{ marginBottom: "15px" }}>👥 사용자 목록</h4>
            <div
              style={{
                background: "#e3f2fd",
                padding: "15px",
                borderRadius: "5px",
                marginBottom: "15px",
              }}
            >
              <strong>원본 데이터 (id 없음):</strong>
              <pre
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "4px",
                  marginTop: "5px",
                  overflow: "auto",
                }}
              >
                {`[
  { name: '김철수', email: 'kim@email.com', role: '개발자' },
  { name: '이영희', email: 'lee@email.com', role: '디자이너' },
  { name: '박민수', email: 'park@email.com', role: '기획자' }
]`}
              </pre>
            </div>

            <div
              style={{
                background: "#e8f5e9",
                padding: "15px",
                borderRadius: "5px",
                marginBottom: "15px",
              }}
            >
              <strong>처리 후 (id 추가됨):</strong>
              {users.map((user) => (
                <div
                  key={user.id}
                  style={{
                    background: "white",
                    padding: "15px",
                    margin: "10px 0",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <strong>{user.name}</strong>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          marginTop: "5px",
                        }}
                      >
                        📧 {user.email}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          marginTop: "2px",
                        }}
                      >
                        💼 {user.role}
                      </div>
                    </div>
                    <div
                      style={{
                        background: "#4CAF50",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "4px",
                        fontSize: "12px",
                      }}
                    >
                      ID: {user.id}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
        codeString={`function UserList() {
  // useState 초기화 시 id 추가
  const [users, setUsers] = useState(() => {
    // API에서 받은 원본 데이터 (id 없음)
    const rawData = [
      { name: '김철수', email: 'kim@email.com', role: '개발자' },
      { name: '이영희', email: 'lee@email.com', role: '디자이너' },
      { name: '박민수', email: 'park@email.com', role: '기획자' }
    ];
    
    // id 추가하기
    return rawData.map((user, index) => ({
      ...user,
      id: index + 1  // 순차적인 id 부여
    }));
  });
  
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>  {/* 추가한 id를 key로 사용 */}
          {user.name} - {user.email} ({user.role})
        </li>
      ))}
    </ul>
  );
}

// 또는 별도 함수로 분리
const addIdsToData = (items) => {
  return items.map((item, index) => ({
    ...item,
    id: index + 1
  }));
};

const usersWithId = addIdsToData(rawData);`}
      />

      <div style={{ marginTop: "40px" }}></div>

      {/* 예제 2: 여러 속성 조합 */}
      <TabViewer
        title="예제 2: 여러 속성 조합으로 key 생성"
        description="고유한 속성들을 조합하여 key를 만드는 방법 (임시방편)"
        resultContent={
          <div>
            <h4 style={{ marginBottom: "15px" }}>📅 진료 예약 목록</h4>
            <p
              style={{ color: "#666", fontSize: "14px", marginBottom: "15px" }}
            >
              날짜 + 시간 + 의사 조합으로 고유한 key 생성
            </p>

            {appointments.map((apt) => {
              const combinedKey = `${apt.date}-${apt.time}-${apt.doctor}`;

              return (
                <div
                  key={combinedKey}
                  style={{
                    background: "white",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "15px",
                    marginBottom: "10px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <strong style={{ fontSize: "16px" }}>
                        📅 {apt.date} {apt.time}
                      </strong>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          marginTop: "5px",
                        }}
                      >
                        👨‍⚕️ {apt.doctor} | 👤 {apt.patient}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#999",
                      background: "#f5f5f5",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      fontFamily: "monospace",
                    }}
                  >
                    key: {combinedKey}
                  </div>
                </div>
              );
            })}

            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                background: "#fff3e0",
                borderRadius: "5px",
              }}
            >
              <strong>⚠️ 주의:</strong>
              <p style={{ margin: "10px 0 0 0", fontSize: "14px" }}>
                이 방법은 임시방편입니다. 가능하면 실제 id를 사용하세요.
                <br />
                - 조합한 값이 중복될 수 있음
                <br />
                - 속성이 변경되면 key도 변경됨
                <br />- key가 너무 길어질 수 있음
              </p>
            </div>
          </div>
        }
        codeString={`function AppointmentList() {
  const appointments = [
    { date: '2024-01-20', time: '09:00', doctor: 'Dr.Kim', patient: '환자A' },
    { date: '2024-01-20', time: '10:00', doctor: 'Dr.Lee', patient: '환자B' },
    { date: '2024-01-21', time: '09:00', doctor: 'Dr.Kim', patient: '환자C' }
  ];
  
  return (
    <ul>
      {appointments.map((apt) => (
        <li key={\`\${apt.date}-\${apt.time}-\${apt.doctor}\`}>
          {apt.date} {apt.time} - {apt.doctor} ({apt.patient})
        </li>
      ))}
    </ul>
  );
}

// 다른 예시: 이메일이 고유할 때
function UserList() {
  const users = [
    { name: '김철수', email: 'kim@email.com' },
    { name: '이영희', email: 'lee@email.com' }
  ];
  
  return (
    <ul>
      {users.map((user) => (
        <li key={user.email}>  {/* 이메일이 고유하므로 key로 사용 */}
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}

// 주의: 이 방법은 최후의 수단!
// 가능하면 실제 id를 사용하세요.`}
      />

      <div style={{ marginTop: "40px" }}></div>

      {/* 예제 3: UUID 생성 */}
      <TabViewer
        title="예제 3: UUID로 고유 key 생성"
        description="UUID를 사용하여 완벽하게 고유한 key를 생성하는 방법"
        resultContent={
          <div>
            <h4 style={{ marginBottom: "15px" }}>✅ Todo 리스트 (UUID 사용)</h4>

            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTodo()}
                placeholder="할 일 입력..."
                style={{
                  padding: "10px",
                  fontSize: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  width: "70%",
                  marginRight: "10px",
                }}
              />
              <button
                onClick={addTodo}
                style={{
                  padding: "10px 20px",
                  background: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                추가
              </button>
            </div>

            {todos.length === 0 ? (
              <p
                style={{ color: "#999", textAlign: "center", padding: "20px" }}
              >
                할 일을 추가해보세요!
              </p>
            ) : (
              <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map((todo) => (
                  <li
                    key={todo.id}
                    style={{
                      background: "white",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      padding: "12px",
                      marginBottom: "8px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", flex: 1 }}
                    >
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        style={{
                          marginRight: "10px",
                          width: "18px",
                          height: "18px",
                        }}
                      />
                      <span
                        style={{
                          textDecoration: todo.completed
                            ? "line-through"
                            : "none",
                          color: todo.completed ? "#999" : "#000",
                          flex: 1,
                        }}
                      >
                        {todo.text}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          color: "#999",
                          fontFamily: "monospace",
                          background: "#f5f5f5",
                          padding: "3px 6px",
                          borderRadius: "3px",
                        }}
                      >
                        {todo.id.substring(0, 8)}...
                      </span>
                      <button
                        onClick={() => removeTodo(todo.id)}
                        style={{
                          padding: "4px 12px",
                          background: "#f44336",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: "12px",
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                background: "#e8f5e9",
                borderRadius: "5px",
              }}
            >
              <strong>✅ UUID의 장점:</strong>
              <ul
                style={{
                  margin: "10px 0 0 0",
                  paddingLeft: "20px",
                  fontSize: "14px",
                }}
              >
                <li>완벽한 고유성 보장</li>
                <li>서버 통신 불필요</li>
                <li>충돌 가능성 거의 0%</li>
                <li>예측 불가능 (보안에 유리)</li>
              </ul>
            </div>
          </div>
        }
        codeString={`// UUID 라이브러리 설치
// npm install uuid

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      const newTodo = {
        id: uuidv4(),  // UUID 생성
        text: input,
        completed: false
      };
      
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };
  
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  return (
    <div>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일 입력"
      />
      <button onClick={addTodo}>추가</button>
      
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>  {/* UUID를 key로 사용 */}
            <input 
              type="checkbox" 
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// UUID 예시:
// '550e8400-e29b-41d4-a716-446655440000'
// '6ba7b810-9dad-11d1-80b4-00c04fd430c8'
// 'f47ac10b-58cc-4372-a567-0e02b2c3d479'

// UUID v1 vs v4
import { v1, v4 } from 'uuid';

const id1 = v1();  // 타임스탬프 기반
const id4 = v4();  // 완전 랜덤 (권장)`}
      />
    </div>
  );
}

export default KeyPatterns;
