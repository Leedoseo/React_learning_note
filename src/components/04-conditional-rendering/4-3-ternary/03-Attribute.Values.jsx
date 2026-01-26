// src/components/04-conditional-rendering/4-3-ternary/03-AttributeValues.jsx
import { useState } from 'react';
import TabViewer from '../../common/TabViewer';

// 예제 1: className 동적 할당
function Example1() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div>
      <div style={{
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
        borderBottom: '2px solid #ddd',
        paddingBottom: '10px'
      }}>
        <button
          onClick={() => setActiveTab('profile')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'profile' ? '#007bff' : 'transparent',
            color: activeTab === 'profile' ? 'white' : '#007bff',
            border: 'none',
            borderRadius: '4px 4px 0 0',
            cursor: 'pointer',
            fontWeight: activeTab === 'profile' ? 'bold' : 'normal'
          }}
        >
          프로필
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'settings' ? '#007bff' : 'transparent',
            color: activeTab === 'settings' ? 'white' : '#007bff',
            border: 'none',
            borderRadius: '4px 4px 0 0',
            cursor: 'pointer',
            fontWeight: activeTab === 'settings' ? 'bold' : 'normal'
          }}
        >
          설정
        </button>

        <button
          onClick={() => setActiveTab('notifications')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'notifications' ? '#007bff' : 'transparent',
            color: activeTab === 'notifications' ? 'white' : '#007bff',
            border: 'none',
            borderRadius: '4px 4px 0 0',
            cursor: 'pointer',
            fontWeight: activeTab === 'notifications' ? 'bold' : 'normal'
          }}
        >
          알림
        </button>
      </div>

      <div style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        {activeTab === 'profile' && <p>프로필 내용</p>}
        {activeTab === 'settings' && <p>설정 내용</p>}
        {activeTab === 'notifications' && <p>알림 내용</p>}
      </div>
    </div>
  );
}

const example1Code = `function TabMenu({ activeTab, onTabChange }) {
  return (
    <div className="tab-menu">
      <button
        className={activeTab === 'profile' ? 'tab active' : 'tab'}
        onClick={() => onTabChange('profile')}
      >
        프로필
      </button>

      <button
        className={activeTab === 'settings' ? 'tab active' : 'tab'}
        onClick={() => onTabChange('settings')}
      >
        설정
      </button>

      <button
        className={activeTab === 'notifications' ? 'tab active' : 'tab'}
        onClick={() => onTabChange('notifications')}
      >
        알림
      </button>
    </div>
  );
}`;

// 예제 2: style 객체
function Example2() {
  const [percentage, setPercentage] = useState(65);
  const [status, setStatus] = useState('info');

  return (
    <div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ marginRight: '10px' }}>
          진행률: {percentage}%
        </label>
        <input 
          type="range"
          min="0"
          max="100"
          value={percentage}
          onChange={(e) => setPercentage(parseInt(e.target.value))}
          style={{ width: '300px' }}
        />
      </div>

      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setStatus('info')}
          style={{ padding: '6px 12px', fontSize: '12px' }}
        >
          일반
        </button>
        <button 
          onClick={() => setStatus('warning')}
          style={{ padding: '6px 12px', fontSize: '12px' }}
        >
          경고
        </button>
        <button 
          onClick={() => setStatus('error')}
          style={{ padding: '6px 12px', fontSize: '12px' }}
        >
          에러
        </button>
        <button 
          onClick={() => setStatus('success')}
          style={{ padding: '6px 12px', fontSize: '12px' }}
        >
          성공
        </button>
      </div>

      <div style={{
        width: '100%',
        height: '30px',
        backgroundColor: '#f0f0f0',
        borderRadius: '15px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div
          style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: 
              status === 'error' ? '#dc3545' :
              status === 'warning' ? '#ffc107' :
              status === 'success' ? '#28a745' :
              '#007bff',
            transition: 'all 0.3s ease',
            borderRadius: percentage === 100 ? '15px' : '15px 0 0 15px'
          }}
        />

        <span 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: percentage > 50 ? 'white' : 'black',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          {percentage}%
        </span>
      </div>

      <p style={{
        marginTop: '15px',
        color: 
          status === 'error' ? '#dc3545' :
          status === 'warning' ? '#ffc107' :
          status === 'success' ? '#28a745' :
          '#007bff',
        fontWeight: 'bold'
      }}>
        {status === 'error' ? '⚠️ 오류 발생' :
         status === 'warning' ? '⚡ 주의 필요' :
         status === 'success' ? '✅ 완료' :
         '📊 진행 중'}
      </p>
    </div>
  );
}

