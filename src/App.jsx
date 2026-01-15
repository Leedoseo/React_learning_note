// src/App.jsx
import { useState } from "react";
import "./App.css";

// 01. 기초
import HelloWorld from "./components/01-basics/HelloWorlds";
import JSXExample from "./components/01-basics/JSXExample";
import VirtualDOM from "./components/01-basics/VirtualDOM";

// 02. Component - 2-1-concept
import WhatIsComponent from "./components/02-component/2-1-concept/01-WhatIsComponent";
import ReusableUIBlock from "./components/02-component/2-1-concept/02-ReusableUIBlock";
import FunctionVsClass from "./components/02-component/2-1-concept/03-FunctionVsClass";

// 02. Component - 2-2-creation
import FunctionDeclaration from "./components/02-component/2-2-creation/01-FunctionDeclaration";
import ArrowFunction from "./components/02-component/2-2-creation/02-ArrowFunction";
import NamingRules from "./components/02-component/2-2-creation/03-NamingRules";
import ExportDefaultVsExport from "./components/02-component/2-2-creation/04-ExportDefaultVsExport";

// 02. Component - 2-3-usage
import ImportComponent from "./components/02-component/2-3-usage/01-ImportComponent";
import ComponentTag from "./components/02-component/2-3-usage/02-ComponentTag";
import ComponentNesting from "./components/02-component/2-3-usage/03-ComponentNesting";

// 02. Component - 2-4-separation
import WhenToSeparate from "./components/02-component/2-4-separation/01-WhenToSeparate";
import Reusability from "./components/02-component/2-4-separation/02-Reusability";

// 03. Props - 3-1-basic
import WhatIsProps from "./components/03-props/3-1-basic/01-WhatIsProps";

// 03. Props - 3-2-passing
import StringProps from "./components/03-props/3-2-passing/01-StringProps";
import NumberBooleanProps from "./components/03-props/3-2-passing/02-NumberBolleanProps";
import ArrayObjectProps from "./components/03-props/3-2-passing/03-ArrayObjectProps";
import FunctionProps from "./components/03-props/3-2-passing/04-FunctionProps";
import SpreadOperator from "./components/03-props/3-2-passing/05-SpreadOperator";

// 03. Props - 3-3-receiving
import PropsObject from "./components/03-props/3-3-receiving/01-PropsObject";
import Destructuring from "./components/03-props/3-3-receiving/02-Destructuring";
import DefaultValues from "./components/03-props/3-3-receiving/03-DefaultValues";
import RestOperator from "./components/03-props/3-3-receiving/04-RestOperator";

// 03. Props - 3-4-children
import BasicChildren from "./components/03-props/3-4-children/01-BasicChildren";
import LayoutComponents from "./components/03-props/3-4-children/02-LayoutComponents";
import ChildrenPatterns from "./components/03-props/3-4-children/03-ChildrenPatterns";

// 04. Event
import ClickEvent from "./components/04-event/ClickEvent";
import FormEvent from "./components/04-event/FormEvent";

// 05. Hooks
import UseEffectExample from "./components/05-hooks/UseEffectExample";
import CustomHookExample from "./components/05-hooks/CustomHookExample";

// 06. 조건부 렌더링
import TernaryExample from "./components/06-conditional/TernaryExample";
import AndOperatorExample from "./components/06-conditional/AndOperatorExample";

// 07. 리스트 렌더링
import MapExample from "./components/07-list/MapExample";
import KeyExample from "./components/07-list/KeyExample";

// 08. 폼 처리
import ControlledInput from "./components/08-form/ControlleredInput";
import MultipleInputs from "./components/08-form/MultipleInputs";

