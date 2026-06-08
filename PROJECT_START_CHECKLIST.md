# Project Start Checklist

새 서비스를 시작할 때 이 체크리스트를 위에서부터 따라갑니다.

## 1. 프로젝트 복사

```text
[ ] 스타터 폴더를 새 프로젝트 이름으로 복사했다.
[ ] 기존 .git 폴더를 제거했다.
[ ] 새 Git 저장소를 시작했다.
[ ] README의 프로젝트 이름을 바꿨다.
[ ] package.json의 name을 바꿨다.
```

## 2. 로컬 실행

```text
[ ] npm install 실행
[ ] .env.example을 .env.local로 복사
[ ] .env.local에 실제 로컬 값 입력
[ ] npm run dev 성공
[ ] http://localhost:3000 접속 확인
[ ] npm run build 성공
```

## 3. GitHub 연결

```text
[ ] GitHub에서 새 repository 생성
[ ] git remote add origin 실행
[ ] git branch -M main 실행
[ ] 첫 commit 생성
[ ] git push -u origin main 성공
```

## 4. Vercel 연결

```text
[ ] Vercel에서 GitHub repository Import
[ ] Framework Preset이 Next.js인지 확인
[ ] Root Directory가 .인지 확인
[ ] Build Command는 기본값 또는 npm run build
[ ] Output Directory는 비워둠
[ ] Environment Variables 등록
[ ] 첫 Production 배포 성공
[ ] Production URL 접속 확인
```

## 5. 환경변수

```text
[ ] .env.example에는 이름과 예시만 있음
[ ] .env.local은 GitHub에 올라가지 않음
[ ] Vercel Production 환경변수 등록
[ ] Vercel Preview 환경변수 등록 필요 여부 확인
[ ] 새 기기에서도 .env.local을 따로 생성
```

## 6. 여러 기기 작업 준비

```text
[ ] 회사 Mac mini에서 git pull --rebase 연습
[ ] 집 MacBook에서 git pull --rebase 연습
[ ] 작업 종료 시 commit/push 습관화
[ ] 중간 저장은 WIP commit 또는 feature branch 사용
[ ] 충돌 발생 시 MULTI_DEVICE_WORKFLOW.md 참고
```

## 7. 배포 전 확인

```text
[ ] npm run build 성공
[ ] git status 확인
[ ] 불필요한 파일이 git에 포함되지 않음
[ ] .env.local이 staged에 없음
[ ] commit 메시지가 알아보기 쉬움
[ ] git push origin main 실행
[ ] Vercel Deployments에서 Ready 확인
[ ] Production URL에서 최신 내용 확인
```

## 8. 복사 후 바꿔야 할 값

```text
[ ] README.md 프로젝트 이름
[ ] package.json name
[ ] .env.example 변수 목록
[ ] Vercel Project Name
[ ] GitHub Repository URL
[ ] 서비스 도메인
[ ] 메타데이터 title/description
```

## 9. 문제 발생 시

```text
[ ] npm run build 로컬 실패 여부 확인
[ ] Vercel Build Logs 확인
[ ] 환경변수 누락 여부 확인
[ ] main 브랜치에 push했는지 확인
[ ] GitHub repository가 Vercel에 연결됐는지 확인
[ ] Production URL과 Preview URL을 혼동하지 않았는지 확인
```
