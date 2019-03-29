(function() {
    // console.log(province)
    var provinceNode = document.getElementById("province"), //$(#....)
        cityNode = document.getElementById('city'),
        schoolNode = document.getElementById('school');
    //省会的遍历
    var proStr = '',
        selectPstr = '';
    for (var i = 0; i < province.length; i++) {
        proStr += '<option value = ' + province[i][0] + '>' + province[i][1] + '</option>'
    }
    provinceNode.innerHTML = proStr;

    // 城市的遍历

    var cityArr = city[provinceNode.value];
    var cityStr = '';

    for (var i = 0; i < cityArr.length; i++) {
        cityStr += '<option value = ' + cityArr[i][0] + '>' + cityArr[i][1] + '</option>'
    }
    cityNode.innerHTML = cityStr;


    // 学校的遍历
    var schoolArr = allschool[cityNode.value],
        selectSstr = "";
    for (var i = 0, len = schoolArr.length; i < len; i++) {
        selectSstr += "<option >" + schoolArr[i][2] + "</option>";
    }
    schoolNode.innerHTML = selectSstr;

    //创建联动
    provinceNode.change= function() {
            var provinceCurrent = provinceNode.value(),
                cityArr = city[provinceCurrent],
                selectCstr = '';
            for (var i = 0, len = cityArr.length; i < len; i++) {
                selectCstr += "<option value = " + cityArr[i][0] + ">" + cityArr[i][1] + "</option>";
            }
            selectCstr += "<option value = '9999'>其他</option>";
            cityNode.html(selectCstr);

            schoolArr = allschool[cityNode.value()],
                selectSstr = '';
            if (schoolArr) {
                for (var i = 0, len = schoolArr.length; i < len; i++) {
                    selectSstr += "<option >" + schoolArr[i][2] + "</option>";
                }
                selectSstr += "<option value = '9999'>其他</option>";
                schoolNode.html(selectSstr);
            }
        }
        //城市联动
        cityNode.change = function() {

            schoolArr = allschool[cityNode.value()],
                selectSstr = '';
            if (schoolArr) {
                for (var i = 0, len = schoolArr.length; i < len; i++) {
                    selectSstr += "<option >" + schoolArr[i][2] + "</option>";
                }
                selectSstr += "<option value = '9999'>其他</option>";
                schoolNode.html(selectSstr);
            } else {
                selectSstr = "<option value = '9999'>其他</option>";
                schoolNode.html(selectSstr);
            }
        }
    

})()