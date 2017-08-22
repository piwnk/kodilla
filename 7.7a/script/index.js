var team = {
   "members": [{
      "name": "Ruth Woods",
      "role": "Founder, CEO"
   }, {
      "name": "Timothy Reed",
      "role": "Co-Founder, Developer"
   }, {
      "name": "Victoria Valdez",
      "role": "UI Designer"
   }, {
      "name": "Beverly Little",
      "role": "Data Scientist"
   }]
};


$(document).ready(function () {
   var url;
   var i;
   var members = team.members;
   var desc = "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.";

   for (i = 0; i < 8; i++) {
      var picture = document.createElement("div");
      url = `http://lorempixel.com/400/30${i}/`;
      picture.style.backgroundImage = `url(${url})`;
      picture.className = "picture";
      document.getElementById("gallery").appendChild(picture);
   }

   for (i = 0; i < members.length; i++) {
      var member = document.createElement("div");
      var memberPic = document.createElement("img");
      var memberName = document.createElement("h4");
      var memberRole = document.createElement("h6");
      var memberDesc = document.createElement("p");
      memberName.innerHTML = members[i].name;
      memberRole.innerHTML = members[i].role;
      memberDesc.innerHTML = desc;
      url = `http://lorempixel.com/400/50${i}/`;
      memberPic.src = url;
      member.appendChild(memberPic);
      member.appendChild(memberName);
      member.appendChild(memberRole);
      member.appendChild(memberDesc);
      // document.getElementById("team").appendChild(member);
      $("#team>div").append(member);

   }

});