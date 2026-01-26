// src/components/04-conditional-rendering/4-4-and/01-AndBasic.jsx
import { useState } from 'react';
import TabViewer from '../../common/TabViewer';

// 예제 1: 기본 && 사용
function Example1() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <button 
        onClick={() => setIsLoggedIn(!isLoggedIn)}
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
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>

      <div style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h1>환영합니다!</h1>

        {isLoggedIn && (
          <div style={{
            marginTop: '15px',
            padding: '15px',
            backgroundColor: '#d4edda',
            borderRadius: '8px',
            border: '1px solid #c3e6cb'
          }}>
            <p>안녕하세요, 홍길동님 👋</p>
            <button style={{ padding: '8px 16px', marginRight: '10px' }}>프로필</button>
            <button style={{ padding: '8px 16px' }}>설정</button>
          </div>
        )}

        {!isLoggedIn && (
          <div style={{
            marginTop: '15px',
            padding: '15px',
            backgroundColor: '#f8d7da',
            borderRadius: '8px',
            border: '1px solid #f5c6cb'
          }}>
            <p>로그인하시면 더 많은 기능을 이용하실 수 있습니다</p>
            <button style={{ padding: '8px 16px' }}>로그인하기</button>
          </div>
        )}
      </div>
    </div>
  );
}

const example1Code = `function WelcomeMessage({ isLoggedIn }) {
  return (
    <div>
      <h1>환영합니다!</h1>

      {/* 로그인했을 때만 표시 */}
      {isLoggedIn && (
        <div>
          <p>안녕하세요, 홍길동님 👋</p>
          <button>프로필</button>
          <button>설정</button>
        </div>
      )}

      {/* 로그인 안 했을 때만 표시 */}
      {!isLoggedIn && (
        <div>
          <p>로그인하시면 더 많은 기능 이용 가능</p>
          <button>로그인하기</button>
        </div>
      )}
    </div>
  );
}`;

