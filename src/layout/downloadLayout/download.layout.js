app.directive("download", function(){

    return {

        template : `
        
        <div class="container py-5 mt-5">

            <div class="downloadForm" align="center">

                <form ng-submit="Display()">

                    <div ng-controller="searchVideo">

                        <input ng-model="url" style="border-radius:10px;" type="text" class="form-control-lg w-85 mb-4" placeholder="Paste video link">

                        <p class="mb-4">Your url is {{ url }}</p>

                        <object id="widgetv2Api" data="https://convert2mp3s.com/api/widgetv2?url={{ url }}" 
                        width="300" height="500" type="text/html"></object>
              

                    </div>

                </form>  

            </div>

        </div>
        
        `

    }

});