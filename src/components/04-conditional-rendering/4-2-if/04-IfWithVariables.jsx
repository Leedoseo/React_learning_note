// src/components/04-conditional-rendering/4-2-if/04-IfWithVariables.jsx
import { useState } from "react";
import TabViewer from "../../common/TabViewer";

// 예제 1: 버튼 텍스트 변경
function SubmitButton({ isSubmitting, hasError }) {
  let buttonText;
  let isDisabled;

  if (isSubmitting) {
    buttonText = "전송 중...";
    isDisabled = true;
  } else if (hasError) {
    buttonText = "다시 시도";
    isDisabled = false;
  } else {
    buttonText = "전송하기";
    isDisabled = false;
  }

  return (
    <button
      disabled={isDisabled}
      style={{
        padding: "10px 20px",
        backgroundColor: isSubmitting
          ? "#6c757d"
          : hasError
          ? "#dc3545"
          : "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: isDisabled ? "not-allowed" : "pointer",
        fontSize: "16px",
      }}
    >
      {buttonText}
    </button>
  );
}

function Example1() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div>
      <div
        style={{
          marginBottom: "15px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => {
            setIsSubmitting(false);
            setHasError(false);
          }}
          style={{ padding: "8px 16px" }}
        >
          정상
        </button>
        <button
          onClick={() => {
            setIsSubmitting(true);
            setHasError(false);
          }}
          style={{ padding: "8px 16px" }}
        >
          전송 중
        </button>
        <button
          onClick={() => {
            setIsSubmitting(false);
            setHasError(true);
          }}
          style={{ padding: "8px 16px" }}
        >
          에러
        </button>
      </div>

      <SubmitButton isSubmitting={isSubmitting} hasError={hasError} />
    </div>
  );
}

const example1Code = `function SubmitButton({ isSubmitting, hasError }) {
  let buttonText;
  let buttonClass;
  let isDisabled;

  if (isSubmitting) {
    buttonText = '전송 중...';
    buttonClass = 'btn-loading';
    isDisabled = true;
  } else if (hasError) {
    buttonText = '다시 시도';
    buttonClass = 'btn-error';
    isDisabled = false;
  } else {
    buttonText = '전송하기';
    buttonClass = 'btn-primary';
    isDisabled = false;
  }

  return (
    <button 
      className={buttonClass}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
}`;

// 예제 2: 시간대별 인사말
function TimeGreeting({ hour }) {
  let greeting;
  let icon;
  let backgroundColor;

  if (hour < 6) {
    greeting = "좋은 밤 되세요";
    icon = "🌙";
    backgroundColor = "#1a1a2e";
  } else if (hour < 12) {
    greeting = "좋은 아침입니다";
    icon = "🌅";
    backgroundColor = "#ffd93d";
  } else if (hour < 18) {
    greeting = "좋은 오후입니다";
    icon = "☀️";
    backgroundColor = "#6bcf7f";
  } else if (hour < 22) {
    greeting = "좋은 저녁입니다";
    icon = "🌆";
    backgroundColor = "#ff6b6b";
  } else {
    greeting = "좋은 밤 되세요";
    icon = "🌙";
    backgroundColor = "#1a1a2e";
  }

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor,
        color: "white",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "48px", marginBottom: "10px" }}>{icon}</div>
      <h2>{greeting}, 홍길동님!</h2>
      <p style={{ opacity: 0.8 }}>현재 시각: {hour}시</p>
    </div>
  );
}

function Example2() {
  const [hour, setHour] = useState(14);

  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px" }}>시간 선택: {hour}시</label>
        <input
          type="range"
          min="0"
          max="23"
          value={hour}
          onChange={(e) => setHour(parseInt(e.target.value))}
          style={{ width: "200px" }}
        />
      </div>

      <TimeGreeting hour={hour} />
    </div>
  );
}

