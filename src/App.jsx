// src/App.jsx
import { useState } from 'react'
import './App.css'

// 01. 기초
import HelloWorld from './components/01-basics/HelloWorlds'
import JSXExample from './components/01-basics/JSXExample'
import VirtualDOM from './components/01-basics/VirtualDOM'

// 02. Props
import Component from './components/02-props/Component'
import PropsBasic from './components/02-props/PropsBasic'
import PropsChildren from './components/02-props/PropsChildren'

// 03. State
import Counter from './components/03-state/Counter'
import InputState from './components/03-state/InputState'

// 04. Event
import ClickEvent from './components/04-event/ClickEvent'
import FormEvent from './components/04-event/FormEvent'

// 05. Hooks
import UseEffectExample from './components/05-hooks/UseEffectExample'
import CustomHookExample from './components/05-hooks/CustomHookExample'

// 06. 조건부 렌더링
import TernaryExample from './components/06-conditional/TernaryExample'
import AndOperatorExample from './components/06-conditional/AndOperatorExample'

// 07. 리스트 렌더링
import MapExample from './components/07-list/MapExample'
import KeyExample from './components/07-list/KeyExample'

// 08. 폼 처리
import ControlledInput from './components/08-form/ControlleredInput'
import MultipleInputs from './components/08-form/MultipleInputs'

function App() {
  const [activeCategory, setActiveCategory] = useState('basics')
  const [activeExample, setActiveExample] = useState('HelloWorld')

  // 카테고리별 예제 목록
  const examples = {
    basics: [
      { id: 'HelloWorld', name: 'Hello World', component: <HelloWorld /> },
      { id: 'JSXExample', name: 'JSX 예제', component: <JSXExample /> },
      { id: 'VirtualDOM', name: '가상 돔', component: <VirtualDOM /> },
    ],
    props: [
      { id: 'Component', name: '컴포넌트', component: <Component />},
      { id: 'PropsBasic', name: 'Props 기초', component: <PropsBasic /> },
      { id: 'PropsChildren', name: 'Props Children', component: <PropsChildren /> }
    ],
    state: [
      { id: 'Counter', name: '카운터', component: <Counter /> },
      { id: 'InputState', name: 'Input State', component: <InputState /> }
    ],
    event: [
      { id: 'ClickEvent', name: '클릭 이벤트', component: <ClickEvent /> },
      { id: 'FormEvent', name: '폼 이벤트', component: <FormEvent /> }
    ],
    hooks: [
      { id: 'UseEffectExample', name: 'useEffect', component: <UseEffectExample /> },
      { id: 'CustomHookExample', name: 'Custom Hook', component: <CustomHookExample /> }
    ],
    conditional: [
      { id: 'TernaryExample', name: '삼항 연산자', component: <TernaryExample /> },
      { id: 'AndOperatorExample', name: '&& 연산자', component: <AndOperatorExample /> }
    ],
    list: [
      { id: 'MapExample', name: 'map 함수', component: <MapExample /> },
      { id: 'KeyExample', name: 'key prop', component: <KeyExample /> }
    ],
    form: [
      { id: 'ControlledInput', name: '제어 컴포넌트', component: <ControlledInput /> },
      { id: 'MultipleInputs', name: '여러 Input', component: <MultipleInputs /> }
    ]
  }

  // 현재 선택된 예제 찾기
  const currentExample = examples[activeCategory]?.find(ex => ex.id === activeExample)

  // 카테고리 변경 시 첫 번째 예제로 자동 전환
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setActiveExample(examples[category][0].id)
  }

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
            className={activeCategory === 'basics' ? 'active' : ''}
            onClick={() => handleCategoryChange('basics')}
          >
            🎯 기초
          </button>
          <button 
            className={activeCategory === 'props' ? 'active' : ''}
            onClick={() => handleCategoryChange('props')}
          >
            🔄 Props
          </button>
          <button 
            className={activeCategory === 'state' ? 'active' : ''}
            onClick={() => handleCategoryChange('state')}
          >
            💾 State
          </button>
          <button 
            className={activeCategory === 'event' ? 'active' : ''}
            onClick={() => handleCategoryChange('event')}
          >
            🎪 Event
          </button>
          <button 
            className={activeCategory === 'hooks' ? 'active' : ''}
            onClick={() => handleCategoryChange('hooks')}
          >
            🪝 Hooks
          </button>
          <button 
            className={activeCategory === 'conditional' ? 'active' : ''}
            onClick={() => handleCategoryChange('conditional')}
          >
            🎨 조건부 렌더링
          </button>
          <button 
            className={activeCategory === 'list' ? 'active' : ''}
            onClick={() => handleCategoryChange('list')}
          >
            📝 리스트
          </button>
          <button 
            className={activeCategory === 'form' ? 'active' : ''}
            onClick={() => handleCategoryChange('form')}
          >
            📋 폼
          </button>
        </nav>

        <div className="content">
          {/* 예제 목록 (사이드바) */}
          <aside className="example-list">
            <h3>예제 목록</h3>
            {examples[activeCategory]?.map(ex => (
              <button
                key={ex.id}
                className={activeExample === ex.id ? 'active' : ''}
                onClick={() => setActiveExample(ex.id)}
              >
                {ex.name}
              </button>
            ))}
          </aside>

          {/* 예제 표시 영역 */}
          <main className="example-display">
            <h2>{currentExample?.name}</h2>
            <div className="example-content">
              {currentExample?.component}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App