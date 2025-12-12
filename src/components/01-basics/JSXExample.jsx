// src/components/01-basics/JSXExample.jsx
function JSXExample() {
  const name = "도서"
  const age = 25
  
  return (
    <div>
      <h3>JSX 예제</h3>
      <p>JSX에서 JavaScript 표현식 사용하기</p>
      <div style={{ 
        padding: '20px', 
        backgroundColor: 'grey', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <p>이름: {name}</p>
        <p>나이: {age}</p>
        <p>10년 후: {age + 10}살</p>
      </div>
    </div>
  )
}

export default JSXExample