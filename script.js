let playerName = localStorage.getItem("playerName") || "Player";
document.getElementById("player").innerText = playerName;


let totalLevels = 12;
let answered = false;

let correctSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3");

let logos = [

    
    { level: 1, img: "https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg", answer: "nike", hint: "Largest footwear supplier" },
    { level: 1, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/1280px-Pepsi_2023.svg.png", answer: "pepsi", hint: "Coldrink" },
    { level: 1, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png", answer: "google", hint: "Search engine" },
    { level: 1, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1280px-McDonald%27s_Golden_Arches.svg.png", answer: "mcdonald's", hint: "Fast Food" },
    { level: 1, img: "https://www.citypng.com/public/uploads/preview/silver-metal-apple-logo-icon-png-701751694967874lyn8agzibp.png", answer: "apple", hint: "iPhone company" },

    { level: 2, img: "https://www.svgrepo.com/show/475634/amazon-color.svg", answer: "amazon", hint: "Online shopping" },
    { level: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxE1kWdBGheJo1OJ3ezvioqphPoW94HoxdQ&s", answer: "adidas", hint: "Sports Company" },
    { level: 2, img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png", answer: "youtube", hint: "Video Sharing" },
    { level: 2, img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", answer: "instagram", hint: "Photo sharing" },
    { level: 2, img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png", answer: "pinterest", hint: "Style Inspiration" },

    { level: 3, img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", answer: "microsoft", hint: "Windows company" },
    { level: 3, img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1280px-Starbucks_Corporation_Logo_2011.svg.png", answer: "starbucks", hint: "Coffee company" },
    { level: 3, img: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456", answer: "netflix", hint: "Streaming Service" },
    { level: 3, img: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png", answer: "spotify", hint: "Music Service" },
    { level: 3, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/960px-Google_Chrome_icon_%28February_2022%29.svg.png", answer: "chrome", hint: "Web Browser" },

    { level: 4, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/960px-Domino%27s_pizza_logo.svg.png", answer: "dominos", hint: "Pizza Restaurant" },
    { level: 4, img: "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/250px-KFC_logo.svg.png", answer: "kfc", hint: "Non-veg Fast Food" },
    { level: 4, img: "https://www.freepnglogos.com/uploads/subway-png-logo/for-subway-symbol-png-logo-1.png", answer: "subway", hint: "fast Food" },
    { level: 4, img: "https://pngimg.com/d/red_bull_PNG1.png", answer: "red bull", hint: "Energy drink" },
    { level: 4, img: "https://brandlogos.net/wp-content/uploads/2022/03/myntra-logo-brandlogos.net_.png", answer: "myntra", hint: "Online Shopping" },

    { level: 5, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/960px-BMW.svg.png", answer: "bmw", hint: "Luxury Vehicle" },
    { level: 5, img: "https://static.vecteezy.com/system/resources/thumbnails/052/102/097/small_2x/mercedes-benz-metallic-logo-isolated-illustration-free-vector.jpg", answer: "mercedes-benz", hint: "Luxury Vehicle" },
    { level: 5, img: "https://makerworld.bblmw.com/makerworld/model/US8ec7b571d2726d/design/2025-03-23_23aae48e33ffe.png?x-oss-process=image/resize,w_1000/format,webp", answer: "audi", hint: "German Automobile" },
    { level: 5, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/960px-Volkswagen_logo_2019.svg.png", answer: "volkswagen", hint: "Automobile Company" },
    { level: 5, img: "https://yt3.googleusercontent.com/Xv8JY4fPsZ5tWAai8Eq9VvNDTFNnreQZt0nXuv9v_R9PKO07t0bZmjCFbt6HWXvX982tFB2Y=s900-c-k-c0x00ffffff-no-rj", answer: "puma", hint: "Sports Brand" },
    
    { level: 6, img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_(2019).svg", answer: "facebook", hint: "Social media" },
    { level: 6, img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", answer: "whatsapp", hint: "Messaging app" },
    { level: 6, img: "https://static.vecteezy.com/system/resources/previews/023/871/751/non_2x/reebok-logo-brand-clothes-white-symbol-design-icon-abstract-illustration-with-gray-background-free-vector.jpg", answer: "reebok", hint: "Footwear Brand" },
    { level: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvlHhHc-DBiSF50MIvjFzdr_6R0uiVIogAw&s", answer: "agoda", hint: "Trip Booking" },
    { level: 6, img: "https://companieslogo.com/img/orig/ADBE-fb158b30.png?t=1740130206", answer: "adobe", hint: "Document Management" },

    { level: 7, img: "https://toppng.com/uploads/preview/format-twitter-logo-transparent-11549680770lolovrdq8m.png", answer: "twitter", hint: "Now called X" },
    { level: 7, img: "https://static.vecteezy.com/system/resources/previews/054/298/851/non_2x/reddit-logo-illustration-in-square-background-free-png.png", answer: "reddit", hint: "Front Pge of Internet" },
    { level: 7, img: "https://p7.hiclipart.com/preview/129/791/764/computer-icons-quora-logo-clip-art-portable-network-graphics-social-media.jpg", answer: "quora", hint: "Global Answers" },
    { level: 7, img: "https://cdn.iconscout.com/icon/free/png-256/free-tinder-logo-icon-svg-download-png-8461549.png", answer: "tinder", hint: "Dating App" },
    { level: 7, img: "https://static.vecteezy.com/system/resources/previews/056/505/637/non_2x/jiohotstar-app-icon-on-transparent-background-free-png.png", answer: "jiohotstar", hint: "Streaming Platform" },
    
    { level: 8, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/960px-Notion-logo.svg.png", answer: "notion", hint: "Digital Workspace" },
    { level: 8, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png", answer: "python", hint: "Programming Language" },
    { level: 8, img: "https://brandlogos.net/wp-content/uploads/2022/07/airbnb-logo_brandlogos.net_vb6uh.png", answer: "airbnb", hint: "Rented Place" },
    { level: 8, img: "https://companieslogo.com/img/orig/ADBE-fb158b30.png?t=1740130206", answer: "adobe", hint: "Document Management" },
    { level: 8, img: "https://companieslogo.com/img/orig/ADBE-fb158b30.png?t=1740130206", answer: "adobe", hint: "Document Management" },

    


    

];

let current = 0;
let score = 0;
let time = 20;
let timer;
let hints = 3;
let streak = 0;

function loadLogo() {

    answered = false;

    document.getElementById("logoImage").src = logos[current].img;
    document.getElementById("answer").value = "";

    document.getElementById("currentLevel").innerText = logos[current].level;
    document.getElementById("message").innerHTML = "";
    document.getElementById("result").innerHTML = "";

    startTimer();

}
function submitAnswer() {
    clearInterval(timer);

    if (answered) return;
    answered = true;

    clearInterval(timer);

    let userAnswer = document.getElementById("answer").value.toLowerCase();
    let result = document.getElementById("result");

    if (userAnswer === logos[current].answer) {

        score += 10 + time;
        streak++;

        correctSound.play();

        result.innerHTML = "Correct!";
        result.className = "correct";

    } else {

        streak = 0;

        result.innerHTML = "Wrong! Correct: " + logos[current].answer;
        result.className = "wrong";

    }

    document.getElementById("score").innerText = score;
    document.getElementById("streak").innerText = streak;

    updateProgress();
    saveScore();

    current++;

    unlockLevels();

    if (current < logos.length) {

        setTimeout(loadLogo, 1500);

    } else {

        endGame();

    }

}
function updateProgress() {

    let levelNumber = logos[current].level;

    let percent = (levelNumber / totalLevels) * 100;

    document.getElementById("xpProgress").style.width = percent + "%";

}

function showHint() {

    if (hints > 0) {

        document.getElementById("message").innerHTML = "💡 Hint: " + logos[current].hint;

        score -= 3;
        hints--;

        document.getElementById("hintCount").innerText = hints;
        document.getElementById("score").innerText = score;

    } else {

        document.getElementById("message").innerHTML = "No hints left!";

    }

}

function startTimer() {

    clearInterval(timer); 

    time = 20;
    document.getElementById("timer").innerText = time;

    timer = setInterval(function () {

        time--;

        document.getElementById("timer").innerText = time;

        if (time <= 0) {

            clearInterval(timer);
            submitAnswer();

        }

    }, 1000);

}

function unlockLevels() {

    let prevLevel = logos[current - 1]?.level;
    let nextLevel = logos[current]?.level;

    if (prevLevel && nextLevel && prevLevel !== nextLevel) {

        let prevBox = document.getElementById("level" + prevLevel);
        let nextBox = document.getElementById("level" + nextLevel);

        if (prevBox) {
            prevBox.classList.remove("active");
            prevBox.classList.add("completed");
        }

        if (nextBox) {
            nextBox.classList.remove("locked");
            nextBox.classList.add("active");
            nextBox.innerText = nextLevel;
        }

    }

}
function showLeaderboard() {

    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    leaderboard.sort((a, b) => b.score - a.score);

    let popup = document.getElementById("popup");

    let html = `
<div class="leaderboard-card">
<h2>🏆 Leaderboard</h2>
<div class="leaderboard-list">
`;

    leaderboard.slice(0, 5).forEach((p, i) => {

        let medal = "";

        if (i === 0) medal = "🥇";
        else if (i === 1) medal = "🥈";
        else if (i === 2) medal = "🥉";
        else medal = "⭐";

        html += `
<div class="leader-row">
<span class="rank">${medal} ${i + 1}</span>
<span class="name">${p.name}</span>
<span class="score">${p.score}</span>
</div>
`;

    });

    html += `
</div>
<button onclick="closeLeaderboard()">Close</button>
</div>
`;

    popup.innerHTML = html;
    popup.style.display = "flex";

}
function closeLeaderboard() {
    document.getElementById("popup").style.display = "none";
}

function endGame() {

    clearInterval(timer);

    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    leaderboard.push({ name: playerName, score: score });

    leaderboard.sort((a, b) => b.score - a.score);

    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    let popup = document.getElementById("popup");

    popup.innerHTML =
        "🎉 GAME COMPLETED<br><br>Score: " + score +
        "<br><br><button onclick='location.reload()'>Play Again</button>";

    popup.style.display = "block";

}

function exitGame() {

    saveScore();

    if (confirm("Exit the game?")) {
        window.location.href = "index.html";
    }

}
function saveScore() {

    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    let existingPlayer = leaderboard.find(p => p.name === playerName);

    if (existingPlayer) {
        if (score > existingPlayer.score) {
            existingPlayer.score = score;
        }
    } else {
        leaderboard.push({ name: playerName, score: score });
    }

    leaderboard.sort((a, b) => b.score - a.score);

    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

}

loadLogo();

