## **나만의 ToDoList 프로젝트**

**나만의 ToDoList**는 사용자가 로그인 후 자신만의 투두리스트를 관리할 수 있는 웹 애플리케이션입니다.

사용자는 이메일과 비밀번호를 입력하여 로그인하고, 자신만의 할 일을 추가하거나 삭제할 수 있습니다.

**🌟 주요 기능**

1. **로그인 및 인증**
- 이메일과 비밀번호를 입력하여 서버를 통해 인증.
- JWT 토큰을 활용한 사용자 인증 관리.
1. **할 일 관리**
- 새로운 투두리스트 항목 추가.
- 기존 항목 삭제.
1. **사용자별 데이터 관리**
- 로그인한 사용자만 자신의 데이터 접근 가능.

**🛠️ 기술 스택**

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: JSON 파일 (로컬 DB)
- **Authentication**: JWT (JSON Web Token)

**📂 프로젝트 구조**

```jsx
src/
├── api/                  # API 라우트 및 서버 관련 코드
│   ├── routes/           # 서버 라우트 정의
│   ├── controllers/      # 서버 로직
│   ├── middleware/       # 인증 및 기타 미들웨어
│   └── db/               # JSON 파일 데이터베이스
├── components/           # React 컴포넌트
├── pages/                # 주요 페이지 (로그인, 메인)
├── utils/                # 헬퍼 함수 및 유틸리티
└── App.jsx               # 메인 React 파일

```

**📄 API 스펙**

| **HTTP 메서드** | **경로** | **설명** | **요청 Body 예시** | **응답 예시** |
| --- | --- | --- | --- | --- |
| POST | /login | 사용자 로그인 | { "email": "[test@example.com](mailto:test@example.com)", "password": "1234" } | { "token": "jwt_token_here" } |
| GET | /todos | 현재 사용자 할일 목록 가져오기 | - | [{ "id": 1, "text": "Task" }] |
| POST | /todos | 새로운 할 일 추가 | { "text": "새로운 할 일" } | { "id": 2, "text": "새로운 할 일" } |
| DELETE | /todos:/id | 특정 할 일 삭제 | - | { "success": true } |

**🚀 시작하기**

**1. 설치**

```jsx
# 클론 및 의존성 설치
git clone <레포지토리 URL>
cd <프로젝트 폴더>
npm install

```

**2. 서버 실행**

```jsx
# 서버 실행
cd src/api
npm run dev

```

**3. 클라이언트 실행**

```jsx
# 클라이언트 실행
cd src/
npm start

```

**📸 스크린샷**

### 로그인화면

<img width="831" alt="스크린샷 2024-11-22 오후 6 45 59" src="https://github.com/user-attachments/assets/30f082f2-12fa-4018-bcc7-18b25f208141">

### 회원가입 모달

<img width="824" alt="스크린샷 2024-11-22 오후 6 46 05" src="https://github.com/user-attachments/assets/23fb4126-763c-47b6-a779-a84d13d516ff">

### TODO_List 화면 진입

<img width="799" alt="스크린샷 2024-11-22 오후 6 46 15" src="https://github.com/user-attachments/assets/bb4d1ea9-ad9e-43af-86de-fcb68fb8e667">

**📜 라이선스**

이 프로젝트는 개인 프로젝트이며 공개적으로 사용 가능합니다.

이 README는 필요에 따라 수정하거나 확장하면 좋습니다. **API 스펙** 부분은 직접 작성하실 내용으로 빈 칸을 채워넣으면 됩니다.
