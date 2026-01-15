// src/components/03-props/3-1-basic/01-WhatIsProps.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: Props 없이 (하드코딩)
function UserCardWithoutProps() {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h3>홍길동</h3>
      <p>25세</p>
    </div>
  );
}

// 예제 2: Props 사용
function UserCardWithProps(props) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h3>{props.name}</h3>
      <p>{props.age}세</p>
    </div>
  );
}

// 예제 3: 여러 Props
function ProductCard(props) {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '20px', 
      margin: '10px', 
      borderRadius: '8px',
      width: '200px',
      display: 'inline-block'
    }}>
      <h3>{props.name}</h3>
      <p style={{ color: '#007bff', fontSize: '20px', fontWeight: 'bold' }}>
        {props.price.toLocaleString()}원
      </p>
      <p style={{ fontSize: '14px', color: '#666' }}>{props.description}</p>
    </div>
  );
}

// 예제 4: 다양한 타입 Props
function UserInfo(props) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>{props.name}</h3>
      <p>나이: {props.age}세</p>
      <p>활성: {props.isActive ? '✅' : '❌'}</p>
      <p>취미: {props.hobbies.join(', ')}</p>
    </div>
  );
}

// 예제 5: 함수 Props
function ButtonWithFunction(props) {
  return (
    <button 
      onClick={props.onClick}
      style={{ 
        padding: '10px 20px', 
        backgroundColor: '#007bff', 
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '5px'
      }}
    >
      {props.text}
    </button>
  );
}

function WhatIsProps() {
  const handleClick = () => {
    alert('버튼이 클릭되었습니다!');
  };

  // 예제 1
  const resultContent1 = (
    <div>
      <UserCardWithoutProps />
      <p style={{ color: '#999', fontSize: '12px', marginTop: '10px' }}>
        홍길동만 표시 가능... 다른 사용자는?
      </p>
    </div>
  );

  const codeString1 = `function UserCard() {
  return (
    <div>
      <h3>홍길동</h3>  {/* 하드코딩됨 */}
      <p>25세</p>
    </div>
  );
}

// 사용
<UserCard />
<UserCard />  // 똑같은 내용만 나옴`;

  // 예제 2
  const resultContent2 = (
    <div>
      <UserCardWithProps name="홍길동" age={25} />
      <UserCardWithProps name="김철수" age={30} />
      <UserCardWithProps name="이영희" age={28} />
    </div>
  );

  const codeString2 = `function UserCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.age}세</p>
    </div>
  );
}

// 사용
<UserCard name="홍길동" age={25} />
<UserCard name="김철수" age={30} />
<UserCard name="이영희" age={28} />

// 같은 컴포넌트로 다른 내용 표시!`;

  // 예제 3
  const resultContent3 = (
    <div>
      <ProductCard 
        name="무선 이어폰"
        price={89000}
        description="고음질 블루투스 이어폰"
      />
      <ProductCard 
        name="기계식 키보드"
        price={150000}
        description="청축 RGB 게이밍 키보드"
      />
    </div>
  );

  const codeString3 = `function ProductCard(props) {
  return (
    <div className="product-card">
      <h3>{props.name}</h3>
      <p>{props.price.toLocaleString()}원</p>
      <p>{props.description}</p>
    </div>
  );
}

// 사용
<ProductCard 
  name="무선 이어폰"
  price={89000}
  description="고음질 블루투스 이어폰"
/>

<ProductCard 
  name="기계식 키보드"
  price={150000}
  description="청축 RGB 게이밍 키보드"
/>`;

  // 예제 4
  const resultContent4 = (
    <UserInfo 
      name="홍길동"
      age={25}
      isActive={true}
      hobbies={['코딩', '독서', '운동']}
    />
  );

  const codeString4 = `function UserInfo(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>나이: {props.age}세</p>
      <p>활성: {props.isActive ? '✅' : '❌'}</p>
      <p>취미: {props.hobbies.join(', ')}</p>
    </div>
  );
}

// 다양한 타입 전달
<UserInfo 
  name="홍길동"           // 문자열
  age={25}                // 숫자
  isActive={true}         // 불린
  hobbies={['코딩', '독서', '운동']}  // 배열
/>

Props로 어떤 타입이든 전달 가능!`;

  // 예제 5
  const resultContent5 = (
    <div>
      <ButtonWithFunction text="클릭하세요" onClick={handleClick} />
      <ButtonWithFunction text="알림" onClick={() => alert('알림!')} />
      <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        버튼을 클릭해보세요!
      </p>
    </div>
  );

  const codeString5 = `function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  );
}

// 함수도 Props로 전달 가능
function App() {
  const handleClick = () => {
    alert('버튼 클릭!');
  };
  
  return (
    <div>
      <Button text="클릭하세요" onClick={handleClick} />
      <Button text="알림" onClick={() => alert('알림!')} />
    </div>
  );
}`;

  return (
    <div>
      <h2>3-1-1. Props란?</h2>

      <TabViewer
        title="예제 1: Props 없이 (하드코딩)"
        description="Props 없이 만들면 똑같은 내용만 표시됨. 재사용 불가능"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: Props 사용"
          description="Props로 데이터를 받으면 같은 컴포넌트로 다른 내용 표시 가능"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 여러 Props 전달"
          description="여러 개의 Props를 전달해서 더 풍부한 정보 표시"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 4: 다양한 타입의 Props"
          description="문자열, 숫자, 불린, 배열 등 모든 타입을 Props로 전달 가능"
          resultContent={resultContent4}
          codeString={codeString4}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 5: 함수 Props"
          description="함수도 Props로 전달 가능. 이벤트 핸들러에 자주 사용"
          resultContent={resultContent5}
          codeString={codeString5}
        />
      </div>
    </div>
  );
}

export default WhatIsProps;