function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);
        
    // Multiple markers location, latitude, and longitude
    var markers = [
        ['Sanjay Gandhi National Park, Mumbai', 19.2327, 72.8720],
		['Chhatrapati Shivaji Terminus, Mumbai', 18.9398, 72.8355],
		['Essel World', 19.2319, 72.8058],
		['Girgaum Chowpatty', 18.9543, 72.8128],
		['Kanheri Caves', 19.2059, 72.9069],
		['Chhatrapati Shivaji Maharaj Vastu Sangrahalaya', 18.9269, 72.8326],
		['Mount Mary Church',19.0465, 72.8224],
		['Mahalakshmi Temple', 18.9774, 72.8065],
		['Babulnath',18.9593, 72.8087],
		['Bombay High Court',18.9311, 72.8305],
		['Mumba Devi Temple',18.9518, 72.8309],
		['Global Vipassana Pagoda',19.2282, 72.8059],
		['Jehangir Art Gallery',18.9275, 72.8317],
		['Banganga Tank ',18.9454, 72.7937],
		['Rajabai Tower',18.9298, 72.8301],
		['Mahatma Jyotiba Phule Mandai(Crawford Market)',18.9463, 72.8350],
		['Taraporewala Aquarium',18.9491, 72.8200],
		['Dr. Bhau Daji Lad Museum',18.9792, 72.8348],
		['Walkeshwar Temple',18.9456, 72.7933],
		['Horniman Circle',18.9322, 72.8351],
		['Haji Ali Dargah', 18.9827, 72.8090],
		['Elephanta Caves', 18.9633, 72.9315],
        ['Siddhivinayak Temple', 19.0169, 72.8303],
		['Shivaji Park', 19.0271, 72.8381],
		['Jijamata Udyaan', 18.9779, 72.8378],
		['Worli Fort', 19.0237, 72.8169],
		['Powai Lake', 19.1266, 72.9062],
		['Aksa Beach', 19.1760, 72.7950],
		['Nehru Science Centre',18.9906, 72.8186],
        ['Marvé Beach', 19.1979, 72.7967],
        ['Gateway Of India, Mumbai', 18.9220, 72.8347]
    ];
                        
    // Info window content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Sanjay Gandhi National Park</h3>' +
		'<img src="img/Np.jpg" /> <br>' +
		'<h4><a href="https://sgnp.maharashtra.gov.in/">Webiste-https://sgnp.maharashtra.gov.in/</a></h4>'+
        '<p>Sanjay Gandhi National Park, formerly Borivali National Park, is a large protected area in the northern part of Mumbai city in Maharashtra State in India</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Chhatrapati Shivaji Terminus</h3>' +
		'<img src="img/termi.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.cr.indianrailways.gov.in/">Webiste-http://www.cr.indianrailways.gov.in/</a></h4>'+
        '<p>Chhatrapati Shivaji Maharaj Terminus, is a historic railway station and a UNESCO World Heritage Site in Mumbai, Maharashtra, India which serves as the headquarters of the Central Railways.</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Essel World</h3>' +
		'<img src="img/essel.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.esselworld.in/">Webiste-http://www.esselworld.in/</a></h4>'+
        '<p>EsselWorld is an amusement park located in Gorai, Mumbai and established in 1989. The park is owned by Pan India Paryatan Pvt. Ltd. EsselWorld along with its counterparts, Water Kingdom are stretched over 64 acres of land.</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Girgaum Chowpatty</h3>' +
		'<img src="img/girgaum.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.mumbai.org.uk/marine-drive/chowpatty-beach.html">Webiste-http://www.mumbai.org.uk/marine-drive/chowpatty-beach.html</a></h4>'+
        '<p>Girgaum Chowpatty, commonly known as Chaupati, is one of the best known public beaches adjoining Marine Drive in the Girgaon area of Mumbai, India</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Kanheri Caves</h3>' +
		'<img src="img/Kanh.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="https://en.wikipedia.org/wiki/Kanheri_Caves">Webiste-https://en.wikipedia.org/wiki/Kanheri_Caves</a></h4>'+
        '<p>The Kanheri Caves constitute a group of rock-cut monuments that are located to the southeast of Borivali on the western outskirts of Mumbai, the capital city of Indian State of Maharashtra.</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Chhatrapati Shivaji Maharaj Vastu Sangrahalaya</h3>' +
		'<img src="img/prince.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.csmvs.in/">Webiste-http://www.csmvs.in/</a></h4>'+
        '<p>The Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS), formerly Prince of Wales Museum of Western India, is the main museum in Mumbai, Maharashtra.It was founded in the early years of the 20th century by prominent citizens of Mumbai, with the help of the government, to commemorate the visit of Edward VIII, who was Prince of Wales at the time</p>' + '</div>'],
		 ['<div class="info_content">' +
        '<h3>Mount Mary Church</h3>' +
		'<img src="img/mount.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.mountmarybasilicabandra.in/">Webiste-http://www.mountmarybasilicabandra.in/</a></h4>'+
        '<p>The Basilica of Our Lady of the Mount, more commonly known as Mount Mary Church, is a Roman Catholic Basilica located in Bandra, Mumbai</p>' + '</div>'],                 
		['<div class="info_content">' +
        '<h3>Mahalakshmi Temple, Mumbai</h3>' +
		'<img src="img/Mahalaxmi.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://mahalakshmi-temple.com/">Webiste-http://mahalakshmi-temple.com/</a></h4>'+
        '<p>Mahalaxmi Temple is one of the most famous temples of Mumbai situated on Bhulabhai Desai Road in Mahalaxmi area. It is dedicated to Mahalakshmi the central deity of Devi Mahatmyam. The temple was built in 1831 by Dhakji Dadaji, a Hindu merchant</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Babulnath</h3>' +
		'<img src="img/babulnath.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.babulnath.com/">Webiste-http://www.babulnath.com/</a></h4>'+
        '<p>Babulnath is an ancient Shiva temple in Mumbai, India. Situated on a small hillock near Girgaum Chowpatty, it is one of oldest temples in the city, Shiva in the form of the Lord of the Babul tree is the main deity in this temple</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Bombay High Court</h3>' +
		'<img src="img/Bombay.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://bombayhighcourt.nic.in/">Webiste-http://bombayhighcourt.nic.in/</a></h4>'+
        '<p>Bombay High Court is located in Mumbai in the Indian state of Maharashtra. It is one of the oldest High Courts of India with jurisdiction over the states of Maharashtra and Goa, and, the Union Territories of Daman and Diu and Dadra and Nagar Haveli</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Mumba Devi Temple</h3>' +
		'<img src="img/mumba.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.mumbai.org.uk/religious-places/mumba-devi-temple.html">Webiste-http://www.mumbai.org.uk/religious-places/mumba-devi-temple.html</a></h4>'+
        '<p>Mumba Devi Mandir is an old temple in the city of Mumbai, Maharashtra dedicated to the goddess Mumbā, the local incarnation of the Devi.</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Global Vipassana Pagoda</h3>' +
		'<img src="img/global.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.globalpagoda.org/">Webiste-http://www.globalpagoda.org/</a></h4>'+
        '<p>The Global Vipassana Pagoda is a Meditation Hall near Gorai, North-west of Mumbai, India. The Pagoda was inaugurated by Pratibha Patil, then President of India on 8 February 2009.</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Jehangir Art Gallery</h3>' +
		'<img src="img/jehangir.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.jehangirartgallery.com/">Webiste-http://www.jehangirartgallery.com/</a></h4>'+
        '<p>The Jehangir Art Gallery is an art gallery in Mumbai. It was founded by Sir Cowasji Jehangir at the urging of K. K. Hebbar and Homi Bhabha. It was built in 1952</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Banganga Tank</h3>' +
		'<img src="img/holy.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.mumbai.org.uk/tourist-attractions/banganga.html">Webiste-http://www.mumbai.org.uk/tourist-attractions/banganga.html/</a></h4>'+
        '<p>Banganga or Banganga Tank is an ancient water tank which is part of the Walkeshwar Temple Complex in Malabar Hill area of Mumbai in India</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Rajabai Tower</h3>' +
		'<img src="img/rajabai.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.mumbai.org.uk/rajbai-tower.html">Webiste-http://www.mumbai.org.uk/rajbai-tower.html</a></h4>'+
        '<p>The Rajabai Clock Tower is a clock tower in South Mumbai India. It is located in the confines of the Fort campus of the University of Mumbai. The tower stands at a height of 85 m</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Mahatma Jyotiba Phule Mandai(Crawford Market)</h3>' +
		'<img src="img/Market.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.crawford-market.com/">Webiste-http://www.crawford-market.com/</a></h4>'+
        '<p>Mahatma Jyotiba Phule Mandai, Marathi: महात्मा ज्योतिबा फुले मंडई is one of South Mumbais most famous markets. It was earlier named after Arthur Crawford, the first Municipal Commissioner of the city.</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Taraporewala Aquarium</h3>' +
		'<img src="img/aquarium.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="https://en.wikipedia.org/wiki/Taraporewala_Aquarium">Webiste-https://en.wikipedia.org/wiki/Taraporewala_Aquarium</a></h4>'+
        '<p>Taraporewala Aquarium is Indias oldest aquarium and one of the citys main attractions. it hosts marine and freshwater fishes. The aquarium is located on Marine Drive in Mumbai.. It was re-opened after renovation on March 3, 2015.</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Dr. Bhau Daji Lad Museum</h3>' +
		'<img src="img/Baja.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.bdlmuseum.org/">Webiste-http://www.bdlmuseum.org/</a></h4>'+
        '<p>The Dr. Bhau Daji Lad Mumbai City Museum is the oldest museum in Mumbai. Situated in Byculla East, it was originally established in 1855 as a treasure house of the decorative and industrial arts, and was later renamed in honour of Bhau Daji.</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Walkeshwar Temple</h3>' +
		'<img src="img/walkeshwar"  height="300" width="400"/> <br>' +
		'<h4><a href="https://en.wikipedia.org/wiki/Walkeshwar_Temple">Webiste-https://en.wikipedia.org/wiki/Walkeshwar_Temple</a></h4>'+
        '<p>Walkeshwar Temple, also known as the Baan Ganga Temple, is a temple dedicated to the Hindu god, Shiva located in Walkeshwar, near Malabar Hill neighbourhood, in South Mumbai precinct of the city of Mumbai, India</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Horniman Circle Gardens</h3>' +
		'<img src="img/horn.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="https://en.wikipedia.org/wiki/Horniman_Circle_Gardens">Webiste-https://en.wikipedia.org/wiki/Horniman_Circle_Gardens</a></h4>'+
        '<p>The Horniman Circle Gardens is a large park in South Mumbai, India, which encompasses an area of 12,081 square yards. It is situated in the Fort district of Mumbai, and is surrounded by office complexes housing the countrys premier banks.</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Haji Ali Dargah</h3>' +
		'<img src="img/Mumbai-Haji-Ali.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.hajialidargah.in/">Webiste-http://www.hajialidargah.in/</a></h4>'+
        '<p>The Haji Ali Dargah is a mosque and dargah located on an islet off the coast of Worli in the southern part of Mumbai. Near the heart of the city proper, the dargah is one of the most recognisable landmarks of Mumbai.</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Elephanta Caves</h3>' +
	    '<img src="img/ele.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://elephanta.co.in/how-to-reach-elephanta-caves">Webiste-http://elephanta.co.in/</a></h4>'+
        '<p>Elephanta Caves are a network of sculpted caves located on Elephanta Island, or Gharapuri in Mumbai Harbour, 10 kilometres to the east of the city of Mumbai in the Indian state of Maharashtra.</p>' + '</div>'],
		['<div class="info_content">' +
        '<h3>Siddhivinayak Temple</h3>' +
		'<img src="img/ganesh.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="https://www.siddhivinayak.org/">Webiste-https://www.siddhivinayak.org/</a></h4>'+
        '<p>The Shree Siddhivinayak Ganapati Mandir is a Hindu temple dedicated to Lord Shri Ganesh. It is located in Prabhadevi, Mumbai, Maharashtra.</p>' +'</div>'],
        ['<div class="info_content">' +
        '<h3>Shivaji Park</h3>' +
		'<img src="img/shivaji.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="https://www.babychakra.com/mumbai/shivaji-park-H9BCMSpIdN9234">Webiste-https://www.babychakra.com/mumbai/shivaji-park</a></h4>'+
        '<p>Shivaji Park is a public park situated in Dadar, Mumbai. It is the largest park in the island city. Like the Azad Maidan and August Kranti Maidan, it is of historical and cultural value</p>' +'</div>'],
		['<div class="info_content">' +
        '<h3>Jijamata Udyan</h3>' +
		'<img src="img/victoria.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="https://www.babychakra.com/mumbai/ranichi-baugh-jijamata-udyan-H9BCMSpIdN10877">Webiste-https://www.babychakra.com/mumbai/ranichi-baugh-jijamata-udyan</a></h4>'+
        '<p>Jijamata Udyaan formerly called Ranichi Bagh after the original British name Victoria Gardens, and now also known as Veermata Jijabai Bhosale Udyan, is a zoo and garden located at Byculla, in the heart of Mumbai, India</p>' +'</div>'],
		['<div class="info_content">' +
        '<h3>Worli Fort</h3>' +
		'<img src="img/fort.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="https://theculturetrip.com/asia/india/articles/a-brief-history-of-mumbais-worli-fort/">Webiste-https://theculturetrip.com/asia/india/articles/a-brief-history-of-mumbais-worli-fort/</a></h4>'+
        '<p>The Worli Fort is a fort built by the British in Worli, Mumbai, India. The fort, often mistakenly referred to as being built by the Portuguese, was built by the British around 1675</p>' +'</div>'],
	    ['<div class="info_content">' +
        '<h3>Powai Lake </h3>' +
		'<img src="img/Powai-lake.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="https://en.wikipedia.org/wiki/Powai_Lake">Webiste-https://en.wikipedia.org/wiki/Powai_Lake</a></h4>'+
        '<p>Powai Lake is an artificial lake, situated in Mumbai, in the Powai valley, where a Powai village with a cluster of huts existed. The city suburb called Powai shares its name with the lake</p>' +'</div>'],
	    ['<div class="info_content">' +
        '<h3>Aksa Beach</h3>' +
		'<img src="img/aksa.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="https://en.wikipedia.org/wiki/Powai_Lake">Webiste-https://en.wikipedia.org/wiki/Powai_Lake</a></h4>'+
        '<p>Aksa Beach is a popular beach and a vacation spot in Aksa village at Malad, Mumbai, India. It is situated close to Malvani. It is a popular weekend destination</p>' +'</div>'],
		['<div class="info_content">' +
        '<h3>Nehru Science Centre</h3>' +
		'<img src="img/Nehru.JPG"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.nehrusciencecentre.gov.in/">Webiste-http://www.nehrusciencecentre.gov.in</a></h4>'+
        '<p>Nehru Science Center, Mumbai, is Indias largest interactive science center, located in Worli. The center is named after Indias first Prime Minister, Jawaharlal Nehru</p>' +'</div>'],
		['<div class="info_content">' +
        '<h3>Nehru Science Centre</h3>' +
		'<img src="img/Nehru.JPG"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.nehrusciencecentre.gov.in/">Webiste-http://www.nehrusciencecentre.gov.in</a></h4>'+
        '<p>Nehru Science Center, Mumbai, is Indias largest interactive science center, located in Worli. The center is named after Indias first Prime Minister, Jawaharlal Nehru</p>' +'</div>'],
        ['<div class="info_content">' +
        '<h3>Gateway Of India</h3>' +
		'<img src="img/gateway.jpg"  height="300" width="400"/> <br>' +
		'<h4><a href="http://www.mumbai.org.uk/gate-way-of-india.html">Webiste-http://www.mumbai.org.uk/gate-way-of-india.html</a></h4>'+
        '<p>The Gateway of India is a monument built during the 20th century in Mumbai City of Maharashtra state in Western India. It is located on the waterfront in the Apollo Bunder area in South Mumbai and overlooks the Arabian Sea.</p>' +
        '</div>']
    ];
        
    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Place each marker on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(10);
        google.maps.event.removeListener(boundsListener);
    });
    
}
// Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);


