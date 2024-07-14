import React from "react"

const createSVGPath: Function = (
  d: string,
  rotate: string,
  dur: string,
  from: string,
  to: string,
) => (
  <path fill="#8080ff" d={d}>
    <animateTransform
      attributeName="transform"
      attributeType="XML"
      type={rotate}
      dur={dur}
      from={from}
      to={to}
      repeatCount="indefinite"
    />
  </path>
)

export const LoadingSVGPathOne: React.FC = () =>
  createSVGPath(
    "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",
    "rotate",
    "2s",
    "0 50 50",
    "360 50 50",
  )

export const LoadingSVGPathTwo: React.FC = () =>
  createSVGPath(
    "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",
    "rotate",
    "1s",
    "0 50 50",
    "-360 50 50",
  )

export const LoadingSVGPathThree: React.FC = () =>
  createSVGPath(
    "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5L82,35.7z",
    "rotate",
    "2s",
    "0 50 50",
    "360 50 50",
  )

export default function Loading() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "-1.5rem 0 0 -1.5rem",
        height: "3rem",
        width: "3rem",
      }}
    >
      <svg
        version="1.1"
        id="loading-svg"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <LoadingSVGPathOne />
        <LoadingSVGPathTwo />
        <LoadingSVGPathThree />
      </svg>
    </div>
  )
}
