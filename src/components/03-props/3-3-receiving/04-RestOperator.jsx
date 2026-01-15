// src/components/03-props/3-3-receiving/04-RestOperator.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: Rest 연산자 기본
function GreetingRest({ name, age, ...rest }) {
  console.log('name:', name);
  console.log('age:', age);
  console.log('rest:', rest);
  
  return (
    <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', margin: '10px 0' }}>
      <h3>{name}</h3>
      <p>나이: {age}세</p>
      <details>
        <summary style={{ cursor: 'pointer', color: '#007bff' }}>나머지 Props 보기</summary>
        <pre style={{ fontSize: '12px', backgroundColor: '#fff', padding: '10px', borderRadius: '4px', marginTop: '10px' }}>
          {JSON.stringify(rest, null, 2)}
        </pre>
      </details>
    </div>
  );
}

// 예제 2: Rest로 Props 전달
function CardWrapper({ title, ...rest }) {
  return (
    <div style={{ 
      padding: '15px', 
      backgroundColor: '#e3f2fd', 
      borderRadius: '8px',
      margin: '10px 0'
    }}>
      <h3 style={{ margin: '0 0 10px 0' }}>{title}</h3>
      <UserCard {...rest} />
    </div>
  );
}

function UserCard({ name, age, job }) {
  return (
    <div style={{ 
      padding: '15px', 
      backgroundColor: '#fff', 
      borderRadius: '4px',
      border: '1px solid #ddd'
    }}>
      <p><strong>이름:</strong> {name}</p>
      <p><strong>나이:</strong> {age}세</p>
      <p><strong>직업:</strong> {job}</p>
    </div>
  );
}

// 예제 3: HTML 속성 전달
function CustomButton({ children, variant = "primary", ...htmlProps }) {
  const colors = {
    primary: '#007bff',
    success: '#28a745',
    danger: '#dc3545'
  };
  
  return (
    <button 
      {...htmlProps}
      style={{ 
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: colors[variant],
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        ...htmlProps.style
      }}
    >
      {children}
    </button>
  );
}

function RestOperator() {
  // 예제 1
  const resultContent1 = (
    <GreetingRest 
      name="홍길동"
      age={25}
      job="개발자"
      email="hong@example.com"
      phone="010-1234-5678"
    />
  );

  const codeString1 = `function Greeting({ name, age, ...rest }) {
  console.log('name:', name);      // "홍길동"
  console.log('age:', age);        // 25
  console.log('rest:', rest);      
  // { job: "개발자", email: "hong@example.com", phone: "010-1234-5678" }
  
  return (
    <div>
      <h3>{name}</h3>
      <p>나이: {age}세</p>
      <p>직업: {rest.job}</p>
      <p>이메일: {rest.email}</p>
    </div>
  );
}

function App() {
  return (
    <Greeting 
      name="홍길동"
      age={25}
      job="개발자"
      email="hong@example.com"
      phone="010-1234-5678"
    />
  );
}

// name, age는 직접 받고
// 나머지는 rest 객체에 모임`;

  // 예제 2
  const resultContent2 = (
    <CardWrapper 
      title="사용자 정보"
      name="김철수"
      age={30}
      job="디자이너"
    />
  );

  const codeString2 = `function CardWrapper({ title, ...rest }) {
  return (
    <div className="wrapper">
      <h3>{title}</h3>
      {/* rest를 UserCard에 그대로 전달 */}
      <UserCard {...rest} />
    </div>
  );
}

function UserCard({ name, age, job }) {
  return (
    <div>
      <p>이름: {name}</p>
      <p>나이: {age}세</p>
      <p>직업: {job}</p>
    </div>
  );
}

function App() {
  return (
    <CardWrapper 
      title="사용자 정보"
      name="김철수"    // rest에 포함
      age={30}        // rest에 포함
      job="디자이너"   // rest에 포함
    />
  );
}

// title만 CardWrapper에서 사용하고
// 나머지는 UserCard에 전달`;

  // 예제 3
  const resultContent3 = (
    <div>
      <CustomButton 
        variant="primary"
        onClick={() => alert('Primary 클릭!')}
      >
        Primary 버튼
      </CustomButton>
      
      <CustomButton 
        variant="success"
        onClick={() => alert('Success 클릭!')}
        disabled={false}
      >
        Success 버튼
      </CustomButton>
      
      <CustomButton 
        variant="danger"
        onClick={() => alert('Danger 클릭!')}
        onMouseEnter={() => console.log('마우스 올림')}
        style={{ fontSize: '18px' }}
      >
        Danger 버튼
      </CustomButton>
    </div>
  );

  const codeString3 = `function CustomButton({ children, variant = "primary", ...htmlProps }) {
  const colors = {
    primary: '#007bff',
    success: '#28a745',
    danger: '#dc3545'
  };
  
  return (
    <button 
      {...htmlProps}  // onClick, disabled, style 등 모든 HTML 속성
      style={{ 
        padding: '10px 20px',
        backgroundColor: colors[variant],
        color: 'white',
        ...htmlProps.style  // 사용자 정의 style 병합
      }}
    >
      {children}
    </button>
  );
}

function App() {
  return (
    <div>
      <CustomButton 
        variant="primary"
        onClick={() => alert('클릭!')}
        disabled={false}
        onMouseEnter={() => console.log('마우스')}
        style={{ fontSize: '18px' }}
      >
        버튼
      </CustomButton>
    </div>
  );
}

// variant, children만 따로 받고
// 나머지 HTML 속성들은 ...htmlProps로 전달
// 유연한 컴포넌트 작성 가능`;

  return (
    <div>
      <h2>3-3-4. Rest 연산자로 나머지 Props 받기</h2>

      <TabViewer
        title="예제 1: Rest 연산자 기본"
        description="일부 Props는 직접 받고, 나머지는 rest 객체에 모음"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: Rest로 Props 전달"
          description="rest를 스프레드로 다른 컴포넌트에 전달. 래퍼 컴포넌트에 유용"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: HTML 속성 전달"
          description="커스텀 Props만 받고 나머지 HTML 속성은 rest로 전달. 유연한 컴포넌트"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default RestOperator;