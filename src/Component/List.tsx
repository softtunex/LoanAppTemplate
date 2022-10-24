import React from 'react'
interface Iprops{
    person:{
    name:string
    age: number
    url: string
    note?: string|number
    }[]
  }
const List:React.FC<Iprops> = ({person}) => {
    const renderList = person.map(peep=>{
        return(
                <li>
                    <div>{peep.url}</div>
                    <div>{peep.name}</div>
                    <div>{peep.age}</div>
                    <div>{peep.note}</div>
                </li>
        )
    })
  return (
    <div>{renderList}</div>
  )
}

export default List