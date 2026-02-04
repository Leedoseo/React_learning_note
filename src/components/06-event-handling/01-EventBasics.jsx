// 6-1_EventBasics.jsx

import React from 'react';
import TabViewer from '../common/TabViewer';

function EventBasics() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>6-1. 이벤트 기초</h1>
      <p style={{ 
        color: '#666', 
        fontSize: '16px',
        marginBottom: '30px',
        padding: '15px',
        background: '#f5f5f5',
        borderRadius: '5px'
      }}>
        onClick, onChange, onSubmit 등 기본 이벤트 사용법을 학습합니다.
      </p>

      {/* 예제 1: onClick */}
      <TabViewer
        title="예제 1: onClick - 클릭 이벤트"
        description="버튼 클릭 시 동작을 처리하는 가장 기본적인 이벤트"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>다양한 onClick 패턴</h4>
            
            <div style={{ marginBottom: '20px' }}>
              <button
                onClick={() => alert('버튼 1 클릭!')}
                style={{
                  padding: '10px 20px',
                  margin: '5px',
                  background: '#1976d2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                인라인 함수
              </button>

              <button
                onClick={function() { alert('버튼 2 클릭!'); }}
                style={{
                  padding: '10px 20px',
                  margin: '5px',
                  background: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                일반 함수
              </button>
            </div>

            <div style={{ 
              padding: '15px', 
              background: '#f5f5f5', 
              borderRadius: '5px' 
            }}>
              <strong>💡 팁:</strong>
              <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>
                • 간단한 로직 → 인라인 화살표 함수 사용<br/>
                • 복잡한 로직 → 별도 함수로 분리
              </p>
            </div>
          </div>
        }
        codeString={`function ClickExample() {
  // 패턴 1: 별도 함수 정의 (추천)
  const handleClick = () => {
    console.log('클릭됨!');
    alert('버튼이 클릭되었습니다');
  };
  
  return (
    <div>
      {/* 패턴 1: 함수 참조 전달 */}
      <button onClick={handleClick}>
        클릭 1
      </button>
      
      {/* 패턴 2: 인라인 화살표 함수 */}
      <button onClick={() => alert('클릭!')}>
        클릭 2
      </button>
      
      {/* ❌ 잘못된 방법 - 함수를 즉시 호출함 */}
      <button onClick={handleClick()}>
        클릭 (잘못됨)
      </button>
      
      {/* ✅ 올바른 방법 - 함수 자체를 전달 */}
      <button onClick={handleClick}>
        클릭 (올바름)
      </button>
    </div>
  );
}`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 2: onChange */}
      <TabViewer
        title="예제 2: onChange - 입력 이벤트"
        description="input 값이 변경될 때마다 실행되는 이벤트"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>실시간 입력 감지</h4>
            
            <input
              type="text"
              onChange={(e) => console.log('입력값:', e.target.value)}
              placeholder="여기에 입력해보세요"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '14px',
                border: '2px solid #ddd',
                borderRadius: '5px',
                marginBottom: '10px'
              }}
            />
            <p style={{ fontSize: '12px', color: '#666' }}>
              💡 콘솔(F12)을 열어서 입력값을 확인하세요
            </p>

            <div style={{ marginTop: '20px' }}>
              <h4>Select 박스</h4>
              <select
                onChange={(e) => alert(`선택: ${e.target.value}`)}
                style={{
                  padding: '10px',
                  fontSize: '14px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  width: '200px'
                }}
              >
                <option value="">선택하세요</option>
                <option value="사과">사과</option>
                <option value="바나나">바나나</option>
                <option value="오렌지">오렌지</option>
              </select>
            </div>
          </div>
        }
        codeString={`function InputExample() {
  const handleChange = (e) => {
    console.log('입력값:', e.target.value);
  };
  
  const handleSelectChange = (e) => {
    console.log('선택값:', e.target.value);
  };
  
  return (
    <div>
      {/* 텍스트 입력 */}
      <input 
        type="text"
        onChange={handleChange}
        placeholder="입력하세요"
      />
      
      {/* Select 박스 */}
      <select onChange={handleSelectChange}>
        <option value="">선택하세요</option>
        <option value="사과">사과</option>
        <option value="바나나">바나나</option>
      </select>
      
      {/* Textarea */}
      <textarea
        onChange={handleChange}
        placeholder="여러 줄 입력"
      />
    </div>
  );
}

// e.target.value: 입력된 값
// e.target.name: input의 name 속성
// e.target.type: input의 type 속성`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 3: onSubmit */}
      <TabViewer
        title="예제 3: onSubmit - 폼 제출 이벤트"
        description="form 제출 시 실행되는 이벤트 (Enter 또는 제출 버튼)"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>로그인 폼</h4>
            
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const username = formData.get('username');
                const password = formData.get('password');
                alert(`로그인 시도\n아이디: ${username}\n비밀번호: ${password}`);
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                maxWidth: '300px',
                padding: '20px',
                background: '#f5f5f5',
                borderRadius: '8px'
              }}
            >
              <input
                type="text"
                name="username"
                placeholder="아이디"
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px'
                }}
              />
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px',
                  background: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                로그인
              </button>
            </form>

            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              background: '#fff3e0', 
              borderRadius: '5px' 
            }}>
              <strong>⚠️ 중요:</strong>
              <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>
                onSubmit에서는 반드시 <code>e.preventDefault()</code>를 호출해야<br/>
                페이지 새로고침을 방지할 수 있습니다!
              </p>
            </div>
          </div>
        }
        codeString={`function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();  // 페이지 새로고침 방지!
    
    // 방법 1: FormData 사용
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    
    console.log('로그인:', { username, password });
    
    // 여기서 API 호출
    // fetch('/api/login', { ... })
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="username" 
        placeholder="아이디"
        required 
      />
      <input 
        type="password" 
        name="password" 
        placeholder="비밀번호"
        required 
      />
      <button type="submit">로그인</button>
    </form>
  );
}

// Enter 키를 눌러도 onSubmit이 실행됨
// 제출 버튼을 눌러도 onSubmit이 실행됨`}
      />
    </div>
  );
}

export default EventBasics;