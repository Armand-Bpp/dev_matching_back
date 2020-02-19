const calculateScore = (offer, user) => {
    // console.log('offer', offer);
    // console.log('user', user);
    let score = 0;

    // check postion
    let scorePosition = 0;
    let coeffPosition = 1;
    // console.log(position);
    // console.log(req.params.position);
    console.log(offer.position);
    console.log(user.position);
    if (offer.position === user.position) {
        scorePosition = 1;
    } 

    // check city
    let scoreCity = 0;
    let coeffCity = 1


    if(offer.city === user.city){
        scoreCity = 1;
    }

    // check contract
    let scoreContract = 0;
    let coeffContract = 1;

    if (offer.contract === user.contract){
        scoreContract = 1
    }

    // check experience
    let scoreXP = 0;
    let coeffXP = 1;

    // check skills
    let scoreSkills = 0;
    let coeffSkills = 1;

    // ponderation
    score =
        (scorePosition * coeffPosition +
            scoreCity * coeffCity +
            scoreXP * coeffXP +
            scoreContract * coeffContract +
            scoreSkills * coeffSkills)
        /
        (coeffPosition + coeffContract + coeffSkills + coeffXP + coeffCity)
        ;


    return score;
};

module.exports= calculateScore