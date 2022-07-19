import styled from "styled-components"
import { media } from "./mediaDataExample";
import { mediaTableReduce } from "./MediaUtils";

interface I_props {
}
export default function MediaTable() {
  const beforeDate = "2022-02-01";
  const afterDate = "2022-02-07"
  const mediaTableData = mediaTableReduce(media,beforeDate,afterDate)
  return(
      <Table>
        <Channel>
            <Ul style={{flexDirection:"column"}}>
              <Li style={{textAlign:"left"}}></Li>
              <Li style={{textAlign:"left"}}>페이스북</Li>
              <Li style={{textAlign:"left"}}>네이버</Li>
              <Li style={{textAlign:"left"}}>구글</Li>
              <Li style={{textAlign:"left"}}>카카오</Li>
              <Li style={{textAlign:"left" , borderBottom:"1px solid #F5F6F7" , color:"#8190F7"}}>총계</Li>
            </Ul>
        </Channel>
        {mediaTableData.map((data:any,index:number)=>{
          const dataKey:string = Object.keys(data).find(key => key)!;
          const itemKey:object = Object.keys(data[dataKey])
          console.log("데이터보기",data.name , data.name.length);
          return(
            <Item id="1234" key={`${data}-${index}`} >
              
              
              <Name style={{width: data.name.length > 6 && "6rem" }}>{data.name}</Name>
              {itemKey.map((item:string)=>{
                console.log(data[dataKey][item]);
                return <Value>{Math.floor(data[dataKey][item]).toLocaleString('ko-KR')}</Value>
              })}
              <Value style={{borderBottom:"1px solid #F5F6F7" , color:"#8190F7"}}>{Math.floor(data.total).toLocaleString('ko-KR')}</Value>
            </Item>
          )
        })}
      </Table>
  )
}


const Table = styled.div`
  margin-top: 5rem;
  margin-left: 2.5rem;
  margin-right: 0;
  width: 90%;
  height: 15rem;
  display: flex;
  font-size: 12px;
  overflow-x: scroll;
`;
const Item = styled.div`
  text-align: right;
  font-weight: bold;
  border-top: 1px solid #F5F6F7;
`;
const Name = styled.div`
  display: flex;
  width: 5rem;
  height: 2.2rem;
  margin-left: 3rem;
  align-items: center;
  justify-content: right;
  color: #BCC4CC;
`;
const Value = styled.div`
  display: flex;
  height: 2.2rem;
  align-items: center;
  justify-content: right;
  border-top: 1px solid #F5F6F7;
`;
const Channel = styled.div`
  display: table;
`;

const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li`
  border-top: 1px solid #F5F6F7;
  display: flex;
  width: 6rem;
  font-size: 12px;
  font-weight: bold;
  height: 2.2rem;
  align-items: center;
`;