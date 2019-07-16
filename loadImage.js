/*
 *function{loadImage}����ͼƬ��Դ
 * param{imgUrl:Object}����key��val��ʽ�洢Ҫ����ͼƬ��Դ
 * param{fn:function}�������֮�󣬰���Դ��������ص�
 * */

function loadImage(imgUrl,fn){

    /*
     * ˼·��
     * 1.����imgUrl����̬����img����Ȼ��ָ����srcΪ��������ַ���Լ�����ЩͼƬ��Դ
     * 2.�ڼ���ͼƬ�����У���Ҫ����ÿһ��img��onload�¼���
     *�����е�ͼƬ������onload�¼�ʱ�����ûص����Ѽ�����ϵ���Դ���ݹ�ȥ��
     * */


    //�洢ͼ����Դ
    var imgObj={};

    var tempImg;

    //��¼�Ѿ�������ϵ�ͼ������
    var loaded=0;

    //ͳ��Ҫ���ص�ͼ������
    var imgLength=0;

    //�������е�url,��̬����img
    for(var key in imgUrl){

        imgLength++;

        //���ݱ�������url������ͼ��
        tempImg=new Image();

        //������ͼƬ����load�¼�
        tempImg.onload= function () {
            loaded++;

            //��ͼƬ���ص��������ڵ���Ҫ���ص���������ô�Ϳ���ִ�лص��ˡ�
            if(loaded>=imgLength){
                fn(imgObj);
            }
        };

        tempImg.src=imgUrl[key];

        //�ѵ�ǰ���ص�ͼ��洢����
        imgObj[key]=tempImg;

    }

}