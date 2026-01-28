// 5-2-2_CorrectKeyUsage.jsx

import React from 'react';
import TabViewer from '../../common/TabViewer';

function CorrectKeyUsage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>5-2-2. 올바른 key 설정</h1>
      <p style={{ 
        color: '#666', 
        fontSize: '16px',
        marginBottom: '30px',
        padding: '15px',
        background: '#f5f5f5',
        borderRadius: '5px'
      }}>
        고유한 id를 사용하는 방법과 key 설정 규칙을 학습하고,<br/>
        실전에서 사용할 수 있는 올바른 key 패턴을 익힙니다.
      </p>

      {/* 예제 1: 고유한 id 사용 */}
      <TabViewer
        title="예제 1: API 데이터의 id 사용"
        description="가장 이상적인 key - 데이터베이스나 API에서 제공하는 고유 id"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>📝 게시글 목록</h4>
            {[
              { 
                id: 'post_abc123', 
                title: 'React 입문 가이드', 
                author: '김철수',
                date: '2024-01-20',
                views: 1250
              },
              { 
                id: 'post_def456', 
                title: 'JavaScript ES6 완벽 정리', 
                author: '이영희',
                date: '2024-01-19',
                views: 892
              },
              { 
                id: 'post_ghi789', 
                title: 'TypeScript 시작하기', 
                author: '박민수',
                date: '2024-01-18',
                views: 1567
              }
            ].map((post) => (
              <article 
                key={post.id}
                style={{
                  background: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  marginBottom: '15px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <h3 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>
                  {post.title}
                </h3>
                <div style={{ 
                  display: 'flex', 
                  gap: '15px', 
                  color: '#666',
                  fontSize: '14px'
                }}>
                  <span>👤 {post.author}</span>
                  <span>📅 {post.date}</span>
                  <span>👁️ {post.views.toLocaleString()}</span>
                </div>
                <div style={{ 
                  marginTop: '10px', 
                  fontSize: '12px', 
                  color: '#999' 
                }}>
                  key: {post.id}
                </div>
              </article>
            ))}
          </div>
        }
        codeString={`function PostList() {
  // 서버에서 받아온 게시글 데이터
  const posts = [
    { 
      id: 'post_abc123',  // ✅ 고유한 문자열 id
      title: 'React 입문 가이드', 
      author: '김철수',
      date: '2024-01-20',
      views: 1250
    },
    { 
      id: 'post_def456', 
      title: 'JavaScript ES6 완벽 정리', 
      author: '이영희',
      date: '2024-01-19',
      views: 892
    }
  ];
  
  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>  {/* id를 key로 사용 */}
          <h3>{post.title}</h3>
          <p>작성자: {post.author}</p>
          <p>날짜: {post.date}</p>
          <p>조회수: {post.views}</p>
        </article>
      ))}
    </div>
  );
}

// 왜 이게 최선일까?
// 1. 영구적: 게시글이 이동하거나 정렬되어도 id는 절대 변하지 않음
// 2. 고유성 보장: 데이터베이스에서 이미 고유성이 보장됨
// 3. 의미 있음: 실제 게시글의 정체성을 나타냄`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 2: 형제 요소 간에만 고유하면 됨 */}
      <TabViewer
        title="예제 2: key는 형제 간에만 고유하면 됨"
        description="다른 리스트에서는 같은 key를 사용해도 괜찮음"
        resultContent={
          <div>
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ color: '#4CAF50' }}>🍎 과일 목록</h4>
              <ul style={{ 
                background: '#e8f5e9', 
                padding: '15px', 
                borderRadius: '5px',
                listStyle: 'none'
              }}>
                {[
                  { id: 1, name: '사과', emoji: '🍎' },
                  { id: 2, name: '바나나', emoji: '🍌' },
                  { id: 3, name: '오렌지', emoji: '🍊' }
                ].map((item) => (
                  <li key={item.id} style={{ padding: '8px 0' }}>
                    {item.emoji} {item.name} <span style={{ color: '#999', fontSize: '12px' }}>(key: {item.id})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#FF9800' }}>🥕 채소 목록</h4>
              <ul style={{ 
                background: '#fff3e0', 
                padding: '15px', 
                borderRadius: '5px',
                listStyle: 'none'
              }}>
                {[
                  { id: 1, name: '당근', emoji: '🥕' },  /* 과일의 id와 같아도 OK */
                  { id: 2, name: '양파', emoji: '🧅' },
                  { id: 3, name: '배추', emoji: '🥬' }
                ].map((item) => (
                  <li key={item.id} style={{ padding: '8px 0' }}>
                    {item.emoji} {item.name} <span style={{ color: '#999', fontSize: '12px' }}>(key: {item.id})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              background: '#e3f2fd', 
              borderRadius: '5px' 
            }}>
              <p style={{ margin: 0, color: '#1976d2' }}>
                ✅ 두 리스트 모두 id:1, 2, 3을 사용하지만 문제없음!<br/>
                각 리스트는 독립적으로 관리되므로 형제 간에만 고유하면 됩니다.
              </p>
            </div>
          </div>
        }
        codeString={`function MultipleList() {
  const fruits = [
    { id: 1, name: '사과' },
    { id: 2, name: '바나나' },
    { id: 3, name: '오렌지' }
  ];
  
  const vegetables = [
    { id: 1, name: '당근' },  // fruits의 id와 같아도 OK!
    { id: 2, name: '양파' },
    { id: 3, name: '배추' }
  ];
  
  return (
    <div>
      <h3>과일</h3>
      <ul>
        {fruits.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      
      <h3>채소</h3>
      <ul>
        {vegetables.map((item) => (
          <li key={item.id}>{item.name}</li>  {/* 같은 id여도 다른 리스트니까 OK */}
        ))}
      </ul>
    </div>
  );
}

// key는 "같은 부모 아래의 형제들" 사이에서만 고유하면 됨!`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 3: 중첩된 리스트의 key */}
      <TabViewer
        title="예제 3: 중첩된 리스트"
        description="각 레벨마다 적절한 key를 지정해야 함"
        resultContent={
          <div>
            {[
              {
                id: 1,
                name: '프론트엔드',
                color: '#e3f2fd',
                items: [
                  { id: 101, name: 'React' },
                  { id: 102, name: 'Vue' },
                  { id: 103, name: 'Angular' }
                ]
              },
              {
                id: 2,
                name: '백엔드',
                color: '#f3e5f5',
                items: [
                  { id: 201, name: 'Node.js' },
                  { id: 202, name: 'Django' },
                  { id: 203, name: 'Spring' }
                ]
              },
              {
                id: 3,
                name: '데이터베이스',
                color: '#e8f5e9',
                items: [
                  { id: 301, name: 'MySQL' },
                  { id: 302, name: 'PostgreSQL' },
                  { id: 303, name: 'MongoDB' }
                ]
              }
            ].map((category) => (
              <div 
                key={category.id}
                style={{
                  background: category.color,
                  padding: '20px',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              >
                <h4 style={{ margin: '0 0 15px 0' }}>
                  📁 {category.name} <span style={{ fontSize: '12px', color: '#666' }}>(key: {category.id})</span>
                </h4>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  margin: 0 
                }}>
                  {category.items.map((item) => (
                    <li 
                      key={item.id}
                      style={{
                        background: 'white',
                        padding: '10px',
                        margin: '5px 0',
                        borderRadius: '4px',
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>📄 {item.name}</span>
                      <span style={{ fontSize: '12px', color: '#999' }}>key: {item.id}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        }
        codeString={`function CategoryList() {
  const categories = [
    {
      id: 1,  // 카테고리 id
      name: '프론트엔드',
      items: [
        { id: 101, name: 'React' },  // 아이템 id
        { id: 102, name: 'Vue' },
        { id: 103, name: 'Angular' }
      ]
    },
    {
      id: 2,
      name: '백엔드',
      items: [
        { id: 201, name: 'Node.js' },
        { id: 202, name: 'Django' },
        { id: 203, name: 'Spring' }
      ]
    }
  ];
  
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>  {/* 외부 리스트의 key */}
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item) => (
              <li key={item.id}>  {/* 내부 리스트의 key */}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// 중요: 각 레벨마다 독립적인 key가 필요함!
// - 외부 리스트: category.id
// - 내부 리스트: item.id`}
      />
    </div>
  );
}

export default CorrectKeyUsage;