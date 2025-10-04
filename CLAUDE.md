# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.4 application using React 19, TypeScript, and Tailwind CSS v4. The project uses Turbopack for faster builds and development, and Biome for linting and formatting.

## Essential Commands

- **Development server**: `npm run dev` (uses Turbopack)
- **Build**: `npm run build` (uses Turbopack)
- **Production server**: `npm start`
- **Lint**: `npm run lint` (runs Biome check)
- **Format**: `npm run format` (runs Biome format with --write)

Development server runs on http://localhost:3000

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI**: React 19, Tailwind CSS 4
- **Fonts**: Geist (sans & mono) via next/font
- **TypeScript**: Strict mode enabled
- **Linter/Formatter**: Biome (configured for Next.js and React)

## Architecture

- **App Router**: Uses Next.js App Router (`app/` directory)
- **Path aliases**: `@/*` maps to root directory
- **Styling**: Tailwind CSS with PostCSS
- **Layout**: Root layout in [app/layout.tsx](app/layout.tsx) handles fonts and metadata
- **Pages**: [app/page.tsx](app/page.tsx) is the home page

## Biome Configuration

Biome is configured with:
- 2-space indentation
- Git integration enabled
- Auto-organize imports on save
- Next.js and React recommended rules
- `noUnknownAtRules` disabled for Tailwind CSS compatibility
