
const navActivities = document.getElementById("navActivities");
//const axios = require('axios');
//https://projectdeneme.herokuapp.com/activities/listActivities
//const axios = require('axios').default;


const getData = () => {
    axios.get('https://projectdeneme.herokuapp.com/activities/listActivities').then(function (response) {
    console.log(response);
        for(var i = 0; i < response.data.length; i++) {
            var activityname = response.data[i].activityName;
            var activitydesc = response.data[i].activityDescription;
            var activitydate = response.data[i].date;
            var activityplace = response.data[i].place;
            var accap = response.data[i].capacity;
            var ge250 = response.data[i].ge250Point;
            document.body.innerHTML = document.body.innerHTML + '<ul class="list-group list-group-horizontal mb-2 mt-4 "  >\n' +
                '      <li class="list-group-item  col-lg-2 col-sm-2 col-md-2 col-4 text-center" id="activityClub1" style="border: none"><span id="activityName1"> '+ activityname+ ' </span> </li>\n' +
                '      <li class="list-group-item  col-lg-2 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityName1"> '+ activitydesc+ ' </span></li>\n' +
                '      <li class="list-group-item  col-lg-2 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityDate1"> '+ activitydate+ ' </span></li>\n' +
                '      <li class="list-group-item  col-lg-2 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityPlace1"> '+ activityplace+ ' </span></li>\n' +
                '      <li class="list-group-item  col-lg-1 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityQuota1"> '+ accap+ '</span></li>\n' +
                '      <li class="list-group-item  col-lg-1 col-sm-2 col-md-2 col-4 text-center" style="border: none"><span id="activityGe1"> '+ ge250+ ' </span></li>\n' +
                '      <li class="list-group-item col-lg-1 col-2 justify-content-center d-none  d-sm-block" style="border: none">\n' +
                '        <button id = "joinButton" type="button" class="btn btn-danger btn-outline-dark justify-content-center" style="color: white">Join</button>\n' +
                '      </li>';

        }
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    });
};
 
/**
const currentData = await axios.get('https://projectdeneme.herokuapp.com/activities/listActivities')then(res => res.data);
joinButton.addEventListener('click', getData)
*/

navActivities.addEventListener('click', getData)