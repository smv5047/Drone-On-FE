import React from "react"
import styled from "styled-components"

const Style = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #172233;
  h1 {
    color: #eae0d5;
    font-size: 4rem;
    span{
      color: #f28818;
    }
  }
`

export default function Dashboard() {
  return (
    <Style>
      <div>
      <h1>
        <img src={`${process.env.PUBLIC_URL}/drone.svg`} alt="text"/> Drone<span>On</span>
      </h1>

      </div>
    </Style>
  )
}
