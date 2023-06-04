const sls_lovead_html = "<div id='sls_lovead_div'><img id='sls_lovead_text' referrerPolicy='no-referrer' /><img id='sls_lovead_img' referrerPolicy='no-referrer' /></div><div style='text-align: center;'>公益服务为公益平台提供，与本站/雾雪梦创/白喵影像无关，出现任何问题与我们无关。<br />本公益广告活动为雾雪梦创组织策划白喵影像设计，本公益广告活动与公益平台无关。</div>"
const sls_lovead_id = document.querySelectorAll('#sls_lovead')
for (var i = 0; i < sls_lovead_id.length; i++) {
    console.log(sls_lovead_id[i]);
    sls_lovead_id[i].insertAdjacentHTML('afterbegin', sls_lovead_html)
}
fetch('https://raw.githubusercontent.com/cqnb/sls-lovead-service/main/lovead.json')
    .then(response => response.json())
    .then(data => {
        const sls_lovead_div = document.getElementById('sls_lovead_div')
        const sls_lovead_img = document.getElementById('sls_lovead_img')
        const sls_lovead_text = document.getElementById('sls_lovead_text')
        const sls_lovead_num = Math.floor(Math.random() * (data.lovead.length - 0));
        sls_lovead_div.setAttribute("onclick", `window.open('${data.lovead[sls_lovead_num].url}');`)
        sls_lovead_text.src = data.lovead[sls_lovead_num].text
        sls_lovead_img.src = data.lovead[sls_lovead_num].img
    })
    .catch(console.error)
