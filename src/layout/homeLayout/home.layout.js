app.directive("home", function(){

    return {

        template : `
        
        <div class="container col-xxl-8 px-4 py-2">

            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">

                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="./src/images/image1.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
                </div>

                <div class="col-lg-6">

                    <h1 class="display-5 fw-bold lh-1 mb-3">A Social Network Video Downloader</h1>
                    <p class="lead">Recap let's you recap on your favourite social network videos by downloading them on your 
                    devices, from the range of YouTube, SoundCloud, Facebook, Twitter, Instagram, TikTok, Vimeo, Dailymotion, VK, or AOL.</p>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a href="#!download" style="text-decoration:none;">
                        <button type="button" class="btn btn-outline-primary btn-lg px-4">
                            <b>
                                <font color="#1a71be">Start</font> <font color="#f75553">Recapping</font> <font color="#1a71be">Now</font>
                            </b>
                        </button>
                        </a>
                    </div>

                </div>

            </div>

        </div>

        <div align="center">

            <small>
                <a href="">Oladele John</a> <i class="fa fa-copyright"></i> 2022
            </small>

        </div>
        
        `

    }

});