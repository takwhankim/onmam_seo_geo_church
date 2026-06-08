# Multi Device Workflow

회사 Mac mini와 집 MacBook에서 같은 프로젝트를 이어서 작업하기 위한 표준 절차입니다.

핵심 원칙:

```text
GitHub를 작업 상태의 기준점으로 둔다.
작업 시작 전에는 pull.
작업을 넘기기 전에는 commit/push.
```

## 1. 회사에서 작업을 마치고 집에서 이어서 작업하는 경우

회사 Mac mini에서:

```bash
git status
npm run build
git add .
git commit -m "작업 내용 요약"
git push origin main
```

집 MacBook에서:

```bash
cd <project-folder>
git switch main
git pull --rebase origin main
npm install
cp .env.example .env.local
npm run dev
```

이미 `.env.local`이 있다면 다시 복사하지 않아도 됩니다.

## 2. 아직 기능이 완성되지 않았지만 중간 저장해야 하는 경우

완성 전이라도 다른 기기에서 이어서 작업하려면 commit/push 해야 합니다.

```bash
git add .
git commit -m "WIP: 기능 작업 중"
git push origin main
```

주의:

- `main`에 push하면 Production 배포가 연결될 수 있습니다.
- 완성 전 코드를 Production에 올리기 싫다면 작업 브랜치를 씁니다.

브랜치 사용 예:

```bash
git switch -c feature/my-work
git add .
git commit -m "WIP: 기능 작업 중"
git push -u origin feature/my-work
```

다른 기기에서 이어받기:

```bash
git fetch origin
git switch feature/my-work
git pull --rebase origin feature/my-work
```

## 3. 집에서 수정한 내용을 다시 회사 Mac mini에서 이어받는 경우

집 MacBook에서:

```bash
npm run build
git add .
git commit -m "집에서 수정한 내용"
git push origin main
```

회사 Mac mini에서:

```bash
git switch main
git pull --rebase origin main
npm install
npm run dev
```

## 4. 두 기기에서 같은 파일을 수정해서 충돌이 날 수 있는 경우

충돌은 보통 이런 상황에서 생깁니다.

```text
회사 Mac mini에서 index.tsx 수정
집 MacBook에서도 pull 전에 같은 index.tsx 수정
집에서 push
회사에서 pull
```

충돌을 줄이는 방법:

```bash
git status
git pull --rebase origin main
```

충돌이 나면:

1. Git이 표시한 충돌 파일을 엽니다.
2. `<<<<<<<`, `=======`, `>>>>>>>` 표시를 찾습니다.
3. 남길 내용을 선택해서 파일을 정리합니다.
4. 충돌 표시를 모두 삭제합니다.
5. 다시 저장합니다.

마무리:

```bash
git add <conflicted-file>
git rebase --continue
npm run build
git push origin main
```

충돌 표시가 남아 있는지 확인:

```bash
rg "^(<<<<<<<|=======|>>>>>>>)"
```

## 5. `.env.local`은 GitHub에 올리지 않고 각 기기에서 따로 만드는 방법

`.env.local`은 개인 기기별 비밀 설정 파일입니다.

GitHub에 올리는 파일:

```text
.env.example
```

GitHub에 올리지 않는 파일:

```text
.env.local
.env*.local
```

새 기기에서:

```bash
cp .env.example .env.local
```

그 다음 실제 값을 직접 입력합니다.

예:

```dotenv
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
DATABASE_URL="실제 값 입력"
```

## 6. 새 기기에서 프로젝트를 처음 세팅하는 방법

Mac mini 또는 MacBook에서 처음 받을 때:

```bash
git clone git@github.com:<owner>/<repo>.git
cd <repo>
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

## 매일 쓰는 짧은 루틴

작업 시작:

```bash
git switch main
git pull --rebase origin main
npm install
npm run dev
```

작업 종료:

```bash
npm run build
git add .
git commit -m "작업 내용 요약"
git push origin main
```

## 작업 중 실수했을 때

현재 상태 보기:

```bash
git status
```

최근 커밋 보기:

```bash
git log --oneline --decorate --max-count=10
```

아직 commit 전 변경만 확인:

```bash
git diff
```

주의:

- 무작정 `git reset --hard`를 쓰지 않습니다.
- 다른 기기에서 작업한 변경을 덮어쓸 수 있습니다.
- 먼저 `git status`와 `git log`로 상태를 확인합니다.
