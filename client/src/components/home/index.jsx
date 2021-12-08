import React, { useState, useEffect } from "react";
import NewActivityForm from "../new_activity_form";
import styles from "./index.module.css";

export default function Home({ user }) {
  const [showCreate, setShowCreate] = useState(false);
  const [activities, setActivities] = useState([]);

  const getActivities = () => {
    fetch(`/activities?user_id=${user.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((json) => setActivities(json));
  };

  useEffect(() => {
    getActivities();
  }, []);

  const formatDate = (date) => {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const getOrdinalNum = (n) => {
      return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
    }

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${getOrdinalNum(date.getDate())}` 
  };

  return (
    <div style={{backgroundColor:'#fff', height:'100%'}} className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={styles.activities_list}>
              <button className={styles.add_button} onClick={() => setShowCreate(!showCreate)}>+</button>
              {showCreate && (
                <NewActivityForm
                  user={user}
                  setShowCreate={setShowCreate}
                  showCreate={showCreate}
                  setActivities={setActivities}
                />
              )}
              {activities.map((activityGroup, i) => (
                <div key={i} className={styles.activities_item}>
                  <p className={styles.activities_date}>{formatDate(new Date(activityGroup[0]))}</p>
                  <p className={styles.act_txt}>You 
                    {activityGroup[1].map((a,i) => 
                      <span key={i}> {a.gist.toLowerCase()} {a.plant.name}{activityGroup[1].length > 2 && i !== activityGroup[1].length - 1 && <span>,</span>} {activityGroup[1].length > 1 && i === activityGroup[1].length - 2 && <span>and</span>}</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
