# Back2Front

Personal portfolio and project showcase built with React.

**Live:** [adrienvictor-e.github.io/back2front](https://adrienvictor-e.github.io/back2front)

## Projects

| Project | Route | Description |
|---------|-------|-------------|
| Interactive Calendar | `/calendar` | Live calendar using the browser Date API with add/delete events (localStorage) |
| Breaking Bad API | `/bbapi` | Character explorer with search and flip-card animations |
| Chespirito Characters | `/chespirito` | Chespirito character browser with search and flip cards |
| Fluid Lightbox | `/lightbox` | Responsive image grid with full-screen popup |
| CV Themes | `/cv-themes` | Interactive CV viewer with Infograph and Spy-Fi Lounge themes |
| Terraform + AWS ECR | `/videos` | Video walkthrough of deploying a containerized React app |

## Tech Stack

- **React 17** with React Router 5 (HashRouter)
- **Axios** for data fetching
- **Material-UI** components
- **Styled Components** + vanilla CSS
- **GitHub Actions** for CI/CD to GitHub Pages

## Getting Started

```bash
yarn install
yarn start        # dev server at http://localhost:3000
yarn dev-check    # production build check (CI=false)
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) which builds and deploys to GitHub Pages automatically.

## Author

Adrien Victor Esquerre
