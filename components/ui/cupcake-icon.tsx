import type { SVGProps } from "react"

export function CupcakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M12 2a3 3 0 0 0-3 3c0 1.6 1.4 2.1 3 3.5 1.6-1.4 3-1.9 3-3.5a3 3 0 0 0-3-3z"
        stroke={props.stroke || "#ec4899"}
        fill={props.fill || "#fce7f3"}
      />
      <path
        d="M3 10s1-3 9-3 9 3 9 3m-8 3h.01M8 14h.01M16 14h.01M9 18l-1 4h8l-1-4"
        stroke={props.stroke || "#ec4899"}
        fill={props.fill || "#fce7f3"}
      />
      <path
        d="M7.5 10.5c-.7.8-1.5 2-1.5 3.5h12c0-1.5-.8-2.7-1.5-3.5"
        stroke={props.stroke || "#ec4899"}
        fill={props.fill || "#fce7f3"}
      />
    </svg>
  )
}
