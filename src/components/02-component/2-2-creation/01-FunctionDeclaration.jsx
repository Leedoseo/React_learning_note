// src/components/02-component/2-2-creation/01-FunctionDeclaration.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: 가장 간단한 컴포넌트
function Hello() {
  return <h1>안녕하세요!</h1>;
}

// 예제 2: 여러 줄 JSX
function Profile() {
  return (
    <div className="profile">
      <img src="avatar.jpg" alt="프로필" style={{ width: '100px', borderRadius: '50%' }} />
      <h2>홍길동</h2>
      <p>프론트엔드 개발자</p>
    </div>
  );
}

// 예제 3: Fragment 사용
function UserInfo() {
  return (
    <>
      <h2>사용자 정보</h2>
      <p>이름: 홍길동</p>
      <p>나이: 25세</p>
    </>
  );
}

// 예제 4: 조건부 렌더링
function Greeting() {
  const hour = new Date().getHours();
  
  return (
    <div>
      {hour < 12 ? <h1>좋은 아침입니다!</h1> : <h1>안녕하세요!</h1>}
      <p>현재 시간: {hour}시</p>
    </div>
  );
}

// 예제 5: 리스트 렌더링
function FruitList() {
  const fruits = ['사과', '바나나', '딸기', '포도'];
  
  return (
    <div>
      <h2>과일 목록</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

function FunctionDeclaration() {
  // 예제 1
  const resultContent1 = <Hello />;
  
  const codeString1 = `function Hello() {
  return <h1>안녕하세요!</h1>;
}

export default Hello;`;

  // 예제 2
  const resultContent2 = <Profile />;
  
  const codeString2 = `function Profile() {
  return (
    <div className="profile">
      <img src="avatar.jpg" alt="프로필" />
      <h2>홍길동</h2>
      <p>프론트엔드 개발자</p>
    </div>
  );
}

export default Profile;`;

  // 예제 3
  const resultContent3 = <UserInfo />;
  
  const codeString3 = `function UserInfo() {
  return (
    <>
      <h2>사용자 정보</h2>
      <p>이름: 홍길동</p>
      <p>나이: 25세</p>
    </>
  );
}

export default UserInfo;`;

  // 예제 4
  const resultContent4 = <Greeting />;
  
  const codeString4 = `function Greeting() {
  const hour = new Date().getHours();
  
  return (
    <div>
      {hour < 12 ? <h1>좋은 아침입니다!</h1> : <h1>안녕하세요!</h1>}
      <p>현재 시간: {hour}시</p>
    </div>
  );
}

export default Greeting;`;

  // 예제 5
  const resultContent5 = <FruitList />;
  
  const codeString5 = `function FruitList() {
  const fruits = ['사과', '바나나', '딸기', '포도'];
  
  return (
    <div>
      <h2>과일 목록</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;`;

  return (
    <div>
      <h2>2-2-1. function 선언문으로 만들기</h2>
      
      <TabViewer
        title="예제 1: 가장 간단한 컴포넌트"
        description="function 키워드를 사용한 기본 컴포넌트. 한 줄 JSX는 괄호 생략 가능"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 여러 줄 JSX"
          description="여러 줄 JSX는 괄호()로 감싸기. 하나의 부모 요소로 감싸야 함"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: Fragment 사용"
          description="불필요한 div 없이 여러 요소 반환. <>...</> 사용"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 4: 조건부 렌더링"
          description="컴포넌트 내부에 변수 선언 가능. 삼항 연산자로 조건부 렌더링"
          resultContent={resultContent4}
          codeString={codeString4}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 5: 리스트 렌더링"
          description="배열.map()으로 리스트 렌더링. key 속성 필수"
          resultContent={resultContent5}
          codeString={codeString5}
        />
      </div>
    </div>
  );
}

export default FunctionDeclaration;