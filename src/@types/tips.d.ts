declare namespace TTipsPremium {
  export interface Type {
    game: string
    local: string
    classification: string
    house1: string
    house2: string
    team1: string
    team2: string
    description_team1: string
    description_team2: string
    date: string;
    profit: number
    is_top: boolean
  }

  export type CreateBody = Type

  export type GetTipsResponse = Array<Type & {
    createdAt: string;
    id: string;
    updatedAt: string;
  }>

  export type TypeItemResponse = Type & {
    createdAt: string;
    id: string;
    updatedAt: string;
    dateFormatted?: string
  }
}
