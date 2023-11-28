import type { ReactNode } from "react"

import type {
  Frontmatter,
  Lang,
  TranslationKey,
  ToCItem,
  Layout,
} from "@/lib/types"

/**
 * Quiz data interfaces
 */
export interface AnswerChoice {
  answerId: string
  isCorrect: boolean
}

export interface Answer {
  id: string
  label: TranslationKey
  explanation: TranslationKey
  moreInfoLabel?: string
  moreInfoUrl?: string
}

export interface RawQuestion {
  prompt: TranslationKey
  answers: Answer[]
  correctAnswerId: string
}

export interface Question extends RawQuestion {
  id: string
}

export interface QuestionBank {
  [key: string]: RawQuestion
}

export interface RawQuiz {
  title: TranslationKey
  questions: string[] // TODO: Force to be an array of questionID's
}

export interface Quiz {
  title: string
  questions: Question[]
}

export interface RawQuizzes {
  [key: string]: RawQuiz
}

export interface DeveloperDocsLink {
  id: TranslationKey
  to: string
  path: string
  description: TranslationKey
  items: DeveloperDocsLink[]
}

/**
 * Layout interface
 */
export interface SharedFrontmatter {
  title: string
  description: string
  lang: Lang
  sidebarDepth?: number
  isOutdated?: boolean
  template?: Layout
}

export interface StaticFrontmatter extends SharedFrontmatter {
  postMergeBannerTranslation?: string
  hideEditButton?: boolean
}

/**
 * TODO: Refactor markdown content that currently uses SummaryPointsNumbered
 * to use SummaryPoints (`summaryPoints: string[]`) instead. Then
 * deprecate @/lib/util/getSummaryPoints.ts
 */
export interface SummaryPointsNumbered {
  summaryPoint1?: string
  summaryPoint2?: string
  summaryPoint3?: string
  summaryPoint4?: string
}

interface SummaryPoints {
  summaryPoints: string[]
}

interface ImageInfo {
  image: string
  alt: string
}

export interface UpgradeFrontmatter
  extends SharedFrontmatter,
  SummaryPointsNumbered,
  ImageInfo { }

export interface RoadmapFrontmatter extends SharedFrontmatter, ImageInfo {
  buttons: {
    label: string
    toId?: string
    to?: string
    variant?: string
  }[]
}

export interface UseCasesFrontmatter
  extends SharedFrontmatter,
  SummaryPointsNumbered,
  ImageInfo {
  emoji: string
}

export interface StakingFrontmatter
  extends SharedFrontmatter,
  SummaryPoints,
  ImageInfo {
  emoji: string
}

export interface DocsFrontmatter extends SharedFrontmatter {
  incomplete?: boolean
  hideEditButton?: boolean
}

export interface TutorialFrontmatter extends SharedFrontmatter {
  tags: string[]
  author: string
  source?: string
  sourceUrl?: string
  skill: string
  published: string
  address?: string
  postMergeBannerTranslation?: string
  hideEditButton?: boolean
  showPostMergeBanner?: boolean
}

export interface Root {
  children: ReactNode
  contentIsOutdated: boolean
  contentNotTranslated: boolean
  lastDeployDate: string
}

export interface MdPageContent {
  slug: string
  content: string
  frontmatter: Frontmatter
  tocItems: ToCItem[]
  lastUpdatedDate?: string
  contentNotTranslated: boolean
}

// GitHub contributors
export interface Author {
  name: string
  email: string
  avatarUrl: string
  user: {
    login: string
    url: string
  }
}