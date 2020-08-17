$(function () {
    //查看
    //id标识学生，不要求连续，但必须唯一，不能重复
    let students = JSON.parse(localStorage.getItem('devicedata'));
    let students1 = students.slice(0, 5);
    let students2 = students.slice(5, 10);
    let students3 = students.slice(10, 15);
    let students4 = students.slice(15);
    let table = $('table>tbody');
    render(students1);
    /* 
        $()=>jQuery=>css,html    
        $()=>jQuery=>css,html     
    
    */
    //创建对象和变量没关系
    //渲染
    function render(data) {
        if (!Array.isArray(data)) {
            return `${data}不是一个数组`;
        }
        if (!data.length) {
            //清空，可删最后一个
            table.empty();
            return `${data}为空数组`;
        }
        let str = "";
        data.forEach(function (elem) {
            str += `<tr>
            <td>${elem.id}</td>
            <td>${elem.names}</td>
            <td>${elem.brand}</td>
            <td>${elem.facid}</td>
            <td>${elem.factime}</td>
            <td>${elem.proid}</td>
            <td>${elem.supid}</td>
        </tr>
`
        })
        //清空子元素 文档处理 删除
        table.empty();
        //传参设置内容允许链式调用 不传参获取内容不允许链式调用
        table.html(str);
    }
    let li1 = $('.pagination>li:nth-child(2)');

    li1.on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        render(students1);
    })
    let li2 = $('.pagination>li:nth-child(3)');
    
    li2.on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        render(students2);
    })
    let li3 = $('.pagination>li:nth-child(4)');

    li3.on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        render(students3);
    })
    let li4 = $('.pagination>li:nth-child(5)');

    li4.on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        render(students4);
    })
    let li5 = $('.pagination>li:nth-child(6)');

    li5.on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        render(students5);
    })
    /* let liz = $('.pagination>li:last-child');

    liz.on('click', function () {
        let d=$('.active').children().text();
        let d1=d*1;
        console.log(d1++);
        render(students4);
    }) */

    //编辑
    /* 
        采用事件委派 td=>tbody
        借助表单编辑的功能
        1.点击td编辑
        2.当前单元格插入表单->将单元格内容设置给表单->单元格内容清除
        3.编辑完毕：移除表单，表单里面的值给td设回去
 获取单元格内容->清空单元格->插入表单->将单元格内容设置给表单
    编辑完毕：表单内容->移除表单->表单内容设置给单元格
        */
    //父元素 子元素选择器
    table.on('dblclick', 'td', function () {
        //在事件委派里面this是指目标对象
        // console.log(this); this->e.target
        let input = $('<input>');//创建元素表单$('<)
        let _this = $(this);//dom->jquery
        let html = _this.text();
        _this.empty();
        input.val(html).appendTo(this).focus().blur(function () {
            let value = input.val().trim();
            value = value || html;
            //清除 移除表单
            input.remove();
            _this.text(value);
        });

    })

    //添加
    /**
     * 点击按钮->屏蔽默认行为(当成普通的按钮)->input(value)
     * 点击按钮->form(submit)
     * 1.students追加元素->{}id=最后一个加一->input(value)
     * 2.页面更新 render
     * 
     */

    let form = $('form');
    form.on('submit', function () {
        console.log(this);
        let _this = $(this);
        let obj = {};
        //格式化表单数据
        let arr = _this.serializeArray();//序列化表单数据
        /*  [
             { name: 'names', value: 'zs' }
         ] */
        arr.forEach(function (elem) {
            let { name, value } = elem;
            obj[name] = value;
        })
        let id = 1;
        /*  for(let i=0;i<students.length;i++){
             for(let j in obj){
                 if(students[i].id!=obj){
                     continue;
                 }
             }
         } */
        if (students.length) {
            id = students[students.length - 1].id + 1;
        }
        obj[id] = id;
        //console.log(obj);
        students.push(obj);
        this.reset();
        render(students);
    })

    //删除
    /**
     * btn->table
     * 父辈元素 parents('tr')
     * 属性 id attr('id') jQuery获取设置   .id原生js
     * 过滤->id
     */
    table.on('click', 'button', function () {
        //this 指向目标事件源button 谁点指谁
        let _this = $(this);//dom->jquery
        // let tr=_this.parents('tr');//找父辈向上找 找很多
        let tr = _this.closest('tr'); //找离他最近的 向上找 找一个 如果没有就没有 最多找到一个 事件委派经常用
        //console.log(tr);
        let id = tr.attr('id');
        // console.log(id);
        //数组删除 filter 条件 splice 下标
        /*   students= students.filter(function (elem, index) {
             return elem.id != id;
         }); */
        //findIndex找下标用法更广，返回符合条件的第一个下标，找到元素首次出现的位置
        let index = students.findIndex(function (elem) {
            //找到id对应元素的下标 id是标识不是下标 indexOf判断某个元素首次出现的位置，现在只有id，并不知道在哪出现
            return elem.id == id;
        })
        students.splice(index, 1);
        //数组删到最后为0，之后return，就不让重新渲染了，之前留下的那一个就删不掉，所以最后一个删不掉
        //重新渲染
        // render(students);
        //remove decach 把自己也删掉
        tr.remove();


    })

    /*  table.on('click', 'button', del)
     function del() {
         let _this = $(this);
         let delId = _this.parents('tr');
         delId = delId.attr('id');
         students.filter(function(value,index){
             if(value.id == delId){
                 delId = index;
             }
         })
         students.splice(delId,1);
         render(students);
     } */
})