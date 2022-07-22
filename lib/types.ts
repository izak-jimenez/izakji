import React from 'react'

export interface CardType {
  cardId: number
  cardText: string
  cardIcon: any | undefined
  cardIconColor: string
  cardAction: (...args: []) => void
}

export interface AnimatedCardType {
  cardId: number
  cardText?: string
  cardIcon: any | undefined
  cardIconColor: string
  cardAction: (...args: []) => void
  isMini: boolean
}

export interface IMiniCard {
  cardId: number
  cardIcon: any | undefined
  cardIconColor: string
  cardAction: (...args: []) => void
}

export interface SectionType {
  children: React.ReactNode
  duration: number
  delay: number
}

export interface INavContextContext {
  navState: number
  updateNavState?: (newState: number) => void
  activeCard: Sections
  updateActiveCard?: (newState: Sections) => void
}

export type SocialsPropTypes = {
  size: number
}

export interface NavContextProviderType {
  children: React.ReactNode
  state: number
}

export type Sections = 'aboutMe' | 'work' | 'blog' | 'gaming' | 'none'

export enum ActiveCardValues {
  ABOUT_ME = 0,
  WORK = 1,
  BLOG = 2,
  GAMING = 3,
}
