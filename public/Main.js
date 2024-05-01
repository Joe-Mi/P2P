document.addEventListener("DOMContentLoaded", LogIn_Render);

//html page render function
function Page_Render(content) {
    const Body = document.getElementById("Pcontent");
    Body.innerHTML = content;
}

//plate render function, load a plate for the projects html
function Plate_Render(content) {
    const Body = document.getElementById("Userfeed-body");
    Body.innerHTML = content;
}

//renders the login page
function LogIn_Render() {
    const LIcontent = `<div class="grid grid-cols-3 h-full mb-9">
    <div class="col-span-2 flex items-center px-30 m-9 mr-0 rounded-md overflow-hidden">
      <img src="peers.jpeg" alt="peers" class="rounded-md">
    </div>
    <div class="bg-slate-300 rounded-md col-span-1 p-4 px-30 m-9 mr-20">
      <h1 class="flex justify-center text-red-800 text-3xl p-4 mt-4 mb-6 mx-auto">Peer2Peer</h1>
      <h2 class="flex justify-center text-xl p-4 mb-3 mx-auto border-b border-">Login</h2>
      <form id="loginForm" class="flex flex-col">
        <label for="Usr_n">Username</label><input type="text" name="Usr_n" id="Usr_n"><br>
        <label for="Usr_p">Password</label><input type="text" name="Usr_p" id= "Usr_p"><br>
        <button id="li_btn" type="submit" class="text-white rounded-full px-3 py-2 end-2.5 bottom-2.5 bg-slate-800 
        hover:bg-slate-500">Login</button>
      </form>
      <div class="flex justify-center">
        <button id="home_btn" type="submit" class=" text-white rounded-full p-2 m-5 end-2.5 bottom-2.5 bg-red-800 
      hover:bg-red-200">home</button>
      </div>
    </div>
  </div>`;
    Page_Render(LIcontent);
    document.getElementById('li_btn').addEventListener('click', SignUp_Render);
    document.getElementById('home_btn').addEventListener('click', Home_Render);
}

// renders the sign up page
function SignUp_Render() {
    const SUcontent = `<div class="grid grid-cols-3 h-full mb-9">
    <div class="col-span-2 flex items-center px-30 m-9 mr-0 rounded-md overflow-hidden">
      <img src="peers.jpeg" alt="peers" class="rounded-md">
    </div>
    <div class="bg-slate-300 rounded-md col-span-1 p-4 px-30 m-9 mr-20">
      <h1 class="flex justify-center text-red-800 text-3xl p-4 mt-4 mb-6 mx-auto">Peer2Peer</h1>
      <h2 class="flex justify-center text-xl p-4 mb-3 mx-auto border-b border-">Login</h2>
      <form id="loginForm" class="flex flex-col">
        <label for="irl_n">Name</label><input type="text" name="irl_n" id="irl_n"><br>
        <label for="Usr_n">Username</label><input type="text" name="Usr_n" id="Usr_n"><br>
        <label for="Usr_p">Password</label><input type="text" name="Usr_p" id= "Usr_p"><br>
        <button id="su_btn" type="submit" class="text-white rounded-full px-3 py-2 end-2.5 bottom-2.5 bg-slate-800 
        hover:bg-slate-500">Sign Up</button>
      </form>
      <div class="flex justify-center">
        <button id="home_btn" type="submit" class=" text-white rounded-full p-2 m-5 end-2.5 bottom-2.5 bg-red-800 
      hover:bg-red-200">home</button>
      </div>
    </div>
  </div>`;
    Page_Render(SUcontent);
    document.getElementById('su_btn').addEventListener('click', LogIn_Render);
    document.getElementById('home_btn').addEventListener('click', Home_Render);
}

document.addEventListener("DOMContentLoaded", LogIn_Render);

