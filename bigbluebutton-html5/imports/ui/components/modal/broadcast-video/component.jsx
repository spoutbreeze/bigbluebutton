import React from 'react'

const BroadcastVideo = (props) => {

    //get the agents from mongo

    //ques -> how do we make an api call ? (there is redis pub/sub)

    const agents = [{}];

    const handleChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <div>
            <select onChange={(event) => handleChange(event)}>
            {agents && agents.length>0 && (
                <div>
                    {agents.map(agent => (
                        <option>{agent.name}</option>
                    ))}
                </div>
            )
            }
            </select>
        </div>
    )
}

export default BroadcastVideo;