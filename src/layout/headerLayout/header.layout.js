app.directive("header", function(){

    return {

        template : `
        
        <nav class="navbar navbar-light bg-light">

            <div class="container">

                <a class="navbar-brand" href="#/!" style="font-size:25px;">
                    <b>
                        <font color="#1a71be"> <i class="fa fa-download"></i> 
                        Re</font><font color="#f75553">cap</font>
                    </b>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <i style="font-size:25px;" class="fa fa-smile-o"></i>
                </button>

            </div>

        </nav>
        
        `

    }

});