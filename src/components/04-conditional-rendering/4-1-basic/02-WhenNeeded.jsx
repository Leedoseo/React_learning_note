// src/components/04-conditional-rendering/4-1-basic/02-WhenNeeded.jsx
import { useState } from 'react';
import TabViewer from '../../common/TabViewer';

// 예제 1: 로그인/로그아웃 상태
function Example1() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName] = useState('홍길동');

  return (
    <div>
      <header style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        marginBottom: '15px'
      }}>
        <h1>My Website</h1>
        
        {isLoggedIn ? (
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span>안녕하세요, {userName}님 👋</span>
            <button style={{ padding: '5px 10px' }}>프로필</button>
            <button 
              onClick={() => setIsLoggedIn(false)}
              style={{ padding: '5px 10px' }}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={() => setIsLoggedIn(true)}
              style={{ padding: '5px 10px' }}
            >
              로그인
            </button>
            <button style={{ padding: '5px 10px' }}>회원가입</button>
          </div>
        )}
      </header>
    </div>
  );
}

const example1Code = `function Header({ isLoggedIn, userName }) {
  return (
    <header>
      <h1>My Website</h1>
      
      {isLoggedIn ? (
        <div>
          <span>안녕하세요, {userName}님</span>
          <button>프로필</button>
          <button>로그아웃</button>
        </div>
      ) : (
        <div>
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      )}
    </header>
  );
}`;

