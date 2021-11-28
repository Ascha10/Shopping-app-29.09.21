const Products = [
    {name: "Macbook" , price: 2500 ,desciption: "for study purpose", category: "laptops" , id: "100", pictures: ["https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1605918321412-d6504db4748e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"] },
    {name: "Toshiba", price: 3000 ,desciption: "for desgin purpose", category: "laptops" , id: "101" , pictures: ["https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80","https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"] },
    {name: "Asus", price: 3500 ,desciption: "for gamers purpose", category: "laptops" , id: "102" , pictures: ["https://images.unsplash.com/photo-1536724609414-5f000e9a2745?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGdhbWVycyUyMGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","https://images.unsplash.com/photo-1515846865653-cfda085cca48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"] },
    {name: "HP", price: 4000 ,desciption: "HP laptop", category: "laptops" , id: "103" , pictures: ["https://images.unsplash.com/photo-1618412659753-9fcb22e8f515?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGhwJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","https://images.unsplash.com/photo-1618410316609-107c7f6d3756?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhwJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"] },
    {name: "Apple", price: 4500 ,desciption: "Apple laptop", category: "laptops" , id: "104" , pictures: ["https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"] },
    {name: "Dell", price: 5000 ,desciption: "Dell laptop", category: "laptops" , id: "105" , pictures: ["https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","https://images.unsplash.com/photo-1565339119519-c9eaa1918b9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRlbGwlMjBsYXB0b3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"] },
    {name: "Lenovo", price: 5500 ,desciption: "Lenovo laptop", category: "laptops" , id: "106" , pictures: ["https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVub3ZvJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","https://images.unsplash.com/photo-1609240873613-95b7d2f1522f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVub3ZvJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"] },
    {name: "MSI", price: 6000 ,desciption: "MSI laptop", category: "laptops" , id: "107" , pictures: ["https://images.unsplash.com/photo-1623040522601-18ef4bf3ddc9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bXNpJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","https://images.unsplash.com/photo-1617294864710-bb97f05457f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXNpJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"] },
    {name: "acer", price: 6500 ,desciption: "acer laptop", category: "laptops" , id: "108" , pictures: ["https://images.unsplash.com/photo-1525972183131-2f5c48254ec4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFjZXIlMjBsYXB0b3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","https://images.unsplash.com/photo-1629751372750-3ddb8f8bfd0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGFjZXIlMjBsYXB0b3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"] },
    {name: "Samsung", price: 7000 ,desciption: "Samsung laptop", category: "laptops" , id: "109" , pictures: ["https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc29uZyUyMGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60","https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2Ftc29uZyUyMGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"] },
    {name: "HP", price: 1500 ,desciption: "HP laptop", category: "laptops" , id: "110" , pictures: ["https://cdn.pixabay.com/photo/2019/07/13/10/55/desk-4334575__340.jpg",""] },
    {name: "LG", price: 2000 ,desciption: "LG laptop", category: "laptops" , id: "111" , pictures: ["https://media.istockphoto.com/photos/korean-and-english-keyboard-windows-laptop-keyboard-white-color-by-picture-id1181856943?b=1&k=20&m=1181856943&s=170667a&w=0&h=V3xUmcUqlbZwPAGm-7Cbb-p5DaDFjVHsAQXHcx6BGu0=","https://cdn.pixabay.com/photo/2017/05/25/13/31/notebook-2343356__340.jpg"] },


    {name: "Iphone 6" , price: 4200 ,desciption: "Iphone 6 ", category: "smartphones" , id: "112", pictures: ["https://images.pexels.com/photos/8381365/pexels-photo-8381365.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500","https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"] },
    {name: "Samsung A", price: 1800 ,desciption: "Samsung desgin purpose", category: "smartphones" , id: "113" , pictures: ["https://cdn.pixabay.com/photo/2020/05/16/16/38/smartphone-5178192__480.jpg","https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"] },
    {name: "Nokia", price: 1000 ,desciption: "Nokia gamers purpose", category: "smartphones" , id: "114" , pictures: ["https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500","https://images.pexels.com/photos/4957/person-woman-hand-smartphone.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"] },
    {name: "Redmi", price: 2500 ,desciption: "Redmi sr", category: "smartphones" , id: "115" , pictures: ["https://cdn.pixabay.com/photo/2020/03/16/11/07/xiaomi-4936657__480.jpg","https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914990__340.png"] },
    {name: "Galaxy g", price: 3000 ,desciption: "Lenovo laptop", category: "smartphones" , id: "116" , pictures: ["https://cdn.pixabay.com/photo/2016/10/09/16/33/mobile-1726138__340.jpg","https://cdn.pixabay.com/photo/2020/05/18/22/28/samsung-5188631__480.jpg"] },
    {name: "Huawei ", price: 3500 ,desciption: "huawei  ex", category: "smartphones" , id: "117" , pictures: ["https://cdn.pixabay.com/photo/2017/12/17/07/46/phone-3023808__340.jpg","https://cdn.pixabay.com/photo/2017/12/22/15/55/technology-3033809__340.jpg"] },
    {name: "Blackberry s", price: 4000 ,desciption: "blackberry  ax", category: "smartphones" , id: "118" , pictures: ["https://cdn.pixabay.com/photo/2017/08/28/15/57/blackberry-2690102__340.jpg","https://cdn.pixabay.com/photo/2017/08/28/15/57/blackberry-priv-2690106__340.jpg"] },
    {name: "Sony ericsson ", price: 4200 ,desciption: "sony ericsson s laptop", category: "smartphones" , id: "119" , pictures: ["https://cdn.pixabay.com/photo/2013/07/12/18/58/smartphone-154089__480.png","https://cdn.pixabay.com/photo/2020/02/13/06/31/cellphone-4844657__340.jpg"] }, 
    {name: "LG" , price: 600 ,desciption: "LG purpose", category: "smartphones" , id: "120", pictures: ["https://cdn.pixabay.com/photo/2015/08/07/00/45/lg-878859__340.jpg","https://cdn.pixabay.com/photo/2016/05/31/10/24/lg-1426537__340.jpg"] },
    {name: "Pixel ", price: 800 ,desciption: "pixel  desgin purpose", category: "smartphones" , id: "121" , pictures: ["https://cdn.pixabay.com/photo/2019/12/21/16/31/mobile-4710790__340.jpg","https://cdn.pixabay.com/photo/2018/10/11/05/11/google-pixel-3-3738925__340.png"] },
    {name: "One plus", price: 1000 ,desciption: "One plus purpose", category: "smartphones" , id: "122" , pictures: ["https://cdn.pixabay.com/photo/2018/08/02/00/02/oneplus-3578574__340.jpg","https://cdn.pixabay.com/photo/2018/02/21/18/57/iphone-7-3171205__480.jpg"] },
    {name: "motorola ", price: 1500 ,desciption: "motorola  z", category: "smartphones" , id: "123" , pictures: ["https://cdn.pixabay.com/photo/2017/08/06/18/16/mobile-2594848__340.jpg","https://cdn.pixabay.com/photo/2015/09/21/01/03/smartphone-949123__340.jpg"] },

    {name: "Apple", price: 2000 ,desciption: "Apple laptop", category: "headsets" , id: "124" , pictures: ["https://cdn.pixabay.com/photo/2014/11/02/06/46/headphones-513493__480.jpg","https://cdn.pixabay.com/photo/2019/07/18/06/29/music-4345611__480.jpg"] },
    {name: "iphone 5", price: 2500 ,desciption: "iphone 5 headsets", category: "headsets" , id: "125" , pictures: ["https://cdn.pixabay.com/photo/2020/05/05/16/33/volume-5133851__480.jpg","https://cdn.pixabay.com/photo/2017/07/31/11/47/headphones-2557593__480.jpg"] },
    {name: "Ds", price: 3000 ,desciption: "Ds laptop", category: "headsets" , id: "126" , pictures: ["https://cdn.pixabay.com/photo/2021/08/23/10/21/headphones-6567453__480.jpg","https://cdn.pixabay.com/photo/2017/07/31/11/45/headphones-2557583__480.jpg"] },
    {name: "Pro 152", price: 3500 ,desciption: "PRO 152 laptop", category: "headsets" , id: "127" , pictures: ["https://cdn.pixabay.com/photo/2015/01/08/01/11/headphones-592196__480.jpg","https://cdn.pixabay.com/photo/2019/09/16/14/06/piano-4481072__340.jpg"] },
    {name: "Rsx", price: 4000 ,desciption: "Rsx hes", category: "headsets" , id: "128" , pictures: ["https://cdn.pixabay.com/photo/2015/06/18/19/43/headphones-814055__480.jpg","https://cdn.pixabay.com/photo/2017/08/07/00/31/white-2597981__480.jpg"] },
    {name: "Hz", price: 4200 ,desciption: "Hz laptop", category: "headsets" , id: "129" , pictures: ["https://cdn.pixabay.com/photo/2018/08/25/10/27/k5-3629748__480.jpg","https://cdn.pixabay.com/photo/2018/09/17/22/26/headphone-3684963__340.jpg"] },
    {name: "gamerX" , price: 600 ,desciption: "gamerX study purpose", category: "headsets" , id: "130", pictures: ["https://cdn.pixabay.com/photo/2015/09/09/20/30/headphones-933157__480.jpg","https://cdn.pixabay.com/photo/2019/05/28/17/39/call-centre-4235655__480.jpg"] },
    {name: "Bits", price: 800 ,desciption: "Bits desgin purpose", category: "headsets" , id: "131" , pictures: ["https://cdn.pixabay.com/photo/2017/07/31/23/18/white-2561942__480.jpg","https://cdn.pixabay.com/photo/2019/10/25/06/15/headphone-4576092__480.jpg"] },
    {name: "Dj", price: 1000 ,desciption: "Dj sd purpose", category: "headsets" , id: "132" , pictures: ["https://cdn.pixabay.com/photo/2020/09/17/00/30/headphones-5577707__340.jpg","https://cdn.pixabay.com/photo/2018/09/17/22/26/headphone-3684963__340.jpg"] },
    {name: "Asa", price: 1500 ,desciption: "Asa headsets", category: "headsets" , id: "133" , pictures: ["https://cdn.pixabay.com/photo/2014/11/02/06/46/headphones-513493__480.jpg","https://cdn.pixabay.com/photo/2020/12/14/13/26/headphones-5830855__480.jpg"] },
    {name: "Ople", price: 2000 ,desciption: "Ople headsets", category: "headsets" , id: "134" , pictures: ["https://cdn.pixabay.com/photo/2020/09/23/20/27/headphones-5596987__480.jpg","https://cdn.pixabay.com/photo/2020/09/23/20/28/headphones-5596990__480.jpg"] },
    {name: "Jas", price: 2500 ,desciption: "Jas hesx", category: "headsets" , id: "135" , pictures: ["https://cdn.pixabay.com/photo/2017/08/07/01/13/headphones-2598291__480.jpg","https://cdn.pixabay.com/photo/2019/09/10/01/34/headphones-4465039__480.jpg"] },

    {name: "Charger M", price: 3000 ,desciption: "charger feisd ", category: "Accessories" , id: "136" , pictures: ["https://cdn.pixabay.com/photo/2015/11/18/17/54/battery-1049666_1280.jpg","https://cdn.pixabay.com/photo/2015/11/18/17/55/battery-1049668__340.jpg"] },
    {name: "USB", price: 3500 ,desciption: "USB laptop", category: "Accessories" , id: "137" , pictures: ["https://cdn.pixabay.com/photo/2016/02/14/19/12/usb-key-1199986__480.jpg","https://cdn.pixabay.com/photo/2012/05/07/02/02/usb-47552__340.png"] },
    {name: "Newtwork", price: 4000 ,desciption: "Newtwork cable", category: "Accessories" , id: "138" , pictures: ["https://cdn.pixabay.com/photo/2018/04/04/18/58/network-3290670__340.jpg","https://cdn.pixabay.com/photo/2014/10/19/19/57/network-cables-494647__480.jpg"] },
    {name: "SD Card", price: 4200 ,desciption: "SD Card for laptop", category: "Accessories" , id: "139" , pictures: ["https://cdn.pixabay.com/photo/2016/01/13/10/10/sd-1137506__340.jpg","https://cdn.pixabay.com/photo/2016/06/08/09/53/digital-storage-media-1443484__340.jpg"] },  
    {name: "Charger" , price: 600 ,desciption: "Charger study purpose", category: "Accessories" , id: "140", pictures: ["https://cdn.pixabay.com/photo/2013/07/13/12/21/charge-159707__480.png","https://cdn.pixabay.com/photo/2013/07/13/12/21/charge-159709__480.png"] },
    {name: "Case Lap", price: 800 ,desciption: "for desgin purpose", category: "Accessories" , id: "141" , pictures: ["https://cdn.pixabay.com/photo/2014/04/23/14/54/netbook-bag-330601__480.jpg","https://cdn.pixabay.com/photo/2018/07/06/01/15/business-3519550__480.png"] },
    {name: "Router", price: 1000 ,desciption: "Router gamers purpose", category: "Accessories" , id: "142" , pictures: ["https://cdn.pixabay.com/photo/2017/04/04/17/22/netgear-2202273__340.jpg","https://cdn.pixabay.com/photo/2015/03/12/12/27/router-670079__480.jpg"] },
    {name: "Web camera", price: 1500 ,desciption: "Web camera laptop", category: "Accessories" , id: "143" , pictures: ["https://cdn.pixabay.com/photo/2015/06/03/09/50/web-cam-796227__480.jpg","https://cdn.pixabay.com/photo/2013/07/12/18/20/webcam-153319__480.png"] },
    {name: "Mouse", price: 2000 ,desciption: "Mouse laptop", category: "Accessories" , id: "144" , pictures: ["https://cdn.pixabay.com/photo/2019/12/08/18/23/computer-mouse-4681824__480.jpg","https://cdn.pixabay.com/photo/2017/08/07/01/48/work-2598577__340.jpg"] },
    {name: "SSD", price: 2500 ,desciption: "SSD laptop", category: "Accessories" , id: "145" , pictures: ["https://cdn.pixabay.com/photo/2014/04/09/08/16/data-storage-319844__340.jpg","https://cdn.pixabay.com/photo/2021/04/07/08/40/solid-state-drive-6158470__340.jpg"] },
    {name: "HDMI", price: 3000 ,desciption: "HDMI laptop", category: "Accessories" , id: "146" , pictures: ["https://cdn.pixabay.com/photo/2021/03/03/14/26/hdmi-6065421__480.jpg","https://cdn.pixabay.com/photo/2021/03/03/14/26/hdmi-6065422__480.jpg"] },
    {name: "VGA", price: 3500 ,desciption: "VGA laptop", category: "Accessories" , id: "147" , pictures: ["https://cdn.pixabay.com/photo/2016/06/05/12/09/connectors-1437227__480.jpg","https://cdn.pixabay.com/photo/2015/03/29/19/49/pc-697642__340.jpg"] },
    // {name: "acer", price: "4000" ,desciption: "acer laptop", category: "Accessories" , id: "148" , pictures: ["",""] },
    // {name: "Samsung", price: "4200" ,desciption: "Samsung laptop", category: "Accessories" , id: "149" , pictures: ["",""] }
]

/**********************Responsive Menu***************************************/

const container = document.getElementById("container");
const menuBtn = document.querySelector('.menuBtn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    container.style.display = "block";
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    container.style.display = "none";
    menuOpen = false;
  }
});






