/**
 *
 * @param obj 操作对象
 * @param attr 操作对象的属性
 * @param target 改变上限
 * @param speed 速度
 * @param callback 回调函数
 */

function move(obj, attr, target, speed, callback) {

    if (obj.timer){
        clearInterval(obj.timer);
        obj.timer = null;
    }else{
        obj.timer = setInterval(function () {
            var val = parseInt(getStyle(obj, attr));
            val += speed;
            if ((speed > 0 && val > target) || (speed < 0 && val < target)){
                val = target;
            }

            obj.style[attr] = val + "px";
            if (val == target){

                clearInterval(obj.timer);
                obj.timer = null;
                callback && callback();
            }

        }, 50);

    }

}

function getStyle(obj, name) {

    /**
     *
     * 根据浏览器运行里有没有getComputedStyle来判断是不是走这个方法
     * 直接if(getComputedStyle) -- 这是判断一个变量 如果没有则会报错
     * if (window.getComputedStyle) --- 判断一个对象里有没有这个属性，没有则只会返回false
     * -所有以后进行判断的时候，有条件作为一个对象的属性来判断，尽量这么做
     *
     *
     */

    if (window.getComputedStyle){
        //其它浏览器
        return window.getComputedStyle(obj, null)[name]
    }else{
        return obj.currentStyle[name];
    }

}
