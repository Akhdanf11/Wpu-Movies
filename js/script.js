function searchMovie() {
    $('#movie-list').html('');
    
    $.ajax({
        url: 'http://www.omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'a0d5446c',
            's' : $('#search-input').val()
        },
        success: function (result) {
            if ( result.Response == "True"){
                let movies = result.Search;
                
                $.each(movies, function (i,data) {
                    $('#movie-list').append(`
                    <h1 id="h1-movies" class="text-4xl font-extrabold text-center my-3 pt-2 capitalize"></h1>
                    <div class="flex flex-col md:flex-row md:max-w-2xl max-w-sm bg-white border border-gray my-5 shadow-2xl rounded-lg over-hidden">
                        <div class="p-4 md:w-1/2">
                            <img src="`+ data.Poster +`" alt="supreme" class="w-full hover:opacity-70">
                                </div>
                                <div class="p-4 md:w-1/2"><div class="h-full flex flex-col justify-between">
                                    <div class="text-4xl font-extrabold text-dark_gray">
                                    `+ data.Title +`
                                    </div>
                                    <div class="text-2xl font-extrabold text-dark_gray">
                                        `+ data.Year +`
                                    </div>
                                    <a class="see-detail modal-open bg-bluesky border border-gray hover:border-black text-dark_white hover:text-blue font-bold py-2 px-4 rounded-full" href="#" data-id="`+ data.imdbID + `">See Detail</a>
                            </div>
                        </div>
                    </div>`);
                });
                var openmodal = document.querySelectorAll('.modal-open')
                for (var i = 0; i < openmodal.length; i++) {
                openmodal[i].addEventListener('click', function(event){
                    event.preventDefault()
                    toggleModal()
                })
                }const overlay = document.querySelector('.modal-overlay')
                overlay.addEventListener('click', toggleModal)
                var closemodal = document.querySelectorAll('.modal-close')
                for (var i = 0; i < closemodal.length; i++) {
                closemodal[i].addEventListener('click', toggleModal)
                }document.onkeydown = function(evt) {
                evt = evt || window.event
                var isEscape = false
                if ("key" in evt) {
                    isEscape = (evt.key === "Escape" || evt.key === "Esc")
                } else {
                    isEscape = (evt.keyCode === 27)
                }if (isEscape && document.body.classList.contains('modal-active')) {
                    toggleModal()}};

                // let see_detail = document.querySelectorAll(".see-detail"); 
                // see_detail.forEach((link) => {
                //     $('.see-detail').on('click', function () {
                //         console.log($(link).data('id'));
                //     });
                // });

                let see_detail = document.querySelectorAll(".see-detail");
                see_detail.forEach((link) => {
                    link.addEventListener("click", () => {
                        console.log(link.dataset.id);
                    });
                });


                $('#h1-movies').html($('#search-btn').val());

                $('#h1-movies').html($('#search-input').val());
                
                $('#search-input').val('');
            } else {
                $('#movie-list').html(`
                <h1 class="text-4xl font-extrabold text-center my-3 pt-2 capitalize">`
                + result.Error+
                `</h1>`);
            }
        }

    });
}

$('#search-btn').on('click', function() {
    searchMovie();
});

$('#search-input').on('keyup', function (e) {
    if(e.keyCode === 13) {
        searchMovie();
        
    }
});





    
    
    function toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('.modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    }


