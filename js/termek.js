class Termek {
    constructor(node, adat) {
        this.node = node;
        this.adat = adat;
        this.termekNev = this.node.children(".termeknev");
        this.termekLeiras = this.node.children(".leiras");
        this.termekAr = this.node.children(".ar");

    }
    setAdat(adat) {
        this.adat = adat;
        this.termekNev.text(adat.nev);
        this.termekLeiras.text(adat.leiras);
        this.termekAr.text(adat.ar + " Ft");
        this.termekKep.attr("src", adat.kep);
    }
    kattintasTrigger() {

        let event = new CustomEvent("kosarbaRak", 
        {detail: this.adat});
        window.dispatchEvent(event);
    }
}

class TermekAdmin extends Termek {
    constructor(node, adat) {
        super(node, adat)
        this.termekKep = this.node.children(".kep ").children("img");
        this.termekTorles = this.node.children(".torles").children("button");
        this.termekModosit = this.node.children(".modosit").children("button");
        this.setAdat(this.adat);
        this.termekTorles.on("click ", () => {
            this.kattintasTrigger("torles");
        });
        this.termekModosit.on("click ", () => {
            this.kattintasTrigger("modositas");
        });
    }
    kattintasTrigger(gombnev) {
        let event = new CustomEvent(gombnev, 
        {detail: this.adat});
        window.dispatchEvent(event);
    }
}
class TermekAruhaz extends Termek {
    constructor(node, adat) {
        super(node, adat)
        this.termekKep = this.node.children(".kep ");

        this.setAdat(this.adat);
        this.termekKosar = this.node.children(".kosarba ");

        this.termekKosar.on("click ", () => {
            this.kattintasTrigger("termekKosarba");
        });
    }
}