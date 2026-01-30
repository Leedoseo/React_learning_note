// 5-3-3_FilteredArrayRendering.jsx

import React, { useState } from 'react';
import TabViewer from '../../common/TabViewer';

function FilteredArrayRendering() {
  // 예제 2용 state
  const [searchTerm, setSearchTerm] = useState('');
  
  const users = [
    { id: 1, name: '김철수', email: 'kim@email.com', department: '개발팀' },
    { id: 2, name: '이영희', email: 'lee@email.com', department: '디자인팀' },
    { id: 3, name: '박민수', email: 'park@email.com', department: '개발팀' },
    { id: 4, name: '최지영', email: 'choi@email.com', department: '기획팀' },
    { id: 5, name: '정수진', email: 'jung@email.com', department: '디자인팀' }
  ];
  
  const filteredUsers = users.filter((user) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(lowerSearchTerm) ||
      user.email.toLowerCase().includes(lowerSearchTerm) ||
      user.department.toLowerCase().includes(lowerSearchTerm)
    );
  });

  // 예제 3용 state
  const [category, setCategory] = useState('전체');
  
  const products = [
    { id: 1, name: '노트북', category: '전자기기', price: 1500000 },
    { id: 2, name: '키보드', category: '주변기기', price: 120000 },
    { id: 3, name: '마우스', category: '주변기기', price: 50000 },
    { id: 4, name: '모니터', category: '전자기기', price: 300000 },
    { id: 5, name: '헤드셋', category: '주변기기', price: 80000 },
    { id: 6, name: '태블릿', category: '전자기기', price: 800000 }
  ];
  
  const filteredProducts = category === '전체'
    ? products
    : products.filter((product) => product.category === category);

  return (
    <div style={{ padding: '20px' }}>
      <h1>5-3-3. 필터링된 배열 렌더링</h1>
      <p style={{ 
        color: '#666', 
        fontSize: '16px',
        marginBottom: '30px',
        padding: '15px',
        background: '#f5f5f5',
        borderRadius: '5px'
      }}>
        filter와 map을 조합하고, 검색 기능을 구현하며,<br/>
        조건에 따라 다른 항목을 표시하는 방법을 학습합니다.
      </p>

      {/* 예제 1: 기본 필터링 */}
      <TabViewer
        title="예제 1: filter와 map 조합"
        description="배열에서 조건에 맞는 항목만 선택하여 렌더링"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>짝수만 표시하기</h4>
            <div style={{ 
              background: '#e3f2fd', 
              padding: '15px', 
              borderRadius: '5px',
              marginBottom: '15px'
            }}>
              <strong>원본 배열:</strong> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            </div>
            
            <div style={{ 
              background: '#e8f5e9', 
              padding: '15px', 
              borderRadius: '5px' 
            }}>
              <strong>필터링 결과 (짝수만):</strong>
              <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                  .filter((num) => num % 2 === 0)
                  .map((num) => (
                    <li key={num} style={{ fontSize: '18px', margin: '5px 0' }}>
                      {num}
                    </li>
                  ))
                }
              </ul>
            </div>

            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              background: '#fff3e0', 
              borderRadius: '5px' 
            }}>
              <strong>⚠️ 순서 주의:</strong>
              <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>
                1. filter() 먼저 → 조건에 맞는 데이터 선택<br/>
                2. map() 나중 → 선택된 데이터를 JSX로 변환
              </p>
            </div>
          </div>
        }
        codeString={`function FilteredList() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  return (
    <div>
      <h3>짝수만 표시</h3>
      <ul>
        {numbers
          .filter((num) => num % 2 === 0)  // 먼저 필터링
          .map((num) => (                   // 그 다음 렌더링
            <li key={num}>{num}</li>
          ))
        }
      </ul>
    </div>
  );
}

// 동작 과정:
// 1. filter: [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
// 2. map: [2,4,6,8,10] → [<li>2</li>, <li>4</li>, ...]

// ❌ 잘못된 순서
{numbers
  .map((num) => <li>{num}</li>)
  .filter((num) => num % 2 === 0)  // JSX가 되어서 필터 안 됨
}

// ✅ 올바른 순서
{numbers
  .filter((num) => num % 2 === 0)  // 먼저 데이터 필터링
  .map((num) => <li key={num}>{num}</li>)  // 그 다음 JSX로 변환
}`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 2: 검색 기능 */}
      <TabViewer
        title="예제 2: 실시간 검색 기능"
        description="입력한 검색어로 여러 필드를 검색하는 기능"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>👥 사용자 검색</h4>
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="이름, 이메일, 부서로 검색..."
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '14px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                marginBottom: '15px'
              }}
            />
            
            <p style={{ 
              margin: '15px 0', 
              color: '#666',
              background: '#f5f5f5',
              padding: '10px',
              borderRadius: '5px'
            }}>
              검색 결과: <strong>{filteredUsers.length}</strong>명
            </p>
            
            {filteredUsers.length === 0 ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '40px', 
                color: '#999',
                background: '#fafafa',
                borderRadius: '8px'
              }}>
                <p style={{ fontSize: '48px', margin: '0 0 10px 0' }}>😢</p>
                <p style={{ margin: 0 }}>검색 결과가 없습니다</p>
              </div>
            ) : (
              filteredUsers.map((user) => (
                <div 
                  key={user.id}
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '15px',
                    marginBottom: '10px',
                    background: 'white'
                  }}
                >
                  <h4 style={{ margin: '0 0 8px 0' }}>{user.name}</h4>
                  <p style={{ margin: '3px 0', fontSize: '14px', color: '#666' }}>
                    📧 {user.email}
                  </p>
                  <p style={{ margin: '3px 0', fontSize: '14px', color: '#666' }}>
                    🏢 {user.department}
                  </p>
                </div>
              ))
            )}
          </div>
        }
        codeString={`function UserSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const users = [
    { id: 1, name: '김철수', email: 'kim@email.com', department: '개발팀' },
    { id: 2, name: '이영희', email: 'lee@email.com', department: '디자인팀' },
    { id: 3, name: '박민수', email: 'park@email.com', department: '개발팀' }
  ];
  
  // 여러 필드에서 검색 (대소문자 구분 없이)
  const filteredUsers = users.filter((user) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(lowerSearchTerm) ||
      user.email.toLowerCase().includes(lowerSearchTerm) ||
      user.department.toLowerCase().includes(lowerSearchTerm)
    );
  });
  
  return (
    <div>
      <input 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="이름, 이메일, 부서로 검색..."
      />
      
      <p>검색 결과: {filteredUsers.length}명</p>
      
      {filteredUsers.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>📧 {user.email}</p>
          <p>🏢 {user.department}</p>
        </div>
      ))}
      
      {/* 빈 결과 처리 */}
      {filteredUsers.length === 0 && (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 3: 카테고리 필터 */}
      <TabViewer
        title="예제 3: 카테고리 필터"
        description="버튼으로 카테고리를 선택하여 필터링"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>🛒 상품 목록</h4>
            
            <div style={{ marginBottom: '20px' }}>
              {['전체', '전자기기', '주변기기'].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setCategory(cat)}
                  style={{
                    padding: '10px 20px',
                    margin: '0 5px 5px 0',
                    background: category === cat ? '#1976d2' : '#f5f5f5',
                    color: category === cat ? 'white' : 'black',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: category === cat ? 'bold' : 'normal',
                    transition: 'all 0.2s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <p style={{ 
              margin: '15px 0', 
              color: '#666',
              background: '#f5f5f5',
              padding: '10px',
              borderRadius: '5px'
            }}>
              <strong>{filteredProducts.length}</strong>개 상품
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '15px'
            }}>
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '20px',
                    background: 'white'
                  }}
                >
                  <h4 style={{ margin: '0 0 10px 0' }}>{product.name}</h4>
                  <p style={{ 
                    margin: '5px 0', 
                    fontSize: '13px',
                    color: '#666',
                    background: '#f5f5f5',
                    padding: '5px 10px',
                    borderRadius: '12px',
                    display: 'inline-block'
                  }}>
                    {product.category}
                  </p>
                  <p style={{ 
                    margin: '10px 0 0 0', 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                    color: '#f44336' 
                  }}>
                    {product.price.toLocaleString()}원
                  </p>
                </div>
              ))}
            </div>
          </div>
        }
        codeString={`function ProductFilter() {
  const [category, setCategory] = useState('전체');
  
  const products = [
    { id: 1, name: '노트북', category: '전자기기', price: 1500000 },
    { id: 2, name: '키보드', category: '주변기기', price: 120000 },
    { id: 3, name: '마우스', category: '주변기기', price: 50000 },
    { id: 4, name: '모니터', category: '전자기기', price: 300000 }
  ];
  
  // 카테고리 필터링
  const filteredProducts = category === '전체'
    ? products  // 전체 선택 시 모든 상품
    : products.filter((product) => product.category === category);
  
  return (
    <div>
      {/* 카테고리 버튼 */}
      <div>
        <button 
          onClick={() => setCategory('전체')}
          style={{
            background: category === '전체' ? '#1976d2' : '#f5f5f5',
            color: category === '전체' ? 'white' : 'black'
          }}
        >
          전체
        </button>
        <button 
          onClick={() => setCategory('전자기기')}
          style={{
            background: category === '전자기기' ? '#1976d2' : '#f5f5f5',
            color: category === '전자기기' ? 'white' : 'black'
          }}
        >
          전자기기
        </button>
        <button 
          onClick={() => setCategory('주변기기')}
          style={{
            background: category === '주변기기' ? '#1976d2' : '#f5f5f5',
            color: category === '주변기기' ? 'white' : 'black'
          }}
        >
          주변기기
        </button>
      </div>
      
      <p>{filteredProducts.length}개 상품</p>
      
      {/* 필터링된 상품 렌더링 */}
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>카테고리: {product.category}</p>
          <p>{product.price.toLocaleString()}원</p>
        </div>
      ))}
    </div>
  );
}`}
      />
    </div>
  );
}

export default FilteredArrayRendering;