(function() {
    var provinceNode = $("#province"),
        cityNode = $("#city"),
        schoolNode = $("#school");
    //省会
    var provinceArr = "",
        selectPstr = "";
    for (var i = 0, len = province.length; i < len; i++) {
        // selectPstr += province[i][0]   province[i][1]
        selectPstr +=
            "<option value = " + province[i][0] + ">" + province[i][1] + "</option>";
    }
    // console.log(selectPstr);
    provinceNode.html(selectPstr);

    //城市
    // console.log(typeof provinceNode.val());
    var cityArr = city[provinceNode.val()],
        selectCstr = "";
    console.log(cityArr);
    for (var i = 0, len = cityArr.length; i < len; i++) {
        selectCstr +=
            "<option value = " + cityArr[i][0] + ">" + cityArr[i][1] + "</option>";
    }
    selectCstr += "<option value='9999'>其他</option>";
    cityNode.html(selectCstr);

    //院校
    var schoolArr = allschool[cityNode.val()],
        selectSstr = "";
    for (var i = 0, len = schoolArr.length; i < len; i++) {
        selectSstr += "<option >" + schoolArr[i][2] + "</option>";
    }
    selectSstr += "<option value='9999'>其他</option>";
    schoolNode.html(selectSstr);

    //省会联动
    provinceNode.change(function() {
        var provinceCurrent = provinceNode.val(),
            cityArr = city[provinceCurrent],
            selectCstr = "";
        for (var i = 0, len = cityArr.length; i < len; i++) {
            selectCstr +=
                "<option value = " + cityArr[i][0] + ">" + cityArr[i][1] + "</option>";
        }
        selectCstr += "<option value='9999'>其他</option>";
        cityNode.html(selectCstr);

        (schoolArr = allschool[cityNode.val()]), (selectSstr = "");
        if (schoolArr) {
            for (var i = 0, len = schoolArr.length; i < len; i++) {
                selectSstr += "<option >" + schoolArr[i][2] + "</option>";
            }
            selectSstr += "<option value='9999'>其他</option>";
            schoolNode.html(selectSstr);
        }
    });

    //城市联动
    cityNode.change(function() {
        (schoolArr = allschool[cityNode.val()]), (selectSstr = "");
        if (schoolArr) {
            for (var i = 0, len = schoolArr.length; i < len; i++) {
                selectSstr += "<option >" + schoolArr[i][2] + "</option>";
            }
            selectSstr += "<option value='9999'>其他</option>";
            schoolNode.html(selectSstr);
        } else {
            selectSstr = "<option value = '9999'>其他</option>";
            schoolNode.html(selectSstr);
        }
    });
})();

