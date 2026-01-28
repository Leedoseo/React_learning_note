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

// 04. Conditional Rendering - 4-1-basic
import WhatIsConditional from "./components/04-conditional-rendering/4-1-basic/01-WhatIsConditional";
import WhenNeeded from "./components/04-conditional-rendering/4-1-basic/02-WhenNeeded";
import MethodsOverview from "./components/04-conditional-rendering/4-1-basic/03-MethodsOverview";

// 04. Conditional Rendering - 4-2-if
import IfElseBasic from "./components/04-conditional-rendering/4-2-if/01-IfElseBasic";
import EarlyReturn from "./components/04-conditional-rendering/4-2-if/02-EarlyReturn";
import MultipleConditions from "./components/04-conditional-rendering/4-2-if/03-MultipleConditions";
import IfWithVariables from "./components/04-conditional-rendering/4-2-if/04-IfWithVariables";

// 04. Conditional Rendering - 4-3-ternary
import TernaryBasic from "./components/04-conditional-rendering/4-3-ternary/01-TernaryBasic";
import TernaryInJSX from "./components/04-conditional-rendering/4-3-ternary/02-TernaryInJSX";
import AttributeValues from "./components/04-conditional-rendering/4-3-ternary/03-Attribute.Values";
import TernaryNesting from "./components/04-conditional-rendering/4-3-ternary/04-TernaryNesting";

// 04. Conditional Rendering - 4-4-and
import AndBasic from "./components/04-conditional-rendering/4-4-and/01-AndBasic";
import ShowHide from "./components/04-conditional-rendering/4-4-and/02-ShowHide";
import AndCautions from "./components/04-conditional-rendering/4-4-and/03-AndCautions";
import AndVsTernary from "./components/04-conditional-rendering/4-4-and/04-AndVsTernary";

// 04. Conditional Rendering - 4-5-null
import NullReturn from "./components/04-conditional-rendering/4-5-null/01-NullReturn";
import ConditionalHide from "./components/04-conditional-rendering/4-5-null/02-ConditionalHide";
import UndefinedNullFalse from "./components/04-conditional-rendering/4-5-null/03-UndefinedNullFalse";
import Optimization from "./components/04-conditional-rendering/4-5-null/04-Optimization";

// 05. List Rendering - 5-1-what-is-list-rendering
import WhatIsListRendering from "./components/05-list-rendering/5-1-what-is-list-rendering/01-WhatIsListRendering";
import MapBasic from "./components/05-list-rendering/5-1-what-is-list-rendering/02-MapBasic";
import SimpleListRendering from "./components/05-list-rendering/5-1-what-is-list-rendering/03-SimpleListRendering";

// 05. List Rendering - 5-2-key-prop
import WhatIsKeyProp from "./components/05-list-rendering/5-2-key-prop/01-WhatIsKeyProp";
import CorrectKeyUsage from "./components/05-list-rendering/5-2-key-prop/02-CorrectKeyUsage";

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
    conditionalRendering: [
      {
        id: "WhatIsConditional",
        name: "조건부 렌더링이란?",
        component: <WhatIsConditional />,
      },
      {
        id: "WhenNeeded",
        name: "언제 필요할까?",
        component: <WhenNeeded />,
      },
      {
        id: "MethodsOverview",
        name: "방법 개요",
        component: <MethodsOverview />,
      },
      {
        id: "IfElseBasic",
        name: "if-else 기본",
        component: <IfElseBasic />,
      },
      {
        id: "EarlyReturn",
        name: "Early Return",
        component: <EarlyReturn />,
      },
      {
        id: "MultipleConditions",
        name: "여러 조건 체크",
        component: <MultipleConditions />,
      },
      {
        id: "IfWithVariables",
        name: "if와 변수",
        component: <IfWithVariables />,
      },
      {
        id: "TernaryBasic",
        name: "삼항 연산자 기본",
        component: <TernaryBasic />,
      },
      {
        id: "TernaryInJSX",
        name: "JSX 내 삼항 연산자",
        component: <TernaryInJSX />,
      },
      {
        id: "AttributeValues",
        name: "속성값 조건부",
        component: <AttributeValues />,
      },
      {
        id: "TernaryNesting",
        name: "삼항 연산자 중첩",
        component: <TernaryNesting />,
      },
      {
        id: "AndBasic",
        name: "&& 연산자 기본",
        component: <AndBasic />,
      },
      {
        id: "ShowHide",
        name: "표시/숨김",
        component: <ShowHide />,
      },
      {
        id: "AndCautions",
        name: "&& 주의사항",
        component: <AndCautions />,
      },
      {
        id: "AndVsTernary",
        name: "&& vs 삼항연산자",
        component: <AndVsTernary />,
      },
      {
        id: "NullReturn",
        name: "null 반환",
        component: <NullReturn />,
      },
      {
        id: "ConditionalHide",
        name: "조건부 숨김",
        component: <ConditionalHide />,
      },
      {
        id: "UndefinedNullFalse",
        name: "undefined/null/false",
        component: <UndefinedNullFalse />,
      },
      {
        id: "Optimization",
        name: "최적화",
        component: <Optimization />,
      },
    ],
    listRendering: [
      {
        id: "WhatIsListRendering",
        name: "리스트 렌더링이란?",
        component: <WhatIsListRendering />,
      },
      {
        id: "MapBasic",
        name: "map 기본",
        component: <MapBasic />,
      },
      {
        id: "SimpleListRendering",
        name: "간단한 리스트 렌더링",
        component: <SimpleListRendering />,
      },
      {
        id: "WhatIsKeyProp",
        name: "key prop이란?",
        component: <WhatIsKeyProp />,
      },
      {
        id: "CorrectKeyUsage",
        name: "올바른 key 사용",
        component: <CorrectKeyUsage />,
      },
    ],
  };

  // 현재 선택된 예제 찾기
  const currentExample = examples[activeCategory]?.find(
    (ex) => ex.id === activeExample,
  );

  // 카테고리 변경 시 첫 번째 예제로 자동 전환
  const handleCategoryChange = (category) => {
    if (examples[category] && examples[category].length > 0) {
      setActiveCategory(category);
      setActiveExample(examples[category][0].id);
    }
  };

  // 디버깅용
  console.log("App 렌더링됨", {
    activeCategory,
    activeExample,
    currentExample,
  });

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
            className={
              activeCategory === "conditionalRendering" ? "active" : ""
            }
            onClick={() => handleCategoryChange("conditionalRendering")}
          >
            🔀 조건부 렌더링
          </button>
          <button
            className={activeCategory === "listRendering" ? "active" : ""}
            onClick={() => handleCategoryChange("listRendering")}
          >
            📋 리스트 렌더링
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
            {currentExample ? (
              <>
                <h2>{currentExample.name}</h2>
                <div className="example-content">
                  {(() => {
                    try {
                      return currentExample.component;
                    } catch (error) {
                      return (
                        <div style={{ color: "red", padding: "20px" }}>
                          <h3>오류 발생:</h3>
                          <pre>{error.toString()}</pre>
                          <pre>{error.stack}</pre>
                        </div>
                      );
                    }
                  })()}
                </div>
              </>
            ) : (
              <div>
                <h2>예제를 선택해주세요</h2>
                <p>왼쪽에서 예제를 선택하세요.</p>
                <p style={{ color: "red", marginTop: "10px" }}>
                  Debug: activeCategory={activeCategory}, activeExample=
                  {activeExample}
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
