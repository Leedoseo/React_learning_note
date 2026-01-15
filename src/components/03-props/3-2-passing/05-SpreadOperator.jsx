// src/components/03-props/3-2-passing/05-SpreadOperator.jsx
import TabViewer from "../../common/TabViewer";

// 예제용 컴포넌트
function UserCard(props) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      margin: '10px 0',
      width: '300px'
    }}>
      <h3>{props.name}</h3>
      <p>나이: {props.age}세</p>
      <p>직업: {props.job}</p>
      <p>이메일: {props.email}</p>
    </div>
  );
}

function ProductCard(props) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      margin: '10px 0',
      width: '250px',
      display: 'inline-block',
      verticalAlign: 'top'
    }}>
      <h3>{props.name}</h3>
      <p style={{ color: '#007bff', fontSize: '20px', fontWeight: 'bold' }}>
        {props.price.toLocaleString()}원
      </p>
      <p style={{ fontSize: '14px', color: '#666' }}>{props.description}</p>
      <p>재고: {props.inStock ? '✅' : '❌'}</p>
    </div>
  );
}

function SpreadOperator() {
  // 예제 1
  const userProps = {
    name: '홍길동',
    age: 25,
    job: '개발자',
    email: 'hong@example.com'
  };

  const resultContent1 = (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h4>방법 1: 하나씩 전달 (비효율)</h4>
        <UserCard 
          name={userProps.name}
          age={userProps.age}
          job={userProps.job}
          email={userProps.email}
        />
      </div>
      
      <div>
        <h4>방법 2: 스프레드 연산자 (간편)</h4>
        <UserCard {...userProps} />
      </div>
    </div>
  );

  const codeString1 = `function App() {
  const userProps = {
    name: '홍길동',
    age: 25,
    job: '개발자',
    email: 'hong@example.com'
  };
  
  return (
    <div>
      {/* 방법 1: 하나씩 전달 */}
      <UserCard 
        name={userProps.name}
        age={userProps.age}
        job={userProps.job}
        email={userProps.email}
      />
      
      {/* 방법 2: 스프레드 연산자 (간편) */}
      <UserCard {...userProps} />
    </div>
  );
}

// {...userProps}는 아래와 같은 의미:
// name={userProps.name} 
// age={userProps.age} 
// job={userProps.job} 
// email={userProps.email}`;

  // 예제 2
  const product = {
    name: '무선 이어폰',
    price: 89000,
    description: '고음질 블루투스 이어폰',
    inStock: true
  };

  const resultContent2 = (
    <div>
      <ProductCard 
        {...product}
        price={70000}
      />
      <ProductCard {...product} />
    </div>
  );

  const codeString2 = `function App() {
  const product = {
    name: '무선 이어폰',
    price: 89000,
    description: '고음질 블루투스 이어폰',
    inStock: true
  };
  
  return (
    <div>
      {/* 스프레드 후 일부 Props 덮어쓰기 */}
      <ProductCard 
        {...product}
        price={70000}  // product.price를 덮어씀
      />
      
      {/* 원본 그대로 */}
      <ProductCard {...product} />
    </div>
  );
}

// 스프레드 후에 명시한 Props는 덮어써짐`;

  // 예제 3
  const users = [
    { id: 1, name: '홍길동', age: 25, job: '개발자', email: 'hong@example.com' },
    { id: 2, name: '김철수', age: 30, job: '디자이너', email: 'kim@example.com' },
    { id: 3, name: '이영희', age: 28, job: '기획자', email: 'lee@example.com' }
  ];

  const resultContent3 = (
    <div>
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );

  const codeString3 = `function App() {
  const users = [
    { id: 1, name: '홍길동', age: 25, job: '개발자', email: 'hong@example.com' },
    { id: 2, name: '김철수', age: 30, job: '디자이너', email: 'kim@example.com' },
    { id: 3, name: '이영희', age: 28, job: '기획자', email: 'lee@example.com' }
  ];
  
  return (
    <div>
      {users.map(user => (
        <UserCard 
          key={user.id}
          {...user}  // user 객체의 모든 속성을 Props로 전달
        />
      ))}
    </div>
  );
}

// map과 스프레드 연산자를 함께 사용하면 매우 편리`;

  return (
    <div>
      <h2>3-2-5. 스프레드 연산자로 Props 전달</h2>

      <TabViewer
        title="예제 1: 스프레드 연산자 기본"
        description="객체의 모든 속성을 한 번에 Props로 전달. 코드가 간결해짐"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 스프레드 + 덮어쓰기"
          description="스프레드 후 특정 Props만 다른 값으로 덮어쓸 수 있음"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 배열 + 스프레드"
          description="map과 스프레드를 함께 사용하면 배열 데이터를 쉽게 렌더링"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default SpreadOperator;