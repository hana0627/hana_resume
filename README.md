# 📄 Resume — 박하나

React + Vite 로 만든 웹 이력서입니다. 에디토리얼 스타일의 2단 레이아웃, 다크모드, 인쇄(PDF 저장)를 지원합니다.

## 🚀 빠른 시작

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행 (http://localhost:5173)
npm run dev

# 3. 프로덕션 빌드
npm run build

# 4. 빌드 결과 미리보기
npm run preview
```

## ✏️ 내용 수정하기

이력서 내용은 모두 **`src/data/resume.js`** 한 파일에 들어 있습니다.
이 파일만 수정하면 화면이 바뀝니다. (컴포넌트 코드는 건드릴 필요 없음)

| 항목 | 변수명 |
|------|--------|
| 프로필 / 연락처 | `profile` |
| 자기소개 | `introduce` |
| 핵심 역량 카드 | `highlights` |
| 보유 스킬 | `skills` |
| 경력 | `experiences` |
| 프로젝트 | `projects` |
| 교육 / 학력 | `educations` |
| 자격증 | `certificates` |

> 프로필 사진을 넣으려면 `public/` 폴더에 이미지를 두고
> `profile.image` 값을 `'/사진파일명.jpg'` 로 지정하세요.

### 프로젝트에 "문제 → 해결 → 결과" 박스 넣기

`projects` 의 각 `items` 항목에 `problem`, `solution`, `result`(선택적으로 `link`)를
추가하면 강조 박스가 자동으로 생성됩니다.

```js
{
  text: '리팩토링을 통한 API 응답속도 개선 (1.5s → 0.1s)',
  bold: true,
  problem: '...',
  solution: '...',
  result: '...',
  link: 'https://...',
}
```

## 🌐 GitHub Pages 배포

1. 이 프로젝트를 GitHub 저장소에 push 합니다.
2. **저장소 → Settings → Pages → Source** 를 `GitHub Actions` 로 설정합니다.
3. `main` 브랜치에 push 하면 `.github/workflows/deploy.yml` 이 자동으로 빌드·배포합니다.

> 저장소 이름이 `username.github.io` 가 아닌 일반 저장소(예: `resume`)라면
> `vite.config.js` 의 `base` 를 `'/저장소이름/'` 으로 바꿔주세요.
> 예) `base: '/resume/'`

## 🎨 색상 / 테마 커스터마이징

`src/styles.css` 상단의 CSS 변수(`:root`, `[data-theme='dark']`)를 수정하면
전체 색상 톤을 한 번에 바꿀 수 있습니다.

## 📦 폴더 구조

```
resume-react/
├─ index.html
├─ vite.config.js
├─ package.json
├─ .github/workflows/deploy.yml   # GitHub Pages 자동 배포
└─ src/
   ├─ main.jsx
   ├─ App.jsx                     # 화면 구성 (컴포넌트)
   ├─ styles.css                  # 디자인 / 테마
   └─ data/
      └─ resume.js                # ✏️ 이력서 내용 (여기만 수정!)
```

---

## 실행방법
`npm install`
`npm run dev`
브라우저에 콘솔에 적힌 주소 입력

Built with React + Vite.
