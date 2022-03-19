import axios from 'axios'
import {useState} from 'react'
import fnameList, {countryList, placeList, professionList, universityList} from './fnames';

function Profile(){
    var fname = fnameList[Math.floor(Math.random() * fnameList.length)];

    var lname = fnameList[Math.floor(Math.random() * fnameList.length)];

    var profession = professionList[Math.floor(Math.random() * professionList.length)];

    const  TwoRandNumbers = Math.floor(Math.random()*(99-10+1)+10)

    const  WeightRandNumbers = Math.floor(Math.random()*(350-150+1)+150)

    const  footRandNumbers = Math.floor(Math.random()*(6-5+1)+5)

    const  inchRandNumbers = Math.floor(Math.random()*(11-3+1)+3)

    const userid = '@' + fname + TwoRandNumbers

    const email = fname + TwoRandNumbers + lname + '@gmail.com'

    var address = countryList[Math.floor(Math.random() * countryList.length)];

    var university = universityList[Math.floor(Math.random() * universityList.length)];
    
    const  Day = Math.floor(Math.random()*(30-1)+1)
    var monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = monthList[Math.floor(Math.random() * monthList.length)];
    const  Year = Math.floor(Math.random()*(1990-2005)+2005)

    const age = 2022 - Year
    
    const statusLists = ['Single', 'Married', 'Divorced', 'Separated']
    var status = statusLists[Math.floor(Math.random() * statusLists.length)];

    var fatherfname = fnameList[Math.floor(Math.random() * fnameList.length)];
    
    const fathersname = fatherfname + " " + lname

    const phoneList = ['9765479865','5432216598','8765543221','9887655432', '9865328754', '9887655432']
    var phone = phoneList[Math.floor(Math.random() * phoneList.length)];

    const uidList = ['xs54s','tr45e','et54d','gh85d', 'cv32f', 'sd45c']
    var uid = uidList[Math.floor(Math.random() * uidList.length)];
    
    const passwordList = ['sad54sad','gr54dgdf','dsfs6d4f','gfh54fg5d', 'cvcxxcv44', 'ersf41df1']
    var password = passwordList[Math.floor(Math.random() * passwordList.length)];



    // URLS
    let profileBg = "https://source.unsplash.com/random"
    let profilePic = "https://fakeface.rest/face/view"


    // const url = 'https://api.unsplash.com/photos/?client_id=-PVlCs1g3t_bI2-NgaRstZk5RY1o-sDawWb6iE1p9qY'
    // const parentUrl = 'https://images.unsplash.com/'
    // const [state , setState] = useState()
    // const fetchApi = axios.get(url).then( response =>  console.log(response))
    return (
        <>
        <div className="container">
            <div style={{backgroundImage:'url("https://source.unsplash.com/random")'}} className="profilebg"></div>
            <div className="profilepic">
                <img src={profilePic} alt="" />
                {/* <h1>{fname + ' ' +lname}</h1> */}
            </div>
            <div className="profiledata">
                <div className="leftside">
                    <div className="name"><h1>{fname + ' ' +lname}</h1></div>
                    <div className="userid secondary">
                        <h6>{userid}</h6>
                    </div>
                    <div className="livesat">
                        <h4>{address}</h4>
                    </div>
                    <div className="phonenumber secondary">
                        <h6>+00-{phone}</h6>
                    </div>
                    <div className="status">
                        <h5> <secondary>Status : </secondary>{status}</h5>
                    </div>
                    <div className="parent">
                        <h6> <secondary>SO/DO : </secondary>{fathersname}</h6>
                    </div>
                </div>

                <div className="rightside">
                    <div className="profession">
                        <h1>{profession}</h1>
                    </div>
                    <div className="email secondary">
                        <h6>{email}</h6>
                    </div>
                    <div className="education">
                        <h4>University of {university}</h4>
                    </div>
                    <div className="dateofbirth secondary">
                        <h6>{Day + " " + month + " " + Year}</h6>
                    </div>
                    <br />
                    <div className="height">
                        <h5><secondary>Height : </secondary>{footRandNumbers + ',' + inchRandNumbers}</h5>
                    </div>
                    <div className="weight">
                        <h5><secondary>Weight : </secondary>{WeightRandNumbers} lbs.</h5>
                    </div>
                    <div className="age">
                        <h5><secondary>Age : </secondary>{age}</h5>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Profile