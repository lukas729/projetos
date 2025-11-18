let playlist = ["Dua lipa - Dance the Night", "The weeknd - Blinding Lights" , "boys don´t cry", "P.I.M.P"]

let removido = playlist.pop();

playlist.forEach((playlist,index) => {
 
    console.log(`${index + 1}. ${playlist} `);
 
});