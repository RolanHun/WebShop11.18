$(function() {
    const kosaramban = new Kosar();
    myAjax("js/termekek.json", termekLista);

    function termekLista(termekek) {
        const szuloElem = $(".termekek");
        const sablonElem = $(".termek");

        termekek.forEach(function(elem) {
            let node = sablonElem.clone().appendTo(szuloElem);
            const obj = new TermekAruhaz(node, elem);
        });
        sablonElem.remove();
        $(window).on("kosarbaRak", (event) => {
            bele= kosaramban.belerak(event.detail);
            aktIndex=event.detail.index;
        });
    }
});