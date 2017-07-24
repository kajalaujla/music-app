    //common variable description
 var playingnumber =0;
var shuffle=0;
var equal=0;



$('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 3) {
            var message = "Welcome, " + name + ".";
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
            $('#name]-input').val('');
            $('#name-input').attr("placeholder","Name is too short! try again");
        }
    });
 $('body').on('keypress', function() {
    var name = $('#name-input').val();
    if(event.keyCode==13)
    {
      if(name.length > 3) {
      var message = "Welcome, " +  name + ".";
      $('.main .user-name').text(message);
      $('.welcome-screen').addClass('hidden');
      $('.main').removeClass('hidden');
      }
      else {
      $('#name-input').addClass('error');
      $('#name-input').val('');
      $('#name-input').attr("placeholder", "Name too short! Try Again.");
      }
    }


  });

 var happy = [{
        'name': 'Suit Suit',
        'artist': 'Guru Randhawa, Arjun',
        'album': 'Suit',
        'duration': '03:21',
       'fileName': 'happy1.mp3',
        'image': 'happy1.jpg' ,   
       },
      {
        'name': 'Gallan Goodiyan',
        'artist': 'Priyanka Chopra',
        'album': 'Dil Dhadakne Do',
        'duration': '04:54',
        'fileName': 'happy2.mp3',
          'image': 'happy2.jpg',
       },
    {
        'name': 'Saturday Saturday',
        'artist': 'Shreya Ghoshal,Badshah',
        'album': 'Humpty Sharma Ki Dulhania',
        'duration': '03:31',
        'fileName': 'happy3.mp3',
        'image': 'happy3.jpg',
    },
    {
        'name': 'Itti si hassi',
        'artist': 'Shreya Ghoshal',
        'album': 'Barfi',
        'duration': '03:56',
        'fileName': 'happy4.mp3',
     'image': 'happy4.jpg',   
    }]
     
  var energetic = [{
        'name': 'Gal Mitthi mitthi',
        'artist': 'Tochi Raina',
        'album': 'Aisha',
        'duration': '04:17',
       'fileName': 'energetic1.mp3',
        'image': 'energetic1.jpg',    
       },
      {
        'name': 'London Thumakda',
        'artist': 'Neha Kakkar, Sonu Kakkar,Labh Junjua',
        'album': 'Queen',
        'duration': '03:51',
        'fileName': 'energetic2.mp3',
          'image': 'energetic2.jpg',
       },
    {
        'name': 'Angrejin beat',
        'artist': 'yo yo honey singh',
        'album': 'Cocktail',
        'duration': '04:18',
        'fileName': 'energetic3.mp3',
        'image': 'energetic3.jpg',
    },
    {
        'name': 'Sadi Gali',
        'artist': 'Lehmber Hussainpuri',
        'album': 'Tanu weds Manu',
        'duration': '04:25',
        'fileName': 'energetic4.mp3',
     'image': 'energetic4.jpg',   
    }]
  
   var mellow = [{
        'name': 'Galliyan',
        'artist': 'Ankit Tiwari',
        'album': 'Ek villain',
        'duration': '05:41',
       'fileName': 'mellow1.mp3',
        'image': 'mellow1.jpg',    
       },
      {
        'name': 'Thham Sa gya',
        'artist': 'Angraag Papon Mahanta',
        'album': 'Mumbai Delhi Mumbai',
        'duration': '04:26',
        'fileName': 'mellow2.mp3',
          'image': 'mellow2.jpg',
       },
    {
        'name': 'Preet',
        'artist': 'Jasleen Royal',
        'album': 'Khoobsurat',
        'duration': '05:03',
        'fileName': 'mellow3.mp3',
        'image': 'mellow3.jpg',
    },
    {
        'name': 'Channa Mereya',
        'artist': 'Arjit Singh',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '04:49',
        'fileName': 'mellow4.mp3',
     'image': 'mellow4.jpg',   
    }]
   
    
     var acoustic = [{
        'name': 'Bheegey honth',
        'artist': 'Kunal Ganjawala',
        'album': 'Murder',
        'duration': '4:36',
       'fileName': 'acoustic1.mp3',
        'image': 'acoustic1.jpg',    
       },
      {
        'name': 'Chura lia',
        'artist': 'Various',
        'album': 'Random Chill Songs',
        'duration': '7:18',
        'fileName': 'acoustic2.mp3',
          'image': 'acoustic2.jpg',
       },
    {
        'name': 'Tera Chehra',
        'artist': 'Adnan sami',
        'album': 'Tera chehra',
        'duration': '6:37',
        'fileName': 'acoustic3.mp3',
        'image': 'acoustic3.jpg',
    },
    {
        'name': 'Jind Mahi',
        'artist': 'Various',
        'album': 'Random chill Songs',
        'duration': '6:11',
        'fileName': 'acoustic4.mp3',
     'image': 'acoustic4.jpg',   
    }]      

       function fancyTimeFormat(time)
               {   
                 // Hours, minutes and seconds
                  var hrs = ~~(time / 3600);
                  var mins = ~~((time % 3600) / 60);
                   var secs = time % 60;

                 // Output like "1:01" or "4:03:59" or "123:03:59"
                    var ret = "";

                     if (hrs > 0) {
                      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
                      }

                      ret += "" + mins + ":" + (secs < 10 ? "0" : "");
                      ret += "" + secs;
                      return ret;
                 
               }
        
             function toggleSong(){
            var song = document.querySelector('audio');
             if (song.paused == true) {
            console.log('Playing');
            $('.play-icon').removeClass('fa-play').addClass('fa-pause');
            song.play();
                 }
                 else {
                     console.log('Pausing');
                     $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                     song.pause();
                    }
            
               }
           function updateCurrentTime() {
               var song = document.querySelector('audio');
               var currentTime = Math.floor(song.currentTime);
               currentTime = fancyTimeFormat(currentTime);
               var duration = Math.floor(song.duration);
               duration = fancyTimeFormat(duration)
               $('.time-elapsed').text(currentTime);
               $('.song-duration').text(duration);
           }
   
        $('.play-icon').on('click', function() {
           toggleSong();
          });
   
        $('body').on('keypress', function(event) {
                 var target = event.target;
                if (event.keyCode == 32 && target.tagName !='INPUT')
                {
                   toggleSong();
                }
            });
         
        function updateTimer(){
            var song = document.querySelector('audio');
            var ct = song.currentTime;
            var td = song.duration;
            var percentage = (ct/td)*100;
            $(".progress-filled").css('width',percentage+"%");
        }
            
        $(".player-progress").click(function(event){
        var $this = $(this);
        //to get part of width of progress bar clicked
        var widthclicked = event.pageX - $this.offset().left;
        var totalWidth = $this.width(); //can also be cached somewhere in the  app if it doesn't change
        //do calculation of the seconds clicked
        var calc = (widthclicked / totalWidth) * 100; //get the percent of bar clicked and multiply in the duration
        var song = document.querySelector('audio');
        song.currentTime = (song.duration*calc)/100;
        
        updateTimer();
        
        });
  
        function changeCurrentSongDetails(songObj) //function create kiya ek argument pass kiya h song object
        {
              $('.current-song-image').attr('src','img/' + songObj.image);
              $('.current-song-name').text(songObj.name);
              $('.current-song-album').text(songObj.album);
          }  
  
            
            
       function addSongNameClickEventHappy(songObj,position)    //humne ek  machine bnayi h or usmai humne 2 button diye h song name or position k liye.
            {   
                var songName = songObj.fileName;
                var id = '#happy' + position;  // humne ek variable bnaya usmai hmne id di hui h #song +position mtlb  agr hmari position 1 hogi toh song1 chlega, 2 hui toh song2 chlega//
                $(id).click(function()  //agar #song1 h toh 1 wale div pe event lage ga
                {
                    Playingnumber= (position -1)
                    var audio = document.querySelector('audio');
                    var currentSong = audio.src;
                    if(currentSong.search(songName) != -1)
                        {
                            toggleSong();
                        }
                    else{
                        audio.src = songName;
                        toggleSong();
                        changeCurrentSongDetails(songObj);
                    }
                });
            }

              function addSongNameClickEventEnergetic(songObj,position)    //humne ek  machine bnayi h or usmai humne 2 button diye h song name or position k liye.
               {   
                var songName = songObj.fileName;
                var id = '#energetic' + position;  // humne ek variable bnaya usmai hmne id di hui h #song +position mtlb  agr hmari position 1 hogi toh song1 chlega, 2 hui toh song2 chlega//
                $(id).click(function()  //agar #song1 h toh 1 wale div pe event lage ga
                  {
                    Playingnumber= (position -1)
                    var audio = document.querySelector('audio');
                    var currentSong = audio.src;
                    if(currentSong.search(songName) != -1)
                        {
                            toggleSong();
                        }
                    else{
                        audio.src = songName;
                        toggleSong();
                        changeCurrentSongDetails(songObj);
                    }
                });
            }
     

           
              function addSongNameClickEventMellow(songObj,position)    //humne ek  machine bnayi h or usmai humne 2 button diye h song name or position k liye.
            {   
                var songName = songObj.fileName;
                var id = '#mellow' + position;  // humne ek variable bnaya usmai hmne id di hui h #song +position mtlb  agr hmari position 1 hogi toh song1 chlega, 2 hui toh song2 chlega//
                $(id).click(function()  //agar #song1 h toh 1 wale div pe event lage ga
                {
                    Playingnumber= (position -1)
                    var audio = document.querySelector('audio');
                    var currentSong = audio.src;
                    if(currentSong.search(songName) != -1)
                        {
                            toggleSong();
                        }
                    else{
                        audio.src = songName;
                        toggleSong();
                        changeCurrentSongDetails(songObj);
                    }
                });
            }

            
            function addSongNameClickEventAcoustic(songObj,position)    //humne ek  machine bnayi h or usmai humne 2 button diye h song name or position k liye.
            {   
                var songName = songObj.fileName;
                var id = '#acoustic' + position;  // humne ek variable bnaya usmai hmne id di hui h #song +position mtlb  agr hmari position 1 hogi toh song1 chlega, 2 hui toh song2 chlega//
                $(id).click(function()  //agar #song1 h toh 1 wale div pe event lage ga
                {
                    Playingnumber= (position -1)
                    var audio = document.querySelector('audio');
                    var currentSong = audio.src;
                    if(currentSong.search(songName) != -1)
                        {
                            toggleSong();
                        }
                    else{
                        audio.src = songName;
                        toggleSong();
                        changeCurrentSongDetails(songObj);
                    }
                });
            }


           
