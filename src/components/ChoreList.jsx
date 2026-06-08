import { useState, useEffect } from "react"
import InputForm from "./InputForm"




const ChoreList = () => {
    const [chores, setChores] = useState ([
        {id:Date.now(),choreName: "laundry", amount: 4, date: '6/5/2026'},
        {id:Date.now(),choreName: "lawn mowing", amount: 10, date: '6/5/2026'}
    ])

    const formatDate = (dt) => {
        let d = new Date(dt)
        return d.toLocaleDateString()
    }

    useEffect(() => {
        console.log(chores)
    }, [chores])

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '100%'}}>
                <InputForm add={setChores}></InputForm>
                <table>
                    <thead>
                        <tr>
                            <td>date</td>
                            <td>chore type</td>
                            <td>amount earned</td>
                        </tr>
                    </thead>
                    <tbody>
                        {chores.map((c,i)=> {
                            return <tr key={i}>
                                        <td>{formatDate(c.date)}</td>
                                        <td>{c.choreName}</td>
                                        <td>{`$${c.amount}`}</td>
                                </tr>
                        })}
                            
                        
                    </tbody>
                </table>
            </div>       
        </>
    )
}






export default ChoreList