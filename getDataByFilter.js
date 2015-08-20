/**
 * Created by �ݷ� on 2015/8/19.
 * Description:��JS��Ҫ���ݸ���������ж������Ƿ����ѡ��
 *
 * Demo:
 *   var _c={"material":"ͷ��ţƤ/����/������ά/Ӳľ"};
     var _d=[
     {"sku":1045280615,"material":"�����ͷ��ţƤ/����/������ά/Ӳľ","color":"�ջ�ɫ","specification":"��72.5X��52X��46.5CM","salesstates":"ZX","tooltips":"�����ͷ��ţƤ-�ջ�ɫ"},
     {"sku":1045280613,"material":"ͷ��ţƤ/����/������ά/Ӳľ","color":"���ɫ","specification":"��72.5X��52X��46.5CM","salesstates":"ZS","tooltips":"ͷ��ţƤ-���ɫ"},
     {"sku":1045280612,"material":"�����ͷ��ţƤ/����/������ά/Ӳľ","color":"Ũ����ɫ","specification":"��72.5X��52X��46.5CM","salesstates":"ZS","tooltips":"�����ͷ��ţƤ-Ũ����ɫ"},
     {"sku":1045280611,"material":"�����ͷ��ţƤ/����/������ά/Ӳľ","color":"����ɫ","specification":"��72.5X��52X��46.5CM","salesstates":"Z1","tooltips":"�����ͷ��ţƤ-����ɫ"}
     ];
     console.log(Check(_d[0],_c));
     console.log(Check(_d[1],_c));
     console.log(Check(_d[2],_c));
     console.log(Check(_d[3],_c));
 */
function getDataByFilter(/*��ʶ������*/data,/*ʶ������*/ condition) {
    //�����жϽ��
    var _result = false;
    //���ڶ����Ƿ���������������ֱ���Թ�
    var _start = true;
    for (var key in condition) {
        _start = false;
        if (condition[key] == "") {
            _result = true;
            continue;
        };
        var _v = data[key] || data[key.toLowerCase()];
        var _type = condition[key].constructor;
        switch (_type) {
            case Array: {
                //������ԣ�ֻҪ����һ���������TRUE
                for (var i = 0, item; item = condition[key][i++];) {
                    if (_v == item) {
                        _result = true;
                        break;
                    }
                }
            } break;
            default: {
                if (_v == condition[key]) {
                    _result = true;
                }
                else {
                    _result = false;
                    break;
                }
            } break;
        }
        if (!_result) break;
    }
    _type = null;
    return _start ? true : _result;
}