// renders the chat page
function HChat_Render() {
  const HChatcontent = `<div id="Chat" class="bg-slate-800 text-white row-span-3 rounded-md p-5 my-5 mx-0">
  <div class="bg-slate-600 rounded-md mb-2 p-2">
      <div class=" flex justify-between">
          <div class="flex justify-start">
              <img src="AvgProfile.png" alt="AvgUsr" class = "rounded-full m-3">
              <p class="my-3">User name</p>
          </div>
          <svg class="w-6 m-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75
                  12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
      </div>
  </div>
  <div id="txt" class="flex flex-col justify-start mb-2 h-80 overflow-y-scroll no-scrollbar">
      <div id="SM" class="bg-white text-black rounded-md p-2 my-1 min-w-40 w-auto">
          <div class="flex justify-between">
              <div id="sender" class="text-red-800 my-1 mx-2">Joe</div>
              <div id="time" class="m-1">12:30</div>
          </div>
          <div id="message" class="m-1" >
              hey
          </div>
      </div>
      <div id="RM" class="bg-slate-300 text-black rounded-md p-2 my-1 min-w-40 w-auto">
          <div class="flex justify-between">
              <div id="sender" class="text-red-800 my-1 mx-2">Jan</div>
              <div id="time" class="text-end m-1">1:30</div>
          </div>
          <div id="message" class="m-1">
              Sup man
          </div>
      </div>
  </div>
  <div id="messagetxt" class="bg-white border-blue-50 text-md font-bold row-span-1 rounded-md p-2 ">
      <form class="flex justify-around">
          <input class="mx-3 text-slate-500 w-auto" type="text" placeholder="Type here..">
          <button class="text-white rounded-full px-3 py-2 end-2.5 bottom-2.5 bg-slate-800 hover:bg-slate-500" type="submit">
              <svg class="w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
              <div class="px-2 inline-block">Send</div>
          </button>
      </form>
  </div>
  </div>`;
  
  Plate_Render(HChatcontent);
}

// renders the feed page
function HFeed_Render() {
    const HFeedcontent = `<div class=" h-screen overflow-y-scroll ">
    <h4 class="flex font-bold text-white text-xl mt-7 pb-4 border-b border-white-400 justify-center">Private</h4>
    <div id="PostCard" class="bg-white col-span-1 rounded-md p-5 m-5">
        <div class="flex justify-start">
            <img src="AvgProfile.png" alt="AvgUsr" class = "rounded-full m-1 mb-3">
            <p class="my-1 mb-3">User name</p><br>    
        </div>
        <div class="post">
            <img src="MediaPlaceholder.jpg" alt="MediaPlaceholder"  class = "w-full h-32 sm:h-48 object-cover">
            <span>post description</span>
        </div>
        <div class="bg-slate-500 text-white text-md font-bold rounded-full p-3 ">
            <div class="flex justify-between">
                <div>like</div>
                <div>share</div>
                <div>comment</div>
            </div>
        </div>
    </div>
    <h4 class="flex font-bold text-white text-xl mt-7 pb-4 border-b border-grey-400 justify-center">Public</h4>
    <div id="PostCard" class="bg-white col-span-1 rounded-md p-5 m-5">
        <div class="flex justify-start">
            <img src="AvgProfile.png" alt="AvgUsr" class = "rounded-full m-1 mb-3">
            <p class="my-1 mb-3">User name</p><br>    
        </div>
        <div class="post">
            <img src="MediaPlaceholder.jpg" alt="MediaPlaceholder"  class = "w-full h-32 sm:h-48 object-cover">
            <span>post description</span>
        </div>
        <div class="bg-slate-500 text-white text-md font-bold rounded-full p-3 ">
            <div class="flex justify-between">
                <div>like</div>
                <div>share</div>
                <div>comment</div>
            </div>
        </div>
    </div>
    <div id="PostCard" class="bg-white col-span-1 rounded-md p-5 m-5">
        <div class="flex justify-start">
            <img src="AvgProfile.png" alt="AvgUsr" class = "rounded-full m-1 mb-3">
            <p class="my-1 mb-3">User name</p><br>    
        </div>
        <div class="post">
            <img src="MediaPlaceholder.jpg" alt="MediaPlaceholder"  class = "w-full h-32 sm:h-48 object-cover">
            <span>post description</span>
        </div>
        <div class="bg-slate-500 text-white text-md font-bold rounded-full p-3 ">
            <div class="flex justify-between">
                <div>like</div>
                <div>share</div>
                <div>comment</div>
            </div>
        </div>
    </div>
</div>`;
    Plate_Render(HFeedcontent);
}

