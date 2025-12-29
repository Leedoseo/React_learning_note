// src/components/02-props/PropsBasic.jsx
import TabViewer from "../common/TabViewer";

// Props란? 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터
// Properties의 줄임말

// 예제 2: Props 전달하기 (기본)
const SimpleButton = (props) => {
  return <button style={{ color: props.color }}>{props.text}</button>;
};

// 예제 3: 구조 분해 할당
const DestructuredButton = ({ text, color }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color}
    </button>
  );
};

// 예제 4: 기본값 설정
const DefaultButton = ({ text, color = "white" }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color}
    </button>
  );
};

// 예제 5: 스프레드 연산자로 Props 전달
const SpreadButton = ({ text, color = "black" }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color}
    </button>
  );
};

// 예제 6: 다양한 타입의 Props
const DataDisplay = ({ name, age, isStudent, hobbies, info }) => {
  return (
    <div>
      <p>이름: {name} (문자열)</p>
      <p>나이: {age} (숫자)</p>
      <p>학생: {isStudent ? "예" : "아니오"} (불리언)</p>
      <p>취미: {hobbies.join(", ")} (배열)</p>
      <p>
        주소: {info.city}, {info.country} (객체)
      </p>
    </div>
  );
};

// 예제 7: Props는 읽기 전용
const ReadOnlyExample = ({ count }) => {
  // 잘못된 예: Props를 직접 수정하려고 시도 (에러 발생)
  // count = count + 1; // 이렇게 하면 안됨!

  // 올바른 예: Props는 그대로 사용만 함
  return (
    <div>
      <p>현재 카운트: {count}</p>
      <p>Props는 읽기 전용이므로 수정할 수 없습니다</p>
    </div>
  );
};

