$urx.setApiKey("IHzqfaDKCl50aRutHuE0E2jeingeOj4oAD4DzoAT8OUie4m4CQhTOYOQpWw=|bk2q0qi7rDA49ee6FRn8ovtqJUGwz/hj");
    $urx.search("giants tickets", function(response) {
        // SEARCH SUCCESS HANDLER
        var searchResult = response.results[0];
        // The Search Result Content's Title
        console.log(searchResult.name);
        // The Search Result Content's image url
        console.log(searchResult.imageUrl);
        // The Search Result Content's longer text description
        console.log(searchResult.descriptionText);
        // The Search Result Content's call to action text (ie. "Buy Tickets")
        console.log(searchResult.callToActionText);
        // The Search Result Content's app name (if deeplink is available)
        console.log(searchResult.appName);
    }, function(req, errorMessage) {
        // SEARCH FAILURE HANDLER
        console.log(errorMessage);
    });
