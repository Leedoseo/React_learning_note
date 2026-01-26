// src/components/04-conditional-rendering/4-3-ternary/02-TernaryInJSX.jsx
import { useState } from 'react';
import TabViewer from '../../common/TabViewer';

// 예제 1: 텍스트 인라인 변경
function Example1() {
  const [isOnline, setIsOnline] = useState(true);
  const userName = '홍길동';

  return (
    <div>
      <button 
        onClick={() => setIsOnline(!isOnline)}
        style={{
          padding: '8px 16px',
          marginBottom: '15px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        상태 토글
      </button>

      <div style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h2>
          {userName}님은 현재 
          {isOnline ? ' 온라인' : ' 오프라인'} 
          상태입니다
        </h2>

        <p>
          {isOnline 
            ? '메시지를 보낼 수 있습니다 💬' 
            : '나중에 다시 시도해주세요 ⏰'}
        </p>

        <span style={{ fontSize: '24px' }}>
          {isOnline ? '🟢' : '⚫'}
        </span>
      </div>
    </div>
  );
}

const example1Code = `function StatusMessage({ isOnline, userName }) {
  return (
    <div>
      <h2>
        {userName}님은 현재 
        {isOnline ? ' 온라인' : ' 오프라인'} 
        상태입니다
      </h2>

      <p>
        {isOnline 
          ? '메시지를 보낼 수 있습니다 💬' 
          : '나중에 다시 시도해주세요 ⏰'}
      </p>

      <span>
        {isOnline ? '🟢' : '⚫'}
      </span>
    </div>
  );
}`;

// 예제 2: JSX 요소 선택
function Example2() {
  const [type, setType] = useState('success');

  return (
    <div>
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setType('success')}
          style={{
            padding: '8px 16px',
            backgroundColor: type === 'success' ? '#28a745' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          성공
        </button>
        <button 
          onClick={() => setType('error')}
          style={{
            padding: '8px 16px',
            backgroundColor: type === 'error' ? '#dc3545' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          에러
        </button>
        <button 
          onClick={() => setType('warning')}
          style={{
            padding: '8px 16px',
            backgroundColor: type === 'warning' ? '#ffc107' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          경고
        </button>
      </div>

      {type === 'success' ? (
        <div style={{
          padding: '15px',
          backgroundColor: '#d4edda',
          borderRadius: '8px',
          border: '1px solid #c3e6cb'
        }}>
          <span style={{ fontSize: '20px', marginRight: '10px' }}>✅</span>
          <span>저장되었습니다</span>
        </div>
      ) : type === 'error' ? (
        <div style={{
          padding: '15px',
          backgroundColor: '#f8d7da',
          borderRadius: '8px',
          border: '1px solid #f5c6cb'
        }}>
          <span style={{ fontSize: '20px', marginRight: '10px' }}>❌</span>
          <span>오류가 발생했습니다</span>
        </div>
      ) : (
        <div style={{
          padding: '15px',
          backgroundColor: '#fff3cd',
          borderRadius: '8px',
          border: '1px solid #ffeaa7'
        }}>
          <span style={{ fontSize: '20px', marginRight: '10px' }}>⚠️</span>
          <span>주의가 필요합니다</span>
        </div>
      )}
    </div>
  );
}

const example2Code = `function MessageBox({ type }) {
  return (
    <div>
      {type === 'success' ? (
        <div className="alert alert-success">
          <span>✅</span>
          <span>저장되었습니다</span>
        </div>
      ) : type === 'error' ? (
        <div className="alert alert-error">
          <span>❌</span>
          <span>오류가 발생했습니다</span>
        </div>
      ) : (
        <div className="alert alert-warning">
          <span>⚠️</span>
          <span>주의가 필요합니다</span>
        </div>
      )}
    </div>
  );
}`;

// 예제 3: 리스트 내부에서 사용
function Example3() {
  const todos = [
    { id: 1, text: '아침 운동하기', completed: true, priority: 'high' },
    { id: 2, text: 'React 공부하기', completed: false, priority: 'high' },
    { id: 3, text: '책 읽기', completed: false, priority: 'medium' },
    { id: 4, text: '장보기', completed: true, priority: 'low' }
  ];

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <h2>할 일 목록</h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li 
            key={todo.id}
            style={{
              padding: '15px',
              backgroundColor: 'white',
              marginBottom: '10px',
              borderRadius: '4px',
              textDecoration: todo.completed ? 'line-through' : 'none',
              opacity: todo.completed ? 0.6 : 1
            }}
          >
            <input 
              type="checkbox" 
              checked={todo.completed}
              readOnly
              style={{ marginRight: '10px' }}
            />

            <span style={{ marginRight: '10px' }}>
              {todo.text}
            </span>

            <span style={{
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              backgroundColor: 
                todo.priority === 'high' ? '#f8d7da' :
                todo.priority === 'medium' ? '#fff3cd' :
                '#d4edda',
              color: 
                todo.priority === 'high' ? '#721c24' :
                todo.priority === 'medium' ? '#856404' :
                '#155724'
            }}>
              {todo.priority === 'high' ? '긴급' :
               todo.priority === 'medium' ? '보통' :
               '낮음'}
            </span>

            <span style={{ marginLeft: '10px' }}>
              {todo.completed ? '✅ 완료' : '⏳ 진행 중'}
            </span>
          </li>
        ))}
      </ul>

      <div style={{
        marginTop: '15px',
        padding: '15px',
        backgroundColor: 'white',
        borderRadius: '4px'
      }}>
        <p>
          전체: {todos.length}개 / 
          완료: {todos.filter(t => t.completed).length}개 / 
          남음: {todos.filter(t => !t.completed).length}개
        </p>

        <p style={{ fontWeight: 'bold' }}>
          {todos.every(t => t.completed) 
            ? '🎉 모든 할 일을 완료했습니다!' 
            : '💪 조금만 더 힘내세요!'}
        </p>
      </div>
    </div>
  );
}

const example3Code = `function TodoList({ todos }) {
  return (
    <div>
      <h2>할 일 목록</h2>

      <ul>
        {todos.map(todo => (
          <li 
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              opacity: todo.completed ? 0.6 : 1
            }}
          >
            <input type="checkbox" checked={todo.completed} />
            
            <span>{todo.text}</span>
            
            <span>
              {todo.completed ? '✅ 완료' : '⏳ 진행 중'}
            </span>
            
            <span className={\`priority \${
              todo.priority === 'high' ? 'high' :
              todo.priority === 'medium' ? 'medium' :
              'low'
            }\`}>
              {todo.priority === 'high' ? '긴급' :
               todo.priority === 'medium' ? '보통' :
               '낮음'}
            </span>
          </li>
        ))}
      </ul>

      <p>
        {todos.every(t => t.completed) 
          ? '🎉 모두 완료!' 
          : '💪 힘내세요!'}
      </p>
    </div>
  );
}`;

function TernaryInJSX() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-3-2. JSX 안에서 삼항 연산자</h2>
      
      <TabViewer
        title="예제 1: 텍스트 인라인 변경"
        description="문장 중간에 조건부 텍스트 삽입"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: JSX 요소 선택"
        description="조건에 따라 완전히 다른 요소 렌더링"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 리스트 내부에서 사용"
        description="map 안에서 여러 삼항 연산자 사용"
        resultContent={<Example3 />}
        codeString={example3Code}
      />
    </div>
  );
}

export default TernaryInJSX;