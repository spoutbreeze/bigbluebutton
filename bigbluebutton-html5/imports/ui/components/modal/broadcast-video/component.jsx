import React, { useState, useEffect} from 'react';
import Modal from '/imports/ui/components/modal/simple/component';
import AgentComponent from './AgentComponent';

const BroadcastVideo = (props) => {

    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(true);

    if (loading) {
        return (
            <>
            console.log("loading.....")
            <p>Loading....</p>
            </>
        )
    }

    const options = {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const data = await fetch("", options);
                const jsonData = await data.json();
                console.log(jsonData);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        })()
    }, [])

    const agents = [{
        id : "id1",
        name : "agent1"
    }, {
        id : "id2",
        name : "agent2"
    }];
        
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("all values", event.target.value);
        console.log("the name of the agent ", value);

        
    }

    return (
        <div>
           <Modal
                hideBorder
            >           
                <div>
                    <select value={value} onChange={(event) => setValue(event.target.value)}>
                        {agents && agents.map((agent) => (
                            <option key={agent.id} name={agent.name}>
                                {agent.name}
                            </option>
                        ))}
                    </select>
                    <button type="button" onClick={(event) => handleSubmit(event)}>Ok</button>                    
                </div>
            </Modal> 
        </div>
    )
}

export default BroadcastVideo;