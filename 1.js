
var movie_container=document.querySelector('.movie-container')
var movie_card=""
function create_initapp()
{
    fetch(`https://65d84816c96fbb24c1bb2234.mockapi.io/movies`).then(data=>data.json())
    .then(movies=>{
        movies.map(movie=>{
            movie_card+=`
            <div class="col-sm-3" onclick="read(${movie.id})">
            <div class="card" style="width: 18rem;">
            <div class="imgwithbuttons">
                <img src="${movie.avatar}" class="card-img-top" alt="..." height="300px" width="300px">
                <button class="delete" style="border:none; background-color:"transparent"; color:" white"; border-radius:100% onclick="delmovie(${movie.id})" ><i class="fa fa-close style="font-size:24px""></i></button>
                <button class="edit" style="border:none; background-color:"transparent"; border-radius:100% onclick="editmovie(${movie.id})" ><i class='fas fa-edit' style='font-size:24px'></i></button>
              
            </div>   
                <div class="card-body">
                
                    <h3 class="card-title">${movie.movietitle}</h3>
                    <h5 class="release-date" >Released on ${movie.moviereleasedate} </h5>
                     <p class="card-text">${movie.moviedescription}</p>
                  <span class="ratings"><img src="https://cdn.iconscout.com/icon/free/png-512/free-star-bookmark-favorite-shape-rank-like-32386.png?f=webp&w=256" height="25px" width="25px"></span>
                  <b>${movie.movieratings}</b>
                  <div class="watchtrailer" style="margin-top: 20px;"><a href="#" class="btn btn-primary" onclick=" a href="${movie.trailerlink}"playtrailer(${movie.id})">Watch Trailer</a></div>
                </div>
              </div> 
        </div>`
        })   
        movie_container.innerHTML=movie_card
                        })
}
var trailercontainer=document.querySelector('.trailercontainer');
function playtrailer(id)
{
fetch(`https://65d84816c96fbb24c1bb2234.mockapi.io/movies/${id}`).then(data=>data.json()).then(movie=>trailercontainer.innerHTML=`${movie.trailerlink}`)
 
}
function openform()
{
    document.querySelector('.form-container').style.display="block";
    document.querySelector('.movieinfo').style.opacity=0.1;
    document.querySelector('.movie-container').style.opacity=0.1;
    document.querySelector('.form-container').style.backgroundcolor="transparent";
    
}
function addmovie()
{    
  
    var imgaddress=document.querySelector('.imgaddress').value;
    var title=document.querySelector('.title').value;
    var date=document.querySelector('.date').value;
    var description=document.querySelector('.description').value;
    var ratings=document.querySelector('.ratings').value;
    var trailerlink1=document.querySelector('.trailerlink').value;
    var actors1=document.querySelector('.actors').value;
    var director1=document.querySelector('.director').value;
    var castarr1=document.querySelector('.cast').value;
    var plot1=document.querySelector('.plot').value;
    var duration1=document.querySelector('.duration').value;
    var slidearr1=document.querySelector('.slide').value;
    console.log("hello")
  
    fetch(`https://65d84816c96fbb24c1bb2234.mockapi.io/movies`,{
        method:"POST",
        body:JSON.stringify({avatar:imgaddress,movietitle:title,moviereleasedate:date,
          moviedescription:description,movieratings:ratings,trailerlink:trailerlink1,actors:actors1,director:director1,casts:castarr1,plot:plot1,duration:duration1,slide:slidearr1}),
        headers:{
                 "Content-type":"application/json"
                }})
  
              }
              
              
               function searchforamovie()
               {
                var movie_infocard=""
                var movieinfocontainer=document.querySelector('.movieinfo')
                var matchedmovies;
                    var searchingmovietitle=document.getElementById('searchbox').value;
                    fetch('https://65d84816c96fbb24c1bb2234.mockapi.io/movies').then(data=>data.json())
                    .then(movies=>{
                       matchedmovies=movies.find(movie=>movie.movietitle===searchingmovietitle)
                       return matchedmovies;    
                      }
                        
                      )
                                   .then(matchedmovies=>{
                                                  
                                movie_infocard+=`
                                <div class="col-md-6">
                                <div class="card" style="width: 40rem; height: 40rem">
                                  <div class="card-header">
                                  <h2>Movie info</h2>
                                  </div>  
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item" style="color:red"><h1>${matchedmovies.movietitle}</h1></li>
                                    <li class="list-group-item"><h2>${matchedmovies.actors}</h2></li>
                                    <li class="list-group-item"><h2>Directed by ${matchedmovies.director}</h2></li>
                                    <li class="list-group-item" style="margin-right:60px"><h2>
                                      <img src="${matchedmovies.casts[0]}" height="50px" width="50px" alt="" title="actor">
                                      <img src="${matchedmovies.casts[1]}" alt="" height="50px" width="50px" title="actress">
                                      <img src="${matchedmovies.casts[2]}" alt="" height="50px" width="50px" title="director">
                                      <img src="${matchedmovies.casts[3]}" alt="" height="50px" width="50px" title="music director">
                                    </li>
                                    <li class="list-group-item">${matchedmovies.plot} <span class="timing">
                                      <i class="fa fa-clock-o"></i></span>
                                  
                                      ${matchedmovies.duration}</li>  
                                  </ul>
                                  
                                  <div class="watchmovie" style="margin-top: 20px;"><a href="#" class="btn btn-primary">Click to download</a></div>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="swiper mySwiper">
                                  <div class="swiper-wrapper">
                                    <div class="swiper-slide"><img src="${matchedmovies.slide[0]}" height="100%" width="100%"></div>
                                    <div class="swiper-slide"><img src="${matchedmovies.slide[1]}"></div>
                                    <div class="swiper-slide"><img src="${matchedmovies.slide[2]}"></div>
                                    <div class="swiper-slide"><img src="${matchedmovies.slide[3]}" height="100%" width="100%"></div>
                                    <div class="swiper-slide"><img src="${matchedmovies.slide[4]}" height="100%" width="100%"></div>
                                  </div>
                                  <div class="swiper-button-next"></div>
                                  <div class="swiper-button-prev"></div>
                                  <div class="swiper-pagination"></div>
                                </div>
                              </div>`   
                             })
                             console.log(matchedmovies.casts)
                             movieinfocontainer.innerHTML=movie_infocard
      
                        


                    }
                    

                        
         
               
               var movie_infocard=""
               var movieinfocontainer=document.querySelector('.movieinfo')
              function read(id)
              {
                /*
                fetch(`https://65d84816c96fbb24c1bb2234.mockapi.io/employees`).then(data=>data.json()).then(data=>{
                  let t="<table border=2px><thead><tr><th>Emp-Name</th><th>Dept</th><th>Salary</th><th>Actions</th></tr></thead><tbody>"
                  data.map(emp=>t+=`<tr><td>${emp.ename}</td><td>${emp.dept}</td><td>${emp.salary}</td><td><button onclick="editEmp(${emp.id})">Edit</td><td><button onclick="delEmp(${emp.id})">Delete</button></td></tr>`)
                  t+="</tbody></table>"
                  userContainer.innerHTML=t 
                */
                  fetch(`https://65d84816c96fbb24c1bb2234.mockapi.io/movies/${id}`).then(data=>data.json()).then(movie=>{
                  movie_infocard=`
                  <div class="col-md-6">
                  <div class="card" style="width: 40rem; height: 40rem">
                    <div class="card-header">
                    <h2>Movie info</h2>
                    </div>  
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item" style="color:red"><h1>${movie.movietitle}</h1></li>
                      <li class="list-group-item"><h2>${movie.actors}</h2></li>
                      <li class="list-group-item"><h2>Directed by ${movie.director}</h2></li>
                      <li class="list-group-item" style="margin-right:60px"><h2>
                        <img src="${movie.casts[0]}" height="50px" width="50px" alt="" title="actor">
                        <img src="${movie.casts[1]}" alt="" height="50px" width="50px" title="actress">
                        <img src="${movie.casts[2]}" alt="" height="50px" width="50px" title="director">
                        <img src="${movie.casts[3]}" alt="" height="50px" width="50px" title="music director">
                      </li>
                      <li class="list-group-item">${movie.plot} <span class="timing">
                        <i class="fa fa-clock-o"></i></span>
                    
                        ${movie.duration}</li>  
                    </ul>
                    
                    <div class="watchmovie" style="margin-top: 20px;"><a href="#" class="btn btn-primary">Click to download</a></div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide"><img src="${movie.slide[0]}" height="100%" width="100%"></div>
                      <div class="swiper-slide"><img src="${movie.slide[1]}" height="100%" width="100%"></div>
                      <div class="swiper-slide"><img src="${movie.slide[2]}" height="100%" width="100%"></div>
                      <div class="swiper-slide"><img src="${movie.slide[3]}" height="100%" width="100%"></div>
                      <div class="swiper-slide"><img src="${movie.slide[4]}" height="100%" width="100%"></div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                  </div>
                </div>`
                movieinfocontainer.innerHTML=movie_infocard
                var swiper = new Swiper(".mySwiper", {
                  spaceBetween: 30,
                  centeredSlides: true,
                  autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                  },
                  pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                });
                })
              }
            
                                          function delmovie(id)
                                          {
                                            fetch(`https://65d84816c96fbb24c1bb2234.mockapi.io/movies/${id}`,{
                                              method:"DELETE"

                                            })
                                          }
                                          function editmovie(id)

                                          {
                                            openform();
                                              fetch(`https://65d84816c96fbb24c1bb2234.mockapi.io/movies/${id}`)
                                              .then(data=>data.json()).then(movie=>{
                                                var a=movie.avatar
                                                var b=movie.movietitle
                                                var c=movie.moviereleasedate;
                                                var d=movie.moviedescription;
                                                var e=movie.movieratings;
                                                var f=movie.trailerlink;
                                                var g=movie.actors;
                                                var h=movie.director;
                                                var i=movie.casts;
                                                var j=movie.plot;
                                                var k=movie.duration;
                                                var l=movie.slide; 
                                                document.querySelector('.imgaddress').value=a;
                                                document.querySelector('.title').value=b;
                                                document.querySelector('.date').value=c;
                                                document.querySelector('.description').value=d;
                                                document.querySelector('.ratings').value=e;
                                                document.querySelector('.trailerlink').value=f;
                                                document.querySelector('.actors').value=g;
                                                document.querySelector('.director').value=h;
                                                document.querySelector('.cast').value=i;
                                                document.querySelector('.plot').value=j;
                                                document.querySelector('.duration').value=k;
                                                document.querySelector('.slide').value=l;
                                                console.log(a,b,c,d,e,f,g,h,i,j,k,l)      
                                                
                                               
                                              })
                                        
                                        }
                                        var updateBtn=document.getElementById('updatebtn');
                                        updateBtn.addEventListener('click',updatemovie);

                                        function updatemovie(id)
                                        {
                                                a=document.querySelector('.imgaddress').value;
                                                b=document.querySelector('.title').value;
                                                c=document.querySelector('.date').value;
                                                d=document.querySelector('.description').value;
                                                e=document.querySelector('.ratings').value;
                                                f=document.querySelector('.trailerlink').value;
                                                g=document.querySelector('.actors').value;
                                                h=document.querySelector('.director').value;
                                                i=document.querySelector('.cast').value;
                                                j=document.querySelector('.plot').value;
                                                k=document.querySelector('.duration').value;
                                                l=document.querySelector('.slide').value;
                                                fetch(`https://65d84816c96fbb24c1bb2234.mockapi.io/movies/${id}`,{
                                                  method:"PUT",
                                                  body:JSON.stringify({a,b,c,d,e,f,g,h,i,j,k,l}),
                                                  headers:{
                                                    "Content-type":"application/json"
                                                  }
                                                })
                                          /*
                                        
                                            ename=nameContainer.value
                                            dept=deptContainer.value
                                            salary=salaryContainer.value
                                            id=idContainer.value
                                            fetch(`https://65d84816c96fbb24c1bb2234.mockapi.io/employees/${id}`,{
                                                method:"PUT",
                                                body:JSON.stringify({ename,dept,salary,id}),
                                                headers:{
                                                    "Content-type":"application/json"
                                                }
                                            }).then(()=>read())
                                       */
                                          }
                                        

                                         