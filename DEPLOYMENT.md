# Deployment Guide

이 문서는 GitHub에 push하면 Vercel이 자동으로 빌드하고 배포하는 구조를 만드는 절차입니다.

## 1. 최초 세팅 방법

새 프로젝트를 처음 시작할 때:

```bash
git clone <github-repository-url>
cd <project-folder>
npm install
cp .env.example .env.local
npm run dev
```

로컬 확인:

```text
http://localhost:3000
```

빌드 확인:

```bash
npm run build
```

빌드가 성공해야 Vercel 배포도 성공할 가능성이 높습니다.

## 2. 새 프로젝트 복사 방법

기존 스타터 폴더를 복사해서 새 서비스를 만들 때:

```bash
cp -R vercel-auto-deploy-starter my-new-service
cd my-new-service
rm -rf .git
git init
npm install
cp .env.example .env.local
```

그 다음 `README.md`, `package.json`의 `name`, 환경변수 이름을 새 서비스에 맞게 바꿉니다.

## 3. GitHub 저장소 연결 방법

GitHub에서 새 repository를 만든 뒤:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:<owner>/<repo>.git
git push -u origin main
```

이미 remote가 있다면 확인합니다.

```bash
git remote -v
```

remote를 바꿔야 하면:

```bash
git remote set-url origin git@github.com:<owner>/<repo>.git
```

## 4. Vercel Import 방법

1. Vercel에 로그인합니다.
2. `Add New...` -> `Project`를 누릅니다.
3. GitHub repository를 선택합니다.
4. Framework Preset은 `Next.js`로 둡니다.
5. Root Directory는 보통 `.`입니다.
6. Build Command는 비워두거나 `npm run build`를 사용합니다.
7. Output Directory는 Next.js에서는 비워둡니다.
8. 환경변수를 등록합니다.
9. `Deploy`를 누릅니다.

이후부터는 GitHub에 push하면 Vercel이 자동으로 배포합니다.

## 5. 환경변수 등록 방법

로컬에서는 `.env.local`을 사용합니다.

```bash
cp .env.example .env.local
```

Vercel에서는:

1. Project Settings로 이동합니다.
2. `Environment Variables` 메뉴를 엽니다.
3. `.env.example`에 있는 이름을 기준으로 값을 등록합니다.
4. Production, Preview, Development 중 필요한 환경을 선택합니다.
5. 저장 후 다시 배포합니다.

주의:

- `.env.local`은 GitHub에 올리지 않습니다.
- `.env.example`에는 실제 비밀값을 넣지 않습니다.
- 새 기기에서는 `.env.example`을 보고 `.env.local`을 직접 만듭니다.

## 6. Production 배포와 Preview 배포의 차이

Production 배포:

- `main` 브랜치에 push할 때 실행됩니다.
- 실제 서비스 주소에 반영됩니다.
- 예: `https://your-project.vercel.app`

Preview 배포:

- Pull Request나 다른 브랜치 push 때 실행됩니다.
- 테스트용 URL이 만들어집니다.
- 실제 서비스 주소에는 반영되지 않습니다.

추천 흐름:

```text
작은 개인 프로젝트: main에 직접 push
협업 프로젝트: feature branch -> Pull Request -> Preview 확인 -> main merge
```

## 7. 배포 실패 시 확인 방법

먼저 로컬에서 확인합니다.

```bash
npm install
npm run build
```

자주 보는 원인:

- 환경변수가 Vercel에 없음
- `.env.local`에만 있고 Vercel Project Settings에는 등록하지 않음
- TypeScript 또는 ESLint 오류
- GitHub에 push하지 않은 파일이 있음
- 대소문자 파일명 문제
- `main`이 아닌 다른 브랜치에 push함

Vercel에서 확인할 곳:

1. Vercel Project Dashboard
2. Deployments
3. 실패한 deployment 클릭
4. Build Logs 확인
5. 에러 메시지를 수정
6. 다시 commit/push

## 8. 새 프로젝트 시작 체크리스트

자세한 체크리스트는 `PROJECT_START_CHECKLIST.md`에 있습니다.

짧은 버전:

```text
[ ] 새 GitHub repository 생성
[ ] local remote 연결
[ ] npm install
[ ] .env.local 생성
[ ] npm run build 성공
[ ] Vercel Import
[ ] Vercel 환경변수 등록
[ ] main push
[ ] Production URL 확인
```

## 배포 표준 명령

작업 완료 후:

```bash
npm run build
git status
git add .
git commit -m "Update"
git push origin main
```

Vercel CLI로 `vercel deploy --prod`를 매번 실행하지 않습니다.
기본 배포 방식은 GitHub push 기반 자동 배포입니다.
