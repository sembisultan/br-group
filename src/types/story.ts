export type storyType = {
  id: number,
  deleted?: boolean,
  type: "job" | "story" | "cooment" | "poll" | "pollopt",
  by: string,
  time: number,
  text: string,
  dead?: boolean,
  parent?: number,
  poll?: number,
  kids: Array<number>,
  url: string,
  score: number,
  title: string,
  descendants: number
} | null;