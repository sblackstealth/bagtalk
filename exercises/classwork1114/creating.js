fs.writeFile("lyrics-1.txt","never thought i be talking from this perspective,... but im not really sure what the expected when the higher up have all come together as a collective with conspiricies to end my run on send me a message. Well 40 did you get the message , cuz i just checked my phone and i didnt get it. i mean id say hats off for a solid effort // but we aint flinch for a second we got our shit together")
fs.readFile("lyrics-1.txt",function(err, data){
    if (err) throw err;
    console.log(data);

});
fs.writeFile("lyrics-2.txt", "tuh... and i hear the fight wars, oh n**gas wanna talk high scores? Party just dipped off in white porshe and i just came from dinner where i ate some weel done seared scallops i wouldve died for. But i got bigger fish to fry, im talkin bigger shit than you and i. Kids are loosing lives got me scared of loosing mine and if i hold my tongue about it ill get crucified")
fs.readFile("lyrics-1.txt", "lyrics-2.txt",function(err, data){
    if (err) throw err;
    console.log(data);
});
fs.writeFile("lyrics-3.txt",``)
