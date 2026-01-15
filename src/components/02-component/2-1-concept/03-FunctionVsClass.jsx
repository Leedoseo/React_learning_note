// src/components/02-component/2-1-concept/03-FunctionVsClass.jsx
import TabViewer from "../../common/TabViewer";
import { Component } from 'react';

// 예제 1: 함수형 컴포넌트 (현재 표준)
function FunctionGreeting() {
  return <h1>안녕하세요! (함수형)</h1>;
}

// 예제 2: 클래스형 컴포넌트 (옛날 방식)
class ClassGreeting extends Component {
  render() {
    return <h1>안녕하세요! (클래스형)</h1>;
  }
}

// 예제 3: 비교 - 간단한 버튼
function FunctionButton() {
  const handleClick = () => {
    console.log('함수형 버튼 클릭!');
  };
  
  return <button onClick={handleClick}>함수형 버튼</button>;
}

class ClassButton extends Component {
  handleClick() {
    console.log('클래스형 버튼 클릭!');
  }
  
  render() {
    return <button onClick={this.handleClick}>클래스형 버튼</button>;
  }
}

function FunctionVsClass() {
  // 예제 1
  const resultContent1 = (
    <div>
      <FunctionGreeting />
      <p style={{ color: 'green' }}>✅ 현재 표준 방식</p>
    </div>
  );
  
  const codeString1 = `function FunctionGreeting() {
  return <h1>안녕하세요! (함수형)</h1>;
}

export default FunctionGreeting;`;

  // 예제 2
  const resultContent2 = (
    <div>
      <ClassGreeting />
      <p style={{ color: 'orange' }}>⚠️ 옛날 방식 (배울 필요 없음)</p>
    </div>
  );
  
  const codeString2 = `import { Component } from 'react';

class ClassGreeting extends Component {
  render() {
    return <h1>안녕하세요! (클래스형)</h1>;
  }
}

export default ClassGreeting;`;

  // 예제 3
  const resultContent3 = (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <h4>함수형</h4>
        <FunctionButton />
        <p style={{ fontSize: '12px', color: '#666' }}>
          - 간결함<br />
          - this 없음<br />
          - Hooks 사용 가능
        </p>
      </div>
      
      <div>
        <h4>클래스형</h4>
        <ClassButton />
        <p style={{ fontSize: '12px', color: '#666' }}>
          - 길고 복잡함<br />
          - this 필요<br />
          - 요즘 안 씀
        </p>
      </div>
    </div>
  );
  
  const codeString3 = `// 함수형 (간단)
function FunctionButton() {
  const handleClick = () => {
    console.log('클릭!');
  };
  
  return <button onClick={handleClick}>버튼</button>;
}

// 클래스형 (복잡)
class ClassButton extends Component {
  handleClick() {
    console.log('클릭!');
  }
  
  render() {
    return <button onClick={this.handleClick}>버튼</button>;
  }
}`;

  return (
    <div>
      <h2>2-1-3. 함수형 vs 클래스형</h2>
      
      <TabViewer
        title="예제 1: 함수형 컴포넌트 (배워야 할 것)"
        description="현재 React의 표준 방식. 간결하고 읽기 쉬움"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 클래스형 컴포넌트 (옛날 방식)"
          description="2019년 이전 방식. 레거시 코드에서만 볼 수 있음"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 비교 - 버튼 컴포넌트"
          description="함수형이 훨씬 간결하고 이해하기 쉬움"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default FunctionVsClass;