// src/components/02-component/2-3-usage/01-ImportComponent.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1용 컴포넌트들
function ButtonExample() {
  return <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white' }}>클릭하세요</button>;
}

function AppExample1() {
  return (
    <div>
      <h1>앱 제목</h1>
      <ButtonExample />
    </div>
  );
}

// 예제 2용 컴포넌트들
function HeaderExample() {
  return <header style={{ padding: '20px', backgroundColor: '#f8f9fa' }}><h1>헤더</h1></header>;
}

function FooterExample() {
  return <footer style={{ padding: '20px', backgroundColor: '#f8f9fa', marginTop: '20px' }}><p>푸터</p></footer>;
}

function MainContentExample() {
  return <main style={{ padding: '20px' }}><p>메인 콘텐츠</p></main>;
}

function AppExample2() {
  return (
    <div>
      <HeaderExample />
      <MainContentExample />
      <FooterExample />
    </div>
  );
}

// 예제 3: 폴더 구조 시뮬레이션
function ComponentInFolder() {
  return <button style={{ padding: '10px', margin: '5px' }}>폴더 속 컴포넌트</button>;
}

function ImportComponent() {
  // 예제 1
  const resultContent1 = <AppExample1 />;
  
  const codeString1 = `// Button.jsx
function Button() {
  return <button>클릭하세요</button>;
}

export default Button;

// App.jsx
import Button from './Button';  // ← Button 컴포넌트 가져오기

function App() {
  return (
    <div>
      <h1>앱 제목</h1>
      <Button />  {/* ← import한 Button 사용 */}
    </div>
  );
}

export default App;`;

  // 예제 2
  const resultContent2 = <AppExample2 />;
  
  const codeString2 = `// Header.jsx
function Header() {
  return <header><h1>헤더</h1></header>;
}
export default Header;

// Footer.jsx
function Footer() {
  return <footer><p>푸터</p></footer>;
}
export default Footer;

// MainContent.jsx
function MainContent() {
  return <main><p>메인 콘텐츠</p></main>;
}
export default MainContent;

// App.jsx
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;`;

  // 예제 3
  const resultContent3 = (
    <div>
      <ComponentInFolder />
      <ComponentInFolder />
      <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        하위 폴더의 컴포넌트를 import해서 사용
      </p>
    </div>
  );
  
  const codeString3 = `폴더 구조:
src/
  components/
    Button.jsx
    Card.jsx
  pages/
    HomePage.jsx
  App.jsx

// App.jsx
import Button from './components/Button';     // 하위 폴더
import Card from './components/Card';         // 하위 폴더
import HomePage from './pages/HomePage';      // 하위 폴더

function App() {
  return (
    <div>
      <HomePage />
      <Card />
      <Button />
    </div>
  );
}

// pages/HomePage.jsx
import Button from '../components/Button';    // 상위 폴더로 가서 다시 하위 폴더

function HomePage() {
  return (
    <div>
      <h1>홈페이지</h1>
      <Button />
    </div>
  );
}

경로 설명:
./  : 현재 폴더
../ : 상위 폴더
../../ : 2단계 상위 폴더`;

  // 예제 4: default vs named import
  const resultContent4 = (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <h4>import 종류</h4>
      <div style={{ marginTop: '10px' }}>
        <p><strong>default import:</strong></p>
        <code style={{ display: 'block', padding: '10px', backgroundColor: 'white', margin: '5px 0' }}>
          import Card from './components';
        </code>
      </div>
      <div style={{ marginTop: '10px' }}>
        <p><strong>named import:</strong></p>
        <code style={{ display: 'block', padding: '10px', backgroundColor: 'white', margin: '5px 0' }}>
          {`import { Button, Input } from './components';`}
        </code>
      </div>
      <div style={{ marginTop: '10px' }}>
        <p><strong>혼용:</strong></p>
        <code style={{ display: 'block', padding: '10px', backgroundColor: 'white', margin: '5px 0' }}>
          {`import Card, { Button, Input } from './components';`}
        </code>
      </div>
    </div>
  );
  
  const codeString4 = `// components.jsx
export function Button() {
  return <button>버튼</button>;
}

export function Input() {
  return <input />;
}

function Card() {
  return <div>카드</div>;
}

export default Card;

// App.jsx
// default import (중괄호 없음)
import Card from './components';

// named import (중괄호 필수)
import { Button, Input } from './components';

// 혼용 가능
import Card, { Button, Input } from './components';

function App() {
  return (
    <div>
      <Card />
      <Button />
      <Input />
    </div>
  );
}`;

  // 예제 5: as로 이름 변경
  const resultContent5 = (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <p>원래 이름: Button</p>
      <p>변경된 이름: PrimaryButton</p>
      <button style={{ padding: '10px', marginTop: '10px', backgroundColor: '#007bff', color: 'white' }}>
        이름이 변경된 버튼
      </button>
    </div>
  );
  
  const codeString5 = `// Button.jsx
function Button() {
  return <button>원본 버튼</button>;
}
export default Button;

// App.jsx - as로 이름 변경
import Button as PrimaryButton from './Button';

function App() {
  return (
    <div>
      <PrimaryButton />  {/* Button 대신 PrimaryButton으로 사용 */}
    </div>
  );
}

// named export의 경우
import { Button as CustomButton } from './components';

function App() {
  return <CustomButton />;
}

사용 경우:
- 이름이 겹칠 때
- 더 명확한 이름으로 바꾸고 싶을 때`;

  return (
    <div>
      <h2>2-3-1. 다른 컴포넌트에서 import하기</h2>
      
      <TabViewer
        title="예제 1: 기본 import"
        description="같은 폴더의 Button.jsx 파일에서 Button 컴포넌트 가져오기"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 여러 컴포넌트 import"
          description="3개의 컴포넌트를 각각 import. 사용 순서대로 작성하는 게 일반적"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 폴더 구조와 경로"
          description="./ (현재 폴더), ../ (상위 폴더)를 사용해서 경로 지정"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 4: default vs named import"
          description="export 방식에 따라 import 문법이 다름"
          resultContent={resultContent4}
          codeString={codeString4}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 5: as로 이름 변경"
          description="import 시 as 키워드로 다른 이름으로 사용 가능"
          resultContent={resultContent5}
          codeString={codeString5}
        />
      </div>
    </div>
  );
}

export default ImportComponent;