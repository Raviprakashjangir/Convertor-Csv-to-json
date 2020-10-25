const fileSelector = document.getElementById('file-selector');
const show = document.getElementById('show');

fileSelector.addEventListener('change', (event) => {
    const files = event.target.files[0];
    var reader = new FileReader();

    reader.readAsText(files);

    reader.onload = function(fileContent) {
        var content = reader.result;
        var alok = {};

        content = content.split("\n");
        
        for(let i = 0; i < content.length; i++){
            var p = document.createElement("p");
            p.textContent = content[i];
            show.appendChild(p)
        }
        
        var contentTOString = JSON.stringify(Object.assign({}, content));
        var JSONobj =   JSON.parse(contentTOString);

        const temp = {};
        content[0].split(",").forEach(element => temp[element] = "");
        var keys = Object.keys(temp);

        for(let i = 1; i < content.length; i++){
            let cell = content[i].split("\n");
            for(let j = 0; j < cell.length; j++){
                temp[keys[j]] = cell[j];
                alok[i - 1] = {}
            }
            Object.assign(alok[i-1], temp);
        }       
        var contentTOString = JSON.stringify(alok);
        var JSONobj = JSON.parse(contentTOString);

        console.log(JSONobj);
        myJSON = JSON.stringify(JSONobj);
        document.getElementById("show2").innerHTML = myJSON; 
    };
    reader.error = function() {
        console.log(reader.error);
    }
});