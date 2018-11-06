$(function () {

    var signaturePad2 = new SignaturePad(document.getElementById('signature-pad2'));

    $("#save").click(function () {

        var data2 = signaturePad2.toDataURL('image/png');

        alert(data2);
        $('#output2').val(data2);

        $("#form").submit();
    });
});