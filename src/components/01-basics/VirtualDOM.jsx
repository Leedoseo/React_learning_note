// src/components/01-basics/VirtualDOM.jsx
import { useState } from "react";
import TabViewer from "../common/TabViewer";

function VirtualDOM() {
  // 예제 1: Virtual DOM이란?
  const resultContent1 = (
    <div>
      <h4>Virtual DOM (가상 돔)</h4>
      <p>React가 실제 DOM을 업데이트하기 전에 메모리에서 사용하는 가상의 DOM</p>
      <ul>
        <li>실제 DOM: 브라우저가 화면을 그리는데 사용하는 DOM</li>
        <li>가상 DOM: React가 메모리에 만드는 DOM의 복사본</li>
      </ul>
    </div>
  );

  const codeString1 = `// Virtual DOM의 개념
// 1. JSX 작성
function Component() {
  return <h1>Hello</h1>;
}

// 2. React가 Virtual DOM 생성 (메모리)
{
  type: 'h1',
  props: {},
  children: 'Hello'
}

// 3. 실제 DOM 업데이트
<h1>Hello</h1>`;

  // 예제 2: Virtual DOM의 동작 방식
  const [count, setCount] = useState(0);

  const resultContent2 = (
    <div>
      <h4>Virtual DOM 동작 방식</h4>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
        버튼을 클릭하면 React는:
      </p>
      <ol style={{ fontSize: "0.9rem" }}>
        <li>새로운 Virtual DOM 생성</li>
        <li>이전 Virtual DOM과 비교 (Diffing)</li>
        <li>변경된 부분만 실제 DOM에 업데이트</li>
      </ol>
    </div>
  );

  const codeString2 = `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

// 버튼 클릭 시:
// 1. 상태 변경 (count: 0 -> 1)
// 2. 새로운 Virtual DOM 생성
// 3. 이전 Virtual DOM과 비교
// 4. 변경된 <p> 태그만 실제 DOM에 업데이트`;

  // 예제 3: Virtual DOM의 장점
  const resultContent3 = (
    <div>
      <h4>Virtual DOM의 장점</h4>
      <ul>
        <li>
          <strong>성능 최적화:</strong> 변경된 부분만 업데이트
        </li>
        <li>
          <strong>효율적인 렌더링:</strong> 여러 변경사항을 한번에 처리
        </li>
        <li>
          <strong>크로스 플랫폼:</strong> React Native 등에서 재사용 가능
        </li>
      </ul>
    </div>
  );

  const codeString3 = `// Virtual DOM 없이 직접 DOM 조작
document.getElementById('count').innerText = count;
document.getElementById('title').innerText = title;
document.getElementById('name').innerText = name;
// → 3번의 DOM 조작 (느림)

// Virtual DOM 사용
function Component() {
  return (
    <>
      <p id="count">{count}</p>
      <h1 id="title">{title}</h1>
      <p id="name">{name}</p>
    </>
  );
}
// → React가 변경사항을 모아서 한번에 처리 (빠름)`;

  return (
    <div>
      <TabViewer
        title="Virtual DOM이란?"
        description="React가 사용하는 가상 돔의 개념"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="Virtual DOM 동작 방식"
          description="상태가 변경될 때 Virtual DOM이 어떻게 동작하는지"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="Virtual DOM의 장점"
          description="왜 React가 Virtual DOM을 사용하는가"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default VirtualDOM;