function App() {
  const [activeCategory, setActiveCategory] = useState("basics");
  const [activeExample, setActiveExample] = useState("HelloWorld");

  // 카테고리별 예제 목록
  const examples = {
    basics: [
      { id: "HelloWorld", name: "Hello World", component: <HelloWorld /> },
      { id: "JSXExample", name: "JSX 예제", component: <JSXExample /> },
      { id: "VirtualDOM", name: "가상 돔", component: <VirtualDOM /> },
    ],
    component: [
      {
        id: "WhatIsComponent",
        name: "컴포넌트란?",
        component: <WhatIsComponent />,
      },
      {
        id: "ReusableUIBlock",
        name: "재사용 가능한 UI 블록",
        component: <ReusableUIBlock />,
      },
      {
        id: "FunctionVsClass",
        name: "함수형 vs 클래스형",
        component: <FunctionVsClass />,
      },
      {
        id: "FunctionDeclaration",
        name: "함수 선언식",
        component: <FunctionDeclaration />,
      },
      {
        id: "ArrowFunction",
        name: "화살표 함수",
        component: <ArrowFunction />,
      },
      { id: "NamingRules", name: "네이밍 규칙", component: <NamingRules /> },
      {
        id: "ExportDefaultVsExport",
        name: "export default vs export",
        component: <ExportDefaultVsExport />,
      },
      {
        id: "ImportComponent",
        name: "컴포넌트 import",
        component: <ImportComponent />,
      },
      {
        id: "ComponentTag",
        name: "컴포넌트 태그",
        component: <ComponentTag />,
      },
      {
        id: "ComponentNesting",
        name: "컴포넌트 중첩",
        component: <ComponentNesting />,
      },
      {
        id: "WhenToSeparate",
        name: "언제 분리할까?",
        component: <WhenToSeparate />,
      },
      { id: "Reusability", name: "재사용성", component: <Reusability /> },
    ],
    props: [
      {
        id: "WhatIsProps",
        name: "Props란?",
        component: <WhatIsProps />,
      },
      {
        id: "StringProps",
        name: "문자열 Props",
        component: <StringProps />,
      },
      {
        id: "NumberBooleanProps",
        name: "숫자/불린 Props",
        component: <NumberBooleanProps />,
      },
      {
        id: "ArrayObjectProps",
        name: "배열/객체 Props",
        component: <ArrayObjectProps />,
      },
      {
        id: "FunctionProps",
        name: "함수 Props",
        component: <FunctionProps />,
      },
      {
        id: "SpreadOperator",
        name: "Spread 연산자",
        component: <SpreadOperator />,
      },
      {
        id: "PropsObject",
        name: "Props 객체",
        component: <PropsObject />,
      },
      {
        id: "Destructuring",
        name: "구조 분해 할당",
        component: <Destructuring />,
      },
      {
        id: "DefaultValues",
        name: "기본값",
        component: <DefaultValues />,
      },
      {
        id: "RestOperator",
        name: "Rest 연산자",
        component: <RestOperator />,
      },
      {
        id: "BasicChildren",
        name: "Children 기초",
        component: <BasicChildren />,
      },
      {
        id: "LayoutComponents",
        name: "레이아웃 컴포넌트",
        component: <LayoutComponents />,
      },
      {
        id: "ChildrenPatterns",
        name: "Children 패턴",
        component: <ChildrenPatterns />,
      },
    ],
    event: [
      { id: "ClickEvent", name: "클릭 이벤트", component: <ClickEvent /> },
      { id: "FormEvent", name: "폼 이벤트", component: <FormEvent /> },
    ],
    hooks: [
      {
        id: "UseEffectExample",
        name: "useEffect",
        component: <UseEffectExample />,
      },
      {
        id: "CustomHookExample",
        name: "Custom Hook",
        component: <CustomHookExample />,
      },
    ],
    conditional: [
      {
        id: "TernaryExample",
        name: "삼항 연산자",
        component: <TernaryExample />,
      },
      {
        id: "AndOperatorExample",
        name: "&& 연산자",
        component: <AndOperatorExample />,
      },
    ],
    list: [
      { id: "MapExample", name: "map 함수", component: <MapExample /> },
      { id: "KeyExample", name: "key prop", component: <KeyExample /> },
    ],
    form: [
      {
        id: "ControlledInput",
        name: "제어 컴포넌트",
        component: <ControlledInput />,
      },
      {
        id: "MultipleInputs",
        name: "여러 Input",
        component: <MultipleInputs />,
      },
    ],
  };

  // 현재 선택된 예제 찾기
  const currentExample = examples[activeCategory]?.find(
    (ex) => ex.id === activeExample
  );

  // 카테고리 변경 시 첫 번째 예제로 자동 전환
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveExample(examples[category][0].id);
  };

  return (
    <div className="App">
      <header>
        <h1>📚 React 학습 노트</h1>
        <p>카테고리를 선택하고 예제를 확인하세요</p>
      </header>

      <div className="container">
        {/* 카테고리 탭 */}
        <nav className="category-nav">
          <button
            className={activeCategory === "basics" ? "active" : ""}
            onClick={() => handleCategoryChange("basics")}
          >
            🎯 기초
          </button>
          <button
            className={activeCategory === "component" ? "active" : ""}
            onClick={() => handleCategoryChange("component")}
          >
            🧩 Component
          </button>
          <button
            className={activeCategory === "props" ? "active" : ""}
            onClick={() => handleCategoryChange("props")}
          >
            🔄 Props
          </button>
          <button
            className={activeCategory === "event" ? "active" : ""}
            onClick={() => handleCategoryChange("event")}
          >
            🎪 Event
          </button>
          <button
            className={activeCategory === "hooks" ? "active" : ""}
            onClick={() => handleCategoryChange("hooks")}
          >
            🪝 Hooks
          </button>
          <button
            className={activeCategory === "conditional" ? "active" : ""}
            onClick={() => handleCategoryChange("conditional")}
          >
            🎨 조건부 렌더링
          </button>
          <button
            className={activeCategory === "list" ? "active" : ""}
            onClick={() => handleCategoryChange("list")}
          >
            📝 리스트
          </button>
          <button
            className={activeCategory === "form" ? "active" : ""}
            onClick={() => handleCategoryChange("form")}
          >
            📋 폼
          </button>
        </nav>

        <div className="content">
          {/* 예제 목록 (사이드바) */}
          <aside className="example-list">
            <h3>예제 목록</h3>
            {examples[activeCategory]?.map((ex) => (
              <button
                key={ex.id}
                className={activeExample === ex.id ? "active" : ""}
                onClick={() => setActiveExample(ex.id)}
              >
                {ex.name}
              </button>
            ))}
          </aside>

          {/* 예제 표시 영역 */}
          <main className="example-display">
            <h2>{currentExample?.name}</h2>
            <div className="example-content">{currentExample?.component}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
