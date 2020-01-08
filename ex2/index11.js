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
        
        function insert() {
            for(var i=0; i<a.categoryResponses.length; i++) {
                var cloneNode = document.importNode(template1.content, true);
                var tds = cloneNode.querySelectorAll("td");
                tds[0].textContent = a.categoryResponses[i].categoryNo;
                tds[1].textContent = a.categoryResponses[i].name; 
                tbodyNode.appendChild(cloneNode);
            }
        }
        insert();

        function f_test(category, categoryNo, depth) {
            category.find(data => {
                if(data.categoryNo === categoryNo) {
                    if(depth === 's1') {
                        child(template2, category, categoryNo, data, tbodyNode2);
                    } else if(depth === 's2') {
                        child(template3, category, categoryNo, data, tbodyNode3);
                    }
                    return category;
                } else {
                     return f_test(data.children, categoryNo, depth);
                }
            })
        }

        function child(num, category, categoryNo, data, num2) {
            var cloneNode = document.importNode(num.content, true);
            var tds = cloneNode.querySelectorAll("td");

            for(var i = 0; i < category.length; i++) {
                if(data.categoryNo === category[i].categoryNo) {
                    tds[0].textContent = category[i].children[0].categoryNo;
                    tds[1].textContent = category[i].children[0].name;
                    num2.appendChild(cloneNode);
                 }
             }
        }

        function click1(num) {
            num.onclick = function(e) {
                tbodyNode2.innerHTML = "";
                tbodyNode3.innerHTML = "";
                var toto = Number(this.children[0].textContent);
                f_test(a.categoryResponses, toto, this.parentNode.parentNode.parentNode.className);
                function click2(num) {
                    num.onclick = function(e) {
                        this.onclick = null;
                        var toto = Number(this.children[0].textContent);
                        f_test(a.categoryResponses, toto, this.parentNode.parentNode.parentNode.className);
                    }
                }
                for(var i = 0; i < tbodyNode2.children.length; i++) {
                    click2(tbodyNode2.children[i]);
                }
            }
        }
        for(var i = 0; i < a.categoryResponses.length; i++) {
            click1(tbodyNode.children[i]);
        }
    }

    xhr.send();
});