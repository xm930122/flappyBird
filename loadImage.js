/*
 *function{loadImage}加载图片资源
 * param{imgUrl:Object}按照key，val形式存储要加载图片资源
 * param{fn:function}加载完毕之后，把资源传给这个回调
 * */

function loadImage(imgUrl,fn){

    /*
     * 思路：
     * 1.遍历imgUrl，动态创建img对象，然后指定其src为遍历到地址，以加载这些图片资源
     * 2.在加载图片过程中，需要监听每一张img的onload事件，
     *当所有的图片都触发onload事件时，调用回调，把加载完毕的资源传递过去。
     * */


    //存储图像资源
    var imgObj={};

    var tempImg;

    //记录已经加载完毕的图像数量
    var loaded=0;

    //统计要加载的图像数量
    var imgLength=0;

    //遍历所有的url,动态创建img
    for(var key in imgUrl){

        imgLength++;

        //根据遍历到的url，加载图像
        tempImg=new Image();

        //给所有图片监听load事件
        tempImg.onload= function () {
            loaded++;

            //当图片加载的数量大于等于要加载的数量，那么就可以执行回调了。
            if(loaded>=imgLength){
                fn(imgObj);
            }
        };

        tempImg.src=imgUrl[key];

        //把当前加载的图像存储起来
        imgObj[key]=tempImg;

    }

}