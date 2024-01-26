export type CtrlAction = "down" | "right" | "left" | "select" | "up";

export interface CtrlProps {
  action: (msg: CtrlAction) => void 
}

export interface KeyboardState {
  currentKey: number,
  number: boolean,
  shift: boolean
}

export interface WikiResponse {
  id: number;
  key: string;
  title: string;
  latest: {
    id: number;
    timestamp: Date;
  },
  content_model: string;
  license: {
    url: string;
    title: string;
  }
  source: string;
}
