

var gender = document.getElementById("gender");
var region = document.getElementById("region");
var amount = document.getElementById("amount");
var submit = document.getElementById("btnsend");
var showall = document.getElementById("tblbody");
var btnsql = document.getElementById("btnsql");
var sql = document.getElementById("sql");

var storeData = [];
var storeDataSql = [];


submit.addEventListener("click", getInfo);
btnsql.addEventListener("click", makeSql);



var getInfo = submit.onclick = function () {

    if (amount.value <= 500) {

        if (region.value === "All" && gender.value === "both") {
            fetch('http://uinames.com/api/?amount=' + amount.value).then(jsongetter)
        }
        ;
        if (region.value === "All") {
            fetch('http://uinames.com/api/?amount=' + amount.value + '&gender=' + gender.value).then(jsongetter)
        }
        ;
        if (gender.value === "both") {
            fetch('http://uinames.com/api/?amount=' + amount.value + '&region=' + region.value).then(jsongetter)
        } else {
            fetch('http://uinames.com/api/?amount=' + amount.value + '&region=' + region.value + '&gender=' + gender.value).then(jsongetter)
        }
        ;
        ;
    } else {
        showall.innerHTML = "NEj tak det er alt for meget! (Jeg kunne helt klart godt have fundet på bedre håndtering af 'for meget' problemet)";
    }
};

////mangler ordentlig fejlhåndtering
//// nedenstående  bearbejder fetchresponse

var jsongetter = function (response) {

    response.text().then(function (text) {

        let list = "";

        var myJSON = text;
        storeData = myJSON;

        var myObj = JSON.parse(myJSON);
        storeDataSql = myObj;
        for (var x = amount.value in myObj) {

            list += "<tr><td>" + myObj[x].name + "</td><td>" + myObj[x].surname + "</td><td>" + myObj[x].gender + "</td></tr>";
            showall.innerHTML = list;

        }
        ;
    }).catch(function (error) {
        console.log('Something went wrong', error.message);

    });

};

function makeSql() {

    var sqlStringArr = [];
    for (var i = 0; i < storeDataSql.length; i++) {
        var sqlString = "INSERT INTO names (name, surname, gender) values('" + [storeDataSql[i].name, storeDataSql[i].surname, storeDataSql[i].gender].join("','") + "');";
        sqlStringArr.push(sqlString);

    }
    ;
    sql.innerHTML = sqlStringArr.map(sqlCallbackWithLineBreak).join('');

}
;
function sqlCallbackWithLineBreak(a) {
    return a + "\n";
}

