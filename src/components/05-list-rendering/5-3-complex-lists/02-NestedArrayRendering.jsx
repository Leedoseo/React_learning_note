// 5-3-2_NestedArrayRendering.jsx

import React, { useState } from 'react';
import TabViewer from '../../common/TabViewer';

function NestedArrayRendering() {
  // 예제 2용 state
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = [
    ['A1', 'A2', 'A3', 'A4'],
    ['B1', 'B2', 'B3', 'B4'],
    ['C1', 'C2', 'C3', 'C4']
  ];

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>5-3-2. 중첩된 배열 렌더링</h1>
      <p style={{ 
        color: '#666', 
        fontSize: '16px',
        marginBottom: '30px',
        padding: '15px',
        background: '#f5f5f5',
        borderRadius: '5px'
      }}>
        2차원 배열, 카테고리별 그룹핑, 계층 구조 데이터를<br/>
        렌더링하는 방법을 학습합니다.
      </p>

      {/* 예제 1: 2차원 배열 - 격자 */}
      <TabViewer
        title="예제 1: 2차원 배열 - 숫자 격자"
        description="배열 안에 배열이 있는 구조를 이중 map으로 렌더링"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>🔢 3x3 격자</h4>
            <div>
              {[
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
              ].map((row, rowIndex) => (
                <div 
                  key={rowIndex} 
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  {row.map((cell, cellIndex) => (
                    <div 
                      key={cellIndex}
                      style={{
                        width: '60px',
                        height: '60px',
                        border: '2px solid #1976d2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        background: 'white',
                        margin: '2px'
                      }}
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        }
        codeString={`function Grid() {
  // 3x3 격자
  const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  return (
    <div>
      {/* 외부 map: 각 행(row)을 순회 */}
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {/* 내부 map: 각 셀(cell)을 순회 */}
          {row.map((cell, cellIndex) => (
            <div 
              key={cellIndex}
              style={{
                width: '50px',
                height: '50px',
                border: '1px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 2: 좌석 선택 */}
      <TabViewer
        title="예제 2: 좌석 배치도 (상호작용)"
        description="2차원 배열로 좌석을 표현하고 선택 기능 구현"
        resultContent={
          <div>
            <h4 style={{ marginBottom: '15px' }}>🎫 좌석 선택</h4>
            <div style={{ display: 'inline-block' }}>
              {seats.map((row, rowIndex) => (
                <div 
                  key={rowIndex} 
                  style={{ 
                    display: 'flex', 
                    gap: '5px', 
                    marginBottom: '5px' 
                  }}
                >
                  {row.map((seat, seatIndex) => (
                    <button
                      key={seatIndex}
                      onClick={() => toggleSeat(seat)}
                      style={{
                        width: '60px',
                        height: '60px',
                        background: selectedSeats.includes(seat) ? '#4CAF50' : '#f5f5f5',
                        color: selectedSeats.includes(seat) ? 'white' : 'black',
                        border: '2px solid #ddd',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        transition: 'all 0.2s'
                      }}
                    >
                      {seat}
                    </button>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              background: '#e8f5e9', 
              borderRadius: '5px' 
            }}>
              <strong>선택된 좌석:</strong>{' '}
              {selectedSeats.length > 0 ? selectedSeats.join(', ') : '없음'}
            </div>
          </div>
        }
        codeString={`function SeatMap() {
  const seats = [
    ['A1', 'A2', 'A3', 'A4'],
    ['B1', 'B2', 'B3', 'B4'],
    ['C1', 'C2', 'C3', 'C4']
  ];
  
  const [selected, setSelected] = useState([]);
  
  const toggleSeat = (seat) => {
    if (selected.includes(seat)) {
      setSelected(selected.filter(s => s !== seat));
    } else {
      setSelected([...selected, seat]);
    }
  };
  
  return (
    <div>
      <h3>좌석 선택</h3>
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', gap: '5px' }}>
          {row.map((seat, seatIndex) => (
            <button
              key={seatIndex}
              onClick={() => toggleSeat(seat)}
              style={{
                background: selected.includes(seat) ? '#4CAF50' : '#f5f5f5',
                color: selected.includes(seat) ? 'white' : 'black'
              }}
            >
              {seat}
            </button>
          ))}
        </div>
      ))}
      <p>선택된 좌석: {selected.join(', ') || '없음'}</p>
    </div>
  );
}`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 3: 카테고리별 그룹핑 */}
      <TabViewer
        title="예제 3: 카테고리별 그룹핑 - 메뉴판"
        description="데이터를 카테고리로 묶어서 표시하는 패턴"
        resultContent={
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>🍽️ 메뉴판</h2>
            {[
              {
                id: 1,
                category: '🍕 메인 요리',
                items: [
                  { id: 101, name: '마르게리타 피자', price: 15000 },
                  { id: 102, name: '페퍼로니 피자', price: 17000 },
                  { id: 103, name: '하와이안 피자', price: 18000 }
                ]
              },
              {
                id: 2,
                category: '🥗 사이드 메뉴',
                items: [
                  { id: 201, name: '시저 샐러드', price: 8000 },
                  { id: 202, name: '치킨 윙', price: 12000 },
                  { id: 203, name: '감자튀김', price: 5000 }
                ]
              },
              {
                id: 3,
                category: '🥤 음료',
                items: [
                  { id: 301, name: '콜라', price: 2000 },
                  { id: 302, name: '사이다', price: 2000 },
                  { id: 303, name: '아이스티', price: 3000 }
                ]
              }
            ].map((section) => (
              <div 
                key={section.id}
                style={{
                  marginBottom: '25px',
                  background: 'white',
                  padding: '20px',
                  borderRadius: '10px',
                  border: '1px solid #ddd'
                }}
              >
                <h3 style={{ 
                  borderBottom: '2px solid #1976d2',
                  paddingBottom: '10px',
                  marginBottom: '15px',
                  margin: '0 0 15px 0'
                }}>
                  {section.category}
                </h3>
                
                {section.items.map((item) => (
                  <div 
                    key={item.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: '1px solid #eee'
                    }}
                  >
                    <span style={{ fontSize: '15px' }}>{item.name}</span>
                    <span style={{ 
                      fontWeight: 'bold',
                      color: '#f44336',
                      fontSize: '16px'
                    }}>
                      {item.price.toLocaleString()}원
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        }
        codeString={`function MenuBoard() {
  const menu = [
    {
      id: 1,
      category: '🍕 메인 요리',
      items: [
        { id: 101, name: '마르게리타 피자', price: 15000 },
        { id: 102, name: '페퍼로니 피자', price: 17000 },
        { id: 103, name: '하와이안 피자', price: 18000 }
      ]
    },
    {
      id: 2,
      category: '🥗 사이드 메뉴',
      items: [
        { id: 201, name: '시저 샐러드', price: 8000 },
        { id: 202, name: '치킨 윙', price: 12000 }
      ]
    }
  ];
  
  return (
    <div>
      <h2>🍽️ 메뉴판</h2>
      
      {/* 외부 map: 각 카테고리 섹션 */}
      {menu.map((section) => (
        <div key={section.id}>
          <h3>{section.category}</h3>
          
          {/* 내부 map: 각 메뉴 아이템 */}
          {section.items.map((item) => (
            <div key={item.id}>
              <span>{item.name}</span>
              <span>{item.price.toLocaleString()}원</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}`}
      />
    </div>
  );
}

export default NestedArrayRendering;