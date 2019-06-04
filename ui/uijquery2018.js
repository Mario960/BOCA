$( function() {

    $( "input[name=startdateh]" ).attr("type", "number");
    $( "input[name=startdatemin]" ).attr("type", "number");
    $( "input[name=duration]" ).attr("type", "number");
    $( "input[name=lastmileanswer]" ).attr("type", "number");
    $( "input[name=lastmilescore]" ).attr("type", "number");
    $( "input[name=penalty]" ).attr("type", "number");
    $( "input[name=maxfilesize]" ).attr("type", "number");
    $( "input[name=mainsite]" ).attr("type", "number");
    $( "input[name=localsite]" ).attr("type", "number");

    $( "input[name=startdated]" ).datepicker();
    $( "input[name=startdatem]" ).datepicker();
    $( "input[name=startdatey]" ).datepicker();
    $( "input[name=startdated]" ).datepicker( "option", "dateFormat", "dd" );
    $( "input[name=startdatem]" ).datepicker( "option", "dateFormat", "mm" );
    $( "input[name=startdatey]" ).datepicker( "option", "dateFormat", "yy" );

    //$( "input[name=color1]" ).addClass( "cp-basic" );
    //$('.cp-basic').colorpicker();
    $( "input[name=color]" ).colorpicker();
    $( "input[name=color1]" ).colorpicker({
        buttonColorize: true,
        buttonImage: 'images/ui-colorpicker.png',
        buttonImageOnly: false,

      });

} );
