window.addEventListener("load", function(){
    let xhr = new XMLHttpRequest;
    var section1 = document.querySelector("#sec1");
    var section2 = document.querySelector("#sec2");
    var section3 = document.querySelector("#sec3");
    var noticeList = section1.querySelector(".notice-list");
    var noticeList2 = section2.querySelector(".notice-list");
    var noticeList3 =section3.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("#sec1 tbody");
    var tbodyNode2 = noticeList2.querySelector("#sec2 tbody");
    var tbodyNode3 = noticeList3.querySelector("#sec3 tbody");

    xhr.open('GET', 'http://220.85.155.13:5187/categories', true);
    xhr.onload = function() {
        if(this.status === 200) {
            JSON.parse(this.responseText);
        }
        a = JSON.parse(this.responseText);

        var template1 = section1.querySelector("#template1");
        for(var i=0; i<a.categoryResponses.length; i++){
            var cloneNode = document.importNode(template1.content, true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].textContent = a.categoryResponses[i].categoryNo;
            tds[1].textContent = a.categoryResponses[i].name;
            tbodyNode.appendChild(cloneNode);
        };

        
        var template2 = section2.querySelector("#template2");
        var template3 = section3.querySelector("#template3");
        for(var i = 0; i < a.categoryResponses.length; i++) {
            if(i === 0) {
                if(tbodyNode.children[i].onclick  = function(e) {
                    tbodyNode.children[0].style.backgroundColor = "yellow";
                    tbodyNode.children[1].style.backgroundColor = "#fff";
                    for(var b = 0; b < a.categoryResponses[0].children.length; b++) {
                        if(tbodyNode2.children.length > 0) {
                            tbodyNode2.children[b].remove();
                        }
                        if(tbodyNode3.children.length > 0) {
                            tbodyNode3.children[b].remove(); 
                        }
                    }
                    var cloneNode = document.importNode(template2.content, true);
                    var tds = cloneNode.querySelectorAll("td");
                    for(var z= 0; z < a.categoryResponses[0].children.length; z++) {
                        tds[0].textContent = a.categoryResponses[0].children[z].categoryNo;
                        tds[1].textContent = a.categoryResponses[0].children[z].name;
                    }
                    tbodyNode2.appendChild(cloneNode);
                    for(var i = 0; i < a.categoryResponses[0].children.length; i++) {
                        if(tbodyNode2.children[i].onclick  = function(e) {
                            // console.log("aa");
                            for(var e = 0; e <a.categoryResponses[0].children.length; e++ ) {
                                tbodyNode2.children[e].style.backgroundColor = "yellow";
                            }
                            var cloneNode = document.importNode(template3.content, true);
                            var tds = cloneNode.querySelectorAll("td");
                            for(var z= 0; z < a.categoryResponses[0].children.length; z++) {
                                if(a.categoryResponses[0].children[z].children.length == 0) {alert("끝"); return;}
                                for(var j = 0; j < a.categoryResponses[0].children[z].children.length; j++) {
                                    tds[0].textContent = a.categoryResponses[0].children[z].children[j].categoryNo;
                                    tds[1].textContent = a.categoryResponses[0].children[z].children[j].name;
                                }
                            }
                            if(tbodyNode3.children.length > 0) {
                                tbodyNode3.children[0].remove(); 
                            }
                            // console.log(tbodyNode3.children.length);
                            tbodyNode3.appendChild(cloneNode);
                                if(tbodyNode3.children[0].onclick = function(e) {
                                    if(tbodyNode3.children.length > 0) {
                                    }
                                    for(var e = 0; e <a.categoryResponses[0].children[0].children.length; e++) {
                                        for(var j = 0; j < a.categoryResponses[0].children[e].children.length; j++) {
                                            tbodyNode3.children[j].style.backgroundColor = "yellow";
                                        }
                                    }
                                });
                        });
                    }
                });
            }
            if(i === 1) {
                if(tbodyNode.children[i].onclick  = function(e) {
                    tbodyNode.children[1].style.backgroundColor = "yellow";
                    tbodyNode.children[0].style.backgroundColor = "#fff";
                    // tbodyNode2.children[0].remove();
                    // tbodyNode3.children[0].remsove();
                    for(var b = 0; b < a.categoryResponses[0].children.length; b++) {
                        if(tbodyNode2.children.length > 0) {
                            tbodyNode2.children[b].remove();
                        }
                        if(tbodyNode3.children.length > 0) {
                            tbodyNode3.children[b].remove(); 
                        }
                    }
                    var cloneNode = document.importNode(template2.content, true);
                    var tds = cloneNode.querySelectorAll("td");
                    for(var z= 0; z < a.categoryResponses[1].children.length; z++) {
                        tds[0].textContent = a.categoryResponses[1].children[z].categoryNo;
                        tds[1].textContent = a.categoryResponses[1].children[z].name;
                    }
                    tbodyNode2.appendChild(cloneNode);
                    for(var i = 0; i < a.categoryResponses[1].children.length; i++) {
                        if(tbodyNode2.children[i].onclick  = function(e) {
                            for(var e = 0; e <a.categoryResponses[1].children.length; e++ ) {
                                tbodyNode2.children[e].style.backgroundColor = "yellow";
                            }
                            var cloneNode = document.importNode(template3.content, true);
                            var tds = cloneNode.querySelectorAll("td");
                            for(var z= 0; z < a.categoryResponses[1].children.length; z++) {
                                if(a.categoryResponses[1].children[z].children.length == 0) {alert("X"); return;}
                                for(var j = 0; j < a.categoryResponses[1].children[z].children.length; j++) {
                                    tds[0].textContent = a.categoryResponses[1].children[z].children[j].categoryNo;
                                    tds[1].textContent = a.categoryResponses[1].children[z].children[j].name;
                                    if(a.categoryResponses[1].children[z].children.length == 0) {
                                        alert("끝");
                                    }
                                }
                            }
                            tbodyNode3.appendChild(cloneNode);
                        });
                    }
                });
            }
        }
    }
    xhr.send();



});