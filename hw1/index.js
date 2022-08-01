const reviewList = document.getElementById('review-list');
const postButton = document.getElementById('post-button');
const averageScoreElement = document.getElementById('avg-score');
let scoreSelected = 0;

if (localStorage.getItem('reviews') === null) {
    localStorage.setItem('reviews', JSON.stringify([]));
}

//star functionality
for (let i = 1; i <= 5; i++) {
    const star = document.getElementById(`star-${i}`);
    star.addEventListener('click', () => {
        for (let j = 1; j <= i; j++) {
            document.getElementById(`star-${j}`).src = "goldenStar.png";
        }

        for (let j = i + 1; j <= 5; j++) {
            document.getElementById(`star-${j}`).src = "grayStar.png";
        }

        scoreSelected = i;
    });
}

// returns array of reviews from localStorage
function getReviews() {
    return JSON.parse(localStorage.getItem('reviews'));
}

// returns the average rating score
function getAverageRatingScore() {
    const reviews = getReviews();
    let sum = 0;
    let count = 0;

    for (const review of reviews) {
        sum += parseInt(review.score);
        count++;
    }

    if (count > 0) {
        return `${(sum / count).toFixed(2)}/5`;
    } else {
        return 'No reviews for this show';
    }
}

// renders the array of reviews
function renderReviews(reviews) {
    clearList();

    averageScoreElement.innerHTML = getAverageRatingScore();

    // for each review
    for (const review of reviews) {
        // create a new list element
        const listElement = document.createElement('li');

        // review text for the list element
        const textParagraph = document.createElement('p');
        // score element for the list element
        const scoreParagraph = document.createElement('p');
        // star field
        const starField = document.createElement('p');
        // remove button for the list element
        const removeButton = document.createElement('button');
        //golden star icon
        const goldStar = document.createElement('img');
        //gray star icon
        const grayStar = document.createElement('img');

        // value for review text
        textParagraph.textContent = review.text;
        textParagraph.className = 'review-text';
        // value for score
        scoreParagraph.textContent = `${review.score}/5`;

        // remove button setup
        removeButton.textContent = 'Remove';
        removeButton.className = 'button';
        removeButton.addEventListener('click', () => {
            const index = reviews.findIndex((rev) => rev === review);

            reviews.splice(index, 1);

            saveReviews(reviews);

            renderReviews(getReviews());
        });

        goldStar.src = "goldenStar.png";
        goldStar.className = "star-style";
        grayStar.src = "grayStar.png";
        grayStar.className = "star-style";

        for (let i = 0; i < review.score; i++) {
            starField.appendChild(goldStar.cloneNode(true));
        }
        for (let i = 0; i < 5 - review.score; i++) {
            starField.appendChild(grayStar.cloneNode(true));
        }

        // class for list element
        listElement.className = 'review-list-element';
        listElement.appendChild(textParagraph);
        listElement.appendChild(scoreParagraph);
        listElement.appendChild(starField);
        listElement.appendChild(removeButton);

        // add element to list
        reviewList.appendChild(listElement);
    }
}

// initial render
renderReviews(getReviews());

// function to add a new review
function addReview() {
    const reviews = getReviews();

    // get review text from reivew-text input
    const reviewText = document.getElementById('review-text').value;

    if (scoreSelected <= 0 || scoreSelected > 5 || reviewText === '') {
        alert('Please enter a review and a valid score');
        return;
    }

    // create new review
    const newReview = {
        text: reviewText,
        score: scoreSelected,
    }

    // add the new review to reviews
    reviews.push(newReview);

    // store reviews to localStorage
    saveReviews(reviews);

    document.getElementById('review-text').value = '';

    scoreSelected = 0;

    for (let i = 1; i <= 5; i++) {
        document.getElementById(`star-${i}`).src = "grayStar.png";
    }

    renderReviews(getReviews());
}

// remove all elements from list
function clearList() {
    while (reviewList.firstChild) {
        reviewList.removeChild(reviewList.firstChild);
    }
}

function saveReviews(reviews) {
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

// assign function to Submit button
postButton.addEventListener('click', addReview);