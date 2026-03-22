import type { HTMLAttributes } from "react";

type Direction = 'horizontal' | 'vertical'

interface Props extends HTMLAttributes<HTMLDivElement> {
  direction?: Direction
}

export const Divider = ({ direction = "horizontal", className = "" }: Props) => {
  return direction === 'vertical'
    ? <div className={`w-px bg-slate-700/50 self-stretch ${className}`} />
    : <div className={`border-t border-slate-700/50 ${className}`} />
}