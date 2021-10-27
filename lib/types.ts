import React from "react";

export interface CardType {
  cardId: number,
  cardText: string,
  cardIcon: any | undefined,
  cardIconColor: string,
  cardAction: Function
}

export interface IMiniCard {
  cardId: number,
  cardIcon: any | undefined,
  cardIconColor: string,
  cardAction: Function
}

export interface SectionType {
  children: React.ReactNode,
  delay: number
}

export interface INavContextContext {
  navState: number
  updateNavState?: (newState: number) => void
}

export interface NavContextProviderType {
  children: React.ReactNode,
  state: number
}