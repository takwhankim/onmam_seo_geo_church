# Vercel Auto Deploy Starter

Next.js, GitHub, Vercel을 기준으로 만든 자동 배포 스타터 템플릿입니다.

목표는 단순합니다.

```text
코드 수정 -> GitHub에 push -> Vercel이 자동으로 빌드 -> 배포 완료
```

회사 Mac mini와 집 MacBook에서 같은 프로젝트를 이어서 작업할 수 있도록 GitHub 중심 워크플로도 함께 정리했습니다.

## 포함된 문서

- `README.md`: 프로젝트 개요와 빠른 시작
- `DEPLOYMENT.md`: GitHub + Vercel 자동 배포 설정
- `MULTI_DEVICE_WORKFLOW.md`: Mac mini와 MacBook에서 이어서 작업하는 표준 절차
- `PROJECT_START_CHECKLIST.md`: 새 프로젝트를 시작할 때 체크할 목록
- `.env.example`: 환경변수 예시

## 빠른 시작

```bash
git clone <github-repository-url>
cd <project-folder>
npm install
cp .env.example .env.local
npm run dev
```

브라우저에서 확인:

```text
http://localhost:3000
```

## 기본 명령어

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 작업 시작 전 표준 루틴

항상 작업을 시작하기 전에 최신 코드를 받습니다.

```bash
git switch main
git pull --rebase origin main
npm install
npm run dev
```

## 작업 마무리 표준 루틴

작업이 끝났거나 다른 기기에서 이어서 해야 할 때는 GitHub에 올립니다.

```bash
npm run build
git status
git add .
git commit -m "작업 내용 요약"
git push origin main
```

`main` 브랜치에 push하면 Vercel Production 배포가 자동으로 시작됩니다.

## 새 프로젝트로 복사해서 쓰는 방법

1. 이 폴더를 새 프로젝트 이름으로 복사합니다.
2. `.git` 폴더가 있으면 삭제하고 새 Git 저장소를 시작합니다.
3. GitHub에서 새 repository를 만듭니다.
4. 새 repository를 remote로 연결합니다.
5. Vercel에서 GitHub repository를 Import합니다.
6. 환경변수를 Vercel Project Settings에 등록합니다.
7. `main`에 push해서 자동 배포를 확인합니다.

자세한 절차는 `DEPLOYMENT.md`와 `PROJECT_START_CHECKLIST.md`를 확인하세요.

## 여러 기기에서 이어서 작업하기

회사 Mac mini에서 작업하다가 집 MacBook에서 이어서 하려면:

```bash
# 회사 Mac mini
git add .
git commit -m "중간 작업 저장"
git push origin main
```

```bash
# 집 MacBook
git switch main
git pull --rebase origin main
npm install
npm run dev
```

자세한 충돌 처리와 `.env.local` 관리 방법은 `MULTI_DEVICE_WORKFLOW.md`에 정리되어 있습니다.

## 중요한 원칙

- `.env.local`은 절대 GitHub에 올리지 않습니다.
- 작업을 다른 기기에서 이어서 하려면 반드시 commit/push 합니다.
- 작업 시작 전에는 반드시 pull 받습니다.
- 배포는 Vercel CLI가 아니라 GitHub push 기반 자동 배포를 기본으로 합니다.
- Vercel CLI는 긴급 확인용으로만 사용합니다.
