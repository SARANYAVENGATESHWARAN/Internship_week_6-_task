const STORAGE_KEY = "weatherPreferences";

export function saveUserPreferences(city) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ lastCity: city })
  );
}

export function loadUserPreferences() {
  const prefs = localStorage.getItem(STORAGE_KEY);
  return prefs ? JSON.parse(prefs) : { lastCity: "Chennai" };
}
