import React, { useState, useEffect } from "react";
import LoadingScreen from "../loading_screen";
import styles from './index.module.css'

export default function NewActivityForm({
  setShowCreate,
  showCreate,
  user,
  setActivities
}) {
  const [plants, setPlants] = useState([]);
  const [plant, setPlant] = useState(null);
  const [verb, setVerb] = useState('Watered');

  const getPlants = () => {
    fetch(`/plants`, {
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((r) => r.json())
      .then((json) => setPlants(json));
  };

  const createActivity = () => {
    fetch(`/activities`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({user_id: user.id, plant_id: plant.id, gist: verb})
    })
      .then((r) => r.json())
      .then((json) => {
        setActivities(json)
        setShowCreate(false)
      });
  };

  useEffect(() => {
    getPlants();
  }, []);

  return (
    <div className={`container-fluid ${styles.modal_wrapper}`}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div style={{ height: "100vh", width: "100%", position: "relative", display:'flex' }}>
            <div className={styles.modal}>
              <button className={styles.close_btn} onClick={() => setShowCreate(!showCreate)}>x</button>
              <p className={styles.heading}>
                Add activity
              </p>
              <div className={styles.modal_content} style={{marginTop:'10px'}}>
                {plant === null ?
                  plants.map((p,i) => 
                    <div key={i} onClick={() => setPlant(p)} className={styles.plant_item}>
                      <div className={styles.photo} style={{backgroundImage:`url(${p.photo_url})`}}></div>
                      <p>{p.name}</p> 
                    </div> 
                  )
                :
                  <>
                    <div className={styles.plant_item}>
                      <div className={styles.photo} style={{backgroundImage:`url(${plant.photo_url})`}}></div>
                      <p>{plant.name}</p> 
                    </div> 
                    <div>
                      <select onChange={(e) => setVerb(e.target.value)}>
                        <option>Watered</option>
                        <option>Harvested</option>
                        <option>Planted</option>
                        <option>Tended</option>
                      </select>
                      <button style={{fontSize: '16px', padding: '10px 12px', borderRadius: '4px', backgroundColor:'#222', color: '#fff'}} className="signout-button" onClick={() => createActivity()}>Submit</button>
                    </div>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