// 예제 2: 권한에 따른 UI
function Example2() {
  const [userRole, setUserRole] = useState('user');

  return (
    <div>
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setUserRole('user')}
          style={{
            padding: '8px 16px',
            backgroundColor: userRole === 'user' ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          일반 사용자
        </button>
        <button 
          onClick={() => setUserRole('premium')}
          style={{
            padding: '8px 16px',
            backgroundColor: userRole === 'premium' ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          프리미엄 사용자
        </button>
        <button 
          onClick={() => setUserRole('admin')}
          style={{
            padding: '8px 16px',
            backgroundColor: userRole === 'admin' ? '#007bff' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          관리자
        </button>
      </div>

      <div style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h2>대시보드</h2>
        
        {/* 모든 사용자 */}
        <section style={{ marginBottom: '15px', padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
          <h3>내 정보</h3>
          <p>프로필 정보...</p>
        </section>
        
        {/* 프리미엄 사용자만 */}
        {userRole === 'premium' && (
          <section style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#fff3cd', borderRadius: '4px' }}>
            <h3>⭐ 프리미엄 기능</h3>
            <p>고급 분석 도구...</p>
          </section>
        )}
        
        {/* 관리자만 */}
        {userRole === 'admin' && (
          <section style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#d1ecf1', borderRadius: '4px' }}>
            <h3>🔧 관리자 패널</h3>
            <button>사용자 관리</button>
            <button style={{ marginLeft: '10px' }}>설정</button>
          </section>
        )}
      </div>
    </div>
  );
}

const example2Code = `function Dashboard({ userRole }) {
  return (
    <div>
      <h2>대시보드</h2>
      
      {/* 모든 사용자 */}
      <section>
        <h3>내 정보</h3>
        <p>프로필 정보...</p>
      </section>
      
      {/* 프리미엄 사용자만 */}
      {userRole === 'premium' && (
        <section>
          <h3>프리미엄 기능</h3>
          <p>고급 분석 도구...</p>
        </section>
      )}
      
      {/* 관리자만 */}
      {userRole === 'admin' && (
        <section>
          <h3>관리자 패널</h3>
          <button>사용자 관리</button>
          <button>설정</button>
        </section>
      )}
    </div>
  );
}`;

// 예제 3: 로딩 상태
function Example3() {
  const [isLoading, setIsLoading] = useState(false);
  const [users] = useState([
    { id: 1, name: '홍길동' },
    { id: 2, name: '김철수' }
  ]);

  const handleLoad = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div>
      <button 
        onClick={handleLoad}
        disabled={isLoading}
        style={{
          padding: '8px 16px',
          marginBottom: '15px',
          backgroundColor: isLoading ? '#6c757d' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isLoading ? 'not-allowed' : 'pointer'
        }}
      >
        {isLoading ? '로딩 중...' : '데이터 불러오기'}
      </button>

      {isLoading ? (
        <div style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>⏳</div>
          <p>사용자 목록을 불러오는 중...</p>
        </div>
      ) : (
        <div style={{
          padding: '20px',
          backgroundColor: '#d4edda',
          borderRadius: '8px'
        }}>
          <h2>사용자 목록</h2>
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const example3Code = `function UserList({ isLoading, users }) {
  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>사용자 목록을 불러오는 중...</p>
      </div>
    );
  }
  
  return (
    <div className="user-list">
      <h2>사용자 목록</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}`;

// 예제 4: 에러 처리
function Example4() {
  const [hasError, setHasError] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setHasError(!hasError)}
        style={{
          padding: '8px 16px',
          marginBottom: '15px',
          backgroundColor: hasError ? '#28a745' : '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {hasError ? '에러 해결' : '에러 발생'}
      </button>

      {hasError ? (
        <div style={{
          padding: '20px',
          backgroundColor: '#f8d7da',
          borderRadius: '8px',
          border: '1px solid #f5c6cb'
        }}>
          <h2>⚠️ 오류가 발생했습니다</h2>
          <p>네트워크 오류</p>
          <button 
            onClick={() => setHasError(false)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            다시 시도
          </button>
        </div>
      ) : (
        <div style={{
          padding: '20px',
          backgroundColor: '#d4edda',
          borderRadius: '8px',
          border: '1px solid #c3e6cb'
        }}>
          <h2>데이터</h2>
          <p>정상 데이터입니다</p>
        </div>
      )}
    </div>
  );
}

const example4Code = `function DataDisplay({ error, data }) {
  if (error) {
    return (
      <div className="error">
        <h2>오류가 발생했습니다</h2>
        <p>{error.message}</p>
        <button onClick={() => window.location.reload()}>
          다시 시도
        </button>
      </div>
    );
  }
  
  return (
    <div className="data">
      <h2>데이터</h2>
      <p>{data}</p>
    </div>
  );
}`;

// 예제 5: 빈 데이터
function Example5() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setProducts([])}
          style={{
            padding: '8px 16px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          상품 비우기
        </button>
        <button 
          onClick={() => setProducts([
            { id: 1, name: '상품1', price: 10000 },
            { id: 2, name: '상품2', price: 20000 }
          ])}
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          상품 추가
        </button>
      </div>

      {products.length === 0 ? (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '2px dashed #ddd'
        }}>
          <div style={{ fontSize: '60px', marginBottom: '10px' }}>📭</div>
          <p style={{ fontSize: '18px', color: '#6c757d' }}>등록된 상품이 없습니다</p>
          <button style={{
            marginTop: '15px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            상품 등록하기
          </button>
        </div>
      ) : (
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <h2>상품 목록 ({products.length}개)</h2>
          <div>
            {products.map(product => (
              <div key={product.id} style={{
                padding: '15px',
                backgroundColor: 'white',
                marginBottom: '10px',
                borderRadius: '4px'
              }}>
                <h3>{product.name}</h3>
                <p>{product.price.toLocaleString()}원</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const example5Code = `function ProductList({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="empty">
        <p>등록된 상품이 없습니다</p>
        <button>상품 등록하기</button>
      </div>
    );
  }
  
  return (
    <div className="product-list">
      <h2>상품 목록 ({products.length}개)</h2>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}원</p>
          </div>
        ))}
      </div>
    </div>
  );
}`;

function WhenNeeded() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-1-2. 조건부 렌더링이 필요한 경우</h2>
      
      <TabViewer
        title="예제 1: 로그인/로그아웃 상태"
        description="로그인 여부에 따라 다른 메뉴를 표시"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 권한에 따른 UI"
        description="사용자 등급에 따라 다른 기능 제공"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 로딩 상태"
        description="데이터를 불러오는 동안 로딩 표시"
        resultContent={<Example3 />}
        codeString={example3Code}
      />

      <TabViewer
        title="예제 4: 에러 처리"
        description="에러 발생 시 에러 메시지 표시"
        resultContent={<Example4 />}
        codeString={example4Code}
      />

      <TabViewer
        title="예제 5: 빈 데이터 (Empty State)"
        description="데이터가 없을 때 안내 메시지"
        resultContent={<Example5 />}
        codeString={example5Code}
      />
    </div>
  );
}

export default WhenNeeded;