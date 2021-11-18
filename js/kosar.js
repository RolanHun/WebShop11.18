class Kosar{
    constructor(){
        this.kosartomb=[];
        this.kosarElem=$("#kosaram");
        $(".kosar").on("click",".torles",(event)=>{
            let dataid= $(event.target).attr("data-id");
                this.kosartomb.splice(dataid,1);
                this.megjelenit();
            });
        }
    belerak(adat){
        window.localStorage;
        this.kosartomb.push(adat);
        this.megjelenit();
    }
    megjelenit(){
        $(".kosaram").append("<table></table>");
        let szoveg;
        let osszAr=0;
        $("#kosaram").empty();
        $("#kosaram").append("<table></table>");
        
        for (var i = 0; i < this.kosartomb.length; i++) {
            szoveg += "<tr id='"+i+"'></tr>";
                szoveg += "<td>";
                osszAr+= this.kosartomb[i].ar;
                szoveg += this.kosartomb[i].nev;
                szoveg += "</td>";
                szoveg += "<td>";
                szoveg += this.kosartomb[i].ar;
                szoveg += "</td>";
                szoveg+="<td>";
                szoveg+="<button data-id='"+i+"' class='torles'>X</button>";
                szoveg+="</td>";
                
        }
        $(".kosar span").html(osszAr+ " Ft");
        $("#kosaram").append(szoveg);
        localStorage.setItem("KosarTartalma", JSON.stringify(this.kosartomb));
    }
}