function PropsBasic() {
  // 예제 1: Props란 무엇인가
  const resultContent1 = (
    <div>
      <h4>Props (Properties)</h4>
      <p>부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방법</p>
      <ul>
        <li>컴포넌트 간 데이터를 주고받을 수 있음</li>
        <li>부모 → 자식 방향으로만 전달 (단방향)</li>
        <li>읽기 전용 (자식이 Props를 수정할 수 없음)</li>
      </ul>
    </div>
  );

  const codeString1 = `// Props의 기본 개념
function Parent() {
  return <Child name="홍길동" age={20} />;
}

function Child(props) {
  return (
    <div>
      <p>이름: {props.name}</p>
      <p>나이: {props.age}</p>
    </div>
  );
}`;

  const resultContent2 = (
    <div>
      <SimpleButton text="메일" color="red" />
      <SimpleButton text="카페" color="blue" />
    </div>
  );

  const codeString2 = `// Props로 데이터 전달
const SimpleButton = (props) => {
  return <button style={{ color: props.color }}>{props.text}</button>;
};

function Parent() {
  return (
    <>
      <SimpleButton text="메일" color="red" />
      <SimpleButton text="카페" color="blue" />
    </>
  );
}`;

  const resultContent3 = (
    <div>
      <DestructuredButton text="쇼핑" color="green" />
      <DestructuredButton text="뉴스" color="purple" />
    </div>
  );

  const codeString3 = `// 구조 분해 할당으로 Props 받기
// props.text, props.color 대신 바로 text, color 사용 가능
const DestructuredButton = ({ text, color }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color}
    </button>
  );
};

function Parent() {
  return (
    <>
      <DestructuredButton text="쇼핑" color="green" />
      <DestructuredButton text="뉴스" color="purple" />
    </>
  );
}`;

  const resultContent4 = (
    <div>
      <DefaultButton text="블로그" />
      <DefaultButton text="카페" color="blue" />
    </div>
  );

  const codeString4 = `// Props 기본값 설정
// color를 전달하지 않으면 "black"이 기본값으로 사용됨
const DefaultButton = ({ text, color = "black" }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color}
    </button>
  );
};

function Parent() {
  return (
    <>
      <DefaultButton text="블로그" /> {/* color: black */}
      <DefaultButton text="카페" color="blue" /> {/* color: blue */}
    </>
  );
}`;

  const buttonProps = {
    text: "메일",
    color: "red",
  };

  const resultContent5 = (
    <div>
      <SpreadButton {...buttonProps} />
      <SpreadButton text="카페" color="blue" />
    </div>
  );

  const codeString5 = `// 스프레드 연산자로 여러 Props 한번에 전달
const SpreadButton = ({ text, color = "black" }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color}
    </button>
  );
};

function Parent() {
  // 여러 Props를 객체로 묶어서 관리
  const buttonProps = {
    text: "메일",
    color: "red",
  };

  return (
    <>
      {/* ...buttonProps는 text="메일" color="red"와 동일 */}
      <SpreadButton {...buttonProps} />
      <SpreadButton text="카페" color="blue" />
    </>
  );
}`;

  // 예제 6: 다양한 타입의 Props
  const resultContent6 = (
    <div>
      <DataDisplay
        name="김철수"
        age={25}
        isStudent={true}
        hobbies={["독서", "운동", "코딩"]}
        info={{ city: "서울", country: "한국" }}
      />
    </div>
  );

  const codeString6 = `// 다양한 타입의 Props 전달
const DataDisplay = ({ name, age, isStudent, hobbies, info }) => {
  return (
    <div>
      <p>이름: {name} (문자열)</p>
      <p>나이: {age} (숫자)</p>
      <p>학생: {isStudent ? "예" : "아니오"} (불리언)</p>
      <p>취미: {hobbies.join(", ")} (배열)</p>
      <p>주소: {info.city}, {info.country} (객체)</p>
    </div>
  );
};

function Parent() {
  return (
    <DataDisplay
      name="김철수"              {/* 문자열 */}
      age={25}                  {/* 숫자 - 중괄호 사용 */}
      isStudent={true}          {/* 불리언 - 중괄호 사용 */}
      hobbies={["독서", "운동", "코딩"]}  {/* 배열 */}
      info={{ city: "서울", country: "한국" }}  {/* 객체 */}
    />
  );
}`;

  // 예제 7: Props는 읽기 전용
  const resultContent7 = (
    <div>
      <ReadOnlyExample count={5} />
    </div>
  );

  const codeString7 = `// Props는 읽기 전용
const ReadOnlyExample = ({ count }) => {
  // ❌ 잘못된 예: Props를 직접 수정하려고 시도
  // count = count + 1; // 에러 발생!

  // ✅ 올바른 예: Props는 읽기만 하고 수정하지 않음
  return (
    <div>
      <p>현재 카운트: {count}</p>
      <p>Props는 읽기 전용이므로 수정할 수 없습니다</p>
    </div>
  );
};

// Props를 수정하고 싶다면?
// → useState 같은 상태 관리를 사용해야 함 (나중에 배울 내용)`;

  return (
    <div>
      <TabViewer
        title="Props란?"
        description="컴포넌트 간 데이터를 전달하는 방법"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="Props 전달하기 (기본)"
          description="부모에서 자식으로 데이터 전달"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="구조 분해 할당"
          description="Props를 더 간결하게 사용하기"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="Props 기본값 설정"
          description="Props가 전달되지 않았을 때 사용할 기본값"
          resultContent={resultContent4}
          codeString={codeString4}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="스프레드 연산자"
          description="여러 Props를 한번에 전달하기"
          resultContent={resultContent5}
          codeString={codeString5}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="다양한 타입의 Props"
          description="문자열, 숫자, 불리언, 배열, 객체 등 다양한 타입 전달"
          resultContent={resultContent6}
          codeString={codeString6}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="Props는 읽기 전용"
          description="Props를 수정할 수 없고 읽기만 가능"
          resultContent={resultContent7}
          codeString={codeString7}
        />
      </div>
    </div>
  );
}

export default PropsBasic;
