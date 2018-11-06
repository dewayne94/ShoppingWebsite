$(function () {

    var signaturePad5 = new SignaturePad(document.getElementById('signature-pad5'));

    $("#save").click(function () {

        var data5 = signaturePad5.toDataURL('image/png');

        $('#output5').val(data5);

        $("#form").submit();
    });
});