import React from "react";
import style from "./Users.module.css"

let Users = (props) => {

    if(props.users.length ===0){
    props.setUsers([
            {
                id: 1,
                photoUrl: "https://png.pngtree.com/png-vector/20200625/ourmid/pngtree-business-person-short-hair-girl-silhouette-avatar-png-image_2266253.jpg",
                followed: false,
                fullName: 'Dmitry',
                status: 'I am here',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: "https://png.pngtree.com/png-vector/20200625/ourmid/pngtree-business-person-short-hair-girl-silhouette-avatar-png-image_2266253.jpg",
                followed: true,
                fullName: 'Alex',
                status: 'I am a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: "https://png.pngtree.com/png-vector/20200625/ourmid/pngtree-business-person-short-hair-girl-silhouette-avatar-png-image_2266253.jpg",
                followed: false,
                fullName: 'Natasha',
                status: 'I watching TV now',
                location: {city: 'Boston', country: 'USA'}
            },
            {
                id: 4,
                photoUrl: "https://png.pngtree.com/png-vector/20200625/ourmid/pngtree-business-person-short-hair-girl-silhouette-avatar-png-image_2266253.jpg",
                followed: true,
                fullName: 'Vika',
                status: 'I am sick',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ]
    )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={style.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                   <span>
                       <div>{u.fullName}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
                   </span>
                </span>
            </div>)
        }
    </div>
}

export default Users