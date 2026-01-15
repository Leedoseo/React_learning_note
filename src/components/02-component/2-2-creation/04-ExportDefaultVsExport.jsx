// src/components/02-component/2-2-creation/04-ExportDefaultVsExport.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: export default 기본
function DefaultButton() {
  return <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white' }}>기본 버튼</button>;
}

// 예제 2: 선언과 동시에 export default
// (실제로는 파일에서 한 번만 가능하므로 주석으로 표시)
/*
export default function ButtonInline() {
  return <button>인라인 export</button>;
}
*/

// 예제 3: named export (여러 개 가능)
const NamedButton1 = () => <button style={{ margin: '5px', padding: '10px' }}>버튼 1</button>;
const NamedButton2 = () => <button style={{ margin: '5px', padding: '10px' }}>버튼 2</button>;
const NamedButton3 = () => <button style={{ margin: '5px', padding: '10px' }}>버튼 3</button>;

// 예제 4: 혼용 (default + named)
function MainCard() {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
      <h3>메인 카드</h3>
      <p>이것이 메인 컴포넌트입니다</p>
    </div>
  );
}

const SubCard1 = () => (
  <div style={{ border: '1px solid #eee', padding: '10px', margin: '5px' }}>
    서브 카드 1
  </div>
);

const SubCard2 = () => (
  <div style={{ border: '1px solid #eee', padding: '10px', margin: '5px' }}>
    서브 카드 2
  </div>
);

function ExportDefaultVsExport() {
  // 예제 1
  const resultContent1 = <DefaultButton />;
  
  const codeString1 = `// Button.jsx
function Button() {
  return <button>클릭</button>;
}

export default Button;

// App.jsx
import Button from './Button';  // 이름 자유롭게 지정 가능

function App() {
  return <Button />;
}`;

  // 예제 2
  const resultContent2 = <DefaultButton />;
  
  const codeString2 = `// 방법 1: 분리 (가장 일반적)
function Button() {
  return <button>클릭</button>;
}
export default Button;

// 방법 2: 선언과 동시에
export default function Button() {
  return <button>클릭</button>;
}

// 방법 3: 화살표 함수
const Button = () => {
  return <button>클릭</button>;
};
export default Button;`;

  // 예제 3
  const resultContent3 = (
    <div>
      <NamedButton1 />
      <NamedButton2 />
      <NamedButton3 />
    </div>
  );
  
  const codeString3 = `// components.jsx
export function Button() {
  return <button>버튼</button>;
}

export function Input() {
  return <input />;
}

export function Card() {
  return <div>카드</div>;
}

// App.jsx
import { Button, Input, Card } from './components';  // 중괄호 필수

function App() {
  return (
    <div>
      <Button />
      <Input />
      <Card />
    </div>
  );
}

// 선택적으로 import
import { Button, Card } from './components';  // Input은 안 가져옴`;

  // 예제 4
  const resultContent4 = (
    <div>
      <MainCard />
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <SubCard1 />
        <SubCard2 />
      </div>
    </div>
  );
  
  const codeString4 = `// Card.jsx
function Card() {
  return <div>메인 카드</div>;
}

export function CardHeader() {
  return <header>카드 헤더</header>;
}

export function CardBody() {
  return <div>카드 내용</div>;
}

export default Card;  // 메인은 default

// App.jsx
import Card, { CardHeader, CardBody } from './Card';

function App() {
  return (
    <Card>
      <CardHeader />  {/* named import */}
      <CardBody />    {/* named import */}
    </Card>
  );
}`;

  // 예제 5: import 차이
  const resultContent5 = (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <h4>import 문법 비교</h4>
      <div style={{ marginTop: '10px' }}>
        <p><strong>export default:</strong></p>
        <code style={{ display: 'block', padding: '10px', backgroundColor: 'white', borderRadius: '4px', margin: '5px 0' }}>
          import Button from './Button';
        </code>
        <p style={{ fontSize: '12px', color: '#666' }}>중괄호 없음, 이름 자유</p>
      </div>
      
      <div style={{ marginTop: '15px' }}>
        <p><strong>export (named):</strong></p>
        <code style={{ display: 'block', padding: '10px', backgroundColor: 'white', borderRadius: '4px', margin: '5px 0' }}>
          {`import { Button } from './Button';`}
        </code>
        <p style={{ fontSize: '12px', color: '#666' }}>중괄호 필수, 정확한 이름</p>
      </div>
    </div>
  );
  
  const codeString5 = `// export default
export default function Button() { }
import Button from './Button';        // ✅ 중괄호 없음
import Btn from './Button';           // ✅ 이름 변경 가능

// export (named)
export function Button() { }
import { Button } from './Button';    // ✅ 중괄호 필수
import { Button as Btn } from './Button';  // ✅ as로 이름 변경

// ❌ 잘못된 조합
export default function Button() { }
import { Button } from './Button';    // ❌ 에러!

export function Button() { }
import Button from './Button';        // ❌ undefined!`;

  return (
    <div>
      <h2>2-2-4. export default vs export</h2>
      
      <TabViewer
        title="예제 1: export default 기본"
        description="파일당 1개만 가능. import 시 중괄호 없이 사용"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: export default 작성 방법"
          description="분리해서 export하는 방법 1이 가장 일반적"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: named export (여러 개 가능)"
          description="한 파일에서 여러 개 export 가능. import 시 중괄호 필수"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 4: default + named 혼용"
          description="메인 컴포넌트는 default, 서브 컴포넌트는 named export"
          resultContent={resultContent4}
          codeString={codeString4}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 5: import 문법 차이"
          description="export 방식에 따라 import 문법이 다름"
          resultContent={resultContent5}
          codeString={codeString5}
        />
      </div>
    </div>
  );
}

export default ExportDefaultVsExport;