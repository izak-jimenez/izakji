import React from 'react'

export interface CardType {
  cardId: number
  cardText: string
  cardIcon: any | undefined
  cardIconColor: string
  cardAction: (...args: []) => void
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
  visible: boolean
}

export interface INavContextContext {
  navState: number
  updateNavState?: (newState: number) => void
  activeCard: number
  updateActiveCard?: (newState: number) => void
}

export type SocialsPropTypes = {
  size: number
}

export interface NavContextProviderType {
  children: React.ReactNode
  state: number
}

export enum ActiveCardValues {
  ABOUT_ME = 0,
  WORK = 1,
  BLOG = 2,
  GAMING = 3,
}
