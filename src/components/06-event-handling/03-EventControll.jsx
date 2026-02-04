// 6-3_EventControl.jsx

import React, { useState, useEffect } from 'react';
import TabViewer from '../common/TabViewer';

function EventControl() {
  // 예제 2용 state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 예제 3용 state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    if (isDropdownOpen) {
      const closeDropdown = () => setIsDropdownOpen(false);
      document.addEventListener('click', closeDropdown);
      return () => document.removeEventListener('click', closeDropdown);
    }
  }, [isDropdownOpen]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>6-3. 이벤트 제어 (preventDefault & stopPropagation)</h1>
      <p style={{ 
        color: '#666', 
        fontSize: '16px',
        marginBottom: '30px',
        padding: '15px',
        background: '#f5f5f5',
        borderRadius: '5px'
      }}>
        preventDefault로 기본 동작을 막고,<br/>
        stopPropagation으로 이벤트 버블링을 제어하는 방법을 학습합니다.
      </p>

      {/* 예제 1: preventDefault 기본 */}
      <TabViewer
        title="예제 1: preventDefault - 기본 동작 막기"
        description="폼 제출, 링크 이동 등 브라우저의 기본 동작을 막는 방법"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>폼 제출 시 페이지 새로고침 방지</h4>
            
            <div style={{ marginBottom: '30px' }}>
              <strong style={{ color: '#f44336' }}>❌ preventDefault 없이:</strong>
              <form 
                onSubmit={() => {
                  alert('페이지가 새로고침됩니다!');
                }}
                style={{ 
                  marginTop: '10px',
                  padding: '15px',
                  background: '#ffebee',
                  borderRadius: '5px'
                }}
              >
                <input 
                  type="text" 
                  placeholder="아이디"
                  style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <button 
                  type="submit"
                  style={{ padding: '8px 16px', background: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  제출 (새로고침됨)
                </button>
              </form>
            </div>

            <div>
              <strong style={{ color: '#4CAF50' }}>✅ preventDefault 사용:</strong>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('페이지 새로고침 없이 처리됩니다!');
                }}
                style={{ 
                  marginTop: '10px',
                  padding: '15px',
                  background: '#e8f5e9',
                  borderRadius: '5px'
                }}
              >
                <input 
                  type="text" 
                  placeholder="아이디"
                  style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <button 
                  type="submit"
                  style={{ padding: '8px 16px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  제출 (새로고침 안 됨)
                </button>
              </form>
            </div>

            <div style={{ marginTop: '30px' }}>
              <h4>링크 클릭 시 페이지 이동 방지</h4>
              <div style={{ marginTop: '10px' }}>
                <a 
                  href="https://google.com" 
                  style={{ color: '#1976d2', marginRight: '20px' }}
                >
                  일반 링크 (페이지 이동)
                </a>
                
                <a 
                  href="https://google.com"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('페이지 이동이 막혔습니다!');
                  }}
                  style={{ color: '#4CAF50' }}
                >
                  preventDefault 링크 (이동 안 됨)
                </a>
              </div>
            </div>
          </div>
        }
        codeString={`function PreventDefaultExample() {
  // 폼 제출 예제
  const handleSubmit = (e) => {
    e.preventDefault();  // 페이지 새로고침 방지!
    
    const formData = new FormData(e.target);
    const username = formData.get('username');
    
    console.log('제출된 데이터:', username);
    // 여기서 API 호출 등 처리
  };
  
  // 링크 클릭 예제
  const handleLinkClick = (e) => {
    e.preventDefault();  // 페이지 이동 방지!
    
    console.log('링크 클릭됐지만 이동 안 함');
    // 여기서 React Router로 페이지 전환 등
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">제출</button>
      </form>
      
      <a href="https://google.com" onClick={handleLinkClick}>
        클릭 (이동 안 됨)
      </a>
    </div>
  );
}

// preventDefault가 필요한 경우:
// 1. form 제출 시 페이지 새로고침 방지
// 2. a 태그 클릭 시 페이지 이동 방지
// 3. 우클릭 메뉴 방지
// 4. 드래그 앤 드롭 기본 동작 방지`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 2: stopPropagation - 모달 */}
      <TabViewer
        title="예제 2: stopPropagation - 이벤트 버블링 막기"
        description="모달에서 배경 클릭 시 닫히지만 내부 클릭은 유지"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>모달 예제</h4>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
              배경을 클릭하면 모달이 닫히고, 모달 내부는 클릭해도 닫히지 않습니다.
            </p>
            
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                padding: '10px 20px',
                background: '#1976d2',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              모달 열기
            </button>

            {isModalOpen && (
              <div 
                onClick={() => setIsModalOpen(false)}  // 배경 클릭 시 닫기
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 1000
                }}
              >
                <div 
                  onClick={(e) => e.stopPropagation()}  // 모달 내부 클릭은 전파 막기
                  style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '10px',
                    minWidth: '400px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  <h3 style={{ margin: '0 0 15px 0' }}>모달 제목</h3>
                  <p style={{ margin: '0 0 20px 0', color: '#666' }}>
                    이 영역을 클릭해도 모달이 닫히지 않습니다.<br/>
                    stopPropagation() 덕분입니다!
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    style={{
                      padding: '8px 16px',
                      background: '#f44336',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    닫기
                  </button>
                </div>
              </div>
            )}

            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              background: '#fff3e0', 
              borderRadius: '5px' 
            }}>
              <strong>⚠️ stopPropagation 없으면?</strong>
              <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>
                → 모달 내부를 클릭해도 배경 클릭으로 인식되어 모달이 닫힙니다!
              </p>
            </div>
          </div>
        }
        codeString={`function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;
  
  const handleBackdropClick = () => {
    onClose();  // 배경 클릭 시 모달 닫기
  };
  
  const handleModalClick = (e) => {
    e.stopPropagation();  // 모달 내부 클릭은 전파 막기!
  };
  
  return (
    <div onClick={handleBackdropClick} style={{ /* 배경 스타일 */ }}>
      <div onClick={handleModalClick} style={{ /* 모달 스타일 */ }}>
        <h2>모달 제목</h2>
        <p>모달 내용</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

// 동작 방식:
// 1. 배경 클릭 → onClose() 실행 → 모달 닫힘
// 2. 모달 내부 클릭 → stopPropagation()으로 전파 막힘 → onClose() 실행 안 됨
// 3. 닫기 버튼 클릭 → onClose() 직접 호출 → 모달 닫힘`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 3: 카드 안의 버튼 */}
      <TabViewer
        title="예제 3: 카드 안의 버튼 - 이벤트 분리"
        description="카드 클릭과 버튼 클릭을 독립적으로 처리"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>상품 카드 예제</h4>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>
              카드를 클릭하면 상세 페이지로, 버튼 클릭은 각각의 기능을 실행합니다.
            </p>

            {[
              { id: 1, name: '노트북', price: 1500000 },
              { id: 2, name: '마우스', price: 50000 }
            ].map((product) => (
              <div
                key={product.id}
                onClick={() => alert(`${product.name} 상세 페이지로 이동`)}
                style={{
                  border: '2px solid #ddd',
                  borderRadius: '10px',
                  padding: '20px',
                  marginBottom: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#1976d2'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#ddd'}
              >
                <h4 style={{ margin: '0 0 10px 0' }}>{product.name}</h4>
                <p style={{ margin: '0 0 15px 0', fontSize: '18px', fontWeight: 'bold', color: '#f44336' }}>
                  {product.price.toLocaleString()}원
                </p>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();  // 카드 클릭 이벤트 막기
                      alert(`${product.name}을(를) 장바구니에 추가했습니다!`);
                    }}
                    style={{
                      padding: '8px 16px',
                      background: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    🛒 장바구니
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();  // 카드 클릭 이벤트 막기
                      alert(`${product.name}을(를) 찜했습니다!`);
                    }}
                    style={{
                      padding: '8px 16px',
                      background: '#ff9800',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    ❤️ 찜
                  </button>
                </div>
              </div>
            ))}

            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              background: '#e3f2fd', 
              borderRadius: '5px' 
            }}>
              <strong>✅ stopPropagation 덕분에:</strong>
              <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>
                • 카드 영역 클릭 → 상세 페이지 이동<br/>
                • 버튼 클릭 → 각 버튼의 기능만 실행 (상세 페이지로 안 감)
              </p>
            </div>
          </div>
        }
        codeString={`function ProductCard({ product }) {
  const handleCardClick = () => {
    console.log('상세 페이지로 이동');
    // history.push(\`/product/\${product.id}\`);
  };
  
  const handleAddToCart = (e) => {
    e.stopPropagation();  // 카드 클릭 이벤트 막기!
    console.log('장바구니에 추가');
  };
  
  const handleLike = (e) => {
    e.stopPropagation();  // 카드 클릭 이벤트 막기!
    console.log('찜하기');
  };
  
  return (
    <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()}원</p>
      
      <div>
        <button onClick={handleAddToCart}>장바구니</button>
        <button onClick={handleLike}>❤️ 찜</button>
      </div>
    </div>
  );
}

// stopPropagation 없으면?
// → 버튼 클릭 시 카드도 클릭되어 상세 페이지로 이동함!

// stopPropagation 있으면?
// → 버튼 클릭 시 버튼 기능만 실행됨!`}
      />
    </div>
  );
}

export default EventControl;