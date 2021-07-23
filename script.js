let chatEvent = document.querySelectorAll(".chat");
let listItem = document.getElementById("list");

let count = 0;




listItem.addEventListener("click",function(e) {
    
    if(count%2 == 0)
    {   count++;
        morelistOpen(e);
        
    }
    else if(count%2 != 0) {
        count++;
        
        e.target.childNodes[0].ownerDocument.body.lastElementChild.remove();
        
        
    }
    
});


for(let i = 0; i<chatEvent.length;i++) 
{   
    // console.log(chatEvent[i]);
    
    chatEvent[i].addEventListener("click" , openchat);
    
}

// function openchat(e) {
//     console.log(e.target.children[0].attributes[0].nodeValue);
// }

function openchat(e) {
    if(e.target.innerText != 0 ){
    
    let opentchatModal = document.createElement("div");
    opentchatModal.classList.add("chat-box");
    opentchatModal.innerHTML = `<div class="chat-header">
    <div class="chat-info">
        <img src=${e.target.children[0].attributes[0].nodeValue} alt="">&nbsp;
        ${e.target.innerText}
        <div class="icon-setting spaceEvenly">
        <i class="fa fa-search" aria-hidden="true"></i>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z">
        </path>
        </svg>
        </div>
    </div>
    

</div>
        <div class="inbox-chat">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
                <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z">
            </path></svg> -->
            <div class="message-1">Hy........</div>
            <div class="message-2">Hello</div>
            <div class="message-3">How are you ?</div>
            <div class="message-4">Fantastic and wbu</div>
            <div class="message-5">Me too.</div>
            <div class="message-6">💸Binance 4th Annivesary 
                GET FREE  Spin (Total Rewards $1,800,000)
            
            👉Join here : https://www.binance.com/en/activity/challenge-competition/BN1619390024480464897?utm_campaign=web_share_link
            
            👉Open on Binance App
            👉Click 4th Annivesary Celebration
            👉Scroll Down ⬇️
            👉Complete More Task To Get More Spin
            👉Click ‘GO’ to Spin
            
            💸Join group: https://chat.whatsapp.com/L7uIPXbW5ROJMZsCKcoFuv
            
            Join group: https://chat.whatsapp.com/EIewTprSTBM7Dxf2eSUtfe</div>
            <div class="message-7">
                Greetings,

                    Planetspark is hiring students from the 2022 batch for Business Development Counsellor 
                    
                    Job Profile: - Business Development Counsellor
                    
                    Job Type: Full Time
                    
                    Eligibility: BTECH,BBA,BCOM and MBA 2022 BATCH
                    
                    CTC for UG : For UG/PG programs -
                    During 1-month probation – INR 20,000 per month (fixed) + incentives After probation – INR 6.5 LPA (3.89 LPA – fixed + 2.61 LPA – variable)
                    For UG programs - During 1-month probation – INR 20,000 per month (fixed) + incentives After probation – INR 6.5 LPA (3.89 LPA – fixed + 2.61 LPA – variable) 
                    For PG programs – During 1-month probation – INR 25,000 per month (fixed) + incentives After probation – INR 7 LPA (4.39 LPA – fixed + 2.61 – variable)
                    
                    
                    Kindly ask the students to follow these steps to apply for the drive of Planetspark
                    
                    
                    1) Download the ENSVEE app from Google Play Store
                    Link:https://play.google.com/store/apps/details?id=com.ensvee.studentapp
                    2) Create your Profile by adding basic details like name and college.
                    3) Build your resume in the profile section of the app.
                    While adding current Educational Details like college name, course, and field of study strictly use suggestions as you won't be able to see campus jobs if there is any spelling mistake.
                    4) Get your profile linked to your college by filling the form in the campus jobs section. Wait for 24 hours till your profile gets linked to your college.
                    5) We'll notify you, once we link your profile to your college.
                    After getting linked you'll be able to see and apply for campus jobs.
                    
                    Make sure that you have completed your resume before applying for the position
                    
                    Job Description -
                    
                    1. Calling Leads
                    • Call on parent leads through your CRM 
                    • 60-75 leads are to be called daily 
                    
                    2. Generating trial classes 
                    • Pitch to the parents to take PlanetSpark Trial Class 
                    
                    3. Take counseling sessions and convert them 
                    • Conduct counseling sessions for parents who take trial classes 
                    • Close the sale through a smart and strategic approach 
                    • Generate Revenue (3L+ per month)
                    
                    Who are we looking for?
                    
                    A person who is extremely passionate about Business Development, Sales, and "Starting Up" in general. The person is going to be a part of a closely-knit small team of passionate individuals with a single-minded focus to sell India's first genuinely world-class EdTech products. What are the behavioral attributes that we are looking for? A keen desire to drive the Business Development/Sales for a fast-growing seed-funded early stage start-up. An apparent Founder's mindset i.e. A mindset where the person can own up Business Development/Sales and shape it independently like a Founder.
                    
                    Important Criteria - 
                    
                    1) Willing to work 6 days a week
                    2) Willing to work in a Start-up 
                    3) Mondays Off
                    4) Job Location – Gurgaon  – If you are not based in Delhi NCR and are not willing to re-locate, you are allowed to work remotely. However, an amount of INR 5,000 would be deducted from your fixed part of the CTC
                    
                    About PlanetSpark 
                    
                    
                    PlanetSpark is an online platform where children learn and develop 'new age' skills through live classes. We are backed by FIITJEE, Indian Angel Network, Hyderabad Angels, and Lead Angels. The platform leverages powerful technology to provide live online classes to K8 learners on English Communication, Public Speaking, Creative Writing, and other 'new age' skills. PlanetSpark is on a journey to make the traditional and unorganized tuitions obsolete through its virtual classroom. (http://www.planetspark.in)
                    
                    Students can contact us at help@ensvee.in for any assistance regarding the registration process
                    
                    Thanks & Regards 
                    Team Ensvee
                                </div>
                    
        </div>
           <div class="chat-footer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z">
    </path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z">
    </path>
</svg>
    <input type="text"  placeholder=" Type a message">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z">               
    </path></svg>
</div>
</div>`;
document.querySelector("body").append(opentchatModal);
opentchatModal = true;}

}

function morelistOpen(e) {
    
    let moreOption = document.createElement("div");
    moreOption.classList.add("more");
    moreOption.innerHTML = `<div class="NewGroup">New Group</div>
    <div class="CreateRoom">Create a Room</div>
    <div class="Profile">Profile</div>
    <div class="archived">Archived</div>
    <div class="Starred">Starred</div>
    <div class="settings">Settings</div>
    <div class="logout">Log out</div>`;
    document.querySelector("body").append(moreOption);
        
}
