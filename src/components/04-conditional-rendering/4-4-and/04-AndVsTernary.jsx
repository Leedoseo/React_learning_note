// src/components/04-conditional-rendering/4-4-and/04-AndVsTernary.jsx
import { useState } from 'react';
import TabViewer from '../../common/TabViewer';

// 예제 1: && 사용 (대체 UI 없음)
function Example1() {
  const [isVIP, setIsVIP] = useState(true);

  return (
    <div>
      <button 
        onClick={() => setIsVIP(!isVIP)}
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
        VIP 상태 토글
      </button>

      <div style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h2>내 프로필</h2>
        <p>이름: 홍길동</p>
        <p>이메일: hong@example.com</p>

        {/* VIP면 보여주고, 아니면 아무것도 안 보여줌 */}
        {isVIP && (
          <div style={{
            marginTop: '15px',
            padding: '15px',
            backgroundColor: '#fff3cd',
            borderRadius: '8px',
            border: '1px solid #ffeaa7'
          }}>
            <h3>⭐ VIP 혜택</h3>
            <ul>
              <li>무료 배송</li>
              <li>특별 할인</li>
              <li>우선 고객지원</li>
            </ul>
          </div>
        )}
      </div>

      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#e7f3ff',
        borderRadius: '8px'
      }}>
        <h4>✅ && 사용이 적합한 경우</h4>
        <p>대체 UI가 필요 없을 때 (보여주거나 / 안 보여주거나)</p>
      </div>
    </div>
  );
}

const example1Code = `// ✅ && 사용 (대체 UI 없음)
function Profile({ user }) {
  return (
    <div>
      <h2>내 프로필</h2>
      <p>이름: {user.name}</p>
      <p>이메일: {user.email}</p>

      {/* VIP면 보여주고, 아니면 아무것도 없음 */}
      {user.isVIP && (
        <div className="vip-benefits">
          <h3>⭐ VIP 혜택</h3>
          <ul>
            <li>무료 배송</li>
            <li>특별 할인</li>
          </ul>
        </div>
      )}
    </div>
  );
}

// 간결하고 명확!`;

// 예제 2: 삼항 사용 (대체 UI 있음)
function Example2() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div>
      <button 
        onClick={() => setIsOnline(!isOnline)}
        style={{
          padding: '8px 16px',
          marginBottom: '15px',
          backgroundColor: '#28a745',
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
        {/* 온라인이면 A, 오프라인이면 B */}
        {isOnline ? (
          <div style={{
            padding: '15px',
            backgroundColor: '#d4edda',
            borderRadius: '8px',
            border: '1px solid #c3e6cb'
          }}>
            <h2>🟢 온라인</h2>
            <p>지금 메시지를 보낼 수 있습니다</p>
            <button style={{ padding: '8px 16px' }}>메시지 보내기</button>
          </div>
        ) : (
          <div style={{
            padding: '15px',
            backgroundColor: '#f8d7da',
            borderRadius: '8px',
            border: '1px solid #f5c6cb'
          }}>
            <h2>⚫ 오프라인</h2>
            <p>사용자가 오프라인 상태입니다</p>
            <button style={{ padding: '8px 16px' }}>알림 예약</button>
          </div>
        )}
      </div>

      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#e7f3ff',
        borderRadius: '8px'
      }}>
        <h4>✅ 삼항 연산자가 적합한 경우</h4>
        <p>대체 UI가 필요할 때 (A를 보여주거나 / B를 보여주거나)</p>
      </div>
    </div>
  );
}

const example2Code = `// ✅ 삼항 사용 (대체 UI 있음)
function StatusMessage({ isOnline }) {
  return (
    <div>
      {/* 온라인이면 A, 오프라인이면 B */}
      {isOnline ? (
        <div className="online">
          <h2>🟢 온라인</h2>
          <p>메시지를 보낼 수 있습니다</p>
          <button>메시지 보내기</button>
        </div>
      ) : (
        <div className="offline">
          <h2>⚫ 오프라인</h2>
          <p>사용자가 오프라인 상태입니다</p>
          <button>알림 예약</button>
        </div>
      )}
    </div>
  );
}

// 두 가지 선택이 명확!`;