function changeSong() //we have made a machine jispe 2 buttons diye hai songName and position ke liye
            {
             var music =  songs[Playingnumber].fileName;
              var song = document.querySelector("audio");
              song.src = music;
              toggleSong();
               changeCurrentSongDetails(songs[Playingnumber])
            }

    
    $('#back-happy').on('click',function()
    {
        $('.main').removeClass('hidden');
        $('.happy').addClass('hidden');
    })
    
   $('#back-energetic').on('click',function()
    {
        $('.main').removeClass('hidden');
        $('.energetic').addClass('hidden');
    })
    
    $('#back-mellow').on('click',function()
    {
        $('.main').removeClass('hidden');
        $('.mellow').addClass('hidden');
    })
    
    
    
    $('#back-acoustic').on('click',function()
    {
        $('.main').removeClass('hidden');
        $('.acoustic').addClass('hidden');
    })
    
   
    $('#happy').on('click',function()
   {
        $('.happy').removeClass('hidden');
        $('.main').addClass('hidden');
        changeCurrentSongDetails(happy[0]);
        updateCurrentTime();
           setInterval(function() 
         {
            updateCurrentTime();
           }, 1000);
         setInterval(function() {
           updateTimer();
           }, 1000);
           for (var i = 0; i < happy.length; i++) //Var i zero se 3 tak chalana hai

           {
             var obj = happy[i]; //Diary ke andar se page utha ke humne obj variable mein store kar diya
              var name = '#happy' + (i + 1);
              var song = $(name);
              song.find('.song-name').text(obj.name); //("song1 .songname")
              song.find('.song-artist').text(obj.artist);
             song.find('.song-album').text(obj.album);
              song.find('.song-length').text(obj.duration);
              addSongNameClickEventHappy(obj, i + 1);
       };

    $("#happysongs").DataTable({
        paging: false
    });
})


 $('#energetic').on('click',function()
   {
        $('.energetic').removeClass('hidden');
        $('.main').addClass('hidden');
        changeCurrentSongDetails(energetic[0]);
        updateCurrentTime();
           setInterval(function() 
         {
            updateCurrentTime();
           }, 1000);
         setInterval(function() {
           updateTimer();
           }, 1000);
           for (var i = 0; i < energetic.length; i++) //Var i zero se 3 tak chalana hai

           {
             var obj = energetic[i]; //Diary ke andar se page utha ke humne obj variable mein store kar diya
              var name = '#energetic' + (i + 1);
              var song = $(name);
              song.find('.song-name').text(obj.name); //("song1 .songname")
              song.find('.song-artist').text(obj.artist);
             song.find('.song-album').text(obj.album);
              song.find('.song-length').text(obj.duration);
              addSongNameClickEventEnergetic(obj, i + 1);
       };

    $("#energeticsongs").DataTable({
        paging: false
    });
})   
    
    
    $('#mellow').on('click',function()
   {
        $('.mellow').removeClass('hidden');
        $('.main').addClass('hidden');
        changeCurrentSongDetails(mellow[0]);
        updateCurrentTime();
           setInterval(function() 
         {
            updateCurrentTime();
           }, 1000);
         setInterval(function() {
           updateTimer();
           }, 1000);
           for (var i = 0; i < mellow.length; i++) //Var i zero se 3 tak chalana hai

           {
             var obj = mellow[i]; //Diary ke andar se page utha ke humne obj variable mein store kar diya
              var name = '#mellow' + (i + 1);
              var song = $(name);
              song.find('.song-name').text(obj.name); //("song1 .songname")
              song.find('.song-artist').text(obj.artist);
             song.find('.song-album').text(obj.album);
              song.find('.song-length').text(obj.duration);
              addSongNameClickEventMellow(obj, i + 1);
       };

    $("#mellowsongs").DataTable({
        paging: false
    });
})
    
    
    
    
    $('#acoustic').on('click',function()
   {
        $('.acoustic').removeClass('hidden');
        $('.main').addClass('hidden');
        changeCurrentSongDetails(acoustic[0]);
        updateCurrentTime();
           setInterval(function() 
         {
            updateCurrentTime();
           }, 1000);
         setInterval(function() {
           updateTimer();
           }, 1000);
           for (var i = 0; i < acoustic.length; i++) //Var i zero se 3 tak chalana hai

           {
             var obj = acoustic[i]; //Diary ke andar se page utha ke humne obj variable mein store kar diya
              var name = '#acoustic' + (i + 1);
              var song = $(name);
              song.find('.song-name').text(obj.name); //("song1 .songname")
              song.find('.song-artist').text(obj.artist);
             song.find('.song-album').text(obj.album);
              song.find('.song-length').text(obj.duration);
              addSongNameClickEventAcoustic(obj, i + 1);
       };

    $("#acousticsongs").DataTable({
        paging: false
    });
})

    $('.dataTables_filter input').attr("placeholder", "Search Song");


$(".fa-step-forward").click(function(){

if(Playingnumber == songs.length-1){
console.log("one");
Playingnumber = 0;
changeSong();



}

else {
console.log("two");
console.log(Playingnumber);
  Playingnumber++;
changeSong();
}




})




$(".fa-step-backward").click(function(){

if(Playingnumber == 0){
console.log("one");
Playingnumber = (songs.length-1);
changeSong();




}

else {
console.log("two");
console.log(Playingnumber);
  Playingnumber--;
changeSong();
}




})

function shufflee(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}





//   addSongNameClickEvent(fileNames[0],1);
// addSongNameClickEvent(fileNames[1],2);
// addSongNameClickEvent(fileNames[2],3);
// addSongNameClickEvent(fileNames[3],4);