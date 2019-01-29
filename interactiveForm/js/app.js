$('#name').focus(); // on load focus on the first input box
let colors = document.getElementById('color')
let price = 0;

const $jobRole = $('#title');
// the textbox for other job types and hiding it
$('#newid').hide()
$('#newlabel').hide()

$jobRole.click(function() { // this makes it so that when other job is chosen the box apears.
    if ($jobRole.val() === 'other') {
        $('#newid').show()
        $('#newlabel').show()
    } else {
        $('#newid').hide()
        $('#newlabel').hide()
    }
})

$('#color').hide() // this makes it so that the whole color options are not visisble
$('#color').prev().hide()


$('#design').click(function() { // this whole function tests which option is selected from design and then goes it determains what options from color are displayed

    $('#color').show()
    $('#color').prev().show()

    if (/^[j][s].\w+$/.test($('#design').val())) {
        for (let i = 0; i < 10; i++) {
            $('#color option:eq(' + i + ')').hide();
        }
        for (let i = 0; i < 10; i++) {
            if (/\w+ ?\w+ ?\w+\D(\(js puns shirt only\)$)/gim.test($('#color option:eq(' + i + ')').text())) {
                $('#color option:eq(' + i + ')').show()
                $('#color option:eq(0)').attr("selected", true)
                $('#color option:eq(3)').attr("selected", false)
            }
        }
    } else if (/^heart.\w+$/gim.test($('#design').val())) {
        for (let i = 0; i < 10; i++) {
            $('#color option:eq(' + i + ')').hide();
        }
        for (let i = 0; i < 10; i++) {
            if (/\w+ ?\w+ ?\w+\D(\(I ♥ JS shirt only\)$)/gim.test($('#color option:eq(' + i + ')').text())) {
                $('#color option:eq(' + i + ')').show()
            }
            $('#color option:eq(0)').attr("selected", false)
            $('#color option:eq(3)').attr("selected", true)
        }
    } else {
        $('#color').hide()
        $('#color').prev().hide()
        $('#color option:eq(0)').attr("selected", false)
        $('#color option:eq(3)').attr("selected", false)
    }
})

$('.activities').append('<legend> Your total price is $' + price + '!</legend>')  //appends price

const tues9am = $('label:contains(Tuesday 9am)') // this function makes sure that dates and times align so that two selections with same date and time cannot be selected

tues9am.children().click(function() {
    for (let i = 0; i < tues9am.length; i++) {
        if (tues9am[i].children[0].checked) {
            for (i = 0; i < tues9am.length; i++) {
                tues9am[i].children[0].disabled = true
                $(this).prop('disabled', false)
            }
        } else if (!tues9am[i].children[0].checked) {
            for (let i = 0; i < tues9am.length; i++)
                tues9am[i].children[0].disabled = false
        }
    }
})

const tues1pm = $('label:contains(Tuesday 1pm)') // same as the other one

tues1pm.children().click(function() {
    for (let i = 0; i < tues1pm.length; i++) {
        if (tues1pm[i].children[0].checked) {
            for (i = 0; i < tues1pm.length; i++) {
                tues1pm[i].children[0].disabled = true
                $(this).prop('disabled', false)
            }
        } else if (!tues1pm[i].children[0].checked) {
            for (let i = 0; i < tues1pm.length; i++)
                tues1pm[i].children[0].disabled = false
        }
    }
})

function priceAdd(value, target) { // this function calculates the total value taking in account which button is pressed
    if ($(target).is(':checked')) {
        price = price + value;
        $('.activities legend:eq(1)').text("Your total price is $" + price + "!")
    }

    if (!$(target).is(':checked')) {
        price = price - value;
        $('.activities legend:eq(1)').text("Your total price is $" + price + "!")
    }
}

$('.activities input:eq(0)').click(function() { //as it is the only one with $200 cost i decided to make it simple and put it alone here
    priceAdd(200, this)
})
for (let i = 1; i < $('.activities input').length; i++) { // i start with i = 1 because i want to ignore first one as i have run it independantly on its own ^
    $('.activities input:eq(' + i + ')').click(function() {
        priceAdd(100, this)
    })
}


$('#payment option:eq(1)').attr('selected', true)  // this whole block just makes sure that only one payment method is visisble and that credit card is selected automatically
$('#credit-card').show()
$('#credit-card').next().hide()
$('#credit-card').next().next().hide()

$('#payment').click(function() {
    if (/paypal/gim.test($('#payment').val())) {
        $('#credit-card').hide()
        $('#credit-card').next().show()
        $('#credit-card').next().next().hide()
    } else if (/bitcoin/gim.test($('#payment').val())) {
        $('#credit-card').hide()
        $('#credit-card').next().hide()
        $('#credit-card').next().next().show()
    } else if (/Credit Card/gim.test($('#payment').val())) {
        $('#credit-card').show()
        $('#credit-card').next().hide()
        $('#credit-card').next().next().hide()
    }
})

function spanAppend(element, id) { // this is for the error if information is missing or entered inccorectly
    $(element).prev().append('<div class="tooltip" style="color:red;" id=' + id + '> Make sure you put correct Information </div>')
}
spanAppend('#name', 'nameSpan')


$('#name').on('keyup', function() { // this function is going to be repeated ( only because i was only required to do one, but i decided to do all of them) it is to make sure that tooltip occurs when needed
    if (!/^[a-zA-Z]+/.test($('#name').val()) || $('#name').val() === "") {
        $('#nameSpan').show()
    } else {
        $('#nameSpan').hide()
    }
})
$('#nameSpan').hide()

spanAppend('#mail', 'mailSpan')

$('#mail').on('keyup', function() {
    if (!/[\w-]+@([\w-]+\.)+[\w-]+/.test($('#mail').val())) {
        $('#mailSpan').show()
    } else {
        $('#mailSpan').hide()
    }
})
$('#mailSpan').hide()

spanAppend('#cc-num', 'ccSpan')

$('#cc-num').parent().on('keyup', function() {
    if (!/^\d{13,16}$/.test($('#cc-num').val())) {
        $('#ccSpan').show()
    } else {
        $('#ccSpan').hide()
    }
})
$('#ccSpan').hide()

spanAppend('#zip', 'zipSpan')

$('#zip').parent().on('keyup', function() {
    if (!/^\d{5}$/.test($('#zip').val())) {
        $('#zipSpan').show()
    } else {
        $('#zipSpan').hide()
    }
})
$('#zipSpan').hide()

spanAppend('#cvv', 'cvvSpan')

$('#cvv').parent().on('keyup', function() {
    if (!/^\d{3}$/.test($('#cvv').val())) {
        $('#cvvSpan').show()
    } else {
        $('#cvvSpan').hide()
    }
})
$('#cvvSpan').hide()

$('button').click(function(e) { // and last function to make sure that everything is entered correctly, if not register button will do nothing except for pop up an alert!

    if (/^[a-zA-Z]+/.test($('#name').val()) && $('#name').val !== "" &&
        /[\w-]+@([\w-]+\.)+[\w-]+/.test($('#mail').val()) &&
        /^\d{13,16}$/.test($('#cc-num').val()) &&
        /^\d{5}$/.test($('#zip').val()) &&
        /^\d{3}$/.test($('#cvv').val())) {

        console.log('hi')
    } else {
        e.preventDefault()
        alert('Check your infomation again!')
    }
})
