import styled from 'styled-components';
import { media } from './mediaDataExample';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { useState } from "react";
import { DailyMediaReport } from "../databaseTypes";
import MediaTable from "./MediaTable";
import { barColors, barKeys, channelName, CustomToolTip, mediaChartReduce, renderLegend, xAxisTickFormatter ,yAxisTickFormatter } from "./MediaUtils";

interface I_customToolTip {
  show: boolean;
  position: {
    x: number;
    y: number;
  };
  content: any;
}

type StartAndEndDate = { startDate: Date; endDate: Date }; //한운기 추가
type MediaStatusProps = { selectedPeriod: StartAndEndDate }; //한운기 추가

export default function MediaStatus({ selectedPeriod }: TotalAdStatusProps) {
  const beforeDate = "2022-02-01";
  const afterDate = "2022-02-07"
  const [tooltip, setToolTip] = useState<I_customToolTip>();
  const mediaData = mediaChartReduce(media,beforeDate,afterDate)

const showTooltip = (data:any , i:any , event:any) => {
  const name:string = data.tooltipPayload[0].dataKey;
  const value = data.tooltipPayload[0].payload[name.split(".")[0]][name.split(".")[1]];

  setToolTip({
    show:true,
    position: {x:data.tooltipPosition.x-56,y:data.background.y},
    content: {name:data.tooltipPayload[0].dataKey,value: Number.isInteger(value) ? value : value.toFixed(2)}
  })
}
const leaveTooltip = () => {
  setToolTip({
    show:false,
    position: {x:0,y:0},
    content: {name:"",value:""}
  })
}
    return (
      <div style={{ left: 'x', top: 'y', width: '50px', height: '50px', backgroundColor: 'blueviolet' }}>{content}</div>
    );
  };
  // const CustomToolTip = ({ active, payload, label }) => {
  //   // console.log("액티브",active);
  //   // console.log("페이로드",payload);
  //   // console.log("라벨",label);
  // }

  return (
  <Container>
    <Title>매체 현황</Title>
    <Wrap>
      <Chart>
      <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={700}
            stackOffset="expand"
            data={mediaData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={28}
          >
          <Legend content={renderLegend} />
          <CartesianGrid  horizontal={true} vertical={false} dx={-200} stroke="#E6E7E8"/>
          <XAxis dataKey="name" stroke="#E6E7E8" dy={10} tick={{ fontSize:"12px" , stroke:"#c5cace" , fontFamily:'Nanum Gothic' }} tickLine={false}  />
          <YAxis tick={{dy:10 ,dx:32,fontSize:"12px"  }} tickLine={{stroke:"#E6E7E8"}} style={{textAlign:"left"}} tickSize={40} tickCount={6} tickFormatter={yAxisTickFormatter} axisLine={false}   />
          {barKeys[0].map((key:any)=>{
            const bars = [];
            bars.push(<Bar dataKey={key} stackId="key" fill={barColors[key.split(".")[1]]} radius={key.split(".")[1] === "facebook" ? [5,5,0,0] : null} onMouseOver={showTooltip} onMouseLeave={leaveTooltip} />)
            return bars;
          })}
          {barKeys[1].map((key)=>{
            const bars = [];
            bars.push(<Bar dataKey={key} stackId="key" fill={barColors[key.split(".")[1]]} radius={key.split(".")[1] === "facebook" ? [5,5,0,0] : null} onMouseOver={showTooltip} onMouseLeave={leaveTooltip}/>)
            return bars;
          })}
          {barKeys[2].map((key)=>{
            const bars = [];
            bars.push(<Bar dataKey={key} stackId="key" fill={barColors[key.split(".")[1]]} radius={key.split(".")[1] === "facebook" ? [5,5,0,0] : null} onMouseOver={showTooltip} onMouseLeave={leaveTooltip}/>)
            return bars;
          })}
          {barKeys[3].map((key)=>{
            const bars = [];
            bars.push(<Bar dataKey={key} stackId="key" fill={barColors[key.split(".")[1]]} radius={key.split(".")[1] === "facebook" ? [5,5,0,0] : null} onMouseOver={showTooltip} onMouseLeave={leaveTooltip} />)
            return bars;
          })}
          {barKeys[4].map((key)=>{
            const bars = [];
            bars.push(<Bar dataKey={key} stackId="key" fill={barColors[key.split(".")[1]]} radius={key.split(".")[1] === "facebook" && [5,5,0,0]} onMouseOver={showTooltip} onMouseLeave={leaveTooltip}/>)
            return bars;
          })}
            </BarChart>
          </ResponsiveContainer>
        </Chart>
        {/* {tooltip?.show && (
                <CustomToolTip {...tooltip} />
              )} */}
      <MediaTable />
      {tooltip?.show && <CustomToolTip {...tooltip} />}
    </Wrap>
    
  </Container>
)
        }
const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 1.2rem;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Wrap = styled.div`
  position: relative;
  margin: 0 auto;
  background-color: white;
  border-radius: 15px;
  > * {
    margin-bottom: 1.2rem;
    margin: auto;
  }
`;
const Chart = styled.div`
  width: 100%;
  height: 20rem;
  padding-top: 4rem;
`;