// 예제 3: 잘못된 사용 (&&를 두 번)
function Example3() {
  const [status, setStatus] = useState('online');

  return (
    <div>
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setStatus('online')}
          style={{
            padding: '8px 16px',
            backgroundColor: status === 'online' ? '#28a745' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          온라인
        </button>
        <button 
          onClick={() => setStatus('offline')}
          style={{
            padding: '8px 16px',
            backgroundColor: status === 'offline' ? '#6c757d' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          오프라인
        </button>
      </div>

      <div style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h3>❌ 비효율적 (&&를 두 번)</h3>
        <div style={{
          padding: '15px',
          backgroundColor: '#f8d7da',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          {status === 'online' && (
            <div>🟢 온라인</div>
          )}
          {status === 'offline' && (
            <div>⚫ 오프라인</div>
          )}
          <p style={{ marginTop: '10px', color: '#721c24', fontSize: '14px' }}>
            코드가 분리되어 있어서 관계를 알기 어려움
          </p>
        </div>

        <h3>✅ 효율적 (삼항 한 번)</h3>
        <div style={{
          padding: '15px',
          backgroundColor: '#d4edda',
          borderRadius: '8px'
        }}>
          {status === 'online' ? (
            <div>🟢 온라인</div>
          ) : (
            <div>⚫ 오프라인</div>
          )}
          <p style={{ marginTop: '10px', color: '#155724', fontSize: '14px' }}>
            두 가지 선택의 관계가 명확!
          </p>
        </div>
      </div>
    </div>
  );
}

const example3Code = `// ❌ 비효율적: && 두 번 사용
function Status({ isOnline }) {
  return (
    <div>
      {isOnline && <div>🟢 온라인</div>}
      {!isOnline && <div>⚫ 오프라인</div>}
    </div>
  );
}

// ✅ 효율적: 삼항 한 번
function Status({ isOnline }) {
  return (
    <div>
      {isOnline ? (
        <div>🟢 온라인</div>
      ) : (
        <div>⚫ 오프라인</div>
      )}
    </div>
  );
}

// 두 가지 선택이면 삼항 사용!`;

// 예제 4: 선택 가이드
function Example4() {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <h2>선택 가이드</h2>

      <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
        <div style={{
          padding: '20px',
          backgroundColor: '#d4edda',
          borderRadius: '8px',
          border: '2px solid #28a745'
        }}>
          <h3 style={{ marginTop: 0 }}>✅ && 연산자 사용</h3>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>조건부 배지:</strong> VIP 배지, 신상품 배지</li>
            <li><strong>조건부 알림:</strong> 에러 메시지, 성공 메시지</li>
            <li><strong>선택적 섹션:</strong> VIP 전용 영역</li>
            <li><strong>추가 정보:</strong> 재고 부족 경고</li>
          </ul>
          <div style={{
            marginTop: '15px',
            padding: '10px',
            backgroundColor: 'white',
            borderRadius: '4px'
          }}>
            <code>{`{isVIP && <VIPSection />}`}</code>
          </div>
        </div>

        <div style={{
          padding: '20px',
          backgroundColor: '#d1ecf1',
          borderRadius: '8px',
          border: '2px solid #17a2b8'
        }}>
          <h3 style={{ marginTop: 0 }}>✅ 삼항 연산자 사용</h3>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>로그인/로그아웃:</strong> 대시보드 vs 로그인 페이지</li>
            <li><strong>활성/비활성:</strong> 다른 UI 상태</li>
            <li><strong>성공/실패:</strong> 다른 메시지</li>
            <li><strong>로딩/완료:</strong> 로딩 스피너 vs 콘텐츠</li>
          </ul>
          <div style={{
            marginTop: '15px',
            padding: '10px',
            backgroundColor: 'white',
            borderRadius: '4px'
          }}>
            <code>{`{isLoggedIn ? <Dashboard /> : <Login />}`}</code>
          </div>
        </div>

        <div style={{
          padding: '20px',
          backgroundColor: '#fff3cd',
          borderRadius: '8px',
          border: '2px solid #ffc107'
        }}>
          <h3 style={{ marginTop: 0 }}>⚠️ 헷갈릴 때</h3>
          <p style={{ marginBottom: '10px' }}>
            <strong>질문:</strong> "대체 UI가 필요한가?"
          </p>
          <ul style={{ marginBottom: 0 }}>
            <li>필요 없음 → <strong>&&</strong> 사용</li>
            <li>필요함 → <strong>삼항</strong> 사용</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const example4Code = `// 선택 기준:

// ✅ && 사용 (보여주거나 / 안 보여주거나)
{count > 0 && <Badge />}
{isVIP && <VIPSection />}
{error && <ErrorMessage />}

// ✅ 삼항 사용 (A 또는 B)
{isLoggedIn ? <Dashboard /> : <Login />}
{isOnline ? <Online /> : <Offline />}
{isLoading ? <Spinner /> : <Content />}

// ❌ 피하기: && 두 번 (삼항이 더 나음)
{isActive && <Active />}
{!isActive && <Inactive />}

// ✅ 개선: 삼항 한 번
{isActive ? <Active /> : <Inactive />}`;

function AndVsTernary() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-4-4. && vs 삼항 연산자</h2>
      
      <TabViewer
        title="예제 1: && 사용 (대체 UI 없음)"
        description="VIP 혜택 섹션 - 보여주거나 안 보여주거나"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 삼항 사용 (대체 UI 있음)"
        description="온라인/오프라인 상태 - 두 가지 선택"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 잘못된 사용 (&&를 두 번)"
        description="두 가지 선택인데 &&를 두 번 쓰는 비효율"
        resultContent={<Example3 />}
        codeString={example3Code}
      />

      <TabViewer
        title="예제 4: 선택 가이드"
        description="언제 &&를 쓰고 언제 삼항을 쓸지"
        resultContent={<Example4 />}
        codeString={example4Code}
      />
    </div>
  );
}

export default AndVsTernary;