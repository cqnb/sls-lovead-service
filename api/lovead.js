const sls_lovead_html = "<div id='sls_lovead_div'><img id='sls_lovead_text' referrerPolicy='no-referrer' /><img id='sls_lovead_img' referrerPolicy='no-referrer' /></div><div style='text-align: center;'>哔哩哔哩公益为哔哩哔哩所有，与本站/雾雪梦创/白喵影像无关，出现任何问题与我们无关。<br />本公益广告为雾雪梦创组织策划白喵影像设计的公益广告活动内容，本公益广告活动与哔哩哔哩公益无关。</div>"
document.getElementById('sls_lovead').insertAdjacentHTML('afterbegin', sls_lovead_html)
fetch('https://raw.githubusercontent.com/cqnb/sls-lovead-service/main/lovead.json')
    .then(response => response.json())
    .then(data => {
        const sls_lovead_div = document.getElementById('sls_lovead_div')
        const sls_lovead_img = document.getElementById('sls_lovead_img')
        const sls_lovead_text = document.getElementById('sls_lovead_text')
        const sls_lovead_num = Math.floor(Math.random() * (data.info.lovead_num - 0));
        sls_lovead_div.setAttribute("onclick", "window.open('${data.lovead[sls_lovead_num].url}');")
        sls_lovead_text.src = data.lovead[sls_lovead_num].text
        sls_lovead_img.src = data.lovead[sls_lovead_num].img
    })
    .catch(console.error)
