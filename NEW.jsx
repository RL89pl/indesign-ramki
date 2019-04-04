#include "json2.js";

// dialog do wpisania indeksu produktu
var myDialog = app.dialogs.add({name : 'Podaj indeks produktu.', canCancel : true});
with(myDialog) {
    with(dialogColumns.add()) {
        var myTextEditField = textEditboxes.add({editContents : 'Wpisz pełny kod produktu ... ', minWidth : 200});
        }
    }


var prodIndex = '';
var myResult = myDialog.show();

    prodIndex = myTextEditField.editContents;
    myDialog.destroy();
    


     // baza z danymi do produktów
    var baza = File("V:\\indesign_baza\\jsonFiles\\" + prodIndex + ".json");
    baza.open("r");
    baza = JSON.parse(baza.read());

    var kolor;
    kolor = baza[prodIndex]["ilosc_kolorow"];
    lista = baza[prodIndex]["lista_kolorow"];

        licznik = 0;
        var a = parseInt(kolor);
        var x1 = 20;
        var x2 = 25;

        while (licznik < a) {
            var myDocument = app.documents.item(0);
            var myPage = myDocument.pages.item(0);
            var myTextFrame = myPage.textFrames.add();
            myTextFrame.geometricBounds = [20, x1, 25, x2];
            myTextFrame.contents = lista[licznik]
            licznik += 1
            x1 += 7
            x2 +=7

            
            }
        