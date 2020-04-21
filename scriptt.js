var app = {

    NYbooks: [],

    initialize: function() {
        $("#bookbutton").click(
            function(){
            var BookSearch = $("#bookname").val();
                console.log(BookSearch);
                app.GetBooksData(BookSearch);
            })
    },
        

    inserts: function() {
        var content = " ";
        for (var i = 0; i < app.NYbooks.length; i++) {
            content += '<div class="contentlist">'
            content += '<h2>' + app.NYbooks[i].book_title + '</h2>';
            content += '<p style="font-style:italic;">' + app.NYbooks[i].book_author + '</p>';
            content += '<p>' + app.NYbooks[i].summary + '</p>';
            content += '</div>'
        }
        $('#review').html(content);
    },


  
    GetBooksData: function(BookSearch) {

        var booksAPI = "https://api.nytimes.com/svc/books/v3/reviews.json?title=" + BookSearch + "&api-key=" 
        var APIKey= "YOUR API KEY"
        var BooksUrl = booksAPI + APIKey;
        console.log(BooksUrl);

        $.ajax ({
           url: BooksUrl,
           type: 'GET',
           dataType:'json',

           error: function(err){
            console.log("Uh oh...");
            console.log(err);
            },

            success: function(data){
            console.log(data);
            app.NYbooks = data.results;
            app.inserts();
            }
        });
    }
};


