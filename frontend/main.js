window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl="https://getresumecounte.azurewebsites.net/GetResumeCounter?code=8WwOr7fDMYPToongUDkBMezJOgXbHsVz52zj6lC36IAxAzFu5pGOPw%3D%3D"

const localFunctionApi='http://localhost:7071/GetResumeCounter';

const getVisitCount=()=>{
    let count =30;
    fetch(localFunctionApi).then(response=>{
        return response.json()
    }).then(response=>{
        console.log("Website called function API.");
        count=response.count;
        document.getElementById("counter").innerText=count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}