// renders the users page
function HUsers_Render() {
    const HUserscontent = `<div class="h-screen">
    <h4 class="flex font-bold text-white text-xl mt-7 pb-4 justify-center">Chats</h4>
    <div class="bg-white mb-4 border-blue-50 text-md font-bold rounded-full p-2 ">
        <form class="flex justify-center">
            <input class="mx-3 text-slate-500" type="text" placeholder="Search..">
            <button class="text-white rounded-full px-3 py-2 end-2.5 bottom-2.5 bg-slate-800 hover:bg-slate-500" type="submit">
                <svg class="w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 
                    5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <div class="px-2 inline-block">Search</div>
            </button>
        </form>
    </div>
    <div id="PeerUsers" class="bg-white text-red-800 rounded-full p-5 my-5 mx-0">
        <div class="flex justify-between">
            <div class="flex justify-start">
                <img src="AvgProfile.png" alt="AvgUsr" class = "rounded-full m-3">
                <p class="my-3">User name</p>
            </div>
            <div class="bg-slate-500 text-white text-md font-bold rounded-full p-3 ">
                <div class="flex justify-between">
                    <div>New message</div>
                </div>
            </div>
            <div>
                <svg  class="w-6 py-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75
                     12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
            </div>
        </div>
    </div>
</div>`;
    Plate_Render(HUserscontent);
}

// renders the home page
function Home_Render() {
    const Hcontent = `<div id="header" class="bg-white flex justify-start">
    <h1 class="text-red-800 text-3xl p-4 mt-4 mb-6 mx-auto">Peer2Peer</h1>
    <button id="logout" type="button" class="m-3">log out</button>
  </div>
  <div id="body" class="grid grid-cols-3 px-5 py-3 min-w-full">
    <div id="UserProfile" class=" col-span-1 rounded-md m-0 p-0">
        <div id="UsrDetails" class="bg-white border-b border-gray-600 rounded-md p-5">
            <div class="flex justify-start">
                <img src="AvgProfile.png" alt="AvgUsr" class = "rounded-full m-3">
                <p class="my-3 text-red-800 text-xl">User name</p><br>    
            </div><br>
            <div>followers: 120</div><br>
            <div>following: 130</div><br>
            <button type="button">edit</button>
        </div>
        <div id="SMPeers">
            <h2 class="flex justify-center text-white m-3 mb-4 border-b">close Peers</h2>
            <div id="UsrPeers" class="flex justify-start bg-white rounded-md p-5 my-5 mx-0">
                <div class="mr-auto flex justify-start">
                    <img src="AvgProfile.png" alt="AvgUsr" class = "rounded-full m-3">
                    <p class="my-3 text-red-800">User name</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 
                        12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 
                        3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 
                        2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 
                        1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                        </svg>
                </div>
            </div>
            <div id="UsrPeers" class="flex justify-start bg-white rounded-md p-5 my-5 mx-0">
                <div class="mr-auto flex justify-start">
                    <img src="AvgProfile.png" alt="AvgUsr" class = "rounded-full m-3">
                    <p class="my-3 text-red-800">User name</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 
                        12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 
                        3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 
                        2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 
                        1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                        </svg>
                </div>
            </div>
            <div id="UsrPeers" class="flex justify-start bg-white rounded-md p-5 my-5 mx-0">
                <div class="mr-auto flex justify-start">
                    <img src="AvgProfile.png" alt="AvgUsr" class = "rounded-full m-3">
                    <p class="my-3 text-red-800">User name</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 
                        12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 
                        3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 
                        2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 
                        1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                        </svg>
                </div>
            </div>
        </div>
    </div>
    <div id="Userfeed" class="bg-slate-500 text-white col-span-2 rounded-md px-40 mx-2 h">
        <div class="flex flex-wrap justify-between p-4">
            <button id="Hfeed" onclick="HFeed_Render()">Feed</button>
            <button id="Hpeers" onclick="HUsers_Render()">Peers</button>
            <button id="Hchats" onclick="HChat_Render()">Chats</button>
        </div>
        <div id="Userfeed-body" class="grid-rows-4">
        </div>
    </div>
  </div>
  <div id="Footer" class="px-3 py-9 mb-0 bg-slate-800"></div>`;
  
    Page_Render(Hcontent);
    document.getElementById('Userfeed-body').addEventListener("DOMContentLoaded", HChat_Render);
    document.getElementById('logout').addEventListener("click", LogIn_Render);
  
  }