// 예제 2: 배지 표시
function Example2() {
  const [user, setUser] = useState({
    name: '홍길동',
    isVIP: true,
    isVerified: true,
    isOnline: true
  });

  return (
    <div>
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input 
            type="checkbox" 
            checked={user.isVIP}
            onChange={(e) => setUser({...user, isVIP: e.target.checked})}
          />
          VIP
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input 
            type="checkbox" 
            checked={user.isVerified}
            onChange={(e) => setUser({...user, isVerified: e.target.checked})}
          />
          인증됨
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input 
            type="checkbox" 
            checked={user.isOnline}
            onChange={(e) => setUser({...user, isOnline: e.target.checked})}
          />
          온라인
        </label>
      </div>

      <div style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <h2 style={{ margin: 0 }}>{user.name}</h2>

          {user.isVIP && (
            <span style={{
              padding: '4px 10px',
              backgroundColor: '#ffc107',
              color: '#000',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              ⭐ VIP
            </span>
          )}

          {user.isVerified && (
            <span style={{
              padding: '4px 10px',
              backgroundColor: '#007bff',
              color: 'white',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              ✓ 인증됨
            </span>
          )}

          {user.isOnline && (
            <span style={{
              padding: '4px 10px',
              backgroundColor: '#28a745',
              color: 'white',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              🟢 온라인
            </span>
          )}
        </div>

        <p style={{ marginTop: '15px', color: '#6c757d' }}>
          {user.isVIP && '프리미엄 혜택을 누리고 계십니다. '}
          {user.isVerified && '신뢰할 수 있는 사용자입니다. '}
          {user.isOnline && '지금 활동 중입니다.'}
        </p>
      </div>
    </div>
  );
}

const example2Code = `function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <div className="user-header">
        <h2>{user.name}</h2>

        {/* 각 조건마다 독립적으로 배지 표시 */}
        {user.isVIP && (
          <span className="badge vip">⭐ VIP</span>
        )}

        {user.isVerified && (
          <span className="badge verified">✓ 인증됨</span>
        )}

        {user.isOnline && (
          <span className="badge online">🟢 온라인</span>
        )}
      </div>
    </div>
  );
}`;

// 예제 3: 알림 배지
function Example3() {
  const [count, setCount] = useState(5);

  return (
    <div>
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '8px 16px' }}
        >
          +1
        </button>
        <button 
          onClick={() => setCount(Math.max(0, count - 1))}
          style={{ padding: '8px 16px' }}
        >
          -1
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{ padding: '8px 16px' }}
        >
          모두 읽음
        </button>
      </div>

      <div style={{
        display: 'inline-block',
        position: 'relative',
        padding: '20px'
      }}>
        <span style={{ fontSize: '48px' }}>🔔</span>

        {count > 0 && (
          <span style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: '#dc3545',
            color: 'white',
            borderRadius: '12px',
            padding: '4px 10px',
            fontSize: '14px',
            fontWeight: 'bold',
            minWidth: '24px',
            textAlign: 'center'
          }}>
            {count > 99 ? '99+' : count}
          </span>
        )}
      </div>

      <p style={{ marginTop: '10px' }}>
        {count > 0 ? `${count}개의 새 알림이 있습니다` : '새 알림이 없습니다'}
      </p>
    </div>
  );
}

const example3Code = `function NotificationBell({ count }) {
  return (
    <div className="notification">
      <span className="bell-icon">🔔</span>

      {/* count가 0보다 클 때만 배지 표시 */}
      {count > 0 && (
        <span className="badge">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </div>
  );
}

// 간결하고 명확!`;

// 예제 4: 여러 조건 조합
function Example4() {
  const [product, setProduct] = useState({
    name: '무선 이어폰',
    price: 89000,
    stock: 3,
    isNew: true,
    discount: 15,
    isBestSeller: true
  });

  return (
    <div>
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input 
            type="checkbox" 
            checked={product.isNew}
            onChange={(e) => setProduct({...product, isNew: e.target.checked})}
          />
          신상품
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input 
            type="checkbox" 
            checked={product.discount > 0}
            onChange={(e) => setProduct({...product, discount: e.target.checked ? 15 : 0})}
          />
          할인
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <input 
            type="checkbox" 
            checked={product.isBestSeller}
            onChange={(e) => setProduct({...product, isBestSeller: e.target.checked})}
          />
          베스트셀러
        </label>
      </div>

      <div style={{
        border: '2px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        position: 'relative'
      }}>
        {/* 배지들 */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex',
          gap: '5px',
          flexWrap: 'wrap'
        }}>
          {product.isNew && (
            <span style={{
              padding: '4px 10px',
              backgroundColor: '#28a745',
              color: 'white',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              NEW
            </span>
          )}

          {product.discount > 0 && (
            <span style={{
              padding: '4px 10px',
              backgroundColor: '#dc3545',
              color: 'white',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {product.discount}% 할인
            </span>
          )}

          {product.isBestSeller && (
            <span style={{
              padding: '4px 10px',
              backgroundColor: '#ffc107',
              color: '#000',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              🔥 인기
            </span>
          )}
        </div>

        <h3>{product.name}</h3>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
          {product.price.toLocaleString()}원
        </p>

        {product.stock < 5 && product.stock > 0 && (
          <p style={{
            color: '#ffc107',
            fontWeight: 'bold',
            marginTop: '10px'
          }}>
            ⚠️ 재고가 {product.stock}개 남았습니다!
          </p>
        )}

        {product.stock === 0 && (
          <p style={{
            color: '#dc3545',
            fontWeight: 'bold',
            marginTop: '10px'
          }}>
            😢 품절되었습니다
          </p>
        )}
      </div>
    </div>
  );
}

const example4Code = `function ProductCard({ product }) {
  return (
    <div className="product-card">
      {/* 신상품 배지 */}
      {product.isNew && (
        <span className="badge new">NEW</span>
      )}

      {/* 할인 배지 */}
      {product.discount > 0 && (
        <span className="badge discount">
          {product.discount}% 할인
        </span>
      )}

      {/* 베스트셀러 배지 */}
      {product.isBestSeller && (
        <span className="badge bestseller">🔥 인기</span>
      )}

      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()}원</p>

      {/* 재고 부족 경고 */}
      {product.stock < 5 && product.stock > 0 && (
        <p className="low-stock">
          ⚠️ 재고 {product.stock}개 남음
        </p>
      )}
    </div>
  );
}`;

function AndBasic() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-4-1. && 연산자 기본</h2>
      
      <TabViewer
        title="예제 1: 기본 && 사용"
        description="조건이 참일 때만 요소 렌더링"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 배지 표시"
        description="여러 조건을 독립적으로 체크"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 알림 배지"
        description="count가 0보다 클 때만 배지 표시"
        resultContent={<Example3 />}
        codeString={example3Code}
      />

      <TabViewer
        title="예제 4: 여러 조건 조합"
        description="상품 카드에 여러 배지와 경고 메시지"
        resultContent={<Example4 />}
        codeString={example4Code}
      />
    </div>
  );
}

export default AndBasic;