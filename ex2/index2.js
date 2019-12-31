window.addEventListener("load", function(){
    let xhr = new XMLHttpRequest;
    var section1 = document.querySelector("#sec1");
    var section2 = document.querySelector("#sec2");
    var section3 = document.querySelector("#sec3");
    var noticeList =section1.querySelector(".notice-list");
    var noticeList2 =section2.querySelector(".notice-list");
    var noticeList3 =section3.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("#sec1 tbody");
    var tbodyNode2 = noticeList2.querySelector("#sec2 tbody");
    var tbodyNode3 = noticeList3.querySelector("#sec3 tbody");

    xhr.open('GET', 'http://220.85.155.13:5187/categories', true);
    xhr.onload = function() {
        if(this.status === 200) {
            JSON.parse(this.responseText);
        }
        var a = JSON.parse(this.responseText);
        //  var aa = a.categoryResponses;
        //  console.log("eee",a);
        var template1 = section1.querySelector("#template1");
        for(var i=0; i<a.categoryResponses.length; i++){
            var cloneNode = document.importNode(template1.content, true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].textContent = a.categoryResponses[i].categoryNo;
            tds[1].textContent = a.categoryResponses[i].name;
            tbodyNode.appendChild(cloneNode);
            //console.log(tbodyNode.children[0]);
        };
        console.log(tbodyNode.children[1]);
        var template2 = section2.querySelector("#template2");
        const result1 = a.categoryResponses.find(num => num.categoryNo === 1);
        const result2 = a.categoryResponses.find(num => num.categoryNo === 12);
                if(tbodyNode.children[0].onclick = function(e) {
                    // console.log(result.children[0].categoryNo);
                    for(var i=0; i<a.categoryResponses.length; i++){
                        var cloneNode = document.importNode(template2.content, true);
                        var tds = cloneNode.querySelectorAll("td");
                        tds[0].textContent = result1.children[i].categoryNo;
                        tds[1].textContent = result1.children[i].name;
                        tbodyNode2.appendChild(cloneNode);
                    };
                   
                });
                if(tbodyNode.children[1].onclick = function(e) {
                    for(var i=0; i<a.categoryResponses.length; i++){
                        var cloneNode = document.importNode(template2.content, true);
                        var tds = cloneNode.querySelectorAll("td");
                        tds[0].textContent = result2.children[i].categoryNo;
                        tds[1].textContent = result2.children[i].name;
                        tbodyNode2.appendChild(cloneNode);
                    };
                });
                console.log()
               
                    
            

        // var template2 = section2.querySelector("#template2");
        // for(var i=0; i<a.categoryResponses.length; i++){
        //     var cloneNode = document.importNode(template2.content, true);
        //     var tds = cloneNode.querySelectorAll("td");
        //     tds[0].textContent = a.categoryResponses[i].children[0].categoryNo;
        //     tds[1].textContent = a.categoryResponses[i].children[0].name;
        //     tbodyNode2.appendChild(cloneNode);
        // };

        // var template3 = section3.querySelector("#template3");
        // for(var i=0; i<a.categoryResponses.length; i++){
        //     var cloneNode = document.importNode(template3.content, true);
        //     var tds = cloneNode.querySelectorAll("td");
        //     tds[0].textContent = a.categoryResponses[i].children[0].children[0].categoryNo;
        //     tds[1].textContent = a.categoryResponses[i].children[0].children[0].name;
        //     tbodyNode3.appendChild(cloneNode);
        // };

    }
    xhr.send();
   
});