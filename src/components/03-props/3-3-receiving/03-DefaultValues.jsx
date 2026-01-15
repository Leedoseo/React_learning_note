// src/components/03-props/3-3-receiving/03-DefaultValues.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: 매개변수 기본값
function GreetingWithDefault({ name = "Guest", age = 0 }) {
  return (
    <div style={{ padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '8px', margin: '10px 0' }}>
      <h3>안녕하세요, {name}님!</h3>
      <p>나이: {age}세</p>
    </div>
  );
}

// 예제 2: 기본값 유무 비교
function ButtonNoDefault({ text, disabled }) {
  return (
    <button 
      disabled={disabled}
      style={{ 
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: disabled ? '#ccc' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
    >
      {text}
    </button>
  );
}

function ButtonWithDefault({ text = "클릭", disabled = false }) {
  return (
    <button 
      disabled={disabled}
      style={{ 
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: disabled ? '#ccc' : '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
    >
      {text}
    </button>
  );
}

// 예제 3: 복잡한 기본값
function UserCard({ 
  name = "익명", 
  age = 0, 
  job = "직업 미상",
  avatar = "https://via.placeholder.com/50",
  isActive = false 
}) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      margin: '10px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    }}>
      <img 
        src={avatar} 
        alt={name}
        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
      />
      <div>
        <h3 style={{ margin: '0 0 5px 0' }}>{name}</h3>
        <p style={{ margin: '3px 0', fontSize: '14px', color: '#666' }}>나이: {age}세</p>
        <p style={{ margin: '3px 0', fontSize: '14px', color: '#666' }}>직업: {job}</p>
        <p style={{ margin: '3px 0', fontSize: '14px' }}>
          상태: {isActive ? '✅ 활성' : '⭕ 비활성'}
        </p>
      </div>
    </div>
  );
}

function DefaultValues() {
  // 예제 1
  const resultContent1 = (
    <div>
      <GreetingWithDefault name="홍길동" age={25} />
      <GreetingWithDefault name="김철수" />
      <GreetingWithDefault />
    </div>
  );

  const codeString1 = `function Greeting({ name = "Guest", age = 0 }) {
  return (
    <div>
      <h3>안녕하세요, {name}님!</h3>
      <p>나이: {age}세</p>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* 모든 props 전달 */}
      <Greeting name="홍길동" age={25} />
      {/* 결과: 안녕하세요, 홍길동님! 나이: 25세 */}
      
      {/* name만 전달 (age는 기본값 0) */}
      <Greeting name="김철수" />
      {/* 결과: 안녕하세요, 김철수님! 나이: 0세 */}
      
      {/* 아무것도 전달 안 함 (모두 기본값) */}
      <Greeting />
      {/* 결과: 안녕하세요, Guest님! 나이: 0세 */}
    </div>
  );
}

// 기본값 설정으로 undefined 방지`;

  // 예제 2
  const resultContent2 = (
    <div>
      <h4>기본값 없음:</h4>
      <ButtonNoDefault text="버튼1" disabled={false} />
      <ButtonNoDefault text="버튼2" />
      <p style={{ fontSize: '12px', color: '#999', marginTop: '5px' }}>
        text나 disabled를 전달 안 하면 undefined
      </p>
      
      <h4 style={{ marginTop: '20px' }}>기본값 있음:</h4>
      <ButtonWithDefault text="버튼1" disabled={false} />
      <ButtonWithDefault text="버튼2" />
      <ButtonWithDefault />
      <p style={{ fontSize: '12px', color: '#28a745', marginTop: '5px' }}>
        전달 안 해도 기본값 사용
      </p>
    </div>
  );

  const codeString2 = `// ❌ 기본값 없음
function Button({ text, disabled }) {
  return <button disabled={disabled}>{text}</button>;
}

<Button text="버튼1" disabled={false} />  // OK
<Button text="버튼2" />  // disabled는 undefined
<Button />  // text도 undefined, disabled도 undefined

// ✅ 기본값 있음
function Button({ text = "클릭", disabled = false }) {
  return <button disabled={disabled}>{text}</button>;
}

<Button text="버튼1" disabled={false} />  // OK
<Button text="버튼2" />  // disabled는 false (기본값)
<Button />  // text는 "클릭", disabled는 false (기본값)

// 기본값이 있으면 안전함`;

  // 예제 3
  const resultContent3 = (
    <div>
      <UserCard 
        name="홍길동"
        age={25}
        job="개발자"
        avatar="https://via.placeholder.com/50/007bff/ffffff"
        isActive={true}
      />
      <UserCard 
        name="김철수"
        age={30}
      />
      <UserCard />
    </div>
  );

  const codeString3 = `function UserCard({ 
  name = "익명", 
  age = 0, 
  job = "직업 미상",
  avatar = "default.jpg",
  isActive = false 
}) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>나이: {age}세</p>
      <p>직업: {job}</p>
      <p>상태: {isActive ? '활성' : '비활성'}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* 모두 전달 */}
      <UserCard 
        name="홍길동"
        age={25}
        job="개발자"
        avatar="user1.jpg"
        isActive={true}
      />
      
      {/* 일부만 전달 (나머지는 기본값) */}
      <UserCard 
        name="김철수"
        age={30}
      />
      
      {/* 아무것도 안 전달 (모두 기본값) */}
      <UserCard />
    </div>
  );
}

// 기본값으로 안전한 컴포넌트 작성`;

  return (
    <div>
      <h2>3-3-3. 기본값 설정 (Default Values)</h2>

      <TabViewer
        title="예제 1: 매개변수 기본값"
        description="ES6 매개변수 기본값 문법 사용. Props 전달 안 하면 기본값 사용"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 기본값 유무 비교"
          description="기본값이 있으면 Props 전달 안 해도 안전함"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 여러 기본값 설정"
          description="여러 Props에 기본값 설정. 유연하고 안전한 컴포넌트"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default DefaultValues;