const example2Code = `function ProgressBar({ percentage, status }) {
  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{
          width: \`\${percentage}%\`,
          backgroundColor: 
            status === 'error' ? '#dc3545' :
            status === 'warning' ? '#ffc107' :
            status === 'success' ? '#28a745' :
            '#007bff',
          transition: 'all 0.3s ease',
          height: percentage > 50 ? '30px' : '20px'
        }}
      />

      <span 
        style={{
          color: percentage > 50 ? 'white' : 'black',
          fontWeight: percentage === 100 ? 'bold' : 'normal'
        }}
      >
        {percentage}%
      </span>
    </div>
  );
}`;

// 예제 3: disabled와 type
function Example3() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      maxWidth: '400px'
    }}>
      <h3>로그인</h3>

      <input
        type="email"
        placeholder={isSubmitting ? '전송 중...' : '이메일을 입력하세요'}
        disabled={isSubmitting}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          backgroundColor: isSubmitting ? '#f0f0f0' : 'white',
          cursor: isSubmitting ? 'not-allowed' : 'text'
        }}
      />

      <div style={{ position: 'relative', marginBottom: '10px' }}>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="비밀번호"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '10px',
            paddingRight: '80px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: isSubmitting ? '#f0f0f0' : 'white',
            cursor: isSubmitting ? 'not-allowed' : 'text'
          }}
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          disabled={isSubmitting}
          style={{
            position: 'absolute',
            right: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            padding: '5px 10px',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontSize: '12px'
          }}
        >
          {showPassword ? '🙈 숨기기' : '👁️ 보기'}
        </button>
      </div>

      <button
        disabled={isSubmitting}
        onClick={() => {
          setIsSubmitting(true);
          setTimeout(() => setIsSubmitting(false), 2000);
        }}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: isSubmitting ? '#6c757d' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          fontSize: '16px',
          fontWeight: 'bold'
        }}
      >
        {isSubmitting ? '로그인 중...' : '로그인'}
      </button>
    </div>
  );
}

const example3Code = `function LoginForm({ isSubmitting }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form>
      <input
        type="email"
        placeholder={isSubmitting ? '전송 중...' : '이메일'}
        disabled={isSubmitting}
        className={isSubmitting ? 'input-disabled' : 'input-normal'}
      />

      <div>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="비밀번호"
          disabled={isSubmitting}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          disabled={isSubmitting}
        >
          {showPassword ? '🙈 숨기기' : '👁️ 보기'}
        </button>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={isSubmitting ? 'btn-loading' : 'btn-primary'}
      >
        {isSubmitting ? '로그인 중...' : '로그인'}
      </button>
    </form>
  );
}`;

function AttributeValues() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-3-3. 속성값 결정하기</h2>
      
      <TabViewer
        title="예제 1: className 동적 할당"
        description="활성 탭에 따라 클래스명 변경"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: style 객체"
        description="진행률과 상태에 따라 여러 스타일 속성 변경"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: disabled와 type"
        description="상태에 따라 입력 필드와 버튼의 속성 제어"
        resultContent={<Example3 />}
        codeString={example3Code}
      />
    </div>
  );
}

export default AttributeValues;