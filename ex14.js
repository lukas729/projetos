let playlist = ["Dua lipa - Dance the Night", "The weeknd - Blinding Lights" ,]

playlist.push("boys don´t cry");


playlist.push("p.i.m.p");


let removido = playlist.pop();

playlist.forEach((playlist,index) => {
 
    console.log(`${index + 1}. ${playlist} `);
 
});