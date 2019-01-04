(function() {
    var provinceNode = document.getElementById("province"), //$(#....)
        cityNode = document.getElementById('city'),
        schoolNode = document.getElementById('school');
//创建省会
    var provinceStr = '',
        selectPstr = '';
    for (var i = 0, len = province.length; i < len; i++) {
        // selectPstr += province[i][0]   province[i][1]
        selectPstr +=
            "<option value = " + province[i][0] + ">" + province[i][1] + "</option>";
    }
    provinceNode.html(selectPstr);

})