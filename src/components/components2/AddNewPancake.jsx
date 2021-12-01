import { useState } from "react";
import "../css/AddNewTodo.css";

const AddNewPancake = ({onPancakeAdded}) => {

    const [name,setName] = useState("");
    const [maker,setMaker] = useState("");
    const [pancakeType,setPancakeType] = useState("");
    const [cream,setCream] = useState("");
    const [jam,setJam] = useState("");
    const [peanut_butter,setPeanut_butter] = useState("");
    const [plazma,setPlazma] = useState ("");
    const [sour_cherry,setSour_cherry] = useState ("");
    const [sausage,setSausage] = useState ("");
    const [sour_cream,setSour_cream] = useState("");
    const [ketchap,setKetchap] = useState("");
    const [prosciutto,setProsciutto] = useState("");
    const [salami,setSalami] = useState("");

    const addNewPancakes = () =>{
        setName("");
        setMaker("");
        setPancakeType("");
        setCream("");
        setJam("");
        setPeanut_butter("");
        setPlazma("");
        setSour_cherry("");
        setSausage("");
        setSour_cream("");
        setKetchap("");
        setProsciutto("");
        setSalami("");

        onPancakeAdded({
            name: name,
            maker: maker,
            pancakeType: pancakeType,
            cream: cream,
            jam: jam,
            peanut_butter: peanut_butter,
            plazma:plazma,
            sour_cherry:sour_cherry,
            sausage: sausage,
            sour_cream: sour_cream,
            ketchap: ketchap,
            prosciutto: prosciutto,
            salami: salami,

        });
    };



    return(

        <div className="container-fluid first">
        <div className="order-div animate__animated animate__slideInLeft" style="animation-duration: 2s;">
            <form>
                <div className="form-group row mt-3">
                    <label for="inputName" className="col-sm-3 col-form-label">Name pancake</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="inputName" placeholder="Name" value={name} onChange={(event)=>{setName(event.target.value)}}/>
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label className="col-sm-3" for="inlineFormCustomSelect">Type of pancake</label>
                    <div className="col-sm-8">
                        <select className="custom-select mr-sm-2 form-control" id="inlineFormCustomSelect" onChange={(event)=>{setPancakeType(event.target.value)}}  >
                            <option selected>Choose your type</option>
                            <option value={"SALTY"}>Salty</option>
                            <option value={"SWEET"}>Sweet</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row mt-3 sweet">
                    <div className="col-sm-3">Ingredients (+5$ per)</div>
                    <div className="col-sm-8">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" value={cream} onChange={(event)=>{setCream(event.target.value)}}/>
                            <label className="form-check-label" for="gridCheck1">
                                Cream
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" value={jam} onChange={(event)=>{setJam(event.target.value)}}/>
                            <label className="form-check-label" for="gridCheck1">
                                Jam
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" value={peanut_butter} onChange={(event)=>{setPeanut_butter(event.target.value)}}/>
                            <label className="form-check-label" for="gridCheck1">
                                Peanut butter
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" value={plazma} onChange={(event)=>{setPlazma(event.target.value)}}/>
                            <label className="form-check-label" for="gridCheck1">
                                Plazma
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" value={sour_cherry} onChange={(event)=>{setSour_cherry(event.target.value)}}/>
                            <label className="form-check-label" for="gridCheck1">
                                Sour Cherry
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row mt-3 salt">
                    <div className="col-sm-3">Ingredients (+2$ per)</div>
                    <div className="col-sm-8">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" value={sausage} onChange={(event)=>{setSausage(event.target.value)}} />
                            <label className="form-check-label" for="gridCheck1">
                                Sausage
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" value={sour_cream} onChange={(event)=>{setSour_cream(event.target.value)}}/>
                            <label className="form-check-label" for="gridCheck1">
                                Sour cream
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" value={ketchap} onChange={(event)=>{setKetchap(event.target.value)}}/>
                            <label className="form-check-label" for="gridCheck1">
                                Ketchap
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" value={prosciutto} onChange={(event)=>{setProsciutto(event.target.value)}}/>
                            <label className="form-check-label" for="gridCheck1">
                                Prosciutto
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" value={salami} onChange={(event)=>{setSalami(event.target.value)}}/>
                            <label className="form-check-label" for="gridCheck1">
                                Salami
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row mt-4">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-dark" onClick={addNewPancakes}>Create</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    );

};

export default AddNewPancake;