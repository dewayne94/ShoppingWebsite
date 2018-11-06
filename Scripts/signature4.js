$(function () {

    var signaturePad4 = new SignaturePad(document.getElementById('signature-pad4'));

    $("#save").click(function () {

        var data4 = signaturePad4.toDataURL('image/png');

        $('#output4').val(data4);

        $("#form").submit();
    });
});