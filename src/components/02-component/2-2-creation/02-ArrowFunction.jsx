// src/components/02-component/2-2-creation/02-ArrowFunction.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: 일반 형태 (명시적 return)
const Button = () => {
  return <button>클릭하세요</button>;
};

// 예제 2: 암시적 return (한 줄)
const Title = () => <h1>제목입니다</h1>;

// 예제 3: 암시적 return (여러 줄)
const Card = () => (
  <div className="card" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
    <h2>카드 제목</h2>
    <p>카드 내용</p>
  </div>
);

// 예제 4: 로직이 있는 경우 (명시적 return)
const GreetingArrow = () => {
  const userName = "홍길동";
  const isLoggedIn = true;
  
  return (
    <div>
      {isLoggedIn ? (
        <h1>안녕하세요, {userName}님!</h1>
      ) : (
        <h1>로그인해주세요</h1>
      )}
    </div>
  );
};

// 예제 5: 리스트 렌더링
const TodoList = () => {
  const todos = [
    { id: 1, text: 'React 공부하기', done: false },
    { id: 2, text: '프로젝트 만들기', done: false },
    { id: 3, text: '포트폴리오 작성', done: true }
  ];
  
  return (
    <ul>
      {todos.map(todo => (
        <li 
          key={todo.id}
          style={{ 
            textDecoration: todo.done ? 'line-through' : 'none',
            color: todo.done ? '#999' : '#000'
          }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

function ArrowFunction() {
  // 예제 1
  const resultContent1 = <Button />;
  
  const codeString1 = `const Button = () => {
  return <button>클릭하세요</button>;
};

export default Button;`;

  // 예제 2
  const resultContent2 = <Title />;
  
  const codeString2 = `const Title = () => <h1>제목입니다</h1>;

export default Title;`;

  // 예제 3
  const resultContent3 = <Card />;
  
  const codeString3 = `const Card = () => (
  <div className="card">
    <h2>카드 제목</h2>
    <p>카드 내용</p>
  </div>
);

export default Card;`;

  // 예제 4
  const resultContent4 = <GreetingArrow />;
  
  const codeString4 = `const Greeting = () => {
  const userName = "홍길동";
  const isLoggedIn = true;
  
  return (
    <div>
      {isLoggedIn ? (
        <h1>안녕하세요, {userName}님!</h1>
      ) : (
        <h1>로그인해주세요</h1>
      )}
    </div>
  );
};

export default Greeting;`;

  // 예제 5
  const resultContent5 = <TodoList />;
  
  const codeString5 = `const TodoList = () => {
  const todos = [
    { id: 1, text: 'React 공부하기', done: false },
    { id: 2, text: '프로젝트 만들기', done: false },
    { id: 3, text: '포트폴리오 작성', done: true }
  ];
  
  return (
    <ul>
      {todos.map(todo => (
        <li 
          key={todo.id}
          style={{ 
            textDecoration: todo.done ? 'line-through' : 'none' 
          }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;`;

  return (
    <div>
      <h2>2-2-2. 화살표 함수로 만들기</h2>
      
      <TabViewer
        title="예제 1: 일반 형태 (명시적 return)"
        description="const 변수명 = () => { return JSX }; 형태. 중괄호 있으면 return 필수"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 암시적 return (한 줄)"
          description="중괄호 없으면 자동 return. 한 줄 JSX에 적합"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 암시적 return (여러 줄)"
          description="괄호()로 감싸면 여러 줄도 자동 return. 중괄호 없음"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 4: 로직이 있는 경우"
          description="변수 선언이나 로직이 있으면 중괄호 필수. 명시적 return 필요"
          resultContent={resultContent4}
          codeString={codeString4}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 5: 리스트 렌더링"
          description="map 안에서도 화살표 함수 사용. key 속성 필수"
          resultContent={resultContent5}
          codeString={codeString5}
        />
      </div>
    </div>
  );
}

export default ArrowFunction;