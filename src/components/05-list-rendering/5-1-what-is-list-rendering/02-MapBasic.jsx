// 5-1-2_MapBasic.jsx

import React from 'react';
import TabViewer from '../../common/TabViewer';

function MapBasic() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>5-1-2. map 함수 기본</h1>
      <p style={{ 
        color: '#666', 
        fontSize: '16px',
        marginBottom: '30px',
        padding: '15px',
        background: '#f5f5f5',
        borderRadius: '5px'
      }}>
        JavaScript map 함수를 복습하고, React에서 map을 사용하여<br/>
        배열 데이터를 JSX로 변환하는 방법을 학습합니다.
      </p>

      {/* 예제 1: JavaScript map 복습 */}
      <TabViewer
        title="예제 1: JavaScript map 함수 복습"
        description="map은 배열의 각 요소를 변환하여 새로운 배열을 만드는 메서드"
        resultContent={
          <div>
            <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '5px', marginBottom: '15px' }}>
              <h4>숫자 배열 변환</h4>
              <p><strong>원본:</strong> [1, 2, 3, 4, 5]</p>
              <p><strong>2배로:</strong> {JSON.stringify([1, 2, 3, 4, 5].map(num => num * 2))}</p>
            </div>
            
            <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '5px', marginBottom: '15px' }}>
              <h4>문자열 배열 변환</h4>
              <p><strong>원본:</strong> ['apple', 'banana', 'orange']</p>
              <p><strong>대문자로:</strong> {JSON.stringify(['apple', 'banana', 'orange'].map(fruit => fruit.toUpperCase()))}</p>
            </div>
            
            <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
              <h4>객체 배열에서 특정 속성 추출</h4>
              <p><strong>원본:</strong> {JSON.stringify([{name: '김철수', age: 25}, {name: '이영희', age: 30}])}</p>
              <p><strong>이름만:</strong> {JSON.stringify([{name: '김철수'}, {name: '이영희'}].map(user => user.name))}</p>
            </div>
          </div>
        }
        codeString={`// 숫자 배열 변환
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// 문자열 배열 변환
const fruits = ['apple', 'banana', 'orange'];
const upper = fruits.map((fruit) => fruit.toUpperCase());
console.log(upper);  // ['APPLE', 'BANANA', 'ORANGE']

// 객체 배열에서 특정 속성 추출
const users = [
  { name: '김철수', age: 25 },
  { name: '이영희', age: 30 }
];
const names = users.map((user) => user.name);
console.log(names);  // ['김철수', '이영희']

// 인덱스 활용
const items = ['a', 'b', 'c'];
const numbered = items.map((item, index) => \`\${index + 1}. \${item}\`);
console.log(numbered);  // ['1. a', '2. b', '3. c']`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 2: React에서 map 사용 */}
      <TabViewer
        title="예제 2: React에서 map 사용"
        description="배열 데이터를 JSX 요소로 변환"
        resultContent={
          <div>
            <div style={{ background: '#e3f2fd', padding: '15px', borderRadius: '5px', marginBottom: '15px' }}>
              <h4>배열 데이터:</h4>
              <code>const fruits = ['사과', '바나나', '오렌지']</code>
            </div>
            
            <div style={{ background: '#e8f5e9', padding: '15px', borderRadius: '5px' }}>
              <h4>렌더링 결과:</h4>
              <ul>
                {['사과', '바나나', '오렌지'].map((fruit, index) => (
                  <li key={index}>{fruit}</li>
                ))}
              </ul>
            </div>
          </div>
        }
        codeString={`function FruitList() {
  const fruits = ['사과', '바나나', '오렌지'];
  
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

// 동작 과정:
// 1. fruits 배열: ['사과', '바나나', '오렌지']
// 2. map이 각 요소를 순회
// 3. 각 과일마다 <li>{fruit}</li> JSX 생성
// 4. 결과: [<li>사과</li>, <li>바나나</li>, <li>오렌지</li>]
// 5. React가 화면에 렌더링`}
      />

      <div style={{ marginTop: '40px' }}></div>

      {/* 예제 3: 괄호 vs 중괄호 */}
      <TabViewer
        title="예제 3: 괄호 () vs 중괄호 {}"
        description="map 함수에서 JSX를 반환하는 두 가지 방법"
        resultContent={
          <div>
            <div style={{ background: '#fff3e0', padding: '15px', borderRadius: '5px', marginBottom: '15px' }}>
              <h4>✅ 방법 1: 괄호 () - 암시적 반환 (추천)</h4>
              <ul>
                {['빨강', '파랑', '초록'].map((color, index) => (
                  <li key={index} style={{ color: 'green' }}>{color}</li>
                ))}
              </ul>
            </div>
            
            <div style={{ background: '#f3e5f5', padding: '15px', borderRadius: '5px', marginBottom: '15px' }}>
              <h4>✅ 방법 2: 중괄호 {} + return - 명시적 반환</h4>
              <ul>
                {['빨강', '파랑', '초록'].map((color, index) => {
                  return <li key={index} style={{ color: 'purple' }}>{color}</li>;
                })}
              </ul>
            </div>
            
            <div style={{ background: '#ffebee', padding: '15px', borderRadius: '5px' }}>
              <h4>❌ 잘못된 사용: 중괄호만 있고 return 없음</h4>
              <p style={{ color: '#d32f2f' }}>
                ⚠️ return이 없으면 아무것도 화면에 나타나지 않음!
              </p>
            </div>
          </div>
        }
        codeString={`// ✅ 방법 1: 괄호 () - 암시적 반환 (추천)
{colors.map((color) => (
  <li>{color}</li>
))}

// ✅ 방법 2: 중괄호 {} + return - 명시적 반환
{colors.map((color) => {
  return <li>{color}</li>;
})}

// ✅ 복잡한 로직이 필요할 때 중괄호 사용
{colors.map((color) => {
  const isRed = color === '빨강';
  const style = { color: isRed ? 'red' : 'black' };
  
  return <li style={style}>{color}</li>;
})}

// ❌ 중괄호만 쓰고 return 없음 - 작동 안 함!
{colors.map((color) => {
  <li>{color}</li>  // return이 없어서 undefined 반환
})}`}
      />
    </div>
  );
}

export default MapBasic;