const example2Code = `function TimeGreeting({ hour }) {
  let greeting;
  let icon;
  let backgroundColor;

  if (hour < 6) {
    greeting = '좋은 밤 되세요';
    icon = '🌙';
    backgroundColor = '#1a1a2e';
  } else if (hour < 12) {
    greeting = '좋은 아침입니다';
    icon = '🌅';
    backgroundColor = '#ffd93d';
  } else if (hour < 18) {
    greeting = '좋은 오후입니다';
    icon = '☀️';
    backgroundColor = '#6bcf7f';
  } else if (hour < 22) {
    greeting = '좋은 저녁입니다';
    icon = '🌆';
    backgroundColor = '#ff6b6b';
  } else {
    greeting = '좋은 밤 되세요';
    icon = '🌙';
    backgroundColor = '#1a1a2e';
  }

  return (
    <div style={{ backgroundColor }}>
      <div>{icon}</div>
      <h2>{greeting}, 홍길동님!</h2>
    </div>
  );
}`;

// 예제 3: 점수에 따른 등급
function ScoreCard({ score }) {
  let grade;
  let gradeColor;
  let comment;
  let emoji;

  if (score >= 90) {
    grade = "A";
    gradeColor = "#28a745";
    comment = "매우 우수합니다!";
    emoji = "🎉";
  } else if (score >= 80) {
    grade = "B";
    gradeColor = "#17a2b8";
    comment = "잘했습니다!";
    emoji = "👍";
  } else if (score >= 70) {
    grade = "C";
    gradeColor = "#ffc107";
    comment = "보통입니다";
    emoji = "😊";
  } else if (score >= 60) {
    grade = "D";
    gradeColor = "#fd7e14";
    comment = "조금 더 노력하세요";
    emoji = "😅";
  } else {
    grade = "F";
    gradeColor = "#dc3545";
    comment = "많은 노력이 필요합니다";
    emoji = "😢";
  }

  return (
    <div
      style={{
        padding: "20px",
        border: `3px solid ${gradeColor}`,
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h3>수학 점수</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          margin: "20px 0",
        }}
      >
        <span style={{ fontSize: "36px", fontWeight: "bold" }}>{score}점</span>
        <span
          style={{
            fontSize: "48px",
            color: gradeColor,
            fontWeight: "bold",
          }}
        >
          {grade}
        </span>
      </div>

      <div
        style={{
          padding: "15px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <span style={{ fontSize: "24px", marginRight: "10px" }}>{emoji}</span>
        <span>{comment}</span>
      </div>
    </div>
  );
}

function Example3() {
  const [score, setScore] = useState(85);

  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px" }}>점수: {score}점</label>
        <input
          type="range"
          min="0"
          max="100"
          value={score}
          onChange={(e) => setScore(parseInt(e.target.value))}
          style={{ width: "300px" }}
        />
      </div>

      <ScoreCard score={score} />
    </div>
  );
}

const example3Code = `function ScoreCard({ score }) {
  let grade;
  let gradeColor;
  let comment;
  let emoji;

  if (score >= 90) {
    grade = 'A';
    gradeColor = '#28a745';
    comment = '매우 우수합니다!';
    emoji = '🎉';
  } else if (score >= 80) {
    grade = 'B';
    gradeColor = '#17a2b8';
    comment = '잘했습니다!';
    emoji = '👍';
  } else if (score >= 70) {
    grade = 'C';
    gradeColor = '#ffc107';
    comment = '보통입니다';
    emoji = '😊';
  } else if (score >= 60) {
    grade = 'D';
    gradeColor = '#fd7e14';
    comment = '조금 더 노력하세요';
    emoji = '😅';
  } else {
    grade = 'F';
    gradeColor = '#dc3545';
    comment = '많은 노력이 필요합니다';
    emoji = '😢';
  }

  return (
    <div style={{ borderColor: gradeColor }}>
      <h3>수학 점수</h3>
      <span>{score}점</span>
      <span style={{ color: gradeColor }}>{grade}</span>
      <div>
        <span>{emoji}</span>
        <span>{comment}</span>
      </div>
    </div>
  );
}`;

function IfWithVariables() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-2-4. if문 + 변수 활용</h2>

      <TabViewer
        title="예제 1: 버튼 텍스트 변경"
        description="상태에 따라 버튼의 텍스트, 클래스, disabled 설정"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 시간대별 인사말"
        description="시간에 따라 인사말, 아이콘, 배경색 변경"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 점수에 따른 등급"
        description="점수 구간별로 등급, 색상, 코멘트, 이모지 설정"
        resultContent={<Example3 />}
        codeString={example3Code}
      />
    </div>
  );
}

export default IfWithVariables;
