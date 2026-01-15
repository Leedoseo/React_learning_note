// src/components/03-props/3-3-receiving/01-PropsObject.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: props 객체로 받기
function GreetingProps(props) {
  return (
    <div style={{ padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '8px', margin: '10px 0' }}>
      <h3>안녕하세요, {props.name}님!</h3>
      <p>props 객체 전체: {JSON.stringify(props)}</p>
    </div>
  );
}

// 예제 2: props.속성 접근
function UserCardProps(props) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      margin: '10px 0'
    }}>
      <h3>{props.name}</h3>
      <p>나이: {props.age}세</p>
      <p>직업: {props.job}</p>
      <p>이메일: {props.email}</p>
    </div>
  );
}

// 예제 3: props를 다른 컴포넌트에 전달
function CardWrapper(props) {
  console.log('CardWrapper props:', props);
  
  return (
    <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '8px', margin: '10px 0' }}>
      <h4>래퍼 컴포넌트</h4>
      <UserCardProps {...props} />
    </div>
  );
}

function PropsObject() {
  // 예제 1
  const resultContent1 = (
    <GreetingProps name="홍길동" age={25} />
  );

  const codeString1 = `function Greeting(props) {
  console.log(props);  
  // { name: "홍길동", age: 25 }
  
  return (
    <div>
      <h3>안녕하세요, {props.name}님!</h3>
      <p>props 객체: {JSON.stringify(props)}</p>
    </div>
  );
}

function App() {
  return <Greeting name="홍길동" age={25} />;
}

// props는 객체로 전달됨
// props.속성이름 으로 접근`;

  // 예제 2
  const resultContent2 = (
    <UserCardProps 
      name="김철수"
      age={30}
      job="디자이너"
      email="kim@example.com"
    />
  );

  const codeString2 = `function UserCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>나이: {props.age}세</p>
      <p>직업: {props.job}</p>
      <p>이메일: {props.email}</p>
    </div>
  );
}

function App() {
  return (
    <UserCard 
      name="김철수"
      age={30}
      job="디자이너"
      email="kim@example.com"
    />
  );
}

// props 객체를 받아서 각 속성에 접근
// props.name, props.age, props.job, props.email`;

  // 예제 3
  const resultContent3 = (
    <CardWrapper 
      name="이영희"
      age={28}
      job="기획자"
      email="lee@example.com"
    />
  );

  const codeString3 = `function CardWrapper(props) {
  console.log('CardWrapper props:', props);
  
  return (
    <div className="wrapper">
      <h4>래퍼 컴포넌트</h4>
      {/* props를 그대로 다른 컴포넌트에 전달 */}
      <UserCard {...props} />
    </div>
  );
}

function UserCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.age}세</p>
    </div>
  );
}

function App() {
  return (
    <CardWrapper 
      name="이영희"
      age={28}
      job="기획자"
    />
  );
}

// props 객체를 받으면 스프레드로 전달하기 편함`;

  return (
    <div>
      <h2>3-3-1. props 객체로 받기</h2>

      <TabViewer
        title="예제 1: props는 객체"
        description="props는 객체로 전달됨. props.속성이름으로 접근"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 여러 props 접근"
          description="props.name, props.age처럼 각 속성에 접근"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: props 전달"
          description="props 객체를 받으면 스프레드로 다른 컴포넌트에 전달하기 편함"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default PropsObject;