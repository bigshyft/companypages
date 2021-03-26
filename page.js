const onNoClick = () => {
  document.getElementById("helpful-card-yes-no-banner").classList =
    "no-display";
  document.getElementById("helpful-card-no-banner").classList = "show-display";
};

const onCancelClick = () => {
  document.getElementById("helpful-card-yes-no-banner").classList =
    "show-display";
  document.getElementById("helpful-card-no-banner").classList = "no-display";
};

const postData = (comment) => {
    const dimensions = [{ key: "page_name", name: "company_page" }];
    if(comment) {
        dimensions.push({ key: 'comment', name: comment })
    }

    return fetch("https://jsdev.bigshyft.com/jsapi/instrument/event", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            eventName: "company_feedback",
            screenName: "company_page",
            eventCategory: "Click",
            eventTime: +new Date(),
            property: "company_page",
            source: "web",
            previousScreen: "null",
            ct: false,
            dimensions,
            sessionId: 1616491915000,
            url: "companyPage",
            userId: "jobseeker",
        })
    });
}

const onYesClick = () => {
    postData()
    .then(() => {
        document.getElementById("helpful-card-yes-no-banner").classList =
        "no-display";
        document.getElementById("helpful-card-thank-you-feedback").classList =
        "show-display";
        setTimeout(() => {
        document.getElementById("helpful-card-thank-you-feedback").classList =
            "no-display";
        }, 3000);
    })
};

const onDoneClick = () => {
    const commentInput = document.querySelector(".comment-input");
    const comment = commentInput.innerText;
    
    postData(comment)
    .then((res) => {
        document.getElementById("helpful-card-no-banner").classList = "no-display";
        document.getElementById("helpful-card-thank-you-feedback").classList =
        "show-display";
        setTimeout(() => {
        document.getElementById("helpful-card-thank-you-feedback").classList =
            "no-display";
        }, 3000);
  });
};
