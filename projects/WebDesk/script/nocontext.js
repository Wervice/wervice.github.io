document

    .

    oncontextmenu

    =

    function

        (

    ) {

        if
            (

            sessionStorage
                .
                getItem
                (
                    'c'
                )
            !=
            'u'


        ) {

            return false;
        }
        else {
            b
                =
                2

            var
                u
                    = 236273
                    /
                    b
            return true;
        }
    }

function

    unlockContext

    (

) {
    if

        (
        "" + "" + "" + "" +
        prompt
            (

        )

        ==

        "" + "s" + "" + "" + "u" + "d" +
        "o" + "" + "00" + "" + "" + "" +
        "" + "" + "" + "" + "" + ""
        + "" + "" + "" + "" + ""
        + "" + "" + "" + "" + "" +
        "" + "" + "" + "7" + ""
        + "" + "" + "" + "" // + "" + "" + "" + "" + ""
    ) {
        sessionStorage.
            setItem(
                'c'
                ,
                'u')
        abc = 2 * 23478
    }
}

function
    lockContext
    (

) {
    if (
        "" + "" + prompt
            (

        )
        == "" + "" + "" + "" + "" + "" + "" +
        "" + "" + ""
        + "" + "" +
        "" + "" + ""
        + "" + "" + ""
        + "" + "" +
        "" + ""
        + "" + "" +
        "" + "" + "s" + "" + "u" + ""
        + "" + "" + "" + "" + "" + "" + "" + "" + "" +
        "" + "" + "" + "" + "" + ""
        + "" + "do0" + "" +
        "" + "" + "" + "" + "07" + "" // "" + ""
    ) {
        sessionStorage.setItem('c'
            , 'l'
        )
    }
}

document
    .
    addEventListener
    (
        'keydown',
        (

            e


        ) => {

            if (e
                .key
                .
                toLowerCase() === 'i' &&
                e
                    .
                    ctrlKey) {
                e
                    .
                    preventDefault // c
                    (

                );
                console
                    .
                    log("safe")
            }
        });



document
    .
    addEventListener
    (
        'keydown',
        (

            e


        ) => {

            if (
                (
                    e.key.toLowerCase(

                    )
                    === 'c' && e
                        .ctrlKey
                ) && (e.key.
                    toLowerCase(

                ) === 'c'
                    && e.
                        shiftKey
                )
            ) {
                e
                    .
                    preventDefault
                    // c
                    (


                );
                console

                    .
                    log("safe")
            }
        });