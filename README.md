# Onmam SEO GEO

온맘 디지털선교 분석기 랜딩 페이지와 북마클릿 실행 파일입니다.

## Files

- `index.html`: Vercel 배포용 메인 페이지
- `onmam-church.html`: 기존 원본 HTML 페이지
- `onmam-digital-mission-bookmarklet.js`: 북마클릿 관련 스크립트

## Local Preview

```bash
cd "/Users/xenosis/Desktop/AI개발/onmam_seo_geo"
python3 -m http.server 8766
```

Open:

```text
http://localhost:8766/
```

## Git Workflow

작업 시작:

```bash
git pull
```

작업 마무리:

```bash
git add .
git commit -m "Update"
git push
```

## Deploy

Vercel에서 `takwhankim/onmam_seo_geo` repository를 연결합니다.

- Framework Preset: `Other`
- Root Directory: `.`
- Build Command: empty
- Output Directory: empty

`main` 브랜치에 push하면 Vercel에서 자동 배포됩니다.
