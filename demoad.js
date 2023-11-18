(function() {
    
    var filename = 'https://tympanus.net/codrops/adpacks/demoad.css?' + new Date().getTime();
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    document.getElementsByTagName("head")[0].appendChild(fileref);

    let cdaSpots = ['ad1','ad2','ad3','ad4','ad5'];
    let cdaSpot = cdaSpots[Math.floor(Math.random() * cdaSpots.length)];

    switch (cdaSpot) {
        case "ad1":
            var cdaLink = 'https://www.ionos.com/hosting/deploy-now?itc=NGZ8GOUU-DWGP1F-HIU3B32&ac=OM.US.USt64K430429T7073a&utm_source=BSA23&utm_medium=display&utm_campaign=PTN-US-MIX-OMAX-EXT-AWR---&photo=&utm_content=BSACodropsSiteSponsor';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2023/11/Deploy-Now.png';
            var cdaImgAlt = 'IONOS';
            var cdaText = "Deploy Now. Tailored solutions for static sites & apps.";
            break;
        case "ad2":
            var cdaLink = 'https://www.ionos.com/cloud/cloud-servers?itc=NGZ8GOUU-DWGP1F-HIU3B32&ac=OM.US.USt64K430429T7073a&utm_source=BSA23&utm_medium=display&utm_campaign=PTN-US-MIX-OMAX-EXT-AWR---&photo=&utm_content=BSACodropsSiteSponsor';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2023/11/Cloud-Server.png';
            var cdaImgAlt = 'IONOS';
            var cdaText = "Robust, Reliable, and Flexible Cloud Hosting from IONOS";
            break;
        case "ad3":
            var cdaLink = 'https://www.ionos.com/hosting/deploy-now?itc=NGZ8GOUU-DWGP1F-HIU3B32&ac=OM.US.USt64K430429T7073a&utm_source=BSA23&utm_medium=display&utm_campaign=PTN-US-MIX-OMAX-EXT-AWR---&photo=&utm_content=BSACodropsSiteSponsor';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2023/11/Deploy-Now.png';
            var cdaImgAlt = 'IONOS';
            var cdaText = "Deploy static sites and PHP apps via GitHub with Deploy Now.";
            break;
        case "ad4":
            var cdaLink = 'https://cloud.ionos.com/compute?itc=NGZ8GOUU-DWGP1F-HIU3B32&ac=OM.US.USt64K430429T7073a&utm_source=BSA23&utm_medium=display&utm_campaign=PTN-US-MIX-OMAX-EXT-AWR---&photo=&utm_content=BSACodropsSiteSponsor';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2023/11/Computing.jpg';
            var cdaImgAlt = 'IONOS';
            var cdaText = "Autoscaling that helps you manage real-time traffic spikes.";
            break;
        case "ad5":
            var cdaLink = 'https://www.ionos.com/servers/vps?itc=NGZ8GOUU-DWGP1F-HIU3B32&ac=OM.US.USt64K430429T7073a&utm_source=BSA23&utm_medium=display&utm_campaign=PTN-US-MIX-OMAX-EXT-AWR---&photo=&utm_content=BSACodropsSiteSponsor';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2023/11/VPS.png';
            var cdaImgAlt = 'IONOS';
            var cdaText = "Customizable VPS Servers for all your project needs.";
            break;
        case "ad6":
            var cdaLink = 'https://tympanus.net/codrops/collective/';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2023/11/TheCollective_small.jpg';
            var cdaImgAlt = 'The Codrops Collective';
            var cdaText = "Stay at the forefront of frontend creativity with our bi-weekly newsletter. Subscribe now.";
            break;
        default:
            var cdaLink = 'https://www.elegantthemes.com/affiliates/idevaffiliate.php?id=17972_5_1_16';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/Divi_Carbon.jpg';
            var cdaImgAlt = 'Divi';
            var cdaText = "From our sponsor: Divi is more than just a WordPress theme, it's a completely new website building platform. Try it.";
    }

    var cda = document.createElement('div');
    cda.id = 'cdawrap';
    cda.style.display = 'none';
    cda.innerHTML = '<a href="'+cdaLink+'" class="carbon-img" target="_blank" rel="noopener"><img src="'+cdaImg+'" alt="'+cdaImgAlt+'" border="0" height="100" width="130"></a><a href="'+cdaLink+'" class="carbon-text" target="_blank" rel="noopener">'+cdaText+'</a><div class="cda-footer"><a class="carbon-poweredby" href="https://tympanus.net/codrops/advertise/" target="_blank" rel="noopener">Become a sponsor</a><span class="cda-remove" id="cda-remove">Close</span></div>';
    document.getElementsByTagName('body')[0].appendChild(cda);

    setTimeout(function() {
        cda.style.display = 'block';
    }, 1000);

    document.getElementById('cda-remove').addEventListener('click', function(e) {
        cda.style.display = 'none';
        e.preventDefault();
    });
    
})();