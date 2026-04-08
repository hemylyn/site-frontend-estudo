const movies = [
  { title: "The Last Hero", genre: "Action", year: 2021, rating: 7.3 },
  { title: "City Lights", genre: "Drama", year: 2019, rating: 8.0 },
  { title: "Laugh House", genre: "Comedy", year: 2020, rating: 6.8 },
  { title: "Storm Chase", genre: "Action", year: 2022, rating: 7.6 },
  { title: "Quiet Summer", genre: "Drama", year: 2018, rating: 7.1 },
  { title: "School Trip", genre: "Comedy", year: 2023, rating: 7.0 }
];

const movieList = document.getElementById("movieList");
const searchInput = document.getElementById("searchInput");
const genreButtons = document.querySelectorAll(".genre-btn");
const emptyMessage = document.getElementById("emptyMessage");
const themeToggle = document.getElementById("themeToggle");

let selectedGenre = "All";

function updateThemeButtonLabel() {
  const isDark = document.body.classList.contains("dark-theme");
  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-label", isDark ? "Enable light mode" : "Enable dark mode");
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
  updateThemeButtonLabel();
}

function renderMovies(list) {
  movieList.innerHTML = "";

  if (list.length === 0) {
    emptyMessage.hidden = false;
    return;
  }

  emptyMessage.hidden = true;

  list.forEach((movie) => {
    const card = document.createElement("article");
    card.className = "movie-card";

    card.innerHTML = `
      <h3>${movie.title}</h3>
      <p class="movie-meta">Genre: ${movie.genre}</p>
      <p class="movie-meta">Year: ${movie.year}</p>
      <p class="movie-meta">Rating: ${movie.rating}</p>
    `;

    movieList.appendChild(card);
  });
}

function filterMovies() {
  const searchValue = searchInput.value.toLowerCase().trim();

  const filtered = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(searchValue);
    const genreMatch = selectedGenre === "All" || movie.genre === selectedGenre;
    return titleMatch && genreMatch;
  });

  renderMovies(filtered);
}

searchInput.addEventListener("input", filterMovies);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeButtonLabel();
});

genreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    genreButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    selectedGenre = button.dataset.genre;
    filterMovies();
  });
});

applySavedTheme();
renderMovies(movies);
