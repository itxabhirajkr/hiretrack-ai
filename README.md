# HireTrack AI

AI-powered job application tracker built with Node.js, TypeScript, React, Kafka, Redis, Elasticsearch, WebSocket, RAG, and deployed on AWS.

## Tech Stack
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Node.js + TypeScript + Fastify
- **Database**: PostgreSQL + Redis + Elasticsearch
- **Messaging**: Apache Kafka + AWS SNS
- **AI**: LangChain + LangGraph + Pinecone (RAG)
- **Infra**: Docker + Kubernetes + AWS ECS/Lambda
- **Monitoring**: Prometheus + Grafana
- **CI/CD**: GitHub Actions

## Architecture
_Diagram coming in Week 7_

## Local Setup
_Instructions coming as we build_

## Branch Strategy
- `main` — production (protected)
- `staging` — pre-production testing
- `develop` — integration branch
- `feature/xxx` — one branch per feature

## Commit Convention

This repo uses [Conventional Commits](https://www.conventionalcommits.org/).

Format: `type: description`

Types allowed:
- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation only
- `refactor:` — code change that neither fixes a bug nor adds a feature
- `test:` — adding or updating tests
- `chore:` — build process, tooling, dependencies
- `perf:` — performance improvement
- `ci:` — CI/CD changes

Examples:
- `feat: add JWT authentication middleware`
- `fix: resolve Prisma connection pool exhaustion`
- `test: add integration tests for auth routes`
