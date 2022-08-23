$( document ).ready(function() {

    vjsResponsiveTables.init();

});

//===============================================
//
// Responsive Tabellen
//
//===============================================

var vjsResponsiveTables = {

    init:function(){

        if ( $('table').length ) {

            $('table').wrap('<div class="vel--table-wrap"><div class="vel--table-scrollable"></div></div>');

        }

    }

}