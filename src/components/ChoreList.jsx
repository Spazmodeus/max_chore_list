import { useState, useEffect } from "react"
import InputForm from "./InputForm"
import { getChores } from "../helpers/supabase"




const ChoreList = ({setEarned}) => {
    const [chores, setChores] = useState ([])

    const formatDate = (dt) => {
        let d = new Date(dt)
        return d.toLocaleDateString()
    }

    useEffect(() => {
        const fetchChores = async () => {
            const res = await getChores()
            
            if(!res) return
            setChores(res)
        }
        fetchChores()
    }, [])

    useEffect(() => {
        let amount = 0

        chores?.forEach((c) => {
            amount += c.earned_amount
        })

        setEarned(amount)
    }, [chores])

    return (
        <>
            <div 
                style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-start', 
                    width: '100%', 
                    height: '90%',
                    alignItems: 'center'

                }}
            >
                <InputForm add={setChores}></InputForm>
                <table>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Chore type</td>
                            <td>Amount Earned</td>
                        </tr>
                    </thead>
                    <tbody>
                        {chores.map((c,i)=> {
                            return <tr key={i}>
                                        <td>{c.date}</td>
                                        <td>{c.name}</td>
                                        <td>{`$${c.earned_amount}`}</td>
                                </tr>
                        })}
                            
                        
                    </tbody>
                </table>
            </div>       
        </>
    )
}






export default ChoreList