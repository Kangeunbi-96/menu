window.addEventListener("load", function(){
    let xhr = new XMLHttpRequest;
    var section1 = document.querySelector("#sec1");
    var section2 = document.querySelector("#sec2");
    var section3 = document.querySelector("#sec3");
    var noticeList = section1.querySelector(".notice-list");
    var noticeList2 = section2.querySelector(".notice-list");
    var noticeList3 = section3.querySelector(".notice-list");
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
            var i = 0;
            for(i=0; i<a.categoryResponses.length; i++) {
                var cloneNode = document.importNode(template1.content, true);
                var tds = cloneNode.querySelectorAll("td");
                
                tds[0].textContent = a.categoryResponses[i].categoryNo;
                tds[1].textContent = a.categoryResponses[i].name; 
                tbodyNode.appendChild(cloneNode);
        }

        function test(category, categoryNo) {
            tbodyNode2.innerHTML = "";
            tbodyNode3.innerHTML = "";
             category.find(data => {
                if(data.categoryNo === categoryNo) {
                    var cloneNode = document.importNode(template2.content, true);
                    var tds = cloneNode.querySelectorAll("td");
                    for(var i = 0; i < category.length; i++) {
                        if(data.categoryNo === category[i].categoryNo) {
                            tds[0].textContent = category[i].children[0].categoryNo;
                            tds[1].textContent = category[i].children[0].name;
                            tbodyNode2.appendChild(cloneNode);}} return category;}
                            else {
                                return test(data.children, categoryNo);
                            }
                        })}

        function test2(category, categoryNo) {
            category.find(data => {
               if(data.categoryNo === categoryNo) {
                   var cloneNode = document.importNode(template3.content, true);
                   var tds = cloneNode.querySelectorAll("td");

                   for(var i = 0; i < category.length; i++) {
                       if(data.categoryNo === category[i].categoryNo) {
                           tds[0].textContent = category[i].children[0].categoryNo;
                           tds[1].textContent = category[i].children[0].name;
                           tbodyNode3.appendChild(cloneNode);}} return category;}
                           else {
                               return test2(data.children, categoryNo);
                            }
                        })}

        for(var i=0; i<a.categoryResponses.length; i++) {
            if(tbodyNode.children[i].onclick = function() {
                // this.onclick = null;
                // this.style.backgroundColor = "yellow";
                var toto = Number(this.children[0].textContent);
                test(a.categoryResponses, toto);
                for(var i=0; i<tbodyNode2.children.length; i++) {
                    if(tbodyNode2.children[i].onclick = function() {
                        this.onclick = null;
                        // this.style.backgroundColor = "yellow";
                        var toto2 = Number(this.children[0].textContent);
                        test2(a.categoryResponses, toto2);
                    });
                }
            }); 
        }
    }
    xhr.send();
});