/**
 * Created by �ݷ� on 2015/8/20.
 * Description:�ַ�����ʽ��
 * Demo:
 * stringformat("{0} {1}","hello","world");
   hello world
 */

function stringformat(_t) {
    var args = Array.prototype.slice.call(arguments, 1);
    return _t.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match
            ;
    });
}