function Register(){

    let irlName = document.getElementById(irl_n);
    let usrName = document.getElementById(Usr_n);
    let Usrpassword = document.getElementById(Usr_p);

}

//Ajax code

//loading functionality'
function loadUserData(divID, usrJson){
    const usr_Array = JSON.parse(usrJson);
    console.log(usr_Array);

    let usrHTML = "<table><tr><th>Name</th><th>User Name</th><th>Password</th></tr>";
    for(let usr of usr_Array){
        usrHTML += `<tr><td>${usr.Name}</td><td>${usr.User_name }</td><td>${usr.Password}</td></tr>`;
    }
    usrHTML += "</table>";

    const usrDiv = document.querySelector(divID);
    usrDiv.innerHTML = usrHTML;
}

//loads the status of a function on the page
function loadUserstatus(txt){
    const stats = txt;
    let Stat_html = "<p>neutral</p>";

    if(stats !== "good"){
        Stat_html = "<p>user not found</p>";
    }
    else{
        Stat_html = "<p>user found</p>";
    }

    const usrDiv = document.querySelector("#usrDiv1");
    usrDiv.innerHTML = Stat_html;
}

//gets all the users in the db
function getUsrs(){
    const xhttp = new XMLHttpRequest();

    xhttp.onload = () =>{
        if (xhttp.status != 200){
            console.error(`Error ${xhttp.status}: ${xhttp.statusText}`);
        }
        else {
            console.log(`Success: ${xhttp.responseText}`);
            loadUserData("#usrDiv", xhttp.responseText)
        }
    }

    xhttp.onerror = () => {
        console.error("Unknown error with XMLhttpRequest");
    }

    xhttp.open("GET", "/usrs");

    xhttp.send();
}

//post a users.
function addUsrs(){
    const Input_Name = document.querySelector("#NameInput").value;
    const Input_UsrName = document.querySelector("#UsernameInput").value;
    const Input_Password = document.querySelector("#PasswordInput").value;

    const usrJson = JSON.stringify({Name: Input_Name, User_name: Input_UsrName, Password: Input_Password});

    const xhttp = new XMLHttpRequest();

    xhttp.onload = () => {
        if (xhttp.status != 200){
            console.error(`Error ${xhttp.status}: ${xhttp.statusText}`);
        }
        else {
            console.log(`Success: ${xhttp.responseText}`);
        }
    }

    xhttp.onerror = () => {
        console.error("Unknown error with XMLhttpRequest");
    }

    xhttp.open("POST", "/usrs");

    xhttp.setRequestHeader('Content-Type', 'application/json');

    xhttp.send(usrJson);
}

// gets a user require
function findUsr(){
    const Input_UsrName = document.querySelector("#Usernamecheck").value;
    const Input_Password = document.querySelector("#Passwordcheck").value;

    const usrJson = JSON.stringify({User_name: Input_UsrName, Password: Input_Password});

    const xhttp = new XMLHttpRequest();

    xhttp.onload = () =>{
        if (xhttp.status != 200){
            loadUserstatus("notgood");
            console.error(`Error ${xhttp.status}: ${xhttp.statusText}`);
        
        }
        else {
            loadUserstatus("good");
            console.log(`Success: ${xhttp.responseText}`);
        }
    }

    xhttp.onerror = () => {
        console.error("Unknown error with XMLhttpRequest");
    }

    xhttp.open("GET", "/usrs/search");

    xhttp.send();

}

//searches the db for a user
function searchUsrs(){
    const Input_UsrName = document.querySelector("#Usernamesearch").value;

    const usrJson = JSON.stringify({User_name: Input_UsrName});

    const xhttp = new XMLHttpRequest();

    xhttp.onload = () =>{
        if (xhttp.status != 200){
            loadUserstatus("notgood");
            console.error(`Error ${xhttp.status}: ${xhttp.statusText}`);
        
        }
        else {
            loadUserData("#usrDiv2", xhttp.responseText);
            console.log(`Success: ${xhttp.responseText}`);
        }
    }

    xhttp.onerror = () => {
        console.error("Unknown error with XMLhttpRequest");
    }

    xhttp.open("GET", "/usrs/search");
 
    xhttp.send(usrJson);
 
}