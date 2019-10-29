



        var nameField = document.querySelector(".name");
        var cvvField = document.querySelector(".cvv");
        var cardField = document.querySelector(".card_number");
        //var dateField = document.querySelector(".date");
        var submitButton = document.querySelector("form");
        //we need to listen to the form
      

        nameField.addEventListener("blur", onNameBlurred);
        cvvField.addEventListener("blur", onCvvBlurred);
        cardField.addEventListener("blur", onCardBlurred);
        //dateField.addEventListener("blur", onDateBlurred);
        submitButton.addEventListener("submit", onSubmit);



       
        


        function onNameBlurred(event) {
            var isNameValid = /^[a-zA-Z\s\'\-]{2,}$/.test(nameField.value)
            console.log("name is valid ", isNameValid)

            if (isNameValid) {
                nameField.nextElementSibling.innerHTML = '<i class="fa fa-check"></i>'
            } else {
                nameField.nextElementSibling.innerHTML = '<i class="fa fa-exclamation-triangle"></i>' + " not valid"
            }

            return isNameValid; // wen I run this f it is return me to result
        }

        function onCvvBlurred(event) {
            var iscvvValid = /^[0-9]{3,4}$/.test(cvvField.value)

            console.log("cvv blurred")
            if (iscvvValid) {
                cvvField.nextElementSibling.innerHTML = '<i class="fa fa-check"></i>'
            } else {
                cvvField.nextElementSibling.innerHTML = '<i class="fa fa-exclamation-triangle"></i>' + " not valid"
            }
            return iscvvValid
        }




        var amexImage = document.querySelector('.amex-image')
        var masterImage = document.querySelector('.master-image')
        var visaImage = document.querySelector('.visa-image')

        function onCardBlurred(event) {
            var isAmexValid = /^3[47]\d{1,2}(| |-)\d{6}\1\d{6}$/.test(cardField.value)
            var isMasterValid = /^5[1-5][0-9]{14}$/.test(cardField.value)
            var isVisaValid = /^5[1-5][0-9]{14}$/.test(cardField.value)

            if (isAmexValid) {
                amexImage.setAttribute('src', './images/amex.png')
                masterImage.setAttribute('src', '')
                visaImage.setAttribute('src', '')
                cardField.nextElementSibling.innerHTML = '<i class="fa fa-check"></i>'
                return true;
                

            }

            else if (isMasterValid) {
                //showMasterImage()
                masterImage.setAttribute('src', './images/mastercard2.png')
                amexImage.setAttribute('src', '')
                visaImage.setAttribute('src', '')
                cardField.nextElementSibling.innerHTML = '<i class="fa fa-check"></i>'
                return true;
            }

            else if (isVisaValid) {
                visaImage.setAttribute('src', './images/visa.jpg')
                masterImage.setAttribute('src', '')
                amexImage.setAttribute('src', '')
                cardField.nextElementSibling.innerHTML = '<i class="fa fa-check"></i>'
                return true;
            }
            cvvField.nextElementSibling.innerHTML = '<i class="fa fa-exclamation-triangle"></i>' + " not valid"
            return false;
        }


        function onSubmit(event) {
        console.log("submit attempt");

        var name_check_2 = onNameBlurred();
        var cvv_check_2 = onCvvBlurred();
        var card_check_2 = onCardBlurred();

        if ( name_check_2 == false || cvv_check_2 == false || card_check_2 == false) {
          console.log("submit prevented . fix the form");// is this such unchanged forms -fix the form
          event.preventDefault();
        }
      }
