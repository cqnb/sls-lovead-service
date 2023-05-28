fetch('https://raw.githubusercontent.com/cqnb/sls-lovead-service/main/lovead.json')
    .then(response => response.json())
    .then(data => {
        const sls_lovead_div = document.getElementById('sls_lovead_div')
        const sls_lovead_img = document.getElementById('sls_lovead_img')
        const sls_lovead_text = document.getElementById('sls_lovead_text')
        const sls_lovead_num = Math.floor(Math.random() * (data.info.lovead_num - 0));
        sls_lovead_div.setAttribute("onclick", `window.open('${data.lovead[sls_lovead_num].url}');`)
        sls_lovead_text.src = data.lovead[sls_lovead_num].text
        sls_lovead_img.src = data.lovead[sls_lovead_num].img
    })
    .catch(console.error)
