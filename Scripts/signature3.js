$(function () {

    var signaturePad3 = new SignaturePad(document.getElementById('signature-pad3'));

    $("#save").click(function () {

        var data3 = signaturePad3.toDataURL('image/png');

        $('#output3').val(data3);

        $("#form").submit();